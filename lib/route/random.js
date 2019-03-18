const { Router } = require('express');
// const Random = require('../models/random');
const chance = require('chance').Chance();

module.exports = Router()
    .get('/', (req, res, next) => {
        const random = chance.sentence();
        console.log(random);
        res.send({ body: random })
            .catch(next);
    })    ;
