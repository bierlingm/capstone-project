import { render } from '@testing-library/react'
import React from 'react'
import Logs from './Logs'

describe('Logs', () => {
  it('Renders without error', () => {
    render(<Logs />)
  })

  it('Renders note field upon startup', () => {
    const dummyItems = [
      {
        id: 'testId0',
        created: 'testDate0',
        set: 'testSet0',
        text: 'This is a test note #0.',
      },
      {
        id: 'testId1',
        created: 'testDate1',
        set: 'testSet1',
        text: 'This is a test note #1.',
      },
      {
        id: 'testId2',
        created: 'testDate2',
        set: 'testSet2',
        text: 'This is a test note #2.',
      },
    ]

    const onClickShuffle = () => console.log('Shuffle button works')

    const { getByTestId } = render(
      <Logs
        sourceItems={dummyItems}
        onClickHome={onClickShuffle}
        data-testid="testLogs"
      />
    )
    const logItems = getByTestId('testLogs')
    expect(logItems).toBeInTheDocument()
  })
})
