(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{499:function(a,t,s){"use strict";s.r(t);var e=s(4),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"rancher-整合efk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rancher-整合efk"}},[a._v("#")]),a._v(" Rancher 整合EFK")]),a._v(" "),s("p",[a._v("在Rancher集群中，Rancher本身使用"),s("code",[a._v("fluentd")]),a._v("从每个容器收集"),s("code",[a._v("stdout/stderr")]),a._v("日志，将每个主机上的pod日志存储在"),s("code",[a._v("/var/log/containers")]),a._v("下面，这里我们将使用"),s("code",[a._v("fluentd")]),a._v("发送到"),s("code",[a._v("Elasticsearch")]),a._v("中。")]),a._v(" "),s("h3",{attrs:{id:"_1、创建-elasticsearch-yaml-文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、创建-elasticsearch-yaml-文件"}},[a._v("#")]),a._v(" 1、创建 "),s("code",[a._v("elasticsearch.yaml")]),a._v(" 文件")]),a._v(" "),s("div",{staticClass:"language-yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" apps/v1\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" Deployment\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" elkhost\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("selector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("matchLabels")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" elkhost\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("replicas")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n     "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("labels")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n       "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" elkhost\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n     "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("containers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" elkhost\n       "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" microid.docker.com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("5000/sebp/elk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("latest\n       "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("tty")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("true")]),a._v("\n       "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("ports")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" \n       "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("containerPort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("9200")]),a._v("\n       "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("containerPort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5601")]),a._v("\n       "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("containerPort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5044")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("---")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" v1\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" Service\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" elk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("kibana\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" NodePort\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("ports")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("port")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5601")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("nodePort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("30001")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("selector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" elkhost\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br"),s("span",{staticClass:"line-number"},[a._v("25")]),s("br"),s("span",{staticClass:"line-number"},[a._v("26")]),s("br"),s("span",{staticClass:"line-number"},[a._v("27")]),s("br"),s("span",{staticClass:"line-number"},[a._v("28")]),s("br"),s("span",{staticClass:"line-number"},[a._v("29")]),s("br"),s("span",{staticClass:"line-number"},[a._v("30")]),s("br"),s("span",{staticClass:"line-number"},[a._v("31")]),s("br"),s("span",{staticClass:"line-number"},[a._v("32")]),s("br"),s("span",{staticClass:"line-number"},[a._v("33")]),s("br"),s("span",{staticClass:"line-number"},[a._v("34")]),s("br")])]),s("h3",{attrs:{id:"_2、使用rancher导入elasticsearch-yaml文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、使用rancher导入elasticsearch-yaml文件"}},[a._v("#")]),a._v(" 2、使用Rancher导入"),s("code",[a._v("elasticsearch.yaml")]),a._v("文件")]),a._v(" "),s("blockquote",[s("p",[a._v("注意：这里熟悉K8s命令的话，可以直接使用命令"),s("code",[a._v("kublectl create -f elasticsearch.yaml -n default")]),a._v("创建")])]),a._v(" "),s("p",[s("img",{attrs:{src:"img/image-20201109100721119.png",alt:"image-20201109100721119"}})]),a._v(" "),s("p",[a._v("可以直接将"),s("code",[a._v("elasticsearch.yaml")]),a._v("文件的内容复制出来到编辑处，也可以选择从文件读取，完成后，导入模式选择"),s("code",[a._v("命名空间")]),a._v(",然后指定命名空间"),s("code",[a._v("default")]),a._v("，完成后，执行 导入操作，导入完成后，即可看到"),s("code",[a._v("elkhost")]),a._v("实例。")]),a._v(" "),s("p",[s("img",{attrs:{src:"img/image-20201109101100686.png",alt:"image-20201109101100686"}})]),a._v(" "),s("h3",{attrs:{id:"_3、访问kibana"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、访问kibana"}},[a._v("#")]),a._v(" 3、访问Kibana")]),a._v(" "),s("p",[a._v("访问地址：http://10.1.103.171:30001")]),a._v(" "),s("p",[s("img",{attrs:{src:"img/image-20201109101805407.png",alt:"image-20201109101805407"}})]),a._v(" "),s("h3",{attrs:{id:"_4、rancher配置elasticsearch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、rancher配置elasticsearch"}},[a._v("#")]),a._v(" 4、Rancher配置Elasticsearch")]),a._v(" "),s("p",[a._v("在工具->日志界面，填写elasticsearch的地址（注意：这里没有使用https），填写索引前缀，然后测试，成功说明Rancher连接Elasticsearch成功，保存。")]),a._v(" "),s("p",[s("img",{attrs:{src:"img/image-20201109102134115.png",alt:"image-20201109102134115"}})]),a._v(" "),s("p",[s("strong",[a._v("注意：")]),a._v(" 这里如果对docker做过数据迁移，如果不修改Rancher的fluentd的配置，那么elasticsearch会收不到Rancher集群的日志，fluentd 出现"),s("code",[a._v("unreadable. It is excluded and would be examined next time.")]),a._v("错误。")]),a._v(" "),s("p",[a._v("修改fluentd的数据卷映射，在集群"),s("code",[a._v("system下的cattle-logging")]),a._v("命名空间下找到"),s("code",[a._v("rancher-logging-fluentd-linux")]),a._v(" pod实例，对实例进行升级操作，选择主容器"),s("code",[a._v("rancher-logging-fluentd")])]),a._v(" "),s("p",[a._v("修改 "),s("code",[a._v("dockerroot")]),a._v("卷的路径为docker实际路径")]),a._v(" "),s("p",[s("img",{attrs:{src:"img/image-20201109103650625.png",alt:"image-20201109103650625"}})]),a._v(" "),s("h3",{attrs:{id:"_5、使用kibana连接-elasticsearch索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5、使用kibana连接-elasticsearch索引"}},[a._v("#")]),a._v(" 5、使用Kibana连接 Elasticsearch索引")]),a._v(" "),s("p",[a._v("创建索引模式，可以创"),s("code",[a._v("多个数据源")]),a._v("模式，按照月进行进行分析")]),a._v(" "),s("p",[s("img",{attrs:{src:"img/image-20201109105803081.png",alt:"image-20201109105803081"}})]),a._v(" "),s("p",[a._v("选择一个时间字段和全局时间过滤器一起使用，然后执行创建")]),a._v(" "),s("p",[s("img",{attrs:{src:"img/image-20201109105941379.png",alt:"image-20201109105941379"}})]),a._v(" "),s("p",[a._v("完成后，可在"),s("code",[a._v("Discover")]),a._v("模块选择刚刚创建的索引模式，即可看到日志数据信息")]),a._v(" "),s("p",[s("img",{attrs:{src:"img/image-20201109110129902.png",alt:"image-20201109110129902"}})]),a._v(" "),s("p",[s("img",{attrs:{src:"img/image-20201109110329941.png",alt:"image-20201109110329941"}})])])}),[],!1,null,null,null);t.default=n.exports}}]);