import { useState } from 'react'


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [goodvalue, setGoodValue] = useState(0)

  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [badvalue, setBadValue] = useState(0)

  const total = good + neutral + bad 
  const average = (goodvalue + badvalue) / 2
  const positivepercent = (good / total) * 100

  const HandleGood = () => {
    setGood(good +1)
    setGoodValue(goodvalue +1)
  }

  const HandleNeutral = () => {
     setNeutral(neutral +1)
  }

  const HandleBad = () => {
    setBad(bad +1)
    setBadValue(badvalue -1)
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
      <p>All: {total}</p>
      <p>Average: {average}</p>
      <p>Positive: {positivepercent}%</p>

    </div>
  )
}

export default App