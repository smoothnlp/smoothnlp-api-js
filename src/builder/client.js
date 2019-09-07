/**
 * API Client builder
 *
 * Author: xinxiao@
 * Date: 2019-09-07
 */

'use strict';

const company = require('../../lib/company');
const investment = require('../../lib/investment');
const news = require('../../lib/news');

class ClientBuilder {
  setType(type) {
    this.type = type;
    return this;
  }

  setConfig(config) {
    this.config = config;
    return this;
  }

  configure(client) {
    if (this.config.Host) {
      client.apiClient.basePath = this.config.Host;
    }

    if (this.config.AuthToken) {
      client.apiClient.authentications = {
        type: 'oauth2',
        accessToken: this.config.AuthToken,
      };
    }

    return client;
  }

  build() {
    let client;
    switch (this.type) {
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
        throw new Error(`${this.type} is not a supported API service.`);
    }
    return this.configure(client);
  }
}

module.exports = ClientBuilder;
