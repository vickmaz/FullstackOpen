const Header  = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <div>
      <p>{props.partname} {props.partvalue}</p>
    </div>
  )

}

const Content  = () => {

  return (
    <div>
      <Part partname = 'Fundamentals of React' partvalue = {10} />
      <Part partname = 'Using props to pass data' partvalue = {7} />
      <Part partname = 'State of a component' partvalue = {14} />
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