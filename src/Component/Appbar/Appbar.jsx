import React, { useContext } from 'react'
import { AppBar, Toolbar, IconButton, Typography, InputBase, Button, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Logo from '../../assets/ad1f76d2.png';
import './Appbar.css'
import TaskModel from '../TaskModel/TaskModel';
import { TaskApp } from '../../Context';


export default function Appbar() {
 const {openmodelfn,isopenmodel,editmode}=useContext(TaskApp)
   
  return (
      <>
        <AppBar position="static">
          <Toolbar className='Appbar-container'>
            <Box> 
            <img src={Logo} alt="Logo"  style={{ marginRight: '16px', height: '40px' }}  />
            </Box> 
           
             <Box
             sx={{display:
             {xs:"none",sm:"block",md:"block",lg:"block",xl:"block"}}}>
            <h4 className='Main-title'>Task Manager</h4>
            </Box>
    
                      
            <Button variant="contained"
            className='Addbtn'
            startIcon={<AddCircleIcon />}
            onClick={openmodelfn}>Add</Button>
          </Toolbar>
        </AppBar>
        {editmode && isopenmodel ?
        <TaskModel title={"Edit Task"}  btntitle="Save" /> :
        isopenmodel &&
        <TaskModel title={"Add Task"} btntitle="Add" />
      }
        

        
</>
      );
}
