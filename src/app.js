/*
 * smoothnlp-api app.
 *
 * Author: xinxiao@
 * Date: 2019-09-06
 */

const company = require('../lib/company');
const investment = require('../lib/investment');
const news = require('../lib/news');

const CONFIG = {
  isValid: () => {
    return !!CONFIG.OAuthToken;
  },
};

const configureAuthenticationHeader = (client, auth) => {
  client.apiClient.authentications = {
    type: 'oauth2',
    accessToken: CONFIG.OAuthToken,
  };
  return client;
};

const _configBuilder = {
  setAuth: (OAuthToken) => {
    CONFIG.OAuthToken = OAuthToken;
    return _configBuilder;
  },
};

const API = {
  config: _configBuilder,

  createServiceInstance: (type) => {
    if (!CONFIG.isValid()) {
      return undefined;
    }

    let client;
    switch (type) {
      case 'company':
        client = new company.CompanyApi();
        break;
      case 'investment':
        client = new investment.InvestmentApi();
        break;
      case 'news':
        client = new news.NewsApi();
        break;
      default:
        return undefined;
    }

    return configureAuthenticationHeader(client, CONFIG.AUTH);
  },
};

module.exports = API;
