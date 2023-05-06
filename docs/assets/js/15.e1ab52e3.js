(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{498:function(t,a,g){"use strict";g.r(a);var s=g(4),i=Object(s.a)({},(function(){var t=this,a=t.$createElement,g=t._self._c||a;return g("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[g("h2",{attrs:{id:"windows服务器搭建dns服务器"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#windows服务器搭建dns服务器"}},[t._v("#")]),t._v(" Windows服务器搭建DNS服务器")]),t._v(" "),g("blockquote",[g("p",[t._v("参考地址:"),g("a",{attrs:{href:"https://www.jianshu.com/p/5038a95456b3",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.jianshu.com/p/5038a95456b3"),g("OutboundLink")],1)])]),t._v(" "),g("hr"),t._v(" "),g("h3",{attrs:{id:"_1、配置dns服务器"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#_1、配置dns服务器"}},[t._v("#")]),t._v(" 1、配置DNS服务器")]),t._v(" "),g("ol",[g("li",[g("p",[t._v("进入Window server 系统，打开"),g("strong",[t._v("服务器管理器")]),t._v("，在"),g("strong",[t._v("仪表板")]),t._v("里点击"),g("strong",[t._v("添加角色和功能")]),t._v("。\n"),g("img",{attrs:{src:"img/51e023d238429d3e0774d0ec8c43d5c2.png",alt:"img"}})])]),t._v(" "),g("li",[g("p",[t._v("进入**“添加角色和功能向导”"),g("strong",[t._v("，检查到静态IP地址已配置完成，管理员帐户使用的是强密码和最新的安全更新在实验中可以忽略，点击")]),t._v("“下一步”**。\n"),g("img",{attrs:{src:"img/9be1fe9a3f2037b77ca16bedb3a2eafe.png",alt:"img"}})])]),t._v(" "),g("li",[g("p",[t._v("我们在本地运行的物理计算机上安装，故安装类型选择第一项**“基于角色或基于功能的安装”**。\n"),g("img",{attrs:{src:"img/7a01d1299fe5d476a7072d57bd5903c7.png",alt:"img"}})])]),t._v(" "),g("li",[g("p",[t._v("服务器选择服务器池中的本地服务器**“dc”**。\n"),g("img",{attrs:{src:"img/f58d41cac6ad31e80a167ee5c3ceb858.png",alt:"img"}})])]),t._v(" "),g("li",[g("p",[t._v("服务器角色中勾选上**“DNS服务器”**，同时也在该服务器上安装DNS服务器管理工具。\n"),g("img",{attrs:{src:"img/384d1aa909990bca235168b091c2741d.png",alt:"img"}})])])]),t._v(" "),g("p",[t._v("​      "),g("img",{attrs:{src:"img/53c86521bda5317fc673d6a69335befc.png",alt:"img"}})]),t._v(" "),g("p",[t._v("​     "),g("img",{attrs:{src:"img/f468c27833959c74813b72cffe48a6f6.png",alt:"img"}})]),t._v(" "),g("ol",{attrs:{start:"6"}},[g("li",[g("p",[t._v("DNS服务器的安装不需要添加其他功能，功能安装页面直接点击**“下一步”**。\n"),g("img",{attrs:{src:"img/8b52f6f0346ad61e472ea4e256fff6a4.png",alt:"img"}})])]),t._v(" "),g("li",[g("p",[t._v("注意事项中说明当DNS服务器和Active Directory域服务器集成时，DNS服务器会自动复制DNS数据及其他目录服务数据；AD域服务器上必须安装DNS服务器。点击**“下一步”**。\n"),g("img",{attrs:{src:"img/a9d47bda7cef56a03a0d1e58478bb35c.png",alt:"img"}})])]),t._v(" "),g("li",[g("p",[t._v("确认选择无误，点击**“安装”**按钮开始安装，安装完毕关闭添加角色和功能向导。\n"),g("img",{attrs:{src:"img/caf85b166a634f1e901e2272364b9a28.png",alt:"img"}})])])]),t._v(" "),g("p",[g("strong",[t._v("到这一步我们就将DNS服务器搭建好了，接下来我们需要配置DNS服务。")])]),t._v(" "),g("h3",{attrs:{id:"_2、配置dns域名解析"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#_2、配置dns域名解析"}},[t._v("#")]),t._v(" 2、配置DNS域名解析")]),t._v(" "),g("ol",[g("li",[g("p",[t._v("从"),g("strong",[t._v("工具")]),t._v("打开"),g("strong",[t._v("DNS")]),t._v(" "),g("img",{attrs:{src:"img/4030300-26d249455f344d6f.png",alt:"img"}})])]),t._v(" "),g("li",[g("p",[t._v("在"),g("strong",[t._v("正向查找区域")]),t._v("点击鼠标右键"),g("strong",[t._v("新建区域")]),t._v(" "),g("img",{attrs:{src:"img/4030300-e59c81da191ea3e1.png",alt:"img"}})])]),t._v(" "),g("li",[g("p",[t._v("根据向导完成，默认直到"),g("strong",[t._v("区域名称")]),t._v("填写需要部署的域名,然后默认一直默认执行。")])])]),t._v(" "),g("p",[g("img",{attrs:{src:"img/4030300-109792c51d2e592a.png",alt:"img"}})]),t._v(" "),g("p",[t._v("注：这里的是填写域名的。（以www.qq.com为例，qq.com才是域名）")]),t._v(" "),g("p",[g("img",{attrs:{src:"img/4030300-25f4fb7b5746db94.png",alt:"img"}})]),t._v(" "),g("p",[g("img",{attrs:{src:"img/4030300-95340791d72b2e67.png",alt:"img"}})]),t._v(" "),g("ol",{attrs:{start:"4"}},[g("li",[g("p",[t._v("在"),g("strong",[t._v("正向查找区域")]),t._v("下点击我们刚才新建的"),g("strong",[t._v("chenyuan.com")]),t._v("（这里新建的因人而异)\n​ "),g("img",{attrs:{src:"img/4030300-49562584cca2d587.png",alt:"img"}}),t._v("\n​\n​ "),g("img",{attrs:{src:"img/4030300-9a1c517324c8f9ba.png",alt:"img"}})])]),t._v(" "),g("li",[g("p",[t._v("在"),g("strong",[t._v("反向查找区域")]),t._v("点击"),g("strong",[t._v("新建区域")])])])]),t._v(" "),g("p",[g("img",{attrs:{src:"img/4030300-27f99943f56aa414.png",alt:"img"}})]),t._v(" "),g("p",[g("img",{attrs:{src:"img/4030300-d9b2452d2105687d.png",alt:"img"}})]),t._v(" "),g("p",[g("img",{attrs:{src:"img/4030300-8a4aaaf02042f3e1.png",alt:"img"}})]),t._v(" "),g("p",[g("img",{attrs:{src:"img/4030300-c316782777f82479.png",alt:"img"}})]),t._v(" "),g("p",[g("img",{attrs:{src:"img/4030300-b3244d39a3ff7e39.png",alt:"img"}})]),t._v(" "),g("p",[g("img",{attrs:{src:"img/4030300-496af864ee926b9d.png",alt:"img"}})]),t._v(" "),g("p",[g("img",{attrs:{src:"img/4030300-9c59abd81eb0cf47.png",alt:"img"}})]),t._v(" "),g("ol",{attrs:{start:"6"}},[g("li",[t._v("在反向查找区域下点击我们新建的IP段那里，右键"),g("strong",[t._v("新建指针")])])]),t._v(" "),g("p",[g("img",{attrs:{src:"img/4030300-828c51176dffe001.png",alt:"img"}})]),t._v(" "),g("p",[g("img",{attrs:{src:"img/4030300-96ca7998ad218916.png",alt:"img"}})]),t._v(" "),g("h3",{attrs:{id:"_3、测试"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#_3、测试"}},[t._v("#")]),t._v(" 3、测试")]),t._v(" "),g("ol",[g("li",[t._v("点击我们的DNS服务器，启动nslookup")])]),t._v(" "),g("p",[g("img",{attrs:{src:"img/4030300-376dfb7705cdf970.png",alt:"img"}})]),t._v(" "),g("p",[t._v("2、依次输入我们实验域名www.chenyuan.com和ip地址")]),t._v(" "),g("p",[g("img",{attrs:{src:"img/4030300-3065b17f5c1e4642.png",alt:"img"}})]),t._v(" "),g("p",[t._v("3、测试成功,DNS搭建完成")])])}),[],!1,null,null,null);a.default=i.exports}}]);