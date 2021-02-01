import React, {Component} from 'react';
import axios from 'axios';
import Todo from './Todo.js';
import Form from './Form.js';

class Main extends Component {
    constructor(){
        super();
        this.state = {
            todos: []
        }
        this.getTodos = this.getTodos.bind(this)
    }

    componentDidMount(){
        this.getTodos();
    }

    getTodos = () => {
        axios.get('/api/todos')
        .then( res => {
            this.setState({
                todos: res.data
            })
        }).catch( err => console.log(err))
    }

    addTodo = task => {
        axios.post('/api/todos', {task})
        .then(res => {
            this.setState({
                todos: res.data
            })
        }).catch( err => console.log(err))
    }

    completeTodo = id => {
        axios.put(`/api/todos/${id}`)
        .then( res => {
            this.setState({
                todos: res.data
            })
        }).catch(err => console.log(err))
    }

    deleteTodo = id => {
        axios.delete(`/api/todos/${id}`)
        .then( res => {
            this.setState({
                todos: res.data
            })
        }).catch(err => console.log(err))
    }

    render(){
        console.log(this.state.todos)
        const mappedTodos = this.state.todos.map( todo => {
            return <Todo 
                key={todo.id} 
                todo={todo}
                completeTodo={this.completeTodo}
                deleteTodo={this.deleteTodo}/>
        })
        return <div className="main">
            <Form addTodo={this.addTodo}/>
            {mappedTodos}
        </div>
    }
}

export default Main;