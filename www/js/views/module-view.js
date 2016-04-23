'use strict';

var bbApp = bbApp || {};

(function($) {
  bbApp.ModuleView = Backbone.View.extend({
    template: _.template(
      '<a href="#/sections/<%= section %>/modules/<%= name %>/0/reception"><p><%= name %></p></a>'
    ),
    initialize: function () {
      this.render()
    },
    render: function () {
      var attributes = this.model.toJSON();
      this.$el.html( this.template( attributes ));

      return this;
    }

  });
})(jQuery);
