import React from 'react';
import '../css/todoList.css';

class TodoList extends React.Component{

	componentDidUpdate(){
		this.props.inputElement.current.focus()
	}


	render(){
		return(
			<div className = "Main">

				<form onSubmit = {this.props.addFruit}>

					<input 
					placeholder = "Frukt"
					ref = {this.props.inputElement}
					value = {this.props.currentFruit.text}
					onChange = {this.props.handleInput}
					/>

					<button type = "submit"> Lägg till frukt </button>

				</form>

			</div>
		)
	}
}

export default TodoList;