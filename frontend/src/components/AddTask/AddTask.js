import Style from './AddTask.module.css'
import { FaPlusSquare } from 'react-icons/fa'
import { IconContext } from 'react-icons';

const AddTask = ({ addTask }) => {

    const formSubmit = () => {
        const form = document.getElementById('addform');
        if(form.newtask.value != ""){
            addTask(form.newtask.value)
            form.newtask.value = ""
        }
    }

    return (
        <form className={ Style.form } id="addform">
            <input type="text" name="newtask" className={Style.inputField}/>
            <IconContext.Provider value={{ className:"addIcon" }}>
                <FaPlusSquare 
                    className={Style.addIcon}
                    onClick={formSubmit}
                />
            </IconContext.Provider>
        </form>
    )
}

export default AddTask
