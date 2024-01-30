import React, { useContext } from 'react'
import { AppBar, Toolbar, IconButton, Typography, InputBase, Button, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Logo from '../../assets/ad1f76d2.png';
import './Appbar.css'
import TaskModel from '../TaskModel/TaskModel';
import { TaskApp } from '../../Context';


export default function Appbar() {
 const {openmodelfn,isopenmodel}=useContext(TaskApp)
   
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
    
            {/* Add Button */}
          
            <Button variant="outlined"
            className='Addbtn'
            startIcon={<AddCircleIcon />}
            onClick={openmodelfn}>Add</Button>
          </Toolbar>
        </AppBar>
        {isopenmodel&&<TaskModel title={"Add Task"} btntitle="Add"/>}
        
</>
      );
}
