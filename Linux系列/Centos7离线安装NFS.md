## 一、NFS 简介

NFS就是Network File System的缩写，它最大的功能就是可以通过网络，让不同的机器、不同的操作系统可以共享彼此的文件。

 NFS服务器可以让PC将网络中的NFS服务器共享的目录挂载到本地端的文件系统中，而在本地端的系统中来看，那个远程主机的目录就好像是自己的一个磁盘分区一样，在使用上相当便利。

## 二、获取离线NFS的安装环境包

在能够访问外网的机器上，下载离线安装环境包

```sh
yum -y install nfs-utils --downloadonly --downloaddir /home/admin/nfs
yum -y install rpcbind --downloadonly --downloaddir /home/admin/nfs
```

## 三、服务端环境搭建

### 1、nfs 安装

```sh
cd /home/admin/nfs

# 安装nfs
rpm -ivh *.rpm --force --nodeps

# 创建共享文件夹
mkdir -p /home/temp/data
mkdir -p /home/temp/data/nfs
mkdir -p /home/temp/data/mysql_master 
mkdir -p /home/temp/data/mysql_slave
```

### 2、nfs 配置

```sh
# 编辑配置文件
$ vi /etc/exports

/data/nfs *(insecure,rw,async,no_root_squash)
/data/mysql_slave *(insecure,rw,async,no_root_squash)
/data/mysql_master *(insecure,rw,async,no_root_squash)

# 加载配置文件
exportfs -arv
```

### 3、启动

```sh
# 加入开机启动
systemctl enable rpcbind
systemctl enable nfs-server
# 启动
systemctl start rpcbind
systemctl start nfs
```

