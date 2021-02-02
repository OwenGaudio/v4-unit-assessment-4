import React from 'react';

const Recipe = props => {
    return <div className="recipe">
        <div className={!props.recipe.complete ? 'recipe-text' : 'recipe-text complete'}>{props.recipe.text}</div>
        <div className="btn-container">
            <button onClick={() => props.completeRecipe(props.recipe.id)}>{!props.recipe.complete ? 'Edit' : 'Done'}</button>
            <button onClick={() => props.deleteRecipe(props.recipe.id)}>X</button>
        </div>
    </div>
}

export default Recipe;