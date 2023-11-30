import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react'
import {Box} from '@mui/material';
import Homepage from './pages/Homepage';
import AddNewTask from './pages/AddNewTask';
import EditTask from './pages/EditTask';
// import Navbar from './components/Navbar';
// import { Feed } from '@mui/icons-material';
// import VideoDetail from './components/VideoDetail';
// import ChannelDetail from './components/ChannelDetail';
// import SearchFeed from './components/SearchFeed';

// we can simply use another file in component named index.js ,so it looks better


const App = () => { 
  
  const [tasks, setTasks] = React.useState(
    JSON.parse(localStorage.getItem('tasks')) || []
  );
  const [editTask, setEditTask] = React.useState({});

  return (
  <Box  bgcolor='aliceblue' display='flex' justifyContent='center' pt='5rem' width='100%' minHeight='100vh'  >

    <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<Homepage/>} />
            <Route path="/add-new-task" element={<AddNewTask setTasks={setTasks}/>} />
            <Route path = "/edit/:id" element = {<EditTask editTask={editTask} tasks={tasks} setTasks={setTasks}/>}/>
            {/* 

            <Route path="/video/:id" element={} />
            <Route paht="/channel/:id" element={}/>
            <Route path="/search/:searchTerm" element={}/> */}
        </Routes>
    </BrowserRouter>
  </Box>
  );
 }
export default App
