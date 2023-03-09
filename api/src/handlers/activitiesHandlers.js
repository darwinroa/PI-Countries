const { getAllActivities, createActivity } = require('../controllers/activitiesControllers');

const getActivitiesHandler = async (req, res) => {
    const allActivities = await getAllActivities()
    res.status(200).json(allActivities);
}

const createActivityHandler = async (req,res) => {
    const { name, difficulty, duration, season, countryID } = req.body;
    try {
        const seasonLowerCase = season.toLowerCase();
        const newTour = await createActivity(name, difficulty, duration, seasonLowerCase, countryID);
        res.status(200).json(newTour);        
    } catch (error) {
       res.status(400).json({ error: error.message });        
    }
}

module.exports = {
    getActivitiesHandler,
    createActivityHandler
}