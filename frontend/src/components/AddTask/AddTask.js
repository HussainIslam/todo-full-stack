import Style from './AddTask.module.css'

const AddTask = ({ addTask }) => {
    const formSubmit = (e) => {
        e.preventDefault()
        addTask(e.target.newtask.value)
    }
    
    return (
        <form onSubmit={formSubmit}>
            <input type="text" name="newtask" />
            <input type="submit"/>
        </form>
    )
}

export default AddTask
