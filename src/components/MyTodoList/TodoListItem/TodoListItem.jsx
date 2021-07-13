import { useState } from 'react';
import classes from './TodoListItem.module.css';
import { connect } from 'react-redux';
import { deleteTodo, editTodo, toggleComplete } from '../../../redux/todo/todo.actions';
import { AiFillDelete, AiFillEdit, AiOutlineClose } from 'react-icons/ai';

const TodoListItem = ({ todoItem, deleteTodo, editTodo, toggleComplete }) => {
    const { id, text, completed } = todoItem;

    const [todoDetails, setTodoDetails] = useState({
        id: id,
        text: text,
        completed: completed
    });

    const [editPopup, setEditPopup] = useState(false);

    const handleChange = () => {
        toggleComplete({ id, text, completed: !completed });
    };

    const handleDelete = todoToDelete => {
        if (window.confirm('Are you sure you wish to delete this todo?')) deleteTodo(todoToDelete);
    };

    const handleEditClick = () => {
        setEditPopup(!editPopup);
    };

    const handleEditChange = e => {
        const { value } = e.target;
        setTodoDetails({ ...todoDetails, text: value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        editTodo(todoDetails);
        setEditPopup(!editPopup);
    };


    return (
        <div className={completed ? classes.CheckedInput : classes.TodoListItem}>
            <div className={classes.TodoListText}>
                <input
                    type='checkbox'
                    id={id}
                    checked={completed}
                    onChange={handleChange} />
                <label htmlFor={id}>{text}</label>
            </div>
            <div className={classes.TodoListItemButtons}>
                <button className={classes.TodoListBtnEdit} onClick={() => handleEditClick(todoItem)}>Edit <AiFillEdit /></button>
                <button className={classes.TodoListBtnDelete} onClick={() => handleDelete(todoItem)}>Delete <AiFillDelete /></button>
            </div>

            {
                editPopup ? (
                    <div className={classes.TodoListEditPopup}>
                        <form className={classes.TodoListEditForm} onSubmit={handleSubmit}>
                            <AiOutlineClose onClick={handleEditClick} />
                            <input type='text' value={todoDetails.text} onChange={handleEditChange} required />
                            <button>Edit Todo</button>
                        </form>
                    </div>
                ) : null
            }
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    deleteTodo: todoToDelete => dispatch(deleteTodo(todoToDelete)),
    editTodo: todoToEdit => dispatch(editTodo(todoToEdit)),
    toggleComplete: completedTodo => dispatch(toggleComplete(completedTodo)),
});

export default connect(null, mapDispatchToProps)(TodoListItem);