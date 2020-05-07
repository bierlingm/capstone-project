const { Machine } = require('xstate')

const writingSessionMachine = Machine({
  id: 'canvasTimer',
  initial: 'ready',
  states: {
    ready: {
      on: {
        START: 'running',
      },
    },
    running: {
      on: {
        STOP: 'complete',
      },
      after: {
        90000: 'complete', // replace with ctime later
      },
    },
    complete: {
      type: 'final',
    },
  },
})
