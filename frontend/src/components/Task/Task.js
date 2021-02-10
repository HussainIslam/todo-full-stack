import { useEffect } from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { IconContext } from 'react-icons'

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
                <div>
                    <div>{task.name}</div>
                    <div>
                        <div>{task.added}</div>
                        <div>{task.modified}</div>
                    </div>

                </div>
                <div className={Style.closeButton} onClick={()=>deleteTask(task.id)}>
                    <IconContext.Provider value={{ className: "closeButton" }}>
                        <FaTrashAlt/>
                    </IconContext.Provider>
                </div>
            </div>
        </div>
    )
}

export default Task
