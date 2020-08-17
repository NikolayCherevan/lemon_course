const express = require('express');
const {findById} = require('./service')

const router = express.Router();

router.get('/', (req, res)=> {
    res.json(users);
})
router.get('/:id', (req, res)=> {
    const {id} = req.params;
    const user = findById(id);
    res.send(id);
    if(!user) {
        res.send(`user with id ${id} not found`)
    }
})
module.exports = router;