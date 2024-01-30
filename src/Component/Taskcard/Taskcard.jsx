import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Taskcard({task}) {
    console.log(task)
  return (
    <Box>
      <Typography>Task Name {task.name}</Typography>
      <Typography>Task Name {task.description}</Typography>
      <Typography>Task Name {task.status}</Typography>
      <Typography>Task Name {task.priority}</Typography>
      <Typography>Task Name {task["due_date"]}</Typography>
      <div className='btnDiv'>
      <button>Edit</button>
      <button>Delete</button>
      </div>
    </Box>
  )
}
