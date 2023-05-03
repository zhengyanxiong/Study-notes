#### 安装步骤

```sh
# 安装需要的软件包， yum-util 提供yum-config-manager功能，另外两个是devicemapper驱动依赖的
$ yum install -y yum-utils device-mapper-persistent-data lvm2
# 设置docker yum源
$ yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
# 查看所有仓库中所有docker版本 
$ yum list docker-ce --showduplicates | sort -r
# 这里选用centos稳定版本 18.03.1.ce-1.el7.centos
$ yum -y install docker-ce-cli-18.03.1.ce-1.el7.centos docker-ce-18.03.1.ce-1.el7.centos
# 设置系统自启动，启动docker
$ systemctl enable docker && systemctl start docker
```

### 配置Docker镜像仓

> 配置后需要重启

```sh
$ echo '{"registry-mirrors":["https://hub-mirror.c.163.com"]}' > /etc/docker/daemon.json
```

### cri-dockerd安装

> 在kubernets1.24后，移除了对Dockeshime的支持，如果想继续在k8s中使用docker，需要自行安装cri-dockerd组件。

![img](https://gitee.com/zhengyanxiong/picture-bed/raw/master/img/modb_20220704_5c5b8d8c-fb8a-11ec-a026-fa163eb4f6be.png)

​	  ![img](https://gitee.com/zhengyanxiong/picture-bed/raw/master/img/modb_20220704_5c73fa7a-fb8a-11ec-a026-fa163eb4f6be.png)

项目地址：https://github.com/Mirantis/cri-dockerd

```sh
# 下载0.2.5.amd64.taz二进制包
$ wget https://github.com/Mirantis/cri-dockerd/releases/download/v0.2.5/cri-dockerd-0.2.5.amd64.tgz
# 拷贝二进制文件
$ tar -xf cri-dockerd-0.2.1.amd64.tgz 
$ cp cri-dockerd/cri-dockerd /usr/bin/
$ chmod +x /usr/bin/cri-dockerd 
```

配置启动文件

```sh
$ cat <<"EOF" > /usr/lib/systemd/system/cri-docker.service
[Unit]
Description=CRI Interface for Docker Application Container Engine
Documentation=https://docs.mirantis.com
After=network-online.target firewalld.service docker.service
Wants=network-online.target
Requires=cri-docker.socket

[Service]
Type=notify

ExecStart=/usr/bin/cri-dockerd --network-plugin=cni --pod-infra-container-image=registry.aliyuncs.com/google_containers/pause:3.7

ExecReload=/bin/kill -s HUP $MAINPID
TimeoutSec=0
RestartSec=2
Restart=always

StartLimitBurst=3

StartLimitInterval=60s

LimitNOFILE=infinity
LimitNPROC=infinity
LimitCORE=infinity

TasksMax=infinity
Delegate=yes
KillMode=process

[Install]
WantedBy=multi-user.target

EOF
```

生成socket 文件

```sh
$ cat <<"EOF" > /usr/lib/systemd/system/cri-docker.socket
[Unit]
Description=CRI Docker Socket for the API
PartOf=cri-docker.service

[Socket]
ListenStream=%t/cri-dockerd.sock
SocketMode=0660
SocketUser=root
SocketGroup=docker

[Install]
WantedBy=sockets.target

EOF
```

【也可以直接下载https://github.com/Mirantis/cri-dockerd/tree/master/packaging/systemd 注意，需要修改cri-docker.service 中 ExecStart 启动参数，这里/usr/bin/cri-dockerd一定要加上参数--pod-infra-container-image=registry.aliyuncs.com/google_containers/pause:3.7用来指定所用的pause镜像是哪个，否则默认拉取k8s.gcr.io/pause:3.7，会导致安装失败。

启动cri-docker

```sh
$ systemctl daemon-reload
$ systemctl start cri-docker
$ systemctl enable cri-docker
$ systemctl status cri-docker
```

