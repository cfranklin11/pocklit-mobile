'use strict';

var bbApp = bbApp || {};

(function($) {
  var AppRouter = Backbone.Router.extend({
    routes: {
      '': 'getLanding',
      'sections/start': 'getSectionStart',
      'sections': 'getSectionSelect',
      'sections/:section/modules': 'getModuleSelect',
      'sections/:section/modules/:module/:lesson/:exercise': 'getExercise',
      'sections/:section/modules/:module/success': 'getSuccess',
      'test': 'getTest'
    },
    getTest: function() {
      var model = new bbApp.Module({
        voiceInput: {
          text: 'text'
        },
        textInput: {
          options: [
            {
              text: 'option 1',
              correct: false
            },
            {
              text: 'option 2',
              correct: true
            },
            {
              text: 'option 3',
              correct: false
            },
            {
              text: 'option 4',
              correct: false
            }
          ]
        }
      });

      // If page doesn't exist, create the view as JQM page
      if (!this.testView) {
        this.testView = new bbApp.TestView({model: model});
        $('#test-page').attr('data-role', 'page');
      }

      // Load JQM page
      $('body').pagecontainer('change', '#test-page', {
        changeHash: false
      });
    },
    initialize: function() {

      // Handle back button throughout the application
      $('.back').on('click', function() {
        window.history.back();
        return false;
      });

      this.firstPage = true;
    },
    start: function() {
      Backbone.history.start();
    },
    getLanding: function() {

      // If page doesn't exist, create the view as JQM page
      if (!this.landingView) {
        this.landingView = new bbApp.LandingView();
        $('#landing-page').attr('data-role', 'page');
      }

      // Load JQM page
      $('body').pagecontainer('change', '#landing-page', {
        changeHash: false
      });
    },
    getSectionStart: function() {

      // If page doesn't exist, create the view as JQM page
      if (!this.startView) {
        this.startView = new bbApp.StartView();
        $('#start-page').attr('data-role', 'page');
      }

      // Load JQM page
      $('body').pagecontainer('change', '#start-page', {
        changeHash: false
      });
    },
    getSectionSelect: function() {

      // If page doesn't exist, create the view as JQM page
      if (!this.sectionsView) {
        this.sectionsView = new bbApp.SectionsView();
        $('#sections-page').attr('data-role', 'page');
      }

      // Load JQM page
      $('body').pagecontainer('change', '#sections-page', {
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
        },
        {
          index: 1,
          section: section,
          lessons: [{
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
        },
        {
          index: 2,
          section: section,
          lessons: [{
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
      ];

      bbApp.modules.reset(testModules);

      // If page doesn't exist, create the view as JQM page
      if (!this.modulesView) {
        this.modulesView = new bbApp.ModulesView({
          collection: bbApp.modules
        });
        $('#modules-page').attr('data-role', 'page');
      }

      // Load JQM page
      $('#modules-headline').text(section);
      $('body').pagecontainer('change', '#modules-page', {
        changeHash: false
      });
    },
    getExercise: function(section, module, lesson, exercise) {
      var modules, thisModule, lessons, thisLesson, thisExercise, nextExercise,
        nextLesson, thisViewModel, href;

      modules = bbApp.modules;
      thisModule = modules.get(module);
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
          nextLesson =(parseFloat(lesson) + 1);
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
        $('#' + exercise + '-page').attr('data-role', 'page');

      // Otherwise, change the model for the view, instigating render()
      } else {
        this[thisExercise + 'View'].model.set(thisLesson[thisExercise]);
      }

      $('#' + exercise + '-headline').text(exercise);
      href = '?#/sections/' + section + '/modules/' + module;
      href += lessons[nextLesson] ? '/' + nextLesson.toFixed() + '/' +
        nextExercise : '/success';
      $('#' + exercise + '-link').attr('href', href);

      // Load JQM page
      $('body').pagecontainer('change', '#' + exercise + '-page', {
        changeHash: false
      });
    },
    getSuccess: function(section) {

      // If page doesn't exist, create the view as JQM page
      if (!this.successView) {
        this.successView = new bbApp.SuccessView();
        $('#success-page').attr('data-role', 'page');
      }

      $('#success-link').attr('href', '?#/sections/' + section + '/modules');

      // Load JQM page
      $('body').pagecontainer('change', '#success-page', {
        changeHash: false
      });
    }
  });

  // Create Backbone router
  bbApp.appRouter = new AppRouter();
})(jQuery);
