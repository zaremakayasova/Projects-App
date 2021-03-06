import { connect } from 'react-redux';
import TodoListItem from '../TodoListItem/TodoListItem';

const TodoList = ({ todoList }) => {
    return (
        <div>
            {
                todoList.map(todoItem => (
                    <TodoListItem key={todoItem.id} todoItem={todoItem} />
                ))
            }
        </div>
    );
};

const mapStateToProps = state => ({
    todoList: state.todo.todoList
});

export default connect(mapStateToProps)(TodoList);