// eslint-disable-next-line new-cap
const routes = require('express').Router();
const recipeService = require('./services/recipeService');
const {validateRecipe} = require('./http/requestValidators');
const {validationResult} = require('express-validator');

/**
 * @swagger
 * /recipes/:
 *   get:
 *     summary: Find an recipes with choise words
 *     description: Find an recipes with choise words
 *     tags:
 *       - recipes
 *     parameters:
 *       - in: query
 *         name: i
 *         type: array
 *         items:
 *            type: string
 *         description: the ingredient must exist in the recipe
 *     responses:
 *       200:
 *         description: Array of collection data loaded
 *         schema:
 *           type: array
 *           items:
 *              type: object
 *              properties:
 *                  _id:
 *                      type: number
 *                  name:
 *                      type: string
 *                  CEP:
 *                      type: number
 *                  CPF:
 *                      type: number
 *                  date_send:
 *                      type: string
 *                      format: date-time
 *                  address:
 *                      type: object
 *                      properties:
 *                          district:
 *                              type: string
 *                          street:
 *                              type: string
 *                          state:
 *                              type: string
 */
routes.get('/recipes/', validateRecipe, async (req, res) => {
    let {code, data} = {};
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            throw new Exception();
        } else {
            data = await recipeService.getReceipt(req.query.i.split(','));
        }
    } catch (error) {
        code = error.code;
        data = error.data;
    }
    res.status(code).json(data);
});


/** Redirect to swagger route */
routes.get('/', (req, res) => {
    res.redirect('/api-docs');
});

module.exports = routes;
