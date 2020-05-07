const { Machine } = require('xstate')

export const writingSessionMachine = Machine({
  id: 'writingSession',
  initial: 'ready',
  states: {
    ready: {
      on: {
        START: 'writing',
      },
    },
    writing: {
      on: {
        STOP: 'ready',
      },
      after: {
        5000: 'ready',
      },
    },
  },
})
