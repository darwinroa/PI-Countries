const getCountriesHandler = (req, res) => {
    const { name } = req.query;
    if (name) res.status(200).send(`Quiero saber el detalle del país ${name}`);

    else res.status(200).send('Quiero ver todos los países');
}

const getCountryHandler = (req, res) => {
    const { id } = req.params;
    res.status(200).send(`Quiero ver el detalle del país con el id ${id}`);
}

module.exports = {
    getCountriesHandler,
    getCountryHandler
}