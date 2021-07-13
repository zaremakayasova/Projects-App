import { useState } from 'react';
import { connect } from 'react-redux';
import classes from './AddTodoForm.module.css';
import { addNewTodo } from '../../../redux/todo/todo.actions';
import AlertMsg from '../AlertMsg/AlertMsg';


const AddTodoForm = ({ addNewTodo, successMsg, deleteMsg }) => {
    const [newTodo, setNewTodo] = useState({ text: '' });

    const { text } = newTodo;

    const handleSubmit = e => {
        e.preventDefault();
        addNewTodo(newTodo);
        setNewTodo({ text: '' });
    };

    const handleChange = e => {
        setNewTodo({ id: Date.now(), text: e.target.value, completed: false });
    };

    return (
        <div>
            {
                successMsg ? <AlertMsg msg={successMsg} alertClass='AlertMsg' /> : null
            }
            {
                deleteMsg ? <AlertMsg msg={deleteMsg} alertClass='AlertMsg' deleteAlert /> : null
            }
            <form className={classes.AddTodoForm} onSubmit={handleSubmit}>
                <input type='text' placeholder='Add new todo...' onChange={handleChange} value={text} required />
                <button>Submit</button>
            </form>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    addNewTodo: newTodo => dispatch(addNewTodo(newTodo))
});

const mapStateToProps = state => ({
    successMsg: state.todo.successMsg,
    deleteMsg: state.todo.deleteMsg
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoForm);