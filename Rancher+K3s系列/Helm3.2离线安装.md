## Helm3.2离线安装

> 官网地址[https://helm.sh/zh/](https://helm.sh/zh/)

![image-20200927172120175](img/image-20200927172120175.png)

下载二进制文件`helm-v3.2.0-linux-amd64.tar.gz`

解压到`/user/local/bin`目录下即可

***注意***：在K3s集群环境中，会出现 `Error: Kubernetes cluster unreachable: error loading config file "/root/.kube/config": read /root/.kube/config: is a directory`错误，执行下面命令解决

```sh
export KUBECONFIG=/etc/rancher/k3s/k3s.yaml
```

