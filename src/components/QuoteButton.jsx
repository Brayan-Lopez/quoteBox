import React from 'react'

const QuoteButton = ({getNewValues, backgroundObject}) => {
  return (
      <button className='quoteButton' onClick={getNewValues} style={backgroundObject}>&gt;</button>
  )
}

export default QuoteButton