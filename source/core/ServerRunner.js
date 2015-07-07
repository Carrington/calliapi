'use strict';

var ServerRunner = function (provider) {
  var self = this;

  self._config = provider.config;

  self._restify = provider.restify;

  self._server = self._restify.createServer({
    name: self._config.name
  });

  self._logger = provider.logger;
};

ServerRunner.prototype.run = function() {
  var self = this;

  self._server.use(self._restify.queryParser());
  self._server.use(self._restify.bodyParser());
  self._server.use(self._restify.CORS());

  self._server.listen(self._config.port, self._config.ip, function () {
    self._logger.log('INFO', '%s is listening at %s', self._server.name, self._server.url);
  });
};
