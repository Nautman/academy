import React from "react"

class TodoItems extends React.Component{
	createFruit(fruit){
		return(
			<li 
			key = {fruit.key} 
			style = {{color: (fruit.color)}}>
				{fruit.text}
			</li>
		)
	}
	render(){
		const todoFruits = this.props.fruits
		const listFruits = todoFruits.map(this.createFruit)

		return <ul>{listFruits}</ul> 
	}
}

export default TodoItems