import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todo: [],
    }
  }
  componentDidMount() {
  }
  componentWillMount() {

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button onClick = {()=> {this.setState({todo: 'gurka'})}}>
            <p>
              lägg till gurka
            </p>
          </button>
          <button onClick = {()=> {this.setState({todo: 'korv'})}}>
            <p>
              lägg till korv
            </p>
          </button>
          <p>
            {this.state.todo}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            hej
          </a>
        </header>
      </div>
    );
  }
}

export default App;
