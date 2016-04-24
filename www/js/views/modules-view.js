'use strict';

var bbApp = bbApp || {};

// Create the modules view (no header or navbar)
(function($) {
  bbApp.ModulesView = Backbone.View.extend({
    attributes: {
      id: 'modules-page'
    },

    template: _.template($('#modules-view').html()),

    initialize: function(options) {
      this.section = options.section;
      this.collection.on('add', this.addOne, this);
      this.collection.on('reset', this.render, this);
      this.render();
    },
    render: function() {
      // $('.myelement').html( myHtmlStr ).enhanceWithin();
      var html = this.$el.html(this.template()).enhanceWithin();
      $('body').append(html);

      var newString = this.$el.find('img').attr('src').replace('reading', this.section);
      this.$el.find('img').attr('src', newString);


      // Loop through account models within accounts collection, adding
      // rows to the accounts table
      this.collection.each(this.addOne, this);

      return this;
    },
    addOne: function(module) {
      var moduleView = new bbApp.ModuleView({model: module});
      this.$el.find("ul").append(moduleView.render().el);
    }
  });
})(jQuery);
