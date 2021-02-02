import React, {Component} from 'react';

class Form extends Component {
    constructor(){
        super();
        this.state = {
            text: ''
        }
    }

    handleChange = e => {
        this.setState({
            text: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addRecipe(this.state.text);
        this.setState({
            text: ''
        })
    }

    render(){
        return <div className="form-container">
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <input
                    onChange={e => this.handleChange(e)} 
                    value={this.state.text} 
                    placeholder="Add new Recipe here..." 
                    type="text"/>
                <button type="submit">Create Recipe</button>
            </form>
        </div>
    }
}

export default Form;