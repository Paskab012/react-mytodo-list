import React from "react"
import Header from "./Header";
import TodosList from './TodosList'
const TodoContainer = () => {
    const state = {
        todos: [
          {
            id: 1,
            title: "Setup development environment",
            completed: true
          },
          {
            id: 2,
            title: "Develop website and add content",
            completed: false
          },
          {
            id: 3,
            title: "Deploy to live server",
            completed: false
          }
        ]
       };

    return (
        <div>
            <Header/>
        <TodosList todos={this.state.todos} />
      </div>
    )
  }

export default TodoContainer;