import { useState, useEffect } from 'react';

import Task from '../Task/Task'
import AddTask from '../AddTask/AddTask'

const Tasks = () => {
    const [ tasks, setTasks ] = useState([])

    useEffect (()=>{
      loadTasks()
    }, []);
  
    const toggleTask = (index) => {
        const currentTasks = tasks;
        currentTasks[index].iscomplete =  !currentTasks[index].iscomplete;
        const requestOptions = {
            method: 'PUT',
            headers: {
                    'Content-Type': 'application/json'
            },
            body: JSON.stringify(currentTasks[index])
        }
        fetch(`http://localhost:8000/tasks/${currentTasks[index].id}/`, requestOptions).then(()=>loadTasks())
    };

    const loadTasks = () => {
        (async () => {
            const response = await fetch('http://localhost:8000/tasks/', {
                method: 'GET'
            });
            const unresolvedTasksJSON = await response.json();
            const resolvedTasks = await Promise.all(unresolvedTasksJSON);
            setTasks(resolvedTasks);
        })()    
    }
    
    const addTask = (name) => {
        const requestOptions = {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            body: JSON.stringify({ name: name, iscomplete: false })
        }
        fetch('http://localhost:8000/tasks/', requestOptions).then(()=>loadTasks())
    }

    const deleteTask = (id) => {
        fetch(`http://localhost:8000/tasks/${id}/`,{
            method: 'DELETE'
        }).then(()=>loadTasks())
    }

    const updateTask = (task) =>{
        
        
    }

    return (
        <div>
            <AddTask addTask={addTask}/>
            {tasks.length > 0 ? (
                tasks.map((task, index) => (
                <Task 
                    key={task.id} 
                    task={task} 
                    index={index} 
                    toggleTask={toggleTask}
                    deleteTask={deleteTask}
                    updateTask={updateTask}
                />
                ))
            ) : 'No tasks yet'}
        </div>
    )
}

export default Tasks
