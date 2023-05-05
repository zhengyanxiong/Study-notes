(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{501:function(a,s,n){"use strict";n.r(s);var t=n(4),e=Object(t.a)({},(function(){var a=this,s=a.$createElement,n=a._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h2",{attrs:{id:"centos7安装java环境"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#centos7安装java环境"}},[a._v("#")]),a._v(" Centos7安装JAVA环境")]),a._v(" "),n("p",[a._v("JDK "),n("a",{attrs:{href:"http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("下载"),n("OutboundLink")],1)]),a._v(" "),n("h3",{attrs:{id:"_1、卸载系统自带的openjdk"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、卸载系统自带的openjdk"}},[a._v("#")]),a._v(" 1、卸载系统自带的OpenJDK")]),a._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 1、查看系统自带的OpenJDK版本")]),a._v("\n$ java -version\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 2、 查找系统JDK文件")]),a._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" -qa "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" java\n\n\nnuxwdog-client-java-1.0.3-8.el7.x86_64\njavamail-1.4.6-8.el7.noarch\njava-1.8.0-openjdk-headless-1.8.0.232.b09-0.el7_7.x86_64\njava-1.8.0-openjdk-1.8.0.232.b09-0.el7_7.x86_64\npython-javapackages-3.4.1-11.el7.noarch\npki-base-java-10.5.16-5.el7_7.noarch\ntzdata-java-2019c-1.el7.noarch\njavapackages-tools-3.4.1-11.el7.noarch\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 3、 删除上述文件中的")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# java-1.8.0-openjdk-headless-1.8.0.232.b09-0.el7_7.x86_64")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# java-1.8.0-openjdk-1.8.0.232.b09-0.el7_7.x86_64")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# nuxwdog-client-java-1.0.3-8.el7.x86_64")]),a._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" -e --nodeps java-1.8.0-openjdk-headless-1.8.0.232.b09-0.el7_7.x86_64\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" -e --nodeps java-1.8.0-openjdk-1.8.0.232.b09-0.el7_7.x86_64\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" -e --nodeps nuxwdog-client-java-1.0.3-8.el7.x86_64\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 类似删除上面的所有文件")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 4、创建 /usr/java 目录，将下载好的tar包放到该目录下,然后在 /usr/java/ 目录下解压，完成后删除tar包")]),a._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" -p /usr/java/\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" /home/admin/javaJDK/jdk-8u231-linux-x64.tar.gz /usr/java/\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" -zxvf jdk-8u231-linux-x64.tar.gz\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" -rf jdk-8u231-linux-x64.tar.gz\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br"),n("span",{staticClass:"line-number"},[a._v("14")]),n("br"),n("span",{staticClass:"line-number"},[a._v("15")]),n("br"),n("span",{staticClass:"line-number"},[a._v("16")]),n("br"),n("span",{staticClass:"line-number"},[a._v("17")]),n("br"),n("span",{staticClass:"line-number"},[a._v("18")]),n("br"),n("span",{staticClass:"line-number"},[a._v("19")]),n("br"),n("span",{staticClass:"line-number"},[a._v("20")]),n("br"),n("span",{staticClass:"line-number"},[a._v("21")]),n("br"),n("span",{staticClass:"line-number"},[a._v("22")]),n("br"),n("span",{staticClass:"line-number"},[a._v("23")]),n("br"),n("span",{staticClass:"line-number"},[a._v("24")]),n("br"),n("span",{staticClass:"line-number"},[a._v("25")]),n("br"),n("span",{staticClass:"line-number"},[a._v("26")]),n("br"),n("span",{staticClass:"line-number"},[a._v("27")]),n("br"),n("span",{staticClass:"line-number"},[a._v("28")]),n("br")])]),n("h3",{attrs:{id:"_2、配置jdk环境变量"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、配置jdk环境变量"}},[a._v("#")]),a._v(" 2、配置JDK环境变量")]),a._v(" "),n("p",[a._v("编辑 "),n("code",[a._v("/etc/profile")]),a._v(" 文件，添加以下内容")]),a._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# java home")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("JAVA_HOME")]),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/usr/java/jdk1.8.0_231\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CLASSPATH")]),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(".:"),n("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${JAVA_HOME}")]),a._v("/jre/lib/rt.jar:"),n("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${JAVA_HOME}")]),a._v("/lib/dt.jar:"),n("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${JAVA_HOME}")]),a._v("/lib/tools.jar\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[n("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("PATH")])]),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),n("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$PATH")]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),n("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${JAVA_HOME}")]),a._v("/bin\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br")])]),n("h3",{attrs:{id:"_3、让配置生效"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3、让配置生效"}},[a._v("#")]),a._v(" 3、让配置生效")]),a._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[a._v("$ "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("source")]),a._v(" /etc/profile\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 检查是否配置成功")]),a._v("\n$ java -version\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);