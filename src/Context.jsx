/* eslint-disable react/prop-types */
import React, { useState, createContext, useEffect } from 'react';

export const TaskApp = createContext();

const TaskProvider = ({children}) => {
const url="https://alltasks.onrender.com/tasks";
    const getTasks= async (url)=>{
const res= await fetch(url);
const data=await res.json();
console.log(data)
    }

    useEffect(()=>{
        getTasks(url);
    },[])    
    return (
        <TaskApp.Provider value={{url}}>{children}
        </TaskApp.Provider>
    );
}
export default TaskProvider;