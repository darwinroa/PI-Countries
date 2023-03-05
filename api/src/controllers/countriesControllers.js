const axios = require('axios');

const getAllCountries = async () => ( await axios.get('https://restcountries.com/v3.1/all/') ).data; 

module.exports = {
    getAllCountries,
}