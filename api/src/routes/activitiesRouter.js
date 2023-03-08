const { Router } = require('express');
const { getActivitiesHandler, createActivityHandler } = require('../handlers/activitiesHandlers');

const router = Router();

router.get('/', getActivitiesHandler);

router.post('/', createActivityHandler);

module.exports = router;