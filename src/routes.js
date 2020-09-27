// eslint-disable-next-line new-cap
const routes = require('express').Router();
const RecipeService = require('./services/recipeService');
const {validateRecipe} = require('./http/requestValidators');
const {validationResult} = require('express-validator');
const ValidationHttpException = require('./http/exceptions/validationHttpException');
const {success, error} = require('./http/responseApi');

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
 *           type: object
 *           properties:
 *               keywords:
 *                   type: array
 *                   items:
 *                      type: string
 *               recipes:
 *                   type: array
 *                   items:
 *                      type: object
 *                      properties:
 *                          title:
 *                              type: string
 *                          ingredients:
 *                              type: array
 *                              items:
 *                                  type: string
 *                          link:
 *                              type: string
 *                          gif:
 *                              type: string
 */
routes.get('/recipes/', validateRecipe, async (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            throw new ValidationHttpException('Bad Request', errors.array());
        } else {
            const data = await new RecipeService().getRecipe(req.query.i);
            res.status(200).json(success('Success', data, 200));
        }
    } catch (exception) {
        res.status(exception.statusCode()).json(error(exception.message, exception.statusCode(), exception.data));
    }
});


/** Redirect to swagger route */
routes.get('/', (req, res) => {
    res.redirect('/api-docs');
});

module.exports = routes;
