import logo from './logo.svg';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import {useState} from 'react'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
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

// Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000)+1

  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}

//Delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id == id ? {...task, reminder: !task.reminder} : task))
}

//toggle reminder

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks Remaining'}
    </div>
  )
}

export default App;
