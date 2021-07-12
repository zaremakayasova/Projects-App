import classes from './TodoListItem.module.css';
import { connect } from 'react-redux';
import { deleteTodo, editTodo, toggleComplete } from '../../../redux/todo/todo.actions';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';


const TodoListItem = ({ todoItem, deleteTodo, editTodo, toggleComplete }) => {
    const { id, text, completed } = todoItem;

    const handleDelete = todoToDelete => {
        if (window.confirm('Are you sure you wish to delete this todo?')) deleteTodo(todoToDelete);
    };

    const handleEdit = todoToEdit => {
        editTodo(todoToEdit);
    };

    const handleChange = () => {
        toggleComplete({ id, text, completed: !completed });
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
                <button className={classes.TodoListBtnEdit} onClick={() => handleEdit(todoItem)}>Edit <AiFillEdit /></button>
                <button className={classes.TodoListBtnDelete} onClick={() => handleDelete(todoItem)}>Delete <AiFillDelete /></button>
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    deleteTodo: todoToDelete => dispatch(deleteTodo(todoToDelete)),
    editTodo: todoToEdit => dispatch(editTodo(todoToEdit)),
    toggleComplete: completedTodo => dispatch(toggleComplete(completedTodo)),

});

export default connect(null, mapDispatchToProps)(TodoListItem);