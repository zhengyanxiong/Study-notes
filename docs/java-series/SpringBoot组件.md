---
title: Spring Boot 组件
date: 2020-11-10
---

https://www.cnblogs.com/itplay/p/10744616.html

> SpringBoot 自动配置主要通过 `@EnableAutoConfiguration`, `@Conditional`, `@EnableConfigurationProperties` 或者 `@ConfigurationProperties` 等几个注解来进行自动配置完成的。

> `@EnableAutoConfiguration` 开启自动配置，主要作用就是调用 `Spring-Core` 包里的 `loadFactoryNames()`，将 `autoconfig` 包里的已经写好的自动配置加载进来。

> `@Conditional` 条件注解，通过判断类路径下有没有相应配置的 `jar` 包来确定是否加载和自动配置这个类。

> `@EnableConfigurationProperties` 的作用就是，给自动配置提供具体的配置参数，只需要写在 `application.properties` 中，就可以通过映射写入配置类的 `POJO` 属性中。

1. auto-configuration
2. starter
3. springboot cli
4. actuator