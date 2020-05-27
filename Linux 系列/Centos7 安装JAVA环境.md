## Centos7安装JAVA环境

JDK [下载](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) 

### 1、卸载系统自带的OpenJDK

```sh
# 1、查看系统自带的OpenJDK版本
$ java -version
# 2、 查找系统JDK文件
$ rpm -qa | grep java


nuxwdog-client-java-1.0.3-8.el7.x86_64
javamail-1.4.6-8.el7.noarch
java-1.8.0-openjdk-headless-1.8.0.232.b09-0.el7_7.x86_64
java-1.8.0-openjdk-1.8.0.232.b09-0.el7_7.x86_64
python-javapackages-3.4.1-11.el7.noarch
pki-base-java-10.5.16-5.el7_7.noarch
tzdata-java-2019c-1.el7.noarch
javapackages-tools-3.4.1-11.el7.noarch

# 3、 删除上述文件中的
# java-1.8.0-openjdk-headless-1.8.0.232.b09-0.el7_7.x86_64
# java-1.8.0-openjdk-1.8.0.232.b09-0.el7_7.x86_64
# nuxwdog-client-java-1.0.3-8.el7.x86_64
$ rpm -e --nodeps java-1.8.0-openjdk-headless-1.8.0.232.b09-0.el7_7.x86_64
$ rpm -e --nodeps java-1.8.0-openjdk-1.8.0.232.b09-0.el7_7.x86_64
$ rpm -e --nodeps nuxwdog-client-java-1.0.3-8.el7.x86_64
# 类似删除上面的所有文件
# 4、创建 /usr/java 目录，将下载好的tar包放到该目录下,然后在 /usr/java/ 目录下解压，完成后删除tar包
$ mkdir -p /usr/java/
$ cp /home/admin/javaJDK/jdk-8u231-linux-x64.tar.gz /usr/java/
$ tar -zxvf jdk-8u231-linux-x64.tar.gz
$ rm -rf jdk-8u231-linux-x64.tar.gz
```

### 2、配置JDK环境变量

编辑 `/etc/profile` 文件，添加以下内容

```sh
# java home
export JAVA_HOME=/usr/java/jdk1.8.0_231
export CLASSPATH=.:${JAVA_HOME}/jre/lib/rt.jar:${JAVA_HOME}/lib/dt.jar:${JAVA_HOME}/lib/tools.jar
export PATH=$PATH:${JAVA_HOME}/bin
```

### 3、让配置生效

```sh
$ source /etc/profile
# 检查是否配置成功
$ java -version
```

