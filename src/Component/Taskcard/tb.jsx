import { Box, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import './Taskcard.css'
export default function Taskcard({task}) {
    console.log(task)
  return (
    <>
    {task ? (
      <Box className="card">
        <TableContainer component={Paper}>
          <Table>
            <TableBody>
              {/* Header Row */}
              <TableRow>
                <TableCell>
                  <Typography variant="h6">Task Information</Typography>
                </TableCell>
                <TableCell></TableCell>
              </TableRow>

              {/* Data Rows */}
              {Object.entries(task).map(([key, value]) => (
                <TableRow key={key}>
                  <TableCell>
                    <Typography>{key}</Typography>
                  </TableCell>
                  <TableCell>{value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Buttons Section */}
        <div className='btndiv'>
          <Button variant="outlined">Edit</Button>
          <Button variant="contained">Delete</Button>
        </div>
      </Box>
    ) : (
      // Loading Section
      <div className='loading'>
        <CircularProgress style={{ marginTop: '20px' }} />
        <h3>Loading...</h3>
      </div>
    )}
  </>
  )
}
