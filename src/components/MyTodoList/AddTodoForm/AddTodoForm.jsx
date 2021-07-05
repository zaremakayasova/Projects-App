import classes from './AddTodoForm.module.css';

const AddTodoForm = () => {
    return (
        <form className={classes.AddTodoForm}>
            <input type='text' placeholder='Add new todo...' />
            <button>Submit</button>
        </form>
    );
}

export default AddTodoForm;