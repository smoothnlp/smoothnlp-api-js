# API网关SDK使用指南

- API 更新日期: 2019-08-27 14:25:56
- SDK 创建日期: 2019-09-07T12:01:57.433+08:00

Investment - JavaScript client for investment

##目录
* 一、SDK简介
* 二、SDK安装
* 三、本SDK的API信息

## 一、SDK简介
本SDK是API网关根据您自定义的API接口自动生成的 Javascript 调用代码，通过使用SDK，您可以更方便地访问腾讯云提供的API网关服务。下面向您介绍如何使用API网关的SDK。

主要文件的层级结构如下：

* src/ 目录
  * api/ 目录   `包含用户自定义的所有API接口`
  * ApiClient.js
  * index.js
* docs/ 目录      `存放API接口文档`
* README.md       `本SDK使用指南`
* swagger.json    `包含所有API定义的swagger文件，您可以用此文件在`[这里](https://editor.swagger.io//?_ga=2.13932151.1152137434.1516190014-1544097500.1514542032#/)`调试您的API`



## 二、SDK安装

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install investment --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your investment from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('investment')` in javascript files from the directory you ran the last 
command above from.

#### git

If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var Investment = require('investment');

var api = new Investment.InvestmentApi()

var opts = { 
  'cate1': "", // {String} 行业一级类目
  'cate2': "", // {String} 行业二级类目
  'companyName': "", // {String} 企业工商名称
  'productName': "", // {String} 项目名称
  'year': "" // {String} 融资年份
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getInvestment(opts, callback);

```


## 三、本SDK的API信息
投资事件

* 默认域名：
service-m5j3awiv-1259459016.ap-shanghai.apigateway.myqcloud.com/release
* 自定义域名：
data.service.invest.smoothnlp.com/

All URIs are relative to *http://service-m5j3awiv-1259459016.ap-shanghai.apigateway.myqcloud.com/release*

Class | API名称 | HTTP 请求方法与路径 | 描述
------------ | ------------- | ------------- | -------------
*Investment.InvestmentApi* | **getInvestment** | **GET** /investment | 投资事件查询, 通用接口. 


**更多详细信息请查看docs下的API文档**