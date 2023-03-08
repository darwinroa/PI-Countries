const { getAllActivities, createActivity } = require('../controllers/activitiesControllers');

const getActivitiesHandler = (req, res) => {
    res.status(200).send(getAllActivities);
}

const createActivityHandler = (req,res) => {
    res.status(200).send(createActivity);
}

module.exports = {
    getActivitiesHandler,
    createActivityHandler
}