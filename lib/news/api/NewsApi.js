/**
 * News
 * 资讯信息查询接口  * 默认域名： service-nl4at3t9-1259459016.ap-shanghai.apigateway.myqcloud.com/release * 自定义域名： data.service.news.smoothnlp.com/release 
 *
 * OpenAPI spec version: 2019-07-25 16:57:42
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.News) {
      root.News = {};
    }
    root.News.NewsApi = factory(root.News.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * News service.
   * @module api/NewsApi
   * @version 2019-07-25 16:57:42
   */

  /**
   * Constructs a new NewsApi. 
   * @alias module:api/NewsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getCompanyNews operation.
     * @callback module:api/NewsApi~getCompanyNewsCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 按企业名称模糊查询
     * 
     * @param {String} companyKw 公司简称
     * @param {Object} opts Optional parameters
     * @param {String} opts.endDate 结束日期 (default to 2020-12-30)
     * @param {Number} opts.limit 每页条数 (default to 10)
     * @param {Number} opts.offset 第几页 (default to 0)
     * @param {String} opts.startDate 开始日期 (default to 2019-06-01)
     * @param {module:api/NewsApi~getCompanyNewsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.getCompanyNews = function(companyKw, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'companyKw' is set
      if (companyKw === undefined || companyKw === null) {
        throw new Error("Missing the required parameter 'companyKw' when calling getCompanyNews");
      }


      var pathParams = {
      };
      var queryParams = {
        'company_kw': companyKw,
        'end_date': opts['endDate'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'start_date': opts['startDate'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['JSON'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/company_news', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));