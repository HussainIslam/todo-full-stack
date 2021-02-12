import React, { useEffect, useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import moment from 'moment'
import ContentEditable from 'react-contenteditable'

import Style from './Task.module.css'

const Task = ({ task, index, toggleTask, deleteTask, updateTask }) => {

    const editableRef = React.createRef();

    const editName = e => {
        const newName = e.target.value
        updateTask(task.id, e.target.value)
        console.log(newName)
    }
    
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
                <div className={Style.nameInnerContainer}>
                    <ContentEditable 
                        onChange={editName} 
                        contentEditable={editableRef}
                        html={task.name}
                        disabled={false}
                        style={{ outline: 'none' }}
                    />
                    <div className={Style.timeContainer}>
                        <div>added: {moment(task.added, "YYYY-MM-DDTHH:mm:ss.SSSSSSZ").fromNow()}, &nbsp;</div>
                        <div> modified: {moment(task.modified, "YYYY-MM-DDTHH:mm:ss.SSSSSSZ").fromNow()}</div>
                    </div>
                </div>
                <div className={Style.closeButton} onClick={()=>deleteTask(task.id)}>
                    <IconContext.Provider value={{ className: "closeButton" }}>
                        <FaTrashAlt className={Style.closeButton}/>
                    </IconContext.Provider>
                </div>
            </div>
        </div>
    )
}

export default Task
