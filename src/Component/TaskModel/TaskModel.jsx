/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,TextareaAutosize,FormControl,InputLabel,Select,MenuItem
  } from '@mui/material';
import { TaskApp } from '../../Context';
  
export default function TaskModel({title,btntitle}) {
const {onClose,handleInputChange,taskData,setTaskData,handleAdd}=useContext(TaskApp);



    return (
        <Dialog open={open} onClose={onClose}>
        <DialogTitle>{title}</DialogTitle>

        <DialogContent>
          <DialogContentText>
            Please fill in the details for the new task.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            fullWidth
            value={taskData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
          />
          <label htmlFor="">Please Enter Description</label>
          <TextareaAutosize
            minRows={6}
            
            style={{ width: '100%', marginTop: '10px',padding:"5px" }}
            value={taskData.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
          />
          <FormControl fullWidth margin="dense">
            <InputLabel htmlFor="status">Status</InputLabel>
            <Select
              label="Select Current Status"
              value={taskData.status}
              onChange={(e) => handleInputChange('status', e.target.value)}
            >
            
              <MenuItem value="Not started">Not started</MenuItem>
              <MenuItem value="In process">In process</MenuItem>
              <MenuItem value="Completed">Completed</MenuItem>
            </Select>
          </FormControl>
          <TextField
            margin="dense"
            label="Due Date"
            type="date"
            fullWidth
            value={taskData.due_date}
            onChange={(e) => handleInputChange('due_date', e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <FormControl fullWidth margin="dense">
            <InputLabel htmlFor="priority">Priority</InputLabel>
            <Select
              label="Select Priority"
              value={taskData.priority}
              onChange={(e) => handleInputChange('priority', e.target.value)}
            >
            
              <MenuItem value="High">High</MenuItem>
              <MenuItem value="Medium">Medium</MenuItem>
              <MenuItem value="Low">Low</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>

        <DialogActions>
          <Button variant="outlined" onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button variant="contained" onClick={handleAdd} color="primary">
            {btntitle}
          </Button>
        </DialogActions>
        
      </Dialog>
      );
}
