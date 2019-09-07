/**
 * Client Config builder
 *
 * Author: xinxiao@
 * Date: 2019-09-07
 */

'use strict';

class ConfigBuilder {
  constructor() {
    this.source = {};
  }

  build() {
    return this.source;
  }

  clean() {
    this.source = {};
    return this;
  }

  set(key, value) {
    this.source[key] = value;
    return this;
  }

  setAuthToken(token) {
    return this.set('AuthToken', token);
  }

  setHost(host) {
    return this.set('Host', host);
  }
}

module.exports = ConfigBuilder;
