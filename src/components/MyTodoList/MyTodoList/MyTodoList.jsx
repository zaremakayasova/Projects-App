import classes from './MyTodoList.module.css';
import AddTodoForm from '../AddTodoForm/AddTodoForm';
import TodoList from '../TodoList/TodoList';
import TotalCompleteItems from '../TotalCompleteItems/TotalCompleteItems';
import { AiOutlineBars } from "react-icons/ai";

const MyTodoList = () => {
    return (
        <div className={classes.MyTodoList}>
            <div className={classes.MyTodoListContainer}>
                <h1><AiOutlineBars /> My Todo List</h1>
                <AddTodoForm />
                <TodoList />
                <TotalCompleteItems />
            </div>
        </div>
    );
}

export default MyTodoList;