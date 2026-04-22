import { useState } from 'react'

const Statistics = (props) => {
  if (props.good === 0 && props.bad === 0 && props.neutral === 0) {
    return (
      <div>
        <h1>Statistics</h1>

        <p>No Feedback Given</p>
      </div>
    )
  }
  return (
    <div>
    <h1>Statistics</h1>

     <p>Good: {props.good}</p>
     <p>Neutral: {props.neutral}</p>
     <p>Bad: {props.bad}</p>
     <p>All: {props.total}</p>
     <p>Average: {props.average}</p>
     <p>Positive: {props.positivepercent}%</p>
    </div>
     
  )
}

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

      <Statistics 
       good = {good}
       neutral = {neutral}
       bad = {bad}
       total = {total}
       average = {average}
       positivepercent = {positivepercent}/>

    </div>
  )
}

export default App