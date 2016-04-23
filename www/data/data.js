'use strict';

var bbApp = bbApp || {};

bbApp.testModuleData = [
  {
    index: 0,
    section: 'reading',
    lessons: [{
      reception: {
        audio: 'audio-file',
        text: 'K'
      },
      textInput: {
        audio: 'audio-file',
        options: [
          {
            name: 'K',
            correct: true
          },
          {
            name: 'T',
            correct: false
          },
          {
          name: 'O',
          correct: false
          },
          {
          name: 'S',
          correct: false
          }
        ]
      },
      voiceInput: {
        audio: 'audio-file',
        text: 'K'
      }
    }]
  },
  {
    index: 1,
    section: 'reading',
    lessons: [{
      reception: {
        audio: 'audio-file',
        text: 'E'
      },
      textInput: {
        audio: 'audio-file',
        options: [
          {
            name: 'H',
            correct: false
          },
          {
            name: 'B',
            correct: false
          },
          {
          name: 'E',
          correct: true
          },
          {
          name: 'W',
          correct: false
          }
        ]
      },
      voiceInput: {
        audio: 'audio-file',
        text: 'E'
      }
    }]
  },
  {
    index: 0,
    section: 'numbers',
    lessons: [{
      reception: {
        audio: 'audio-file',
        text: '8'
      },
      textInput: {
        audio: 'audio-file',
        options: [
          {
            name: '4',
            correct: false
          },
          {
            name: '8',
            correct: true
          },
          {
          name: '3',
          correct: false
          },
          {
          name: '5',
          correct: false
          }
        ]
      },
      voiceInput: {
        audio: 'audio-file',
        text: '8'
      }
    }]
  },
  {
    index: 1,
    section: 'numbers',
    lessons: [{
      reception: {
        audio: 'audio-file',
        text: '3'
      },
      textInput: {
        audio: 'audio-file',
        options: [
          {
            name: '6',
            correct: false
          },
          {
            name: '2',
            correct: false
          },
          {
            name: '3',
            correct: true
          },
          {
            name: '7',
            correct: false
          }
        ]
      },
      voiceInput: {
        audio: 'audio-file',
        text: '3'
      }
    }]
  }
];