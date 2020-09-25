// eslint-disable-next-line new-cap
const routes = require('express').Router();


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
 *         description: id collection
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
routes.get('/recipes/', async (req, res) => {
    res.send('Hello World');
});


/** Redirect to swagger route */
routes.get('/', (req, res) => {
    res.redirect('/api-docs');
});

module.exports = routes;
