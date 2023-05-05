(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{514:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("原子性问题的源头是线程切换，如果禁用线程切换，就可以解决原子性问题，这个方案在单核CPU时代是可行的，但是不适用于多核场景。")]),s._v(" "),a("p",[a("strong",[s._v("同一时刻只有一个线程执行")]),s._v("，这个条件我们称之为"),a("strong",[s._v("互斥")]),s._v("。")]),s._v(" "),a("p",[a("strong",[s._v("synchronized")])]),s._v(" "),a("ul",[a("li",[s._v("修饰非静态方法，锁当前对象this")]),s._v(" "),a("li",[s._v("修饰静态方法，锁当前class")]),s._v(" "),a("li",[s._v("修改代码快，锁定义的对象")])]),s._v(" "),a("p",[a("strong",[s._v("锁和受保护资源的关系")])]),s._v(" "),a("p",[a("strong",[s._v("受保护资源和锁之间的关联关系是N:1的关系")]),s._v("。")]),s._v(" "),a("p",[s._v("必须深入分析锁定的对象和受保护资源的关系，综合考虑保护资源的访问路径，多方面考量才能用好互斥锁。")]),s._v(" "),a("p",[s._v("在保护多个资源时，首先需要区分资源之间是否存在关联关系")]),s._v(" "),a("h4",{attrs:{id:"保护没有关联关系的多个资源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#保护没有关联关系的多个资源"}},[s._v("#")]),s._v(" 保护没有关联关系的多个资源")]),s._v(" "),a("p",[s._v("用不同的锁对受保护的资源进行细化管理，这样能够提升程序性能。这种锁也叫，"),a("strong",[s._v("细粒度锁")]),s._v("。")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[s._v("注意：细粒度的锁可能会导致死锁。")])]),s._v(" "),a("h4",{attrs:{id:"保护有关联关系的多个资源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#保护有关联关系的多个资源"}},[s._v("#")]),s._v(" 保护有关联关系的多个资源")]),s._v(" "),a("p",[s._v("使用共享的锁去实现。即这个锁的粒度更大，能够覆盖所有相关的资源。")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[s._v("锁的粒度取决于资源之间的关系。")])]),s._v(" "),a("p",[s._v("比如转账的例子：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Account")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" balance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 转账")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("transfer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Account")]),s._v(" target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" amt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Account.class是Java虚拟机加载Account类时创建的")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("synchronized")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Account")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("balance "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" amt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("balance "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-=")]),s._v(" amt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("balance "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" amt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("下图展示了共享锁Accout.class保护不同对象的临界区。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/zhengyanxiong/picture-bed/raw/master/img/image-20230504230903700.png",alt:"image-20230504230903700"}})]),s._v(" "),a("p",[s._v("::: warn\n这里用Account.class作为互斥锁，虽然解决了并发问题，但是所有的转账操作都是串行的。性能差。\n:::")]),s._v(" "),a("p",[s._v("所以提高程序性能还是需要细粒度的锁，能够提高程序的并行度，下图展示了细粒度锁的逻辑图。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/zhengyanxiong/picture-bed/raw/master/img/image-20230504232616527.png",alt:"image-20230504232616527"}})]),s._v(" "),a("p",[s._v("不过这种情况会出现死锁动作。")]),s._v(" "),a("h4",{attrs:{id:"如何预防死锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何预防死锁"}},[s._v("#")]),s._v(" 如何预防死锁")]),s._v(" "),a("p",[s._v("只要同时满足这四个条件，才会出现死锁：")]),s._v(" "),a("ul",[a("li",[s._v("互斥，共享资源X和Y只能被一个线程占用")]),s._v(" "),a("li",[s._v("占有且等待，线程T1以及获取了共享资源X，在等待共享资源Y的时候，不释放共享资源X")]),s._v(" "),a("li",[s._v("不可抢占，其他线程不能抢占T1占有的资源")]),s._v(" "),a("li",[s._v("循环等待，线程T1等待线程T2占用的资源，线程T2等待线程T1占有的资源")])]),s._v(" "),a("p",[s._v("要避免死锁，只需要破坏这四个条件中的一个，就可以。其中互斥这个条件没法破坏，加锁的目的就是互斥。")]),s._v(" "),a("p",[a("strong",[s._v("破坏占有且等待")])]),s._v(" "),a("ol",[a("li",[s._v("一次性申请所有的资源：当进程或线程需要多个资源时，可以在开始时一次性申请所有的资源，而不是逐个申请。如果无法一次性申请所有资源，则释放已经占用的资源，等待所有资源都可用时再重新申请。这样可以破坏占有且等待条件，从而避免死锁的发生。")]),s._v(" "),a("li",[s._v("先释放已经占用的资源再申请新的资源：当进程或线程需要占用新的资源时，可以先释放已经占用的资源，然后再申请新的资源。如果无法获得新的资源，则可以再次申请已经释放的资源。这样可以破坏占有且等待条件，从而避免死锁的发生。")])]),s._v(" "),a("p",[a("strong",[s._v("破坏不可抢占")])]),s._v(" "),a("ol",[a("li",[s._v("超时机制：如果占用资源的线程申请不到其他资源，就释放自己占有的资源。")]),s._v(" "),a("li",[s._v("优先级倒置：优先级倒置是指当低优先级的进程占用了高优先级的资源时，高优先级的进程可以抢占低优先级的资源，以确保高优先级进程的执行。这样可以破坏不可抢占条件，从而避免死锁的发生。")]),s._v(" "),a("li",[s._v("可抢占资源：可抢占资源是指某些资源在被占用时，可以被其他进程或线程抢占。这样，当一个进程或线程等待某个资源时，其他进程或线程可以强制其释放已占用的资源，从而避免死锁的发生。")])]),s._v(" "),a("p",[a("strong",[s._v("破坏循环等待")])]),s._v(" "),a("ol",[a("li",[s._v("资源有序分配：资源有序分配可以破坏循环等待条件。具体方法是，为每个资源分配一个序号，并规定进程只能按照序号递增的顺序请求资源。这样，当多个进程都需要多个资源时，它们必须按照相同的顺序请求资源，从而避免了循环等待的情况。")]),s._v(" "),a("li",[s._v("资源剥夺：资源剥夺是指操作系统在必要时可以剥夺一个进程已经占用的资源，将其分配给其他进程使用。当一个进程请求一个资源时，如果该资源已经被其他进程占用，那么操作系统可以将该资源从该进程中剥夺，并分配给当前请求该资源的进程使用。这样可以破坏循环等待条件，从而避免死锁的发生。")]),s._v(" "),a("li",[s._v("按顺序申请资源：进程在申请资源时，按照某种固定的顺序来申请资源，而不是一次性申请所有的资源。当一个进程申请不到某个资源时，它可以释放已经占用的资源，等待其他进程释放它所需要的资源后再继续申请。这样可以避免循环等待条件的发生，从而避免死锁的发生。")])])])}),[],!1,null,null,null);t.default=e.exports}}]);