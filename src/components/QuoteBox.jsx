import React from 'react'
import QuoteButton from './QuoteButton'

const QuoteBox = ({quote, getNewValues, backgroundObject, fontColorObject}) => {
  return (
    <article className='quoteBox'>
      <div>
        <h1 className='quote1' style={fontColorObject}> <span>``</span> {quote.quote}</h1>
        <h2 className='quote2' style={fontColorObject}>``{quote.quote}´´</h2>
        <h3 style={fontColorObject}>- {quote.author}</h3>
      </div>
        <QuoteButton 
          getNewValues={getNewValues} 
          backgroundObject={backgroundObject}/> 
    </article>
  )
}

export default QuoteBox