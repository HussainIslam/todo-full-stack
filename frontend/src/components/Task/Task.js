import { useEffect } from 'react'
import { FaTrashAlt } from 'react-icons/fa'

import Style from './Task.module.css'

const Task = ({ task, index, toggleTask, deleteTask }) => {
    return (
        <div className={Style.taskContainer}>
            <input 
                type="checkbox" 
                name="iscomplete" 
                checked={task.iscomplete}
                onChange={()=> toggleTask(index)}
                className={Style.checkbox}
            />
            <div className={Style.taskNameContainer}>
                <div>{task.name}</div>
                <div className={Style.closeButton} onClick={()=>deleteTask(task.id)}><FaTrashAlt/></div>
            </div>
        </div>
    )
}

export default Task