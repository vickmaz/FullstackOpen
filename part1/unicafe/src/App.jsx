import { useState } from 'react'

const Button = (props) => {
  return (

      <button onClick={props.onClick}>{props.text}</button>
  )
}

const StatisticLine = (props) => {
  return (
    <p>{props.text}: {props.value}</p>
  )
}

const Statistics = (props) => {
  if (props.total === 0) {
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
      <StatisticLine text = "Good" value = {props.good} />
      <StatisticLine text = "Neutral" value = {props.neutral} />
      <StatisticLine text = "Bad" value = {props.bad} />
      <StatisticLine text = "All" value = {props.total} />
      <StatisticLine text = "Average" value = {props.average} />
      <StatisticLine text = "Positive" value = {props.positivepercent + " %"} />
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

      <Button onClick = {HandleGood} text = "Good"/>
      <Button onClick = {HandleNeutral} text = "Neutral"/>
      <Button onClick = {HandleBad} text = "Bad"/>

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