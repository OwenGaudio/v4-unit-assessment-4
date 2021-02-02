const recipes = [];

let id = 0;

module.exports = {
    getRecipes: (req, res) => {
        res.status(200).send(recipes);
    },
    addRecipe: (req, res) => {
        const {text} = req.body;
        const newRecipe = {id, text, cooked: false};
        recipes.push(newRecipe);
        id++;
        res.status(200).send(recipes);
    },
    cookedRecipe: (req, res) => {
        const i = recipes.findIndex( recipe => recipe.id === +req.params.id);
        recipes[i].cooked = !recipes[i].cooked;
        res.status(200).send(recipes);
    },
    deleteRecipe: (req, res) => {
        const i = recipes.findIndex( recipe => recipe.id === +req.params.id);
        recipes.splice(i, 1);
        res.status(200).send(recipes);
    }
}