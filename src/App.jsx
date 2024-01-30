import { useContext } from 'react'
import { TaskApp } from './Context'
import './App.css'
import Appbar from './Component/Appbar/Appbar';

function App() {
  const {user} =useContext(TaskApp);
  console.log(user)
  return (
    <>
  <Appbar/> 
    </>
  )
}

export default App
