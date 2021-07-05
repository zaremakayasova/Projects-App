import classes from './TodoList.module.css';
import TodoListItem from '../TodoListItem/TodoListItem';

const TodoList = () => {
    return (
        <div>
            <TodoListItem />
            <TodoListItem />
            {/* <TodoListItem />
            <TodoListItem />
            <TodoListItem />
            <TodoListItem />
            <TodoListItem />
            <TodoListItem />
            <TodoListItem />
            <TodoListItem />
            <TodoListItem /> */}
        </div>
    );
}

export default TodoList;