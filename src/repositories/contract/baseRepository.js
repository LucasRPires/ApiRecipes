const axios = require('axios');

/**
 * Class BaseRepository
 */
class BaseRepository {
    /**
     * @desc contructor BaseReposotiry
     */
    constructor() {

    }

    /**
     * @desc get http from axios
     *
     * @param {string} host
     * @param {string} queryString
     *
     * @return {object} axios http
     */
    get(host, queryString) {
        return axios.get(host + queryString);
    }
}

module.exports = BaseRepository;
