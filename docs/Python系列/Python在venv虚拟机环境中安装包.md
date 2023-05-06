---
title: pip安装报错ProxyError
date: 2023-05-06
tags:
 - Python
categories:
 - Python系列
---

如果在`venv`虚拟环境中使用`pip`安装包时出现`ProxyError('Cannot connect to proxy.')`错误，可能是由于代理服务器设置不正确导致的。

为了解决这个问题，您可以尝试以下方法：

1. 检查代理服务器设置是否正确。您可以在命令行中使用`set`命令查看当前的代理服务器设置，例如：

```
set http_proxy=http://your.proxy.server:port
set https_proxy=https://your.proxy.server:port
```

请将上述命令中的`your.proxy.server`和`port`替换为您的代理服务器地址和端口号。

2. 如果代理服务器设置正确，但仍然无法连接，请尝试使用`--proxy`选项指定代理服务器地址和端口号，例如：

```
pip install some-package --proxy=http://your.proxy.server:port
```

3. 如果您无法访问代理服务器，可以尝试使用不需要代理服务器的网络环境，例如使用无线网络或者其他网络环境。

4. 如果以上方法均无法解决问题，可以尝试使用`--trusted-host`选项来解决SSL证书验证问题，例如：

```
pip install some-package --trusted-host=pypi.org --trusted-host=files.pythonhosted.org
```

以上命令将允许`pip`忽略SSL证书验证，但这可能会带来一定的安全风险，请谨慎使用。