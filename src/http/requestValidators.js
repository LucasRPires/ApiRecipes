
const {query} = require('express-validator');


const validateRecipe = [
    query('i')
        .notEmpty().withMessage('param incorrect, expected at last an ingredient')
        .isString().withMessage('param incorrect, expected string param')
        .exists().withMessage('param incorrect, expected param "i"')
        .custom((value) => {
            if (value?.split(',').length > 3) {
                throw new Error('Lenght of ingredients exceeded, max: 3');
            }

            return true;
        }),
];

module.exports = {validateRecipe};
