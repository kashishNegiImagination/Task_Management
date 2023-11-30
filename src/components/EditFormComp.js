import React from 'react'
import { Box, Button, Checkbox, MenuItem, TextField } from '@mui/material'
import { useState } from 'react'
import { SELECT_VALUES } from '../utils/constants'

const EditFormComp = ({updateTask,handleSaveClicked}) => {

  const [tasked, setTasked] = React.useState(updateTask);

    return (
     
        <Box bgcolor='beige' width='25rem' p='1rem' display='flex'  justifyContent='center'  flexDirection='column' gap={'2rem'} >
                  <Box bgcolor='beige'>
            Is Completed? 

            <Checkbox
        checked={tasked?.completed}
        value={tasked?.completed}
        onChange={(e) => setTasked({ ...tasked, completed: e.target.checked })}
      />
          </Box>
          <TextField id="outlined-basic" value={tasked?.title || ""} onChange={(e)=> setTasked({...tasked, title: e.target.value})} label="Enter Title" variant="filled" />
          <TextField id="outlined-basic" value={tasked?.desc || ""} onChange={(e)=> setTasked({...tasked, desc: e.target.value})} label="Enter Description" multiline 
                    rows={2}
     variant="filled" />
          <TextField
              id="filled"
              select
              required
              onChange={(e)=> setTasked({...tasked, priority: e.target.value})}
    
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
          <Button variant='contained' disabled={tasked?.title?.length <= 0} onClick={()=>handleSaveClicked(tasked)}  >Update & Save</Button>

          

        </Box>
      )
}

export default EditFormComp
