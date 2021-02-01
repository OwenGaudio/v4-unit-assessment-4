import React, {Component} from 'react';

class Form extends Component {
    constructor(){
        super();
        this.state = {
            task: ''
        }
    }

    handleChange = e => {
        this.setState({
            task: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.task);
        this.setState({
            task: ''
        })
    }

    render(){
        return <div className="form-container">
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <input
                    onChange={e => this.handleChange(e)} 
                    value={this.state.task} 
                    placeholder="Add new Recipe here..." 
                    type="text"/>
                <button type="submit">Create Recipe</button>
            </form>
        </div>
    }
}

export default Form;