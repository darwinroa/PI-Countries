const { getAllCountries } = require('../controllers/countriesControllers');

const getCountriesHandler = async (req, res) => {
    const { name } = req.query;
    try {
        if (name) res.status(200).send(`Quiero saber el detalle del país ${name}`);
    
        else {
            const countries = await getAllCountries();
            res.status(200).json(countries);
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getCountryHandler = (req, res) => {
    const { id } = req.params;
    res.status(200).send(`Quiero ver el detalle del país con el id ${id}`);
}

module.exports = {
    getCountriesHandler,
    getCountryHandler
}