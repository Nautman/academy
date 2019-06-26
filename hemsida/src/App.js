import React, { Suspense } from 'react';
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

const Home = React.lazy(() => import('./containers/HomePage'))
const About = () => <div>About</div>

function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/todo" component={TodoList} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
