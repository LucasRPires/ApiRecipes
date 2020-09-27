const GiphyRepository = require('../repositories/giphyRepository');
const RecipeRepository = require('../repositories/recipeRepository');
const HttpApiException = require('../http/exceptions/httpApiException');

/**
 * class RecipeService
 */
class RecipeService {
    /**
     *  @desc constructor function
     *
    */
    constructor() {
        this.giphyRepository = new GiphyRepository();
        this.recipeRepository = new RecipeRepository();
    }

    /**
     * @param {Array} ingredients
     *
     * @return {object} returns recipe object
     */
    async getRecipe(ingredients) {
        let recipes = null;

        try {
            recipes = await this.recipeRepository.getRecipeByIngredients(ingredients);

            for (const recipe of recipes.data.results) {
                const giphy = await this.giphyRepository.getGifByTitleRecipe(recipe.title, 1, 0);

                recipe.gif = giphy.data.data[0].images.original.url;
                recipe.ingredients = recipe.ingredients.replace(/\s/g, '').split(',').sort();
                recipe.link = recipe.href;

                delete recipe.href;
                delete recipe.thumbnail;
            }
        } catch (error) {
            throw new HttpApiException(error.message);
        }

        return {
            keywords: ingredients.split(','),
            recipes: recipes.data.results,
        };
    }
}

module.exports = RecipeService;
