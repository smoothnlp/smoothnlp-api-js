/*
 * smoothnlp-api app.
 *
 * Author: xinxiao@
 * Date: 2019-09-06
 */

'use strict';

const ConfigBuilder = require('./builder/config');
const ClientBuilder = require('./builder/client');

const configBuilder = new ConfigBuilder();
const clientBuilder = new ClientBuilder();

const API = {
  config: configBuilder,

  createServiceInstance: (type) => {
    return clientBuilder
        .setType(type)
        .setConfig(configBuilder.build())
        .build();
  },
};

module.exports = API;
