'use strict';

var bbApp = bbApp || {};

// Create the sections view (no header or navbar)
(function($) {
  bbApp.SectionsView = Backbone.View.extend({
    attributes: {
      id: 'sections-page'
    },
    template: _.template($('#sections-view').html()),
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