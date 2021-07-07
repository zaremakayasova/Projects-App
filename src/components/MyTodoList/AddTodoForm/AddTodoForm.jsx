import { useState } from 'react';
import { connect } from 'react-redux';
import classes from './AddTodoForm.module.css';
import { addNewTodo } from '../../../redux/todo/todo.actions';

const AddTodoForm = ({ addNewTodo }) => {
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
        <form className={classes.AddTodoForm} onSubmit={handleSubmit}>
            <input type='text' placeholder='Add new todo...' onChange={handleChange} value={text} />
            <button>Submit</button>
        </form>
    );
};

const mapDispatchToProps = dispatch => ({
    addNewTodo: newTodo => dispatch(addNewTodo(newTodo))
});

export default connect(null, mapDispatchToProps)(AddTodoForm);