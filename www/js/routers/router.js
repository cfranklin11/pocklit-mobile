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
      this.landingView = new bbApp.LandingView();
      $( '#landing-page' ).attr( 'data-role', 'page' );
      $( 'body' ).pagecontainer( 'change', '#landing-page', {
        changeHash: false
      });
    },
    getSectionSelect: function() {
      this.sectionsView = new bbApp.SectionsView();
      $( '#sections-page' ).attr( 'data-role', 'page' );
      $( 'body' ).pagecontainer( 'change', '#sections-page', {
        changeHash: false
      });
    },
    getModuleSelect: function(section) {
      var testModules;

      testModules = [
        {
          name: 'module 1',
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
          name: 'module 2',
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
          name: 'module 3',
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

      this.modulesView = new bbApp.ModulesView({
        collection: bbApp.modules,
        section: section
      });
      $( '#modules-page' ).attr( 'data-role', 'page' );
      $( 'body' ).pagecontainer( 'change', '#modules-page', {
        changeHash: false
      });
    }
  });

  // Create Backbone router
  bbApp.appRouter = new AppRouter();
})( jQuery );