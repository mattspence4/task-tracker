import logo from './logo.svg';
import Header from './components/Header';
import Tasks from './components/Tasks';
import {useState} from 'react'

const App = () => {
  const [tasks, setTasks] = useState(
    [
    {
        id: 1,
        text: 'a thing',
        day: 'feb 16th at 1:30',
        reminder: true,
    },
    {
        id: 2,
        text: 'another thing',
        day: 'feb 16th at 1:30',
        reminder: true,
    },
    {
        id: 3,
        text: 'yet another thing',
        day: 'feb 16th at 1:30',
        reminder: true,
    },
])

//Delete task
const deleteTask = (id) => {
  const foo = tasks.filter((task) => task.id !== id)
  setTasks(foo)
  
}

//Add task

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}/> : 'No Tasks Remaining'}
    </div>
  )
}

export default App;
