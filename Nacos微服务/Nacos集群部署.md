## Nacos集群部署

## 一、部署架构图

### 1、部署架构图

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

### 2、