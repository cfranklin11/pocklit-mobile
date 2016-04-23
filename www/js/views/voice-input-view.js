'use strict';

var bbApp = bbApp || {};

// Create the voice input view (no header or navbar)
(function($) {
  bbApp.VoiceInputView = Backbone.View.extend({
    attributes: {
      id: 'voice-input-page'
    },
    template: _.template($('#voice-input-view').html()),
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