import { useContext } from 'react'
import { TaskApp } from './Context'
import './App.css'
import Appbar from './Component/Appbar/Appbar';
import Taskcard from './Component/Taskcard/Taskcard';


function App() {
  const {alltasks} =useContext(TaskApp);
  console.log(alltasks)
  return (
    <>
  <Appbar/> 
  
  
   { alltasks.length === 0?
  (<p>loading....</p>):
  (<Taskcard task={alltasks[4]}/>)}
    
  
 
  
  </>
  )
}

export default App
