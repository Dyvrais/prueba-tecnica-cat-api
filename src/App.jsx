import { useEffect, useState } from 'react'
import '/src/App.css'



function App() {
  const [catFact, setCatFact] = useState();
  const [firstWord, setFirstWord] = useState();

  const CAT_FACT_URL = 'https://catfact.ninja/fact'
  const CAT_IMAGE_URL = `https://cataas.com/cat/says/`

  useEffect(() => {
    fetch(CAT_FACT_URL)
      .then((res) => res.json())
      .then((data) => {setCatFact(data.fact)})
  }, [])

  useEffect(() => {
    if (!catFact) return
    setFirstWord(catFact.split(' ', 1))
  }, [catFact])
  
  return (
    <main>
      <h1>Cat Facts!</h1>
      <p>{catFact}</p>
      <img 
        src={`${CAT_IMAGE_URL}${firstWord}`} 
        alt='Image with the first word of the random fact'>
      </img>

    </main>
  )
}

export default App
