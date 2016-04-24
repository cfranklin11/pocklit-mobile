'use strict';

var bbApp = bbApp || {};

(function() {

  bbApp.Module = Backbone.Model.extend({
    idAttribute: 'index',
    defaults: {
      index: 0,
      name:'Tales',
      section: 'reading',
      lessons: [
        {
        reception: {
          text: 'text'
        },
        textInput: {
          options: [
            {
              text: 'option 1',
              correct: true
            },
            {
              text: 'option 2',
              correct: true
            },
            {
            text: 'option 3',
            correct: true
            },
            {
            text: 'option 4',
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
