const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.status(200).send('Aquí se hace la petición a la API');
})

router.get('/:id', (req, res) => {
    res.status(200).send('Quiero ver el detalle');
})

module.exports = router;