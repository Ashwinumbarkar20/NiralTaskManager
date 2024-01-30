import { useContext } from 'react'
import { TaskApp } from './Context'
import './App.css'
import Appbar from './Component/Appbar/Appbar';
import Taskcard from './Component/Taskcard/Taskcard';
import { Box, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

function App() {
  const {alltasks} =useContext(TaskApp);
  console.log(alltasks)
  return (
    <>
  <Appbar/> 
  
  
   { alltasks.length === 0?
  (<div className='loading'>
    <CircularProgress   style={{ marginTop: '20px'}} />
    <h3>Loading...</h3>
    </div> ):

  (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="header-row" align="center"><span className="header-row">Task Name</span> </TableCell>
            <TableCell className="header-row" align="center"><span className="header-row">Description</span></TableCell>
            <TableCell className="header-row" align="center"><span className="header-row">Priority</span></TableCell>
            <TableCell className="header-row" align="center"><span className="header-row">Status</span></TableCell>
            <TableCell className="header-row" align="center"><span className="header-row">Due Date</span> </TableCell>
            <TableCell className="header-row" align="center"><span className="header-row">Action</span></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {alltasks.map((task) => (
          <Taskcard key={task.id}task={task}/>
          ))}
       
        </TableBody>
      </Table>
    </TableContainer>











   // alltasks.map((task)=> <Taskcard key={task.id}task={task}/>)
   )
    
    }
    
  
 
  
  </>
  )
}

export default App
