import classes from './TodoListItem.module.css';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { deleteTodo, toggleComplete } from '../../../redux/todo/todo.actions';


const TodoListItem = ({ text, id, completed, deleteTodo, toggleComplete }) => {

    const dispatch = useDispatch();

    const handleDelete = todoToDelete => {
        if (window.confirm('Are you sure you wish to delete this todo?')) deleteTodo(todoToDelete);
    };

    const handleChange = () => {
        toggleComplete({ id, text, completed: !completed })
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
            <button className={classes.TodoListBtn} onClick={() => handleDelete({ id, text })}>Delete</button>
        </div>
    );
};


const mapDispatchToProps = dispatch => ({
    deleteTodo: todoToDelete => dispatch(deleteTodo(todoToDelete)),
    toggleComplete: completedTodo => dispatch(toggleComplete(completedTodo))
});

export default connect(null, mapDispatchToProps)(TodoListItem);