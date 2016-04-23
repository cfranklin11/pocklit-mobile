'use strict';

var bbApp = bbApp || {};

(function() {

  bbApp.Module = Backbone.Model.extend({
    idAttribute: 'index',
    defaults: {
      index: 0,
      section: 'reading',
      lessons: [{
        reception: {
          text: 'text'
        },
        textInput: {
          options: [
            {
              name: 'option 1',
              correct: true
            },
            {
              name: 'option 2',
              correct: true
            },
            {
            name: 'option 3',
            correct: true
            },
            {
            name: 'option 4',
            correct: true
            }
          ]
        },
        voiceInput: {
          text: 'text'
        }
      }]
    }
  });
})();