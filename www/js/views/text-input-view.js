'use strict';

var bbApp = bbApp || {};

// Create the text input view (no header or navbar)
(function($) {
  bbApp.TextInputView = Backbone.View.extend({
    attributes: {
      id: 'text-input-page'
    },
    template: _.template($('#text-input-view').html()),
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