'use strict';

var lodash = require('lodash');
var restify = require('restify');
var ResourceManager = require('ResourceManager');
var util = require('util');
var curry = require('curry');

var Provider = function () {
  var self = this;

};

//TODO abstract config
Provider.prototype.configure = function(config) {

  var self = this;

  self._config = lodash.merge({
    dev: {
        restify: {
              ip: '127.0.0.1',
              port: '8000',
              name: 'calliapi-dev'
            },
        resourceManager: {
          apiBase: '/',
          baseDir: '/var/www/calliope/calliapi/'
        }
    },
    stage: {
        restify: {
              ip: '127.0.0.1',
              port: '8000',
              name: 'calliapi-stage'
            },
        resourceManager: {
          apiBase: '/',
          baseDir: '/var/www/calliope/calliapi'
        }
    },
    prod: {
        restify: {
              ip: '127.0.0.1',
              port: '8000',
              name: 'calliapi-prod'
            },
        resourceManager: {
          apiBase: '/',
          baseDir: '/var/www/calliope/calliapi'
        }
    }
  }, config);

  self.resourceManager = new ResourceManager(self.config);

  self.restify = restify;

  //TODO for realsies logger
  self.logger = {
    log: function (level, string) {
      var self = this;
      var stringArgs = Array.prototype.slice.call(arguments, 2);

      //TODO how to get variables into util.format?
      console.log(util.form(string
    }
  }
};
