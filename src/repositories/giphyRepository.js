const BaseRepository = require('./contract/baseRepository');

/**
 * class GiphyRepository
 */
class GiphyRepository extends BaseRepository {
    /**
     * @desc contructor
     *
     */
    constructor() {
        super();
        this.host = process.env.GIPHY_API;
        this.apiKey = process.env.GIPHY_API_KEY;
    }

    /**
     * @param {string} titleRecipe
     * @param {number} limit
     * @param {number} offset
     * 
     * @return {object} axios get
     */
    getGifByTitleRecipe(titleRecipe, limit, offset) {
        return super.get(this.host, `?api_key=${this.apiKey}&q=${titleRecipe}&limit=${limit}&offset=${offset}`);
    }
}

module.exports = GiphyRepository;
