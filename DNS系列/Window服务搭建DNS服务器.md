

## Windows服务器搭建DNS服务器

> 参考地址:[https://www.jianshu.com/p/5038a95456b3](https://www.jianshu.com/p/5038a95456b3)

----

### 1、配置DNS服务器

1. 进入Window server 系统，打开**服务器管理器**，在**仪表板**里点击**添加角色和功能**。
 ![img](img/51e023d238429d3e0774d0ec8c43d5c2.png)

2. 进入**“添加角色和功能向导”**，检查到静态IP地址已配置完成，管理员帐户使用的是强密码和最新的安全更新在实验中可以忽略，点击**“下一步”**。
 ![img](img/9be1fe9a3f2037b77ca16bedb3a2eafe.png)

3. 我们在本地运行的物理计算机上安装，故安装类型选择第一项**“基于角色或基于功能的安装”**。
 ![img](img/7a01d1299fe5d476a7072d57bd5903c7.png)

4. 服务器选择服务器池中的本地服务器**“dc”**。
 ![img](img/f58d41cac6ad31e80a167ee5c3ceb858.png)

5. 服务器角色中勾选上**“DNS服务器”**，同时也在该服务器上安装DNS服务器管理工具。
 ![img](img/384d1aa909990bca235168b091c2741d.png)

​      ![img](img/53c86521bda5317fc673d6a69335befc.png)

​     ![img](img/f468c27833959c74813b72cffe48a6f6.png)

6. DNS服务器的安装不需要添加其他功能，功能安装页面直接点击**“下一步”**。
 ![img](img/8b52f6f0346ad61e472ea4e256fff6a4.png)

7. 注意事项中说明当DNS服务器和Active Directory域服务器集成时，DNS服务器会自动复制DNS数据及其他目录服务数据；AD域服务器上必须安装DNS服务器。点击**“下一步”**。
 ![img](img/a9d47bda7cef56a03a0d1e58478bb35c.png)

8. 确认选择无误，点击**“安装”**按钮开始安装，安装完毕关闭添加角色和功能向导。
 ![img](img/caf85b166a634f1e901e2272364b9a28.png)

**到这一步我们就将DNS服务器搭建好了，接下来我们需要配置DNS服务。**

### 2、配置DNS域名解析

1. 从**工具**打开**DNS**
 ![img](img/4030300-26d249455f344d6f.png)

2. 在**正向查找区域**点击鼠标右键**新建区域**
 ![img](img/4030300-e59c81da191ea3e1.png)

3. 根据向导完成，默认直到**区域名称**填写需要部署的域名,然后默认一直默认执行。

 ![img](img/4030300-109792c51d2e592a.png)

注：这里的是填写域名的。（以www.qq.com为例，qq.com才是域名）

 ![img](img/4030300-25f4fb7b5746db94.png)

 ![img](img/4030300-95340791d72b2e67.png)

4. 在**正向查找区域**下点击我们刚才新建的**chenyuan.com**（这里新建的因人而异)
​ ![img](img/4030300-49562584cca2d587.png)
​
​ ![img](img/4030300-9a1c517324c8f9ba.png)
   
5. 在**反向查找区域**点击**新建区域**

 ![img](img/4030300-27f99943f56aa414.png)

   ![img](img/4030300-d9b2452d2105687d.png)

  ![img](img/4030300-8a4aaaf02042f3e1.png)

   ![img](img/4030300-c316782777f82479.png)

   ![img](img/4030300-b3244d39a3ff7e39.png)

  ![img](img/4030300-496af864ee926b9d.png)

   ![img](img/4030300-9c59abd81eb0cf47.png)

6. 在反向查找区域下点击我们新建的IP段那里，右键**新建指针**

 ![img](img/4030300-828c51176dffe001.png)

 ![img](img/4030300-96ca7998ad218916.png)

### 3、测试

1. 点击我们的DNS服务器，启动nslookup

 ![img](img/4030300-376dfb7705cdf970.png)

2、依次输入我们实验域名www.chenyuan.com和ip地址

 ![img](img/4030300-3065b17f5c1e4642.png)

3、测试成功,DNS搭建完成





