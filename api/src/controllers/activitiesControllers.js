const { Tour } = require('../db');

// Get all activities
const getAllActivities = async () => await Tour.findAll();

// Creando un nuevo Activity Tour
const createActivity = async (name, difficulty, duration, season, countryID) => {
    const newActivity = await Tour.create( {
        name, 
        difficulty, 
        duration,
        season
    } );
    await newActivity.setCountries(countryID); //Se relaciona la actividad con al menos un país
    return newActivity;
}

module.exports = {
    getAllActivities,
    createActivity
}