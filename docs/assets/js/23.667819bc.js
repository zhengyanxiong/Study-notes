(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{505:function(s,a,t){"use strict";t.r(a);var e=t(4),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"nacos-k8s集群部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nacos-k8s集群部署"}},[s._v("#")]),s._v(" Nacos+K8S集群部署")]),s._v(" "),t("blockquote",[t("p",[s._v("参阅"),t("a",{attrs:{href:"https://nacos.io/zh-cn/docs/use-nacos-with-kubernetes.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),t("OutboundLink")],1),s._v("步骤")])]),s._v(" "),t("p",[s._v("官方文档有两种部署方式，这里使用它的高可用方式，通过NFS持久化数据卷")]),s._v(" "),t("hr"),s._v(" "),t("h3",{attrs:{id:"_1、部署nfs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、部署nfs"}},[s._v("#")]),s._v(" 1、部署NFS")]),s._v(" "),t("h4",{attrs:{id:"_1-创建角色"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建角色"}},[s._v("#")]),s._v(" 1.  创建角色")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ kubectl create -f deploy/nfs/rbac.yaml\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"_2-创建-serviceaccout-和部署-nfs-clinet-provisioner"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建-serviceaccout-和部署-nfs-clinet-provisioner"}},[s._v("#")]),s._v(" 2. 创建 "),t("code",[s._v("ServiceAccout")]),s._v(" 和部署  "),t("code",[s._v("NFS-Clinet Provisioner")])]),s._v(" "),t("h4",{attrs:{id:"_3-创建-nfs-strorageclass"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-创建-nfs-strorageclass"}},[s._v("#")]),s._v(" 3. 创建 "),t("code",[s._v("NFS StrorageClass")])]),s._v(" "),t("h4",{attrs:{id:"_4-验证nfs部署是否成功"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-验证nfs部署是否成功"}},[s._v("#")]),s._v(" 4. 验证NFS部署是否成功")]),s._v(" "),t("h4",{attrs:{id:"_5-部署中的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-部署中的问题"}},[s._v("#")]),s._v(" 5. 部署中的问题")]),s._v(" "),t("h5",{attrs:{id:"问题1、error-from-server-alreadyexists"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题1、error-from-server-alreadyexists"}},[s._v("#")]),s._v(" 问题1、"),t("code",[s._v("Error from server (AlreadyExists)")])]),s._v(" "),t("p",[s._v("出现这个错误的原因是，之前系统已经存在执行过的实例，有两种处理方式，一种是直接删除，一种是重新更新改文件。")]),s._v(" "),t("ol",[t("li",[s._v("直接删除")])]),s._v(" "),t("p",[s._v("使用 "),t("code",[s._v("kubectl delete")]),s._v("命令删除指定的文件")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ kubectl delete -f deploy/nfs/deployment.yaml\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("更新文件")])]),s._v(" "),t("p",[s._v("当删除出现 如下错误时，则可以修改yaml文件后，重新更新替换")]),s._v(" "),t("p",[t("img",{attrs:{src:"img/image-20200914171832869.png",alt:"image-20200914171832869"}})]),s._v(" "),t("p",[s._v("编辑 "),t("code",[s._v("deployment.yaml")]),s._v(" 文件，修改以下位置")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("-apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" extensions/v1beta1\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("+apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" apps/v1\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nfs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("client"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("provisioner\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("replicas")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("+selector")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("+matchLabels")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("+name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nfs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("client"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("provisioner\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("strategy")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("type")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Recreate\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("template")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("labels")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("-app")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nfs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("client"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("provisioner\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("+name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nfs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("client"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("provisioner\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("p",[s._v("保持后，通过 "),t("code",[s._v("kubectl apply -f")]),s._v(" 命令更新")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ kubectl apply -f deploy/nfs/deployment.yaml\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);