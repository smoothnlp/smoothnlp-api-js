/*
 * smoothnlp-api app.
 *
 * Author: xinxiao@
 * Date: 2019-09-06
 */

const company = require('company');
const investment = require('investment');
const news = require('news');

const CONFIG = {};

const API = {
  createServiceInstance: (type) => {
    if (!CONFIG.AUTH) {
      return undefined;
    }

    let client;
    switch (type) {
      case 'company':
        client = new company.CompanyApi();
      case 'investment':
        client = new investment.InvestmentApi();
      case 'news':
        client = new news.NewsApi();
      default:
        return undefined;
    }

    client.apiClient.authentications = CONFIG.AUTH;
    return client;
  },

  config: {
    setAuth: (auth) => {
      CONFIG.AUTH = auth;
    },
  },
};

module.exports = API;
