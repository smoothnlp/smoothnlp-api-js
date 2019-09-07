# API网关SDK使用指南

- API 更新日期: 2019-07-25 16:57:42
- SDK 创建日期: 2019-09-07T13:55:03.935+08:00

News - JavaScript client for news

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
npm install news --save
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

Finally, switch to the directory you want to use your news from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('news')` in javascript files from the directory you ran the last 
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
var News = require('news');

var api = new News.NewsApi()

var companyKw = "腾讯"; // {String} 公司简称

var opts = { 
  'endDate': "2020-12-30", // {String} 结束日期
  'limit': 10, // {Number} 每页条数
  'offset': 0, // {Number} 第几页
  'startDate': "2019-06-01" // {String} 开始日期
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getCompanyNews(companyKw, opts, callback);

```


## 三、本SDK的API信息
资讯信息查询接口

* 默认域名：
service-nl4at3t9-1259459016.ap-shanghai.apigateway.myqcloud.com/release
* 自定义域名：
data.service.news.smoothnlp.com/release

All URIs are relative to *http://service-nl4at3t9-1259459016.ap-shanghai.apigateway.myqcloud.com/release*

Class | API名称 | HTTP 请求方法与路径 | 描述
------------ | ------------- | ------------- | -------------
*News.NewsApi* | **getCompanyNews** | **GET** /company_news | 


**更多详细信息请查看docs下的API文档**