/* eslint-disable react/prop-types */
import React, { useState, createContext, useEffect } from 'react';

export const TaskApp = createContext();

const TaskProvider = ({children}) => {
const url="https://alltasks.onrender.com/tasks";
const[alltasks,setAlltasks]=useState([]);
const[isopenmodel,setIsOpenmodel]=useState(false);
const[editmode,setEditmode]=useState(false);
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
      setEditmode(false);
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

const handleDelete = async (task) => {
  try {
    const response = await fetch(`https://alltasks.onrender.com/tasks/${task.id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Failed to delete task');
    }
    getTasks(url);
  } catch (error) {
    console.error('Error deleting task:', error.message);
  }
};


const handleEdit=async()=>{
  try {
    const response = await fetch(`https://alltasks.onrender.com/tasks/${taskData.id}`, {
      method: 'PUT', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(taskData),
    });

    if (!response.ok) {
      throw new Error('Failed to edit task');
    }

    getTasks(url);
    onClose();
  } catch (error) {
    console.error('Error editing task:', error.message);
    alert("Unable to Delete , please try again")
    onClose();
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

setAlltasks(data);
    }

    useEffect(()=>{
        getTasks(url);
    },[])  

    return (
        <TaskApp.Provider value={{url,taskData,alltasks,handleAdd,handleDelete,handleEdit, onClose,setTaskData,handleInputChange,openmodelfn,isopenmodel,setIsOpenmodel,editmode,setEditmode}}>{children}
        </TaskApp.Provider>
    );
}
export default TaskProvider;