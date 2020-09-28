const GiphyRepository = require('../../src/repositories/giphyRepository');
const RecipeRepository = require('../../src/repositories/recipeRepository');

describe('Integridade de Apis Terceiras', () => {
    it('testando a integridade de Api RECIPE PUPPY', async () => {
        const recipeRepository = new RecipeRepository('http://www.recipepuppy.com/api/');
        const listRecipe = await recipeRepository.getRecipeByIngredients('tomato');

        expect(listRecipe.status).toBe(200);
    });

    it('testando a integridade de Api Giphy', async () => {
        const giphyRepository = new GiphyRepository('http://www.recipepuppy.com/api/', 'Dg8qpCjhIkM0568G2MMgqeyIAfVSoAXt');
        const listRecipe = await giphyRepository.getGifByTitleRecipe('tomato', 1, 0);

        expect(listRecipe.status).toBe(200);
    });
});
