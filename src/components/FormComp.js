import { Box, Button, MenuItem, TextField } from '@mui/material'
import React, { useState } from 'react'
import { SELECT_VALUES } from '../utils/constants'

//name - input*, des - input, status initially false, priority - dropdown

const FormComp = ({ handleSaveClick}) => {
  
  const [task, setTask] = useState( { id: 0, title: '', completed: false } );

    return (
    <Box bgcolor='beige' width='25rem' p='1rem' display='flex'  justifyContent='center'  flexDirection='column' gap={'2rem'} >
      <TextField id="outlined-basic" value={task?.title || ""} onChange={(e)=> setTask({...task, title: e.target.value})} label="Enter Title" variant="filled" />
      <TextField id="outlined-basic" value={task?.desc || ""} onChange={(e)=> setTask({...task, desc: e.target.value})} label="Enter Description" multiline 
                rows={2}
 variant="filled" />
      <TextField
          id="filled"
          select
          required
          onChange={(e)=> setTask({...task, priority: e.target.value})}

          label="Select"
          helperText="Please select priority"
          variant="filled"
        > 
        {SELECT_VALUES?.map((option) => (
            <MenuItem key={option?.value} value={option?.value}>
              {option?.label}
            </MenuItem>
          ))}
          </TextField>
      <Button variant='contained' disabled={task?.title?.length <= 0} onClick={()=>handleSaveClick(task)}  >Saved</Button>

    </Box>
  )
}

export default FormComp
