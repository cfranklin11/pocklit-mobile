'use strict';

var bbApp = bbApp || {};

// Create the success view (no header or navbar)
(function($) {
  bbApp.SuccessView = Backbone.View.extend({
    attributes: {
      id: 'success-page'
    },
    template: _.template($('#success-view').html()),
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