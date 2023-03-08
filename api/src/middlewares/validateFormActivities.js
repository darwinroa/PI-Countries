const validateActivity = (req, res, next) => {
    const arrSeason = ['summer', 'autumn', 'winter', 'spring'];

    const { name, duration, season, countryID } = req.body;

    if (!name) return res.status(400).json({ error: 'Missing name' });

    if (!duration) return res.status(400).json({ error: 'Missing duration' });
    
    if (!countryID) return res.status(400).json({ error: 'Missing Countries' });

    if (!season) return res.status(400).json({ error: 'Missing season' });

    const findSeason = arrSeason.find( elem => elem === season.toLowerCase() );

    if (!findSeason) return res.status(400).json({ error: 'Season does not match any of the options: Summer, Autumn, Winter or Spring' });
    
    next();
}

module.exports = validateActivity;