







```sh
docker run -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" docker.elastic.co/elasticsearch/elasticsearch:7.9.2

```

### 部署ELK

#### 1.创建ELK的部署脚本 `elkhost.yaml`

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: elkhost
spec:
  selector:
    matchLabels:
      app: elkhost
  replicas: 1
  template:
    metadata:
     labels:
       app: elkhost
    spec:
     containers:
     - name: elkhost
       image: microid.docker.com:5000/sebp/elk:latest
       tty: true
       ports: 
       - containerPort: 9200
       - containerPort: 5601
       - containerPort: 5044
---
apiVersion: v1
kind: Service
metadata:
  name: elk-kibana
spec:
  type: NodePort
  ports:
  - port: 5601
    nodePort: 30001
  selector:
    app: elkhost
   
```



**注意**：部署出现的问题`docker [1]: max virtual memory areas vm.max_map_count [65530] is too low, increase to at least [262144]`
修改宿主机的配置文件 `sysctl.conf`，添加 `vm.max_map_count=655360`,执行命令 `sysctl -p`

```sh
$ vi /etc/sysctl.conf  ##编辑文件，添加下面内容
vm.max_map_count=655360
$ sysctl -p
```

