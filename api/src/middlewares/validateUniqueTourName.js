const { Tour } = require("../db");

const uniqueTourActivity = async (req, res, next) => {
    const { name } = req.body;
    const findActivity =  await Tour.findAll( { where: { name } } );

    if (findActivity.length) return res.status(400).json({ error: 'Activity already exists' });
    
    next();
}

module.exports = uniqueTourActivity;