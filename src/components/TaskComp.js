import { Box, Button, Checkbox, IconButton, Typography } from '@mui/material'
import React from 'react'
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"

const TaskComp = ({ item,handleDelete, handleEdit,handleComplete}) => {
console.log(item)
  return (
<Box  sx={{width: '100%', borderBottom: 1 ,  mx: 'auto' }} bgcolor={item?.completed ? "lightGreen" : "aliceBlue"} display='flex' alignItems='center' justifyContent='center' mt='1rem'>
    <Typography>{item?.title}</Typography>
<Box display='flex' flexDirection='row' sx={{pl: 1}} >
    <IconButton onClick={()=>handleEdit(item?.id)}>
        <EditIcon/>
    </IconButton>
    <IconButton onClick={()=>handleDelete(item?.id)}>
        <DeleteIcon/>
    </IconButton>
</Box>  
</Box>  )
}

export default TaskComp
