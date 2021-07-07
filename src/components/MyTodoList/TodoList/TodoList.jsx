import classes from './TodoList.module.css';
import { connect } from 'react-redux';
import TodoListItem from '../TodoListItem/TodoListItem';

const TodoList = ({ todoList }) => {
    return (
        <div className={classes.TodoList}>
            {
                todoList.map(todoItem => (
                    <TodoListItem key={todoItem.id} text={todoItem.text} id={todoItem.id} completed={todoItem.completed} />
                ))
            }
        </div>
    );
}

const mapStateToProps = state => ({
    todoList: state.todo.todoList
});

export default connect(mapStateToProps)(TodoList);