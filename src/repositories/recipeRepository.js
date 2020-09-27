const BaseRepository = require('./contract/baseRepository');

/**
 * class RecipeRepository
 */
class RecipeRepository extends BaseRepository {
    /**
     * @desc contructor
     *
     */
    constructor() {
        super();
        this.host = process.env.RECIPE_PUPPY_API;
    }

    /**
     * @param {string} listIngredient
     *
     * @return {object} axios http
     */
    getRecipeByIngredients(listIngredient) {
        return super.get(this.host, `?i=${listIngredient}`);
    }
}

module.exports = RecipeRepository;
