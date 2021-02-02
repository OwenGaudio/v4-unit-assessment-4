import React from 'react';

const Recipe = props => {
    return <div className="recipe">
        <div className={!props.recipe.cooked ? 'recipe-text' : 'recipe-text cooked'}>{props.recipe.text}</div>
        <div className="btn-container">
            <button onClick={() => props.cookedRecipe(props.recipe.id)}>{!props.recipe.cooked ? 'Cook Meal' : "Haven't made in a while"}</button>
            <button onClick={() => props.deleteRecipe(props.recipe.id)}>Delete</button>
        </div>
    </div>
}

export default Recipe;