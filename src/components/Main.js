import React, {Component} from 'react';
import axios from 'axios';
import Recipe from './Recipe.js';
import Form from './Form.js';

class Main extends Component {
    constructor(){
        super();
        this.state = {
            recipes: []
        }
        this.getRecipes = this.getRecipes.bind(this)
    }

    componentDidMount(){
        this.getRecipes();
    }

    getRecipes = () => {
        axios.get('/api/recipes')
        .then( res => {
            this.setState({
                recipes: res.data
            })
        }).catch( err => console.log(err))
    }

    addRecipe = text => {
        axios.post('/api/recipes', {text})
        .then(res => {
            this.setState({
                recipes: res.data
            })
        }).catch( err => console.log(err))
    }

    cookedRecipe = id => {
        axios.put(`/api/recipes/${id}`)
        .then( res => {
            this.setState({
                recipes: res.data
            })
        }).catch(err => console.log(err))
    }

    deleteRecipe = id => {
        axios.delete(`/api/recipes/${id}`)
        .then( res => {
            this.setState({
                recipes: res.data
            })
        }).catch(err => console.log(err))
    }

    render(){
        const mappedRecipes = this.state.recipes.map( recipe => {
            return <Recipe
                key={recipe.id} 
                recipe={recipe}
                cookedRecipe={this.cookedRecipe}
                deleteRecipe={this.deleteRecipe}/>
        })
        return <div className="main">
            <Form addRecipe={this.addRecipe}/>
            {mappedRecipes}
        </div>
    }
}

export default Main;