'use strict';

var bbApp = bbApp || {};

( function () {

  bbApp.Module = Backbone.Model.extend({
    idAttribute: 'index'
    defaults: {
      index: 0,
      section: 'reading',
      lessons: [{
        reception: {
          audio: 'audio-file',
          text: 'text'
        },
        textInput: {
          audio: 'audio-file',
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
          audio: 'audio-file',
          text: 'text'
        }
      }]
    }
  });
})();