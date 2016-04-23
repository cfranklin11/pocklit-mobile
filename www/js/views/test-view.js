'use strict';

var bbApp = bbApp || {};

// Create the landing view (no header or navbar)
(function($) {
  bbApp.TestView = Backbone.View.extend({
    attributes: {
      id: 'test-page'
    },
    events: {
      'click #test-speech-btn': 'testSpeech',
      'click #test-read-btn': 'testRead'
    },
    template: _.template($('#test-view').html()),
    initialize: function() {
      this.render();
    },
    testSpeech: function() {
      var SpeechRecognition, SpeechGrammarList, SpeechRecognitionEvent,
        grammar, recognition, speechRecognitionList, letter, text;

      // Prototype name depends on browser
      SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
      SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
      SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

      // Define possible words
      grammar = '#JSGF V1.0; grammar letters; public <letter> = A | B | C | ' +
        'D | E | F | F | H | I | J | K | L | M | N | O | P | Q | R | S | ' +
        'T | U | V | W | X | Y | Z;';
      recognition = new SpeechRecognition();
      speechRecognitionList = new SpeechGrammarList();
      speechRecognitionList.addFromString(grammar, 1);
      recognition.grammars = speechRecognitionList;
      //recognition.continuous = false;
      recognition.lang = 'en-US';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.start();
      console.log('Ready to receive a letter.');

      recognition.onresult = function(event) {
        letter = event.results[0][0].transcript.toLowerCase();
        console.log(event.results);

        text = this.model.attributes.text.toLowerCase();

        // Check speech result against the correct text
        if (letter === text) {
          alert('correct!');
        } else {
          alert('incorrect!');
        }
      }

      recognition.onspeechend = function() {
        recognition.stop();
      }

      recognition.onnomatch = function(event) {
        console.log('I didnt recognise that letter.');
      }

      recognition.onerror = function(event) {
        console.log('Error occurred in recognition: ' + event.error);
      }
    },
    testRead: function() {
      console.log('reading');
    },
    render: function() {
      var html = this.$el.html(this.template());
      $('body').append(html);

      return this;
    }
  });
})(jQuery);