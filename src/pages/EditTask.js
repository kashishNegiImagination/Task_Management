import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import EditFormComp from '../components/EditFormComp'
import { useNavigate, useParams } from 'react-router-dom'


const EditTask = () => {

     const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || {})
     
         const router = useParams()
         const navigate = useNavigate();

         const updateTask = tasks.filter((task) => task?.id.toString() === router.id)?.at(0) || {};
     
       const handleSaveClicked = (updatedTask) => {
         let oldTasks = JSON.parse(localStorage.getItem('tasks'));
         oldTasks = oldTasks?.map((item) => {
           if (item?.id === updatedTask?.id) {
             return updatedTask;
           } else return item
         });
         localStorage.setItem('tasks', JSON.stringify([...oldTasks]));
         setTasks(oldTasks);
         navigate('/')
       };






    //      const handleSaveClicked =(newTask)=> {
    //       console.log(" task: ", tasks, "newTAsk: ", newTask)
    //  let variable = ( tasks.map((elem)=>{
    //     //   console.log('kahskh')
    //         if(elem.id === newTask.id){
    //           return{...elem, id: newTask?.id, title: newTask?.title, desc: newTask?.desc , priority: newTask?.priority}
    //         }
    //       })) 

            // console.log("inputData: ",variable)
            //         // setTasks(newTask)
            //         localStorage.removeItem('tasks')
                    
            //         localStorage.setItem("tasks", JSON.stringify([...variable]))
            //     }
        //  const handleSaveClicked = (newTask)=> {

        //     let oldTasks =  JSON.parse(localStorage.getItem("tasks")) 
        //     console.log(oldTasks[router?.id])
        //     localStorage.removeItem(oldTasks)
        //     console.log(newTask)
        //     oldTasks[router?.id] = {...newTask}
        //     console.log(oldTasks[router?.id])
        //     // localStorage.removeItem(oldTasks[router?.id])
        //     // localStorage.setItem("tasks", JSON.stringify([...oldTasks,newTask]))
            
        //     // if(oldTasks) {
        //     //     // newTask['id'] = oldTasks?.at(-1)?.id + 1
        //     //     localStorage.setItem("tasks", JSON.stringify([...oldTasks,newTask]))
        //     // } else {
        //     //     localStorage.setItem("tasks", JSON.stringify([newTask]))
        //     // }
        // }

    //  console.log(tasks, "kashish is mad")
    //  console.log(router.id)
    //  console.log(tasks[router.id-1])
    // const [tasked, setTasked] = useState({id: tasks[router.id]?.id, title: tasks[router.id]?.title, desc:tasks[router.id]?.desc, priority: tasks[router.id]?.priority })

  return (
    <div>
        <EditFormComp updateTask={updateTask} handleSaveClicked={handleSaveClicked}/>
            
    </div>
  )
}

export default EditTask
















// const EditTask = () => {
//     const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || {})
// const [task, setTask] = useState({})
//     const router = useParams()

//     const getTask = ()=> {
//         let task = tasks.filter((item)=> {
//             if(item.id.toString() === router?.id) {
//                 return item
//             }
//         })
//         return task?.at(0)
//     }

//     useEffect(()=> {
//         setTask(getTask())
//     }, [router?.id])

//     const handleSaveClick =(newTask)=> {
//         let oldTasks = tasks.filter((item)=> {
//             if(item.id === newTask.id) {
//                 item = {...newTask}
//             }
//         })
//         localStorage.setItem("tasks", JSON.stringify([...oldTasks]))


//     }

//     return (
//     <Box>
//             <FormComp task={task} setTask={setTasks} handleSaveClick={handleSaveClick} />



//     </Box>
//   )
// }

// export default EditTask
