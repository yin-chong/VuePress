---
title: 'Mock'
date: 2023-07-26 12:44:15
tags:
- '架构'
- 'mock'
- '前端'
categories:
- '前端'
---

::: danger 

axios + mock

:::

<!-- more -->



### 我为什么需要mock

前后端开发时，经常碰到需要等后端接口的情况。在没有使用mock的时候，前端需要自己定义假数据。等数据联调的时候，再删除假数据，这种方式局限性很大。
1. 对代码改动较大，这种显然是不合理的。使用Mock，只需要控制mock开关就行
2. 增删改这类接口，使用本地JSON的方式实现较为繁琐

### 为什么选择MockJs

- 用法简单
- 通过随机数据，模拟各种场景, 增加单元测试的真实性
- 开发无侵入, 不需要修改既有代码，就可以拦截请求，返回模拟的响应数据
- 数据类型丰富, 支持生成随机的文本、数字、布尔值、日期、邮箱、链接、图片、颜色等
- 方便扩展, 支持支持扩展更多数据类型，支持自定义函数和正则。

### MockJs安装与基本用法

` npm install mockjs  `

以获取用户基础信息接口`user/info`为例，创建Mock文件夹，文件夹下新建index.js
```
import Mock from "mockjs";

/**
 * Mock拦截接口，返回自定义数据
 * @param {String} url - 非必填 需要拦截的接口路径
 * @param {String} template - 记录数据模板。当拦截到匹配url的请求时，将根据数据模板 template 生成模拟数据，并作为响应数据返回
 *
 */
Mock.mock("http://localhost:9101/api/user/info", {
  code: 200,
  data: {
    name: "张三",
    age: 11,
  },
});
```
这个时候请求接口在控制台可以看到mock返回的数据。
Mock.mock详细语法可以看一下官网。<https://github.com/nuysoft/Mock/wiki/Mock.mock()>

### Mock的封装

封装之前需要确认的是，我是在什么场景下使用Mock，最终想要的是什么样的结果
- 开发环境下，前后端数据接口联调前。后端返回数据结构和接口路径，前端本地Mock，实现基本的增删改查
- 测试环境打包，可能需要开启Mock。例如开发初期，前后端数据还未联调，客户查看开发进度，这个时候页面展示Mock的数据
- 生产环境打包，自动关闭Mock
- 全局控制Mock开启关闭，数据联调时便捷切换
- 接口可独立控制Mock开关，默认情况下应是关闭状态。部分场景下，例如App 微信小程序嵌入H5，本地调试时需要跳过鉴权接口

1. Mock环境配置
```
const env = process.env.NODE_ENV;
if(env != 'production') require('./mock/index'); // 只在非生产环境下使用Mock
```
2. 接口与Mock配置
```
// 接口配置
{
  name: "getUserInfo",
  url: "user/info",
  method: ["get"],
  mock: true, // 非必填接口Mock开关
},
```
```
// Mock配置 变量名与apiList的name保持一致
const getUserInfo = {
  code: 200,
  data: {
    name: "张三",
    age: 11,
  }
}
```
3. Mock方法拼接
```
const isOpenMock = true; // 全局Mock开关 true开启
apiList.map(item => {
  if(!isOpenMock) return void  666;
  if( !(Object.prototype.hasOwnProperty.call(item, 'mock') && item.mock) ) return void 666;
  const env = process.env.NODE_ENV;
  Mock.mock(`${baseUrl[env]}${item.url}`, mockConfig[item.name])
})
```









