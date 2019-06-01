import React from 'react';
import './App.css';
import TodoList from './components/TodoList'
import TodoItems from './components/TodoItems'

class App extends React.Component {
  constructor(){
    super();
    this.state = {

      currentFruit: {text: '', color: null, key: ''},

      fruits: [],

    }
  }

  handleFruit = el => {
    const itemText = el.target.value
    const currentFruit = { 
      text: itemText, 
      color: (Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), 1), 
      key: Date.now()
    }
    this.setState({currentFruit})
  }

  addFruit = el => {
    el.preventDefault()
    console.log(el.target.value)

    const newFruit = this.state.currentFruit
    if(newFruit.text !== ''){
      const fruits = [...this.state.fruits, newFruit]
      this.setState({
        fruits,
        currentFruit: { text: "", color: null, key: ""}
      })
    }
  }

  render() {
    return (
      <div className="App">
        <TodoList 
        addFruit = {this.addFruit}
        inputElement = {this.inputElement}
        handleInput = {this.handleInput}
        currentFruit = {this.state.currentFruit}
        />
        <TodoItems fruits = {this.state.fruits}/>
      </div>
    );
  }
}

export default App;
