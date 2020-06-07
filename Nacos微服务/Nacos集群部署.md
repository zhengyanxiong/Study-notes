## Nacos集群部署

## 一、部署架构图

### 1、部署架构图

![image-20200529111423863](D:\software\MicroID\学习笔记\Nacos微服务\image-20200529111423863.png)

### 2、主机规划

|         节点         | 端口 |      备注      |
| :------------------: | :--: | :------------: |
|     10.1.103.171     | 8848 |     nacos      |
|     10.1.103.172     | 8848 |     nacos      |
|     10.1.103.173     | 8848 |     nacos      |
| Mysql (10.1.103.171) | 3306 | mysql 主数据库 |
| Mysql (10.1.103.172) | 3306 | mysql 备数据库 |

## 二、部署

将nacos文件安装包分别放在三台机器上，解压

```sh
wget https://github.com/alibaba/nacos/releases/download/1.2.1/nacos-server-1.2.1.tar.gz
tar -xzvf nacos-server-1.2.1.tar.gz
```

### 1、准备数据库

> 在`171` 、`172` 两台主机上安装mysql数据库，我这里使用的是docker安装，安装完成将上述解压后的 `nacos-server` 文件下的 `conf`文件夹中，执行 `nacos-mysql.sql` 文件，完成nacos数据库的搭建。

### 2、修改配置文件

修改 `appication.properties` 配置文件，添加以下内容

```sh
# 表明用MySQL作为后端存储
spring.datasource.platform=mysql

# 有几个数据库实例
db.num=2

# 第1个实例的地址
db.url.0=jdbc:mysql://10.1.103.171:3306/nacos_config?characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true
# 第2个实例的地址
db.url.1=jdbc:mysql://10.1.103.172:3306/nacos_config?characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true
db.user=root
db.password=root
```

重命名 `cluster.conf.example` 修改nacos IP

```sh
10.1.103.171:8848
10.1.103.172:8848
10.1.103.173:8848
```

### 3、启动

```sh
# 启动命名脚本
./bin/startup.sh
# 关闭命令脚本
./bin/shutdown.sh
```

## 三、配置nginx负载均衡

### 1、编辑nginx配置文件 

```sh
$ vi nacos-nginx.conf
user root;
worker_processes  3;
events {
    worker_connections  1024;
}
http {
    upstream nacos {
         server 10.1.103.171:8848;
         server 10.1.103.172:8848;
         server 10.1.103.173:8848;
    }
   server {
          listen 80;
          server_name  10.1.103.173;
          location /nacos/ {
             proxy_pass http://nacos/nacos/;
          }
   }
}

```

### 2、启动nginx

我这里使用的docker 容器启动

```sh
docker run -d --restart=unless-stopped \
  -p 80:80 \
  -v /home/nacosServer/nginx/nacos-nginx.conf:/etc/nginx/nginx.conf \
  microid.docker.com:5000/nginx:latest
```

### 3、启动成功后访问

访问 `10.1.103.171/nacos` 