import React from 'react'
import QuoteButton from './QuoteButton'

const QuoteBox = ({quote, getNewValues, backgroundObject, fontColorObject}) => {
  return (
    <article className='quoteBox'>
      <h1 style={fontColorObject}> <span>``</span> {quote.quote}</h1>
      <h3 style={fontColorObject}>- {quote.author} -</h3>
          <QuoteButton 
          getNewValues={getNewValues} 
          backgroundObject={backgroundObject}/>
    </article>
  )
}

export default QuoteBox