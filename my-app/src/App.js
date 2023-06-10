import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import ManyTasks from './components/ManyTasks'
import Nav from './components/Nav'
import AddTask from './components/AddTask'
//import ModifierTask from './components/ModifierTask'
import Footer from './components/Footer'
import Accueil from './components/Accueil'
function App() {

  //1 - Global
  const [tasks, setTasks] = useState([])
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])


  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    //console.log(data)
    return data
  }
  //fetch Task
  /* const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    //console.log(data)
    return data
  } */
  // 2 - Delete
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })
    setTasks(tasks.filter((task) => task.id !== id))
  }

  
  //* / 3 - ToggleReminder
  /* const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updTask)
    }) */
    /* const data = await res.json()
    setTasks(tasks.map((task) => task.id === id ? {
      ...task, reminder: data.reminder
    } : task))
  } */

  // 4 - Add
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    const newTask = await res.json()
    setTasks([...tasks, newTask])
  }

  // 5 - toggle Form
  const [showAddTask, setShowAddTask] = useState(false)


  return (
    <BrowserRouter basename="/build">
    <div className="container">
        <nav className="nav-primary">
          <Nav />
        </nav>
          {tasks.length > 0 ? (
            
            <Routes>
            <Route path='/produits' element={
            <div>
              < Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
                {/* 4.1 <AddTask onAdd={addTask}/>*/}
                {/*5.1 */}{showAddTask && <AddTask onAdd={addTask} />}{/*if is true (&&) */}
                <ManyTasks tasks={tasks}  onDeleteMany={deleteTask} />
            </div>
            }/>
          </Routes>
        
      ) : (
        'No tasks'
      )}
        <Routes>
          <Route path='/accueil' element={<Accueil />} />
        </Routes>
        <Routes>
          <Route path='/' element={<Accueil />} />
        </Routes>
        <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
