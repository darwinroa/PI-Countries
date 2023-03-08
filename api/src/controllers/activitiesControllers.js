const { Tour } = require('../db');

const getAllActivities = 'Estoy solicitando todas las actividades';

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