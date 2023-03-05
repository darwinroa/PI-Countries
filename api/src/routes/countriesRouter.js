const { Router } = require('express');
const { getCountriesHandler, getCountryHandler } = require('../handlers/countriesHandlers');

const router = Router();

router.get('/', getCountriesHandler);

router.get('/:id', getCountryHandler);

module.exports = router;