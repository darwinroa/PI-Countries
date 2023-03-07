const axios = require('axios');
const { Country } = require('../db');


// Aquí se limpia la data recibida para setearlo con los valores que se necesitan enviar
const cleanData = (dataAPI) => 
    dataAPI.map( (elem) => {
        return {
            id: elem.cca3,
            name: elem.name.common,
            flag: elem.flags.svg || elem.flags.png,
            capital: elem.capital? elem.capital[0] : 'Not Data',
            continent: elem.continents[0],
            subregion: elem.subregion,
            area: Number(elem.area),
            population: Number(elem.population)
        };
    } );

// Cargando los datos de la API en la base de datos
const loadingApiToDataBase = async (dataToDatabase) => 
    await Country.bulkCreate(dataToDatabase);

const apiCountriesData = async () => {
    console.log('Loading data into database, please wait');
    const dataAllCountries = ( await axios.get('https://restcountries.com/v3.1/all/') ).data;
    const cleanCountriesData = cleanData(dataAllCountries);
    await loadingApiToDataBase(cleanCountriesData);
    console.log('Data successfully loaded into database');
}

const getAllCountries = async () => await Country.findAll({
    attributes: ['flag', 'name', 'continent']
});

module.exports = {
    apiCountriesData,
    getAllCountries,
}