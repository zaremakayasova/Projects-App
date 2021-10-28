import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MyTodoList from "./components/MyTodoList/MyTodoList/MyTodoList";
import BirthDayReminder from "./components/BirthDayReminder/BirthDay/BirthDay";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <MyTodoList />
        </Route>
        <Route exact path="/birthday-reminder">
          <BirthDayReminder />
        </Route>
      </Router>
    </div>
  );
};

export default App;
