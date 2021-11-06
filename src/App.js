import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage/Home/HomePage";
import MyTodoList from "./components/MyTodoList/MyTodoList/MyTodoList";
import BirthDayReminder from "./components/BirthDayReminder/BirthDay/BirthDay";
import ToursContainer from "./components/Tours/ToursContainer/ToursContainer";
import Reviews from "./components/Reviews/Reviews/Reviews";
import Accordion from "./components/Accordion/Accordion/Accordion";
import MenuContainer from "./components/Menu/MenuContainer/MenuContainer";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/mytodo-list">
          <MyTodoList />
        </Route>
        <Route exact path="/birthday-reminder">
          <BirthDayReminder />
        </Route>
        <Route exact path="/tours">
          <ToursContainer />
        </Route>
        <Route exact path="/reviews">
          <Reviews />
        </Route>
        <Route exact path="/accordion">
          <Accordion />
        </Route>
        <Route exact path="/menu">
          <MenuContainer />
        </Route>
      </Router>
    </div>
  );
};

export default App;
