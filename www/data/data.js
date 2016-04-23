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
            text: 'K',
            correct: true
          },
          {
            text: 'T',
            correct: false
          },
          {
          text: 'O',
          correct: false
          },
          {
          text: 'S',
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
            text: 'H',
            correct: false
          },
          {
            text: 'B',
            correct: false
          },
          {
          text: 'E',
          correct: true
          },
          {
          text: 'W',
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
            text: '4',
            correct: false
          },
          {
            text: '8',
            correct: true
          },
          {
          text: '3',
          correct: false
          },
          {
          text: '5',
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
            text: '6',
            correct: false
          },
          {
            text: '2',
            correct: false
          },
          {
            text: '3',
            correct: true
          },
          {
            text: '7',
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