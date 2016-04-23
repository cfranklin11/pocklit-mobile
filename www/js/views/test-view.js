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
      'click #test-read-btn': 'testRead',
      'click [data-option]': 'selectOption'
    },
    template: _.template($('#test-view').html()),
    tries: 0,
    initialize: function() {
      this.model.on('change', this.render, this);
      this.render();
    },
    testSpeech: function() {
      var self, SpeechRecognition, SpeechGrammarList, SpeechRecognitionEvent,
        grammar, recognition, speechRecognitionList, alternatives, altLength,
        text, correct, i, letter;

      self = this;

      // Prototype name depends on browser
      SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
      SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
      SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

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
      recognition.maxAlternatives = 3;

      recognition.start();
      console.log('Ready to receive a letter.');

      recognition.onresult = function(event) {
        self.tries++;

        alternatives = event.results[0];
        altLength = alternatives.length;
        text = self.model.attributes.voiceInput.text.toLowerCase();
        correct = false;

        // Loop through all alternatives for possible match
        for (i = 0; i < altLength; i++) {
          letter = alternatives[i].transcript.toLowerCase();

          // Check speech result against the correct text
          if (letter === text) {
            correct = true;
            alert('correct!');
            break;
          }
        }

        if (!correct) {
          self.tries < 4 ? alert('incorrect!') : alert('just give up');
        }

        console.log(event.results);
      };

      recognition.onspeechend = function() {
        recognition.stop();
        console.log('all done');
      };

      recognition.onnomatch = function() {
        console.log('I didnt recognise that letter.');
      };

      recognition.onerror = function(event) {
        console.log('Error occurred in recognition: ' + event.error);
      };
    },
    testRead: function() {
      var synth, options, optionsLength, i, inputTxt, voices, pitch, rate, utterThis, selectedOption;

      options = this.model.attributes.textInput.options;
      optionsLength = options.length;

      for (i = 0; i < optionsLength; i++) {
        if (options[i].correct) {
          inputTxt = options[i].text;
          break;
        }
      }

      synth = window.speechSynthesis;
      voices = [];

      // getVoices() loads array of voice options asynchronously
      function populateVoiceList() {
        voices = synth.getVoices();
      }

      populateVoiceList();
      if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = populateVoiceList;
      }

      pitch = 1;
      rate = 0.75;
      utterThis = new SpeechSynthesisUtterance(inputTxt);

      // getVoices() is asynchronoush; _.delay give voices time to load,
      // so we can choose one.
      _.delay(function() {
        selectedOption = 'Google US English';
        for(i = 0; i < voices.length ; i++) {
          if(voices[i].name === selectedOption) {
            utterThis.voice = voices[i];
            break;
          }
        }

        utterThis.pitch = pitch;
        utterThis.rate = rate;

        synth.speak(utterThis);
      }, 50);
    },
    selectOption: function(event) {
      var element, answerIndex, answer, isAnswerCorrect;

      element = event.currentTarget;
      answerIndex = $(element).attr('data-option');
      answer = $(element).text();
      isAnswerCorrect = this.model.attributes.textInput.options[answerIndex].correct;

      isAnswerCorrect ? alert('correct!') : alert('incorrect!');
    },
    render: function() {
      this.tries = 0;
      var attributes = this.model.toJSON();
      var html = this.$el.html(this.template(attributes));
      $('body').append(html);

      return this;
    }
  });
})(jQuery);