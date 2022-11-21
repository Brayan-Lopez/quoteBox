import { useState } from 'react'
import QuoteBox from './components/QuoteBox'
import quoteDB from './db/cuotes.json'
import colors from './db/colors'

function App() {
  
  const getRandom = (array) => {

    const randomIndex = Math.floor(array.length*Math.random())
    return array[randomIndex]
  }

  const [quote, setQuote] = useState(getRandom(quoteDB))
  const [color, setColor] = useState(getRandom(colors))

  const getNewValues = () => {
    const newQuote = getRandom(quoteDB)
    const newColor = getRandom(colors)
    setColor(newColor)
    setQuote(newQuote)
  }

  const backgroundObject = {
    backgroundColor: color
  }
  const fontColorObject = {
    color: color
  }

  return (
    <div className="App" style={backgroundObject}>
      <QuoteBox 
      quote={quote} 
      getNewValues={getNewValues} 
      backgroundObject={backgroundObject}
      fontColorObject={fontColorObject}/>
    </div>
  )
}
export default App
