(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{536:function(s,t,a){"use strict";a.r(t);var e=a(4),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"kubernetes备忘录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes备忘录"}},[s._v("#")]),s._v(" Kubernetes备忘录")]),s._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://kubernetes.io/zh/docs/reference/kubectl/cheatsheet/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官网地址"),a("OutboundLink")],1)])]),s._v(" "),a("h3",{attrs:{id:"_1、kuberctl-查看和查找资源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、kuberctl-查看和查找资源"}},[s._v("#")]),s._v(" 1、Kuberctl 查看和查找资源")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# get 命令的基本输出")]),s._v("\nkubectl get services                          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出当前命名空间下的所有 services")]),s._v("\nkubectl get pods --all-namespaces             "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出所有命名空间下的全部的 Pods")]),s._v("\nkubectl get pods -o wide                      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出当前命名空间下的全部 Pods，并显示更详细的信息")]),s._v("\nkubectl get deployment my-dep                 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出某个特定的 Deployment")]),s._v("\nkubectl get pods                              "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出当前命名空间下的全部 Pods")]),s._v("\nkubectl get pod my-pod -o yaml                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取一个 pod 的 YAML")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# describe 命令的详细输出")]),s._v("\nkubectl describe nodes my-node\nkubectl describe pods my-pod\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出当前名字空间下所有 Services，按名称排序")]),s._v("\nkubectl get services --sort-by"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(".metadata.name\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出 Pods，按重启次数排序")]),s._v("\nkubectl get pods --sort-by"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.status.containerStatuses[0].restartCount'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列举所有 PV 持久卷，按容量排序")]),s._v("\nkubectl get "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("pv")]),s._v(" --sort-by"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(".spec.capacity.storage\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取包含 app=cassandra 标签的所有 Pods 的 version 标签")]),s._v("\nkubectl get pods --selector"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("app"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("cassandra -o "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("jsonpath")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{.items[*].metadata.labels.version}'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取所有工作节点（使用选择器以排除标签名称为 'node-role.kubernetes.io/master' 的结果）")]),s._v("\nkubectl get node --selector"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'!node-role.kubernetes.io/master'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取当前命名空间中正在运行的 Pods")]),s._v("\nkubectl get pods --field-selector"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("status.phase"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Running\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取全部节点的 ExternalIP 地址")]),s._v("\nkubectl get nodes -o "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("jsonpath")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{.items[*].status.addresses[?(@.type==\"ExternalIP\")].address}'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出属于某个特定 RC 的 Pods 的名称")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 在转换对于 jsonpath 过于复杂的场合，"jq" 命令很有用；可以在 https://stedolan.github.io/jq/ 找到它。')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("sel")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${$(kubectl get rc my-rc --output=json | jq -j '.spec.selector | to_entries | ."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(' | "\\(.key)=\\(.value)'),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(",")]),s._v("\"')"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("?}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("kubectl get pods --selector"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("$sel --output"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("jsonpath"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(".items"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("metadata.name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示所有 Pods 的标签（或任何其他支持标签的 Kubernetes 对象）")]),s._v("\nkubectl get pods --show-labels\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查哪些节点处于就绪状态")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JSONPATH")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{range .items[*]}{@.metadata.name}:{range @.status.conditions[*]}{@.type}={@.status};{end}{end}'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" kubectl get nodes -o "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("jsonpath")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JSONPATH")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Ready=True"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出被一个 Pod 使用的全部 Secret")]),s._v("\nkubectl get pods -o json "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" jq "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.items[].spec.containers[].env[]?.valueFrom.secretKeyRef.name'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -v null "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("uniq")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列举所有 Pods 中初始化容器的容器 ID（containerID）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Helpful when cleaning up stopped containers, while avoiding removal of initContainers.")]),s._v("\nkubectl get pods --all-namespaces -o "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("jsonpath")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{range .items[*].status.initContainerStatuses[*]}{.containerID}{\""),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v("\"}{end}'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cut")]),s._v(" -d/ -f3\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出事件（Events），按时间戳排序")]),s._v("\nkubectl get events --sort-by"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(".metadata.creationTimestamp\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 比较当前的集群状态和假定某清单被应用之后的集群状态")]),s._v("\nkubectl "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" -f ./my-manifest.yaml\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);