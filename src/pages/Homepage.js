import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import TaskComp from '../components/TaskComp';
import { LocalGasStationRounded } from '@mui/icons-material';


const Homepage = () => {
  const navigate = useNavigate();

  const [tasked, setTasked] = useState(JSON.parse(localStorage.getItem("tasks")) || [])


    const handleAddClick = ()=> {
      navigate("/add-new-task");
    }
    const handleEdit = (id)=>{
      navigate(`/edit/${id}`);
    }
    const handleDelete = (id)=>{

      let updatedTasks = tasked.filter((task) => task?.id !== id);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks))
      setTasked(updatedTasks);

      // console.log(updateVar)

      //  for(let i =0;i<updateVar.length;i++){
      //     updateVar['id'] = i;
      //  }
      //  console.log("updateVar length: ", updateVar.length)
      //  console.log(updateVar['id'])
      //  console.log(updateVar)

      //       localStorage.setItem("tasks", JSON.stringify(updateVar))
      // // console.log("hidjflkasdjf;ladskjf" ,tasked)
      // setTasked(updateVar)
    }
  
  return (

    <Box display='flex' flexDirection='column' >
      <Typography variant='h4' sx={{mb: 2}} >Welcome to my Task-Manager</Typography>

      <Button variant='contained'  onClick={handleAddClick}  >Add new task</Button>
      <Box sx={{border: 1}}  display='flex' justifyContent='center' alignItems='center' flexDirection='column'>
      
      {tasked?.map((item)=> 
      <TaskComp key={item.id} item={item} handleEdit={handleEdit} handleDelete = {handleDelete}/>
      )}
        <Button sx={{mt:2, mb:2}} disabled={tasked?.length <= 0} variant = 'contained' onClick={()=>{setTasked([]); localStorage.removeItem('tasks')}}>Remove All</Button>
      </Box>
    </Box>
  )
}

export default Homepage
