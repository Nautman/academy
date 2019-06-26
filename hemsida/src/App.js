import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, NavLink, Link } from 'react-router-dom'
import TodoList from './containers'

const Header = () => (
  <ul>
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
    <li>
      <NavLink to="/about">About</NavLink>
    </li>
    <li>
      <NavLink to="/todo">Todo list</NavLink>
    </li>
  </ul>
)

const Home = () => <div>Home</div>
const About = () => <div>About</div>

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/todo" component={TodoList} />
      </Switch>
    </Router>
  );
}

export default App;
