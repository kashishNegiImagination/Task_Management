import { Typography } from '@mui/material'
import React, { useState } from 'react'
import FormComp from '../components/FormComp'
import { useNavigate } from "react-router-dom";

const AddNewTask = ({setTasks}) => {




  const navigate = useNavigate();

    // const [task, setTask] = useState({id: 0, title: "", desc:"", priority: "" })
    
    const handleSaveClick = (newTask)=> {
      let oldTasks = JSON.parse(localStorage.getItem('tasks'));
      let updatedTasks;
      if (oldTasks?.length > 0) {
        newTask['id'] = oldTasks.at(-1)?.id + 1;
        // console.log('newTask', oldTasks);
        updatedTasks = [...oldTasks, newTask];
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      } else {
        updatedTasks = [newTask];
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      }
      setTasks(updatedTasks);
      navigate('/');
  }
  return (
    <div>
            <Typography variant='h4' >Add new To-Do</Typography>
            <FormComp handleSaveClick={handleSaveClick} />
    </div>
  )
}

export default AddNewTask
