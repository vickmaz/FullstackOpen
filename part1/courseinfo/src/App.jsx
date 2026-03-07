const Header  = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content  = () => {
  const contents = [
    { name: 'Fundamentals of React', value: 10 },
    { name: 'Using props to pass data', value: 7 },
    { name: 'State of a component', value: 14 },
  ]

  return (
    <div>
      <p>{contents[0].name} {contents[0].value}</p>
      <p>{contents[1].name} {contents[1].value}</p>
      <p>{contents[2].name} {contents[2].value}</p>
    </div>
  )
}

const Total  = (props) => {
  console.log(props)
  return (
    <div>
      <p>Number of exercises {props.totalsum}</p>
    </div>
  )
}




const App = () => {
  const course = 'Half Stack application development'
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14
  const totalsum = exercises1 + exercises2 + exercises3

  return (
    <div>
      <Header course = {course}/>

      <Content />

      <Total totalsum = {totalsum} />
    </div>
  )
}

export default App