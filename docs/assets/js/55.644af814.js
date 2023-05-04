(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{542:function(e,s,a){"use strict";a.r(s);var t=a(4),r=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"rancher的离线安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rancher的离线安装"}},[e._v("#")]),e._v(" Rancher的离线安装")]),e._v(" "),a("blockquote",[a("p",[e._v("在K3s集群上安装Rancher。Helm安装，参照"),a("RouterLink",{attrs:{to:"/docs/运维系列/rancher-series/Helm3.2离线安装.html"}},[e._v("Helm3.2离线安装")])],1)]),e._v(" "),a("p",[e._v("本节分三个部分安装HA Rancher：")]),e._v(" "),a("ul",[a("li",[e._v("[添加 Helm Chart 仓库](#1、添加 Helm Chart 仓库)")]),e._v(" "),a("li",[a("a",{attrs:{href:"#2%E3%80%81SSL%E9%85%8D%E7%BD%AE"}},[e._v("SSL配置")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#3%E3%80%81%E5%AE%89%E8%A3%85Rancher"}},[e._v("安装Rancher")])])]),e._v(" "),a("h3",{attrs:{id:"_1、添加-helm-chart-仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、添加-helm-chart-仓库"}},[e._v("#")]),e._v(" 1、添加 Helm Chart 仓库")]),e._v(" "),a("p",[e._v("从可以访问 Internet 的系统中，获取最新的 Rancher Helm Chart，然后将内容复制到可以访问 Rancher Server 集群的系统中。")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("使用"),a("code",[e._v("helm repo add")]),e._v("来添加仓库，不同的地址适应不同的 Rancher 版本，请替换命令中的"),a("code",[e._v("<CHART_REPO>")]),e._v("，替换为"),a("code",[e._v("latest")]),e._v("，"),a("code",[e._v("stable")]),e._v("或"),a("code",[e._v("alpha")]),e._v("。更多信息请参考"),a("a",{attrs:{href:"https://docs.rancher.cn/docs/rancher2/installation/options/server-tags/_index",target:"_blank",rel:"noopener noreferrer"}},[e._v("如何选择 Rancher 版本"),a("OutboundLink")],1),e._v("。")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("latest")]),e._v("： 最新版，建议在尝试新功能时使用。")]),e._v(" "),a("li",[a("code",[e._v("stable")]),e._v("：稳定版，建议生产环境中使用。")]),e._v(" "),a("li",[a("code",[e._v("alpha")]),e._v("：预览版， 未来版本的实验性预览。")])]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("helm repo "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" rancher-"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("CHART_REPO"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" https://releases.rancher.com/server-charts/"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("CHART_REPO"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("这里选择 "),a("code",[e._v("stable")]),e._v("稳定版。")])]),e._v(" "),a("li",[a("p",[e._v("获取最新的Rancher Chart。")]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("helm fetch rancher-"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("CHART_REPO"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("/rancher\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"img/image-20201012103225462.png",alt:"image-20201012103225462"}})])])]),e._v(" "),a("h3",{attrs:{id:"_2、ssl配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、ssl配置"}},[e._v("#")]),e._v(" 2、SSL配置")]),e._v(" "),a("p",[e._v("Rancher Server 在默认情况下被设计为安全的，并且需要 SSL/TLS 配置。")]),e._v(" "),a("p",[e._v("当在离线环境的 Kubernetes 中安装 Rancher 时，推荐两种证书生成方式。")]),e._v(" "),a("blockquote",[a("p",[e._v("**注意：**如果要在外部终止 SSL/TLS，请参阅"),a("a",{attrs:{href:"https://docs.rancher.cn/docs/rancher2/installation/options/chart-options/_index",target:"_blank",rel:"noopener noreferrer"}},[e._v("在外部负载均衡器上终止 TLS"),a("OutboundLink")],1),e._v("。")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("设置")]),e._v(" "),a("th",[e._v("Chart 选项")]),e._v(" "),a("th",[e._v("描述")]),e._v(" "),a("th",[e._v("是否需要 cert-manager？")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Rancher 生成的自签名证书")]),e._v(" "),a("td",[a("code",[e._v("ingress.tls.source=rancher")])]),e._v(" "),a("td",[e._v("使用 Rancher 生成的 CA 签发的自签名证书 此项为"),a("strong",[e._v("默认选项")]),e._v("。在渲染 Rancher Helm 模板时不需要传递此项。")]),e._v(" "),a("td",[e._v("是")])]),e._v(" "),a("tr",[a("td",[e._v("已有的证书")]),e._v(" "),a("td",[a("code",[e._v("ingress.tls.source=secret")])]),e._v(" "),a("td",[e._v("通过创建 Kubernetes Secret（s）使用您已有的证书文件。 渲染 Rancher Helm 模板时必须传递此选项。")]),e._v(" "),a("td",[e._v("否")])])])]),e._v(" "),a("blockquote",[a("p",[e._v("Rancher 中国技术支持团队建议您使用“您已有的证书” "),a("code",[e._v("ingress.tls.source=secret")]),e._v(" 这种方式，从而减少对 cert-manager 的运维成本。")])]),e._v(" "),a("p",[e._v("这里使用私有证书，私有证书参考"),a("RouterLink",{attrs:{to:"/docs/运维系列/rancher-series/生成自签名SSL证书.html"}},[e._v("生成自签名SSL证书")]),e._v("。")],1),e._v(" "),a("p",[e._v("设置 Rancher 模板，声明您选择的选项。使用下面表中的参考选项，需要给 Rancher 配置使用私有镜像库。")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("占位符")]),e._v(" "),a("th",[e._v("描述")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("<VERSION>")])]),e._v(" "),a("td",[e._v("Rancher 版本")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("<RANCHER.YOURDOMAIN.COM>")])]),e._v(" "),a("td",[e._v("负载均衡器对应的 DNS")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("<REGISTRY.YOURDOMAIN.COM:PORT>")])]),e._v(" "),a("td",[e._v("私有镜像库对应的 DNS")])])])]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("   helm template rancher ./rancher-"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("VERSION"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(".tgz --output-dir "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    --namespace cattle-system "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    --set "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("hostname")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("RANCHER.YOURDOMAIN.COM"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    --set "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("rancherImage")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("REGISTRY.YOURDOMAIN.COM:PORT"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("/rancher/rancher "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    --set ingress.tls.source"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("secret "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    --set "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("privateCA")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("true "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 使用私有CA签名的证书")]),e._v("\n    --set "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("systemDefaultRegistry")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("REGISTRY.YOURDOMAIN.COM:PORT"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 自v2.2.0可用，设置默认的系统镜像仓库")]),e._v("\n    --set "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("useBundledSystemChart")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("true "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 自v2.3.0可用，使用内嵌的 Rancher system charts")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br")])]),a("h3",{attrs:{id:"_3、安装rancher"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、安装rancher"}},[e._v("#")]),e._v(" 3、安装Rancher")]),e._v(" "),a("p",[e._v("将以上配置完毕的内容复制到可以访问 Rancher Server 集群的系统中，准备妥当，完成最后的安装。")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("创建"),a("code",[e._v("cattle-system")]),e._v("命名空间")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl create namespace cattle-system\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])])]),e._v(" "),a("li",[a("p",[e._v("使用"),a("code",[e._v("kubectl")]),e._v("创建"),a("code",[e._v("tls")]),e._v("类型的密文")]),e._v(" "),a("p",[e._v("Kubernetes只有在"),a("code",[e._v("cattle-system")]),e._v("命名空间中，将"),a("code",[e._v("自签名的证书")]),e._v("和"),a("code",[e._v("对应的密钥")]),e._v("配置到"),a("code",[e._v("tls-rancher-ingress")]),e._v("的密文中，才会为Rancher创建所有的对象和服务。")]),e._v(" "),a("p",[e._v("使用 "),a("code",[e._v("kubectl")]),e._v(" 创建 "),a("code",[e._v("tls")]),e._v(" 类型的密文。")]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("kubectl -n cattle-system create secret tls tls-rancher-ingress "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --cert"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("tls.crt "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --key"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("tls.key\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])])]),e._v(" "),a("li",[a("p",[e._v("使用私有CA签发证书")]),e._v(" "),a("p",[e._v("如果您使用的是私有 CA，Rancher 需要您提供 CA 证书的副本，用来校验 Rancher Agent 与 Server 的连接。")]),e._v(" "),a("p",[e._v("拷贝 CA 证书到名为 "),a("code",[e._v("cacerts.pem")]),e._v(" 的文件，使用 "),a("code",[e._v("kubectl")]),e._v(" 命令在 "),a("code",[e._v("cattle-system")]),e._v(" 命名空间中创建名为 "),a("code",[e._v("tls-ca")]),e._v(" 的密文。")]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("kubectl -n cattle-system create secret generic tls-ca "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --from-file"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("cacerts.pem"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("./cacerts.pem\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])])]),e._v(" "),a("li",[a("p",[e._v("安装Rancher")]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("kubectl -n cattle-system apply -R -f ./rancher\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])])]),e._v(" "),a("li",[a("p",[e._v("测试")]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("root@node1 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# kubectl get pod -n cattle-system")]),e._v("\nNAME                                    READY   STATUS    RESTARTS   AGE\nrancher-ddb6db556-mbv45                 "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v("          10d\ncattle-cluster-agent-6666b6b47f-nlk9d   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("26")]),e._v("         163d\ncattle-node-agent-p9zgg                 "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("29")]),e._v("         163d\ncattle-node-agent-b2jlg                 "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("25")]),e._v("         15d\nrancher-ddb6db556-rhghs                 "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("          10d\nrancher-ddb6db556-758k9                 "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v("          10d\ncattle-node-agent-9jnd4                 "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("28")]),e._v("         163d\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br")])])])]),e._v(" "),a("h3",{attrs:{id:"_4、使用rancher"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、使用rancher"}},[e._v("#")]),e._v(" 4、使用Rancher")]),e._v(" "),a("p",[e._v("安装成功后，访问web管理页地址，也就是配置的Rancher访问域名，这里是 "),a("code",[e._v("rancher.agilefast.com")]),e._v(",初始化登录会设置密码")]),e._v(" "),a("p",[a("img",{attrs:{src:"img/image-20201106112604206.png",alt:"image-20201106112604206"}})]),e._v(" "),a("p",[e._v("登录成功后，即可看到管理页面")]),e._v(" "),a("p",[a("img",{attrs:{src:"img/image-20201106112657721.png",alt:"image-20201106112657721"}})]),e._v(" "),a("p",[a("img",{attrs:{src:"img/image-20201106112715967.png",alt:"image-20201106112715967"}})]),e._v(" "),a("p",[a("img",{attrs:{src:"img/image-20201106112749336.png",alt:"image-20201106112749336"}})])])}),[],!1,null,null,null);s.default=r.exports}}]);