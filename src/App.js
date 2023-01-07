
import './App.css';
import Header  from './components/Header'
import Tasks  from './components/Tasks';
import { useState } from 'react'

function App() {

  const [tasks , setTasks] = useState([
    {
        id:1,
        text:'go to the doctor',
        day: '5th of fab at 2:00 am',
        remainder: true 
    },
    {
        id:2,
        text:'go to the lecture',
        day: '10th of jun at 3:00 am',
        remainder: true 
    },
    {
        id:3,
        text:'go to the dentist',
        day: '5th of jan at 5:00 pm',
        remainder: false 
    },
    
]);

const onDelete = (id)=>{
  console.log("onDelete",id)
}


  return (
    <div className="container">
      <Header title='To Do List' />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
