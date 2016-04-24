'use strict';

var bbApp = bbApp || {};

// Create the landing view (no header or navbar)
(function($) {
  bbApp.StartView = Backbone.View.extend({
    attributes: {
      id: 'start-page'
    },
    template: _.template($('#start-view').html()),
    initialize: function() {
      this.render();
    },
    render: function() {
      var html = this.$el.html(this.template());
      $('body').append(html);

      return this;
    }
  });
})(jQuery);
