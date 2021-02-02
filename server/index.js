const express = require('express');
const ctrl = require('./controller.js');

const app = express();
// top level middleware -- JSON parser
app.use(express.json());

// Endpoints
app.get('/api/recipes', ctrl.getRecipes);
app.post('/api/recipes', ctrl.addRecipe);
app.put('/api/recipes/:id', ctrl.cookedRecipe);
app.delete('/api/recipes/:id', ctrl.deleteRecipe);

const port = 4000;
app.listen(port, () => console.log(`Listening on port ${port}`));