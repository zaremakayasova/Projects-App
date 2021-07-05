import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MyTodoList from './components/MyTodoList/MyTodoList/MyTodoList';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Route exact path='/'>
          <MyTodoList />
        </Route>
      </Router>
    </div>
  );
}

export default App;
