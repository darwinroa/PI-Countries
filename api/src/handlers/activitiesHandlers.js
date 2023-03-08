const { getAllActivities, createActivity } = require('../controllers/activitiesControllers');

const getActivitiesHandler = (req, res) => {
    res.status(200).send(getAllActivities);
}

const createActivityHandler = async (req,res) => {
    const { name, difficulty, duration, season, countryID } = req.body;
    try {
        const newTour = await createActivity(name, difficulty, duration, season, countryID);
        res.status(200).json(newTour);        
    } catch (error) {
       res.status(400).json({ error: error.message });        
    }
}

module.exports = {
    getActivitiesHandler,
    createActivityHandler
}