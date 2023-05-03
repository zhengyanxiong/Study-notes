(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{533:function(a,s,t){"use strict";t.r(s);var r=t(4),n=Object(r.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"ccr部署文档说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ccr部署文档说明"}},[a._v("#")]),a._v(" CCR部署文档说明")]),a._v(" "),t("p",[a._v("ccr 部署采用Rancher + K3s的集群架构部署，该文档描述ccr生产环境的架构部署以及过程说明。")]),a._v(" "),t("h3",{attrs:{id:"一、机器环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、机器环境"}},[a._v("#")]),a._v(" 一、机器环境")]),a._v(" "),t("table",[t("tr",[t("th",{attrs:{width:"300"}},[a._v("机器名称 ")]),a._v(" "),t("th",{attrs:{width:"150"}},[a._v("IP地址 ")]),a._v(" "),t("th",[a._v("描述 ")])]),a._v(" "),t("tr",[t("td",[a._v("CCRNode1(CCR应用服务器1,Linux)")]),a._v(" "),t("td",[a._v("10.107.250.92")]),a._v(" "),t("td",{attrs:{rowspan:"3"}},[a._v("\n        \t部署Rancher+K3s集群，nacos集群必须需要三个机器才可以构成集群环境，这里用三台机器部署注册中心Nacos集群，所有的ccr应用服务部署在该集群中\n        ")])]),a._v(" "),t("tr",[t("td",[a._v("CCRNode2(CCR应用服务器2,Linux)")]),a._v(" "),t("td",[a._v("10.107.250.93")])]),a._v(" "),t("tr",[t("td",[a._v("CCRNode3(CCR应用服务器3,Linux)")]),a._v(" "),t("td",[a._v("10.107.250.113")])]),a._v(" "),t("tr",[t("td",[a._v("CCR应用服务器4,Linux")]),a._v(" "),t("td",[a._v("10.107.250.114")]),a._v(" "),t("td",[a._v("部署机器的负载均衡器，ntp时间同步服务器，docker私有仓库服务器")])]),a._v(" "),t("tr",[t("td",[a._v("CCR数据采集服务器,Windows")]),a._v(" "),t("td",[a._v("10.107.250.94")]),a._v(" "),t("td",[a._v("数据采集服务器，部署集群外部数据库MySql,集群DNS服务器")])]),a._v(" "),t("tr",[t("td",[a._v("CCR数据库服务器,Linux")]),a._v(" "),t("td",[a._v("10.107.250.95")]),a._v(" "),t("td",[a._v("ccr数据库服务器")])])]),a._v(" "),t("h3",{attrs:{id:"二、部署架构图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、部署架构图"}},[a._v("#")]),a._v(" 二、部署架构图")]),a._v(" "),t("h4",{attrs:{id:"_1-rancher-k3s高可用架构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-rancher-k3s高可用架构"}},[a._v("#")]),a._v(" 1. Rancher+K3s高可用架构")]),a._v(" "),t("p",[t("img",{attrs:{src:"img/image-20201106103046058.png",alt:"image-20201106103046058"}})]),a._v(" "),t("h4",{attrs:{id:"_2-k3s-集群运行rancher-management-server架构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-k3s-集群运行rancher-management-server架构"}},[a._v("#")]),a._v(" 2. K3s 集群运行Rancher Management Server架构")]),a._v(" "),t("p",[t("img",{attrs:{src:"img/k3s-server-storage.svg",alt:"https://docs.rancher.cn/img/rancher/k3s-server-storage.svg"}})]),a._v(" "),t("h4",{attrs:{id:"_3-rancher的四层负载均衡架构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-rancher的四层负载均衡架构"}},[a._v("#")]),a._v(" 3. Rancher的四层负载均衡架构")]),a._v(" "),t("p",[t("img",{attrs:{src:"img/rancher2ha.svg",alt:"https://docs.rancher.cn/img/rancher/ha/rancher2ha.svg"}})]),a._v(" "),t("h3",{attrs:{id:"三、部署流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、部署流程"}},[a._v("#")]),a._v(" 三、部署流程")]),a._v(" "),t("h4",{attrs:{id:"_1-环境准备"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-环境准备"}},[a._v("#")]),a._v(" 1. 环境准备")]),a._v(" "),t("p",[a._v("参考"),t("RouterLink",{attrs:{to:"/docs/运维系列/rancher-series/安装环境准备.html"}},[a._v("安装环境准备文档")]),a._v(".")],1),a._v(" "),t("h4",{attrs:{id:"_2-k3s部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-k3s部署"}},[a._v("#")]),a._v(" 2. K3s部署")]),a._v(" "),t("p",[a._v("参考"),t("RouterLink",{attrs:{to:"/docs/运维系列/rancher-series/K3s安装.html"}},[a._v("K3s安装文档")]),a._v(".")],1),a._v(" "),t("h4",{attrs:{id:"_3-rancher安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-rancher安装"}},[a._v("#")]),a._v(" 3. Rancher安装")]),a._v(" "),t("p",[a._v("参考"),t("RouterLink",{attrs:{to:"/docs/运维系列/rancher-series/Rancher安装文档.html"}},[a._v("Rancher安装文档")])],1),a._v(" "),t("h3",{attrs:{id:"四、通过rancher部署服务镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、通过rancher部署服务镜像"}},[a._v("#")]),a._v(" 四、通过Rancher部署服务镜像")]),a._v(" "),t("p",[a._v("Rancher 部署应用的整体流程如下")]),a._v(" "),t("div",{staticClass:"language-flow line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-flow"}},[t("code",[a._v("开始"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v("start"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" 开始\n结束"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v("end"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" 结束\n过程"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v("operation"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" 本地打包服务成jar包\n过程"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v("operation"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" 上传jar包和Dockerfile文件到指定服务器\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("制作镜像")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("build"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v("operation"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("制作镜像")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("build"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("上传镜像到私有仓库")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("push"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v("operation"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("上传镜像到私有仓库")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("push"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nRancher部署镜像"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v("operation"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" Rancher部署镜像\n\n开始"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("过程1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("right"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("过程"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("制作镜像")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("right"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("上传镜像到私有仓库")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("right"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("Rancher部署镜像"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("结束\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br")])]),t("h4",{attrs:{id:"_1-本地打包服务成jar包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-本地打包服务成jar包"}},[a._v("#")]),a._v(" 1. 本地打包服务成jar包")]),a._v(" "),t("p",[a._v("可以单独打包，或直接打全量包")]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("$ mvn clean package\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h4",{attrs:{id:"_2-上传jar包和dockerfile文件到指定服务器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-上传jar包和dockerfile文件到指定服务器"}},[a._v("#")]),a._v(" 2. 上传jar包和Dockerfile文件到指定服务器")]),a._v(" "),t("p",[a._v("在每个服务的工程下都建有docker目录，里边有服务对应的"),t("code",[a._v("Dockerfile")]),a._v(" 文件，文件内容如下")]),a._v(" "),t("div",{staticClass:"language-dockerfile line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 设置基础镜像来源,注意，这里的基础镜像，由于公司内部集群的docker私有仓库和ccr生产的私有仓库地址有差异，所有在对应的环境下，建议检测修改")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" microid.docker.com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("5000/basejdk"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("8\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 维护者信息")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("MAINTAINER")]),a._v(" zhengyanxiong\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 设置环境变量")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ENV")]),a._v(" JAVA_HOME /home/jdk8\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ENV")]),a._v(" JRE_HOME $JAVA_HOME/jre\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ENV")]),a._v(" CLASSPATH $JAVA_HOME/lib"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("$JAVA_HOME/bin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("CLASSPATH\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ENV")]),a._v(" PATH $JAVA_HOME/bin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("$PATH\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ENV")]),a._v(" PARAMS="),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('""')]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 设置时区")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ENV")]),a._v(" TZ=PRC\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("RUN")]),a._v(" ln "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")]),a._v(" /etc/timezone\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 将当前jar包拷贝到home下的工作目录")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("COPY")]),a._v(" agilefast"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("cloud"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("gateway"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("1.0.0.jar /home/gateway/agilefast"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("cloud"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("gateway"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("1.0.0.jar\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 设置jar包的操作权限")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("RUN")]),a._v(" chmod "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("R 777 /home/gateway/agilefast"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("cloud"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("gateway"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("1.0.0.jar\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 设置工作目录")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("WORKDIR")]),a._v(" /home\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 开放的端口")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("EXPOSE")]),a._v(" 8084\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 启动命令")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v('# CMD ["java","-jar","/home/gateway/agilefast-cloud-gateway-1.0.0.jar"]')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ENTRYPOINT")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"sh"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"-c"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"java $PARAMS -jar /home/gateway/agilefast-cloud-gateway-1.0.0.jar"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br"),t("span",{staticClass:"line-number"},[a._v("18")]),t("br"),t("span",{staticClass:"line-number"},[a._v("19")]),t("br"),t("span",{staticClass:"line-number"},[a._v("20")]),t("br"),t("span",{staticClass:"line-number"},[a._v("21")]),t("br"),t("span",{staticClass:"line-number"},[a._v("22")]),t("br"),t("span",{staticClass:"line-number"},[a._v("23")]),t("br"),t("span",{staticClass:"line-number"},[a._v("24")]),t("br"),t("span",{staticClass:"line-number"},[a._v("25")]),t("br"),t("span",{staticClass:"line-number"},[a._v("26")]),t("br"),t("span",{staticClass:"line-number"},[a._v("27")]),t("br"),t("span",{staticClass:"line-number"},[a._v("28")]),t("br"),t("span",{staticClass:"line-number"},[a._v("29")]),t("br"),t("span",{staticClass:"line-number"},[a._v("30")]),t("br"),t("span",{staticClass:"line-number"},[a._v("31")]),t("br"),t("span",{staticClass:"line-number"},[a._v("32")]),t("br"),t("span",{staticClass:"line-number"},[a._v("33")]),t("br")])]),t("p",[t("img",{attrs:{src:"img/image-20201106140907115.png",alt:"image-20201106140907115"}})]),a._v(" "),t("h4",{attrs:{id:"_3-制作镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-制作镜像"}},[a._v("#")]),a._v(" 3. 制作镜像")]),a._v(" "),t("p",[a._v("进入到上一步上传的文件目录下，执行命令"),t("code",[a._v("docker build -t <私有镜像仓库地址:5000>/<镜像名称>:<镜像版本号> .")])]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("$ docker build -t docker.agilefast.com:5000/agilefastcloud/gateway:1.0 "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 注意，不能忘了后边的 . 号")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h4",{attrs:{id:"_4-上传镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-上传镜像"}},[a._v("#")]),a._v(" 4. 上传镜像")]),a._v(" "),t("p",[a._v("完成上一步后，执行命令"),t("code",[a._v("docker push <镜像名称>")])]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("$ docker push docker.agilefast.com:5000/agilefastcloud/gateway:1.0\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h4",{attrs:{id:"_5-rancher部署镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-rancher部署镜像"}},[a._v("#")]),a._v(" 5. Rancher部署镜像")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("为K3s 设置不同的命名空间，部署对应的项目，如下图按照默认配置添加名为"),t("code",[a._v("agilefast-cloud")]),a._v(" 命名空间")]),a._v(" "),t("p",[t("img",{attrs:{src:"img/image-20201106142512867.png",alt:"image-20201106142512867"}})])]),a._v(" "),t("li",[t("p",[a._v("按照下面步骤到部署页面")]),a._v(" "),t("p",[t("img",{attrs:{src:"img/image-20201106142843575.png",alt:"image-20201106142843575"}})])]),a._v(" "),t("li",[t("p",[a._v("部署应用")]),a._v(" "),t("p",[t("img",{attrs:{src:"img/image-20201106143730858.png",alt:"image-20201106143730858"}})])]),a._v(" "),t("li",[t("p",[a._v("如果没问题的话😂，就会看到下图的样子有")]),a._v(" "),t("p",[t("img",{attrs:{src:"img/image-20201106144508937.png",alt:"image-20201106144508937"}})]),a._v(" "),t("p",[a._v("点击30940即可访问页面")]),a._v(" "),t("p",[t("img",{attrs:{src:"img/image-20201106144804136.png",alt:"image-20201106144804136"}})])])]),a._v(" "),t("p",[a._v("到此应用部署完成🤞🤞🤞🤞🤞")])])}),[],!1,null,null,null);s.default=n.exports}}]);