const BaseRepository = require('./contract/baseRepository');

/**
 * class RecipeRepository
 */
class RecipeRepository extends BaseRepository {
    /**
     * @desc contructor
     *
     * @param {string} recipePuppyUrl
     */
    constructor(recipePuppyUrl=process.env.RECIPE_PUPPY_API) {
        super();
        this.host = recipePuppyUrl;
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
