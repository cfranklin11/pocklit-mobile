'use strict';

var bbApp = bbApp || {};

// Create the landing view (no header or navbar)
(function($) {
  bbApp.LandingView = Backbone.View.extend({
    attributes: {
      id: 'landing-page'
    },
    template: _.template($('#landing-view').html()),
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
