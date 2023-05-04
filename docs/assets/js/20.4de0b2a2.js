(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{502:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"centos7实现ntp时间同步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#centos7实现ntp时间同步"}},[s._v("#")]),s._v(" Centos7实现NTP时间同步")]),s._v(" "),a("h3",{attrs:{id:"_1、ntp服务的安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、ntp服务的安装"}},[s._v("#")]),s._v(" 1、NTP服务的安装")]),s._v(" "),a("h4",{attrs:{id:"_1-1-查看系统是否已经安装ntp服务组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-查看系统是否已经安装ntp服务组件"}},[s._v("#")]),s._v(" 1.1 查看系统是否已经安装ntp服务组件")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@node1 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rpm -qa|grep ntp")]),s._v("\nntp-4.2.6p5-29.el7.centos.x86_64\nfontpackages-filesystem-1.44-8.el7.noarch\nntpdate-4.2.6p5-29.el7.centos.x86_64\npython-ntplib-0.3.2-1.el7.noarch\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@node1 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@node1 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@node1 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@node1 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls /etc|grep ntp")]),s._v("\nntp\nntp.conf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("存在说明服务器已经安装了ntp sever.直接跳过安装，到服务配置.")]),s._v(" "),a("h4",{attrs:{id:"_1-2-在线安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-在线安装"}},[s._v("#")]),s._v(" 1.2 在线安装")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@node1 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yum -y install ntp")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"_1-3-离线安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-离线安装"}},[s._v("#")]),s._v(" 1.3 离线安装")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者，找一台本地可联网服务器，进行安装包的download")]),s._v("\nyum -y "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" ntp --downloadonly --downloaddir /root/ntp\n \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入rpm包安装目录，执行如下命令")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -ivh *.rpm --force --nodeps\n \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置开机启动")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#chkconfig ntpd on")]),s._v("\nsystemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" ntpd  \n \nsystemctl start ntpd\n \nsystemctl status ntpd\n \nsystemctl daemon-reload\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("h4",{attrs:{id:"_1-4-服务配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-服务配置"}},[s._v("#")]),s._v(" 1.4 服务配置")]),s._v(" "),a("p",[s._v("在离线环境下，使用本服务器的时间做为时间同步")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@node1 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vi /etc/ntp.conf")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#server 0.centos.pool.ntp.org iburst")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#server 1.centos.pool.ntp.org iburst")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#server 2.centos.pool.ntp.org iburst")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#server 3.centos.pool.ntp.org iburst")]),s._v("\nserver "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.127")]),s._v(".1.0 iburst  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加这一行，注销到上边的内容")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h3",{attrs:{id:"_2、ntp客户端同步配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、ntp客户端同步配置"}},[s._v("#")]),s._v(" 2、NTP客户端同步配置")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@node1 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vi /etc/ntp.conf")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# server 0.centos.pool.ntp.org iburst")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# server 1.centos.pool.ntp.org iburst")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# server 2.centos.pool.ntp.org iburst")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# server 3.centos.pool.ntp.org iburst")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果联不通外网，则把上面几行注释，然后添加下面两行，意思是设置成时间服务器是自己")]),s._v("\nserver "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.107")]),s._v(".250.114\nfudge "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.107")]),s._v(".250.114 stratum "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@node1 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# systemctl restart ntpd")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@node1 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ntpdate -u 10.107.250.114  # 同步服务器时间")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" Nov "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":22:30 ntpdate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1143")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": step "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),s._v(" server "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.107")]),s._v(".250.114 offset "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("59.282628")]),s._v(" sec\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@node1 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# date")]),s._v("\nThu Nov  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":22:33 CST "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[s._v("查看时间是否同步")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@CCRNode2 docker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ntpq -p")]),s._v("\n     remote           refid      st t when poll reach   delay   offset  jitter\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.107")]),s._v(".250.114  LOCAL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" u  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("178")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.758")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("59282.3")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.000")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);