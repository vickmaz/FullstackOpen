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

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  

  return (
    <div>
      <h1>{course.name}</h1>

      <p>{course.parts[0].name} {course.parts[0].exercises}</p>
      <p>{course.parts[1].name} {course.parts[1].exercises}</p>
      <p>{course.parts[2].name} {course.parts[2].exercises}</p>

      <p> Number of exercises {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} </p>

    </div>
  )
}

export default App