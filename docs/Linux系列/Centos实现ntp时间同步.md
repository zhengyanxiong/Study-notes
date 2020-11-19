---
title: Centos7实现NTP时间同步
date: 2020-11-05
---

## Centos7实现NTP时间同步

### 1、NTP服务的安装

#### 1.1 查看系统是否已经安装ntp服务组件

```sh
[root@node1 ~]# rpm -qa|grep ntp
ntp-4.2.6p5-29.el7.centos.x86_64
fontpackages-filesystem-1.44-8.el7.noarch
ntpdate-4.2.6p5-29.el7.centos.x86_64
python-ntplib-0.3.2-1.el7.noarch
[root@node1 ~]#
[root@node1 ~]#
[root@node1 ~]#
[root@node1 ~]# ls /etc|grep ntp
ntp
ntp.conf
```

存在说明服务器已经安装了ntp sever.直接跳过安装，到服务配置.

#### 1.2 在线安装

```sh
[root@node1 ~]# yum -y install ntp
```

#### 1.3 离线安装

```sh
# 或者，找一台本地可联网服务器，进行安装包的download
yum -y install ntp --downloadonly --downloaddir /root/ntp
 
# 进入rpm包安装目录，执行如下命令
rpm -ivh *.rpm --force --nodeps
 
#设置开机启动
#chkconfig ntpd on
systemctl enable ntpd  
 
systemctl start ntpd
 
systemctl status ntpd
 
systemctl daemon-reload
```

#### 1.4 服务配置

在离线环境下，使用本服务器的时间做为时间同步

```sh
[root@node1 ~]# vi /etc/ntp.conf

#server 0.centos.pool.ntp.org iburst
#server 1.centos.pool.ntp.org iburst
#server 2.centos.pool.ntp.org iburst
#server 3.centos.pool.ntp.org iburst
server 127.127.1.0 iburst  # 添加这一行，注销到上边的内容

```

### 2、NTP客户端同步配置

```sh
[root@node1 ~]# vi /etc/ntp.conf
# server 0.centos.pool.ntp.org iburst
# server 1.centos.pool.ntp.org iburst
# server 2.centos.pool.ntp.org iburst
# server 3.centos.pool.ntp.org iburst

# 如果联不通外网，则把上面几行注释，然后添加下面两行，意思是设置成时间服务器是自己
server 10.107.250.114
fudge 10.107.250.114 stratum 8
[root@node1 ~]# systemctl restart ntpd
[root@node1 ~]# ntpdate -u 10.107.250.114  # 同步服务器时间
 5 Nov 11:22:30 ntpdate[1143]: step time server 10.107.250.114 offset 59.282628 sec
[root@node1 ~]# date
Thu Nov  5 11:22:33 CST 2020

```

查看时间是否同步

```sh
[root@CCRNode2 docker]# ntpq -p
     remote           refid      st t when poll reach   delay   offset  jitter
==============================================================================
 10.107.250.114  LOCAL(0)         6 u  178   64    1    0.758  59282.3   0.000
```

