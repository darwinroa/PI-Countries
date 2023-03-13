const { getAllCountries, getCountryByID, getCountryByName } = require('../controllers/countriesControllers');

const getCountriesHandler = async (req, res) => {
    const { name } = req.query;
    try {
        if (name) {
            const countryByName = await getCountryByName(name);
            countryByName.length === 0 ? 
            res.status(404).json({error: 'Country not found'}) :
            res.status(200).json(countryByName);
        } else {
            const countries = await getAllCountries();
            res.status(200).json(countries);
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getCountryHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const country = await getCountryByID(id);
        res.status(200).json(country);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    getCountriesHandler,
    getCountryHandler
}