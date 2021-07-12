import classes from './TotalCompleteItems.module.css';
import { connect } from 'react-redux';

const TotalCompleteItems = ({ todoList }) => {
    const completedTodos = todoList.filter(todoItem => todoItem.completed === true);
    return (
        <div className={classes.TotalItems}>
            <h2>Total complete items: {completedTodos.length}</h2>
        </div>
    );
};

const mapStateToProps = state => ({
    todoList: state.todo.todoList
});

export default connect(mapStateToProps)(TotalCompleteItems);