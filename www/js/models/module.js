'use strict';

var bbApp = bbApp || {};

( function () {

  bbApp.Module = Backbone.Model.extend({
    defaults: {
      name: 'module 1',
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
        audioInput: {
          audio: 'audio-file',
          text: 'text'
        }
      }]
    }
  });
})();