'use strict';

var bbApp = bbApp || {};

(function () {
  var Modules = Backbone.Collection.extend({
    model: bbApp.Module
  });

  bbApp.modules = new Modules();
})();