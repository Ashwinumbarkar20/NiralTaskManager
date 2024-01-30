import { Box, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import './Taskcard.css'
export default function Taskcard({task}) {
    console.log(task)
  return (
    <>


    {task ? (<TableRow
                       sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row"> {task.name}
              </TableCell>
              <TableCell style={{maxWidth:"30%"}}align="center">{task.description}</TableCell>
              <TableCell align="center">{task.priority}</TableCell>
              <TableCell align="center">{task.status}</TableCell>
              <TableCell align="center">{task.due_date}</TableCell>
              <TableCell align="rcenteright"><div className='btndiv'>
          <Button variant="outlined">Edit</Button>
          <Button variant="contained">Delete</Button>
        </div></TableCell>
            </TableRow>) : (
      // Loading Section
      <div className='loading'>
        <CircularProgress style={{ marginTop: '20px' }} />
        <h3>Loading...</h3>
      </div>
    )}
  </>
  )
}
