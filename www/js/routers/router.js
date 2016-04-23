// TODO
//  * Set up timer and API call to mimic real-time data

'use strict';

var bbApp = bbApp || {};

( function ( $ ) {
  var AppRouter = Backbone.Router.extend({
    routes: {
      '': 'getLanding',
      'sections': 'getSectionSelect',
      'sections/:section/modules': 'getModuleSelect',
      'sections/:section/modules/:module/:lesson/:exercise': 'getExercise',
    },
    initialize: function() {

      // Handle back button throughout the application
      $( '.back' ).on( 'click', function() {
        window.history.back();
        return false;
      });

      this.firstPage = true;
    },
    start: function () {
      Backbone.history.start();
    },
    getLanding: function () {

      // If page doesn't exist, create the view as JQM page
      if (!this.landingView ) {
        this.landingView = new bbApp.LandingView();
        $( '#landing-page' ).attr( 'data-role', 'page' );
      }

      // Load JQM page
      $( 'body' ).pagecontainer( 'change', '#landing-page', {
        changeHash: false
      });
    },
    getSectionSelect: function() {

      // If page doesn't exist, create the view as JQM page
      if (!this.sectionsView ) {
        this.sectionsView = new bbApp.SectionsView();
        $( '#sections-page' ).attr( 'data-role', 'page' );
      }

      // Load JQM page
      $( 'body' ).pagecontainer( 'change', '#sections-page', {
        changeHash: false
      });
    },
    getModuleSelect: function(section) {
      var testModules;

      // Actual API response will only send modules from the current section
      testModules = [
        {
          index: 0,
          section: section,
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
        },
        {
          index: 1,
          section: section,
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
        },
        {
          index: 2,
          section: section,
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
      ];

      bbApp.modules.reset(testModules);

      // If page doesn't exist, create the view as JQM page
      if (!this.modulesView ) {
        this.modulesView = new bbApp.ModulesView({
          collection: bbApp.modules
        });
        $( '#modules-page' ).attr( 'data-role', 'page' );
      }

      // Load JQM page
      $('#modules-headline').text(section);
      $( 'body' ).pagecontainer( 'change', '#modules-page', {
        changeHash: false
      });
    },
    getExercise: function(section, module, lesson, exercise) {
      var modules, thisModule, lessons, thisLesson, thisExercise, nextExercise,
        nextLesson, thisViewModel, href;

      console.log(bbApp.modules);
      modules = bbApp.modules;
      thisModule = modules.get(module);
      console.log(thisModule);
      lessons = thisModule.get('lessons');
      thisLesson = lessons[lesson];

      switch (exercise) {
        case 'text-input':
          thisExercise = 'textInput';
          nextExercise = 'voice-input';
          nextLesson = parseFloat(lesson);
          break;
        case 'voice-input':
          thisExercise = 'voiceInput';
          nextExercise = 'reception';
          nextLesson = (parseFloat(lesson) + 1);
          break;
        default:
          thisExercise = 'reception';
          nextExercise = 'text-input';
          nextLesson = parseFloat(lesson);
      }

      thisViewModel = thisExercise[0].toUpperCase() + thisExercise.slice(1) +
        'View';

      // If page doesn't exist, create the view as JQM page
      if (!this[thisExercise + 'View']) {
        this[thisExercise + 'View'] = new bbApp[thisViewModel]({
          model: thisLesson[thisExercise]
        });
        $( '#' + exercise + '-page' ).attr( 'data-role', 'page' );
      }

      $('#' + exercise + '-headline').text(exercise);
      href = '?#/sections/' + section + '/modules/' + module;
      href += lessons[nextLesson] ? '/' + nextLesson.toFixed() + '/' +
        nextExercise : '/success';
      $('#' + exercise + '-link').attr('href', href);

      // Load JQM page
      $( 'body' ).pagecontainer( 'change', '#' + exercise + '-page', {
        changeHash: false
      });
    }
  });

  // Create Backbone router
  bbApp.appRouter = new AppRouter();
})( jQuery );