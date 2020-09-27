const RecipeRepository = require('../../src/repositories/recipeRepository');

describe('Integridade de Apis Terceiras', () => {
    it('testando a integridade de Api RECIPE PUPPY', async () => {
        const recipeRepository = new RecipeRepository('http://www.recipepuppy.com/api/');
        const listRecipe = await recipeRepository.getRecipeByIngredients('tomato');

        expect(listRecipe.status).toBe(200);
    });
});
