const { Router } = require('express');
const { getActivitiesHandler, createActivityHandler } = require('../handlers/activitiesHandlers');
const validateActivity = require('../middlewares/validateFormActivities');
const uniqueTourActivity = require('../middlewares/validateUniqueTourName');

const router = Router();

router.get('/', getActivitiesHandler);

router.post('/', validateActivity, uniqueTourActivity, createActivityHandler);

module.exports = router;