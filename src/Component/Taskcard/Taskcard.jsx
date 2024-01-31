/* eslint-disable react/prop-types */
import { Box, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import React, { useContext } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './Taskcard.css'
import { TaskApp } from '../../Context';
import TaskModel from '../../Component/TaskModel/TaskModel'
export default function Taskcard({task}) {
  const{handleDelete,handleEdit,openmodelfn,setTaskData,setEditmode}=useContext(TaskApp)
  
  const openEditModel = (task) => {
    setEditmode(true);
    setTaskData(task);
    openmodelfn();
  };
  return (

   
    <>


    {task ? (<TableRow
                       sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left" component="th" scope="row"> {task.name}
              </TableCell>
              <TableCell style={{width:"30%", maxWidth:"30%"}} align="left">{task.description}</TableCell>
              <TableCell align="left">{task.priority}</TableCell>
              <TableCell align="left">{task.status}</TableCell>
              <TableCell align="left">{task.due_date}</TableCell>
              <TableCell align="left"><div className='btndiv'>
          <Button variant="outlined" onClick={() => {
                openEditModel(task)
               
              }}><EditIcon/></Button>
          <Button variant="contained" onClick={()=>handleDelete(task)}><DeleteIcon/></Button>
        </div></TableCell>
            </TableRow>) : (
      
      <div className='loading'>
        <CircularProgress style={{ marginTop: '20px' }} />
        <h3>Loading...</h3>
      </div>
    )}
   
  </>
  )
}
