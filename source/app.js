'use strict';

var Provider = require('./Provider');
var ServerRunner = require('./core/ServerRunner');


var provider = new Provider();

var serverRunner = new ServerRunner(provider);


function run (appdir) {

  //TODO for realsies config file
  provider.configure({
    dev: {
      resourceManager: {
        baseDir: appdir
      }
    }
  });

  serverRunner.run();
}

