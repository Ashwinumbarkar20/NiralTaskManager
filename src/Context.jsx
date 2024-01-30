/* eslint-disable react/prop-types */
import React, { useState, createContext, useEffect } from 'react';

export const TaskApp = createContext();

const TaskProvider = ({children}) => {
const url="https://alltasks.onrender.com/tasks";
const[alltasks,setAlltasks]=useState([]);
const[isopenmodel,setIsOpenmodel]=useState(false);

const [taskData, setTaskData] = useState({
    name: '',
    description: '',
    status: '',
    due_date: '',
    priority: '',
  });


const openmodelfn=()=>{
    setIsOpenmodel(true)
}

const onClose=()=>{
    setIsOpenmodel(false);
    setTaskData({
        name: '',
        description: '',
        status: '',
        due_date: '',
        priority: '',
      });
}

const handleAdd=async()=>{
    try {
               
        const response = await fetch('https://alltasks.onrender.com/tasks', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(taskData),
        });
  
        if (!response.ok) {
          throw new Error('Failed to add task');
        }
        getTasks(url);
        // Parse the response
       // const newTask = await response.json();
  
        // Notify the parent component about the new task
       // onAdd(newTask);
  
        // Reset the form state and close the modal
        setTaskData({
          name: '',
          description: '',
          status: '',
          due_date: '',
          priority: '',
        });
        onClose();
      } catch (error) {
        console.error('Error adding task:', error.message);
        
      }
}

  const handleInputChange = (field, value) => {
    setTaskData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };
 
    const getTasks= async (url)=>{
const res= await fetch(url);
const data=await res.json();
console.log(data)
setAlltasks(data);
    }

    useEffect(()=>{
        getTasks(url);
    },[])  

    return (
        <TaskApp.Provider value={{url,taskData,alltasks,handleAdd, onClose,setTaskData,handleInputChange,openmodelfn,isopenmodel,setIsOpenmodel}}>{children}
        </TaskApp.Provider>
    );
}
export default TaskProvider;