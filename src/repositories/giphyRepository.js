const BaseRepository = require('./contract/baseRepository');

/**
 * class GiphyRepository
 */
class GiphyRepository extends BaseRepository {
    /**
     * @desc contructor
     *
     * @param {string} host api giphy
     * @param {string} apiKey kei api giphy
     */
    constructor(host=process.env.GIPHY_API, apiKey=process.env.GIPHY_API_KEY) {
        super();
        this.host = host;
        this.apiKey = apiKey;
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
