import { useState } from 'react'


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const HandleGood = () => {
    setGood(good +1)
  }

  const HandleNeutral = () => {
     setNeutral(neutral +1)
  }

  const HandleBad = () => {
    setBad(bad +1)
  }


  return (
    <div>
      <h1>Give Feedback</h1>

      <button onClick={HandleGood}>Good</button>
      <button onClick={HandleNeutral}>Neutral</button>
      <button onClick={HandleBad}>Bad</button>

      <h1>Statistics</h1>

      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>

    </div>
  )
}

export default App