'use strict';

var bbApp = bbApp || {};

// Create the reception view (no header or navbar)
(function($) {
  bbApp.ReceptionView = Backbone.View.extend({
    attributes: {
      id: 'reception-page'
    },
    template: _.template($('#reception-view').html()),
    initialize: function() {
      this.model.on('change', this.render, this);
      this.render();
    },
    render: function() {
      var html = this.$el.html(this.template());
      $('body').append(html);

      return this;
    }
  });
})(jQuery);