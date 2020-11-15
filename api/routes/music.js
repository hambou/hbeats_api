const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'handling get requests from /music'
    })
})

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'handling post requests from /music'
    })
})

router.get('/:musicId', (req, res, next) => {
    res.status(200).json({
        message: 'handling get requests from /music/id id === ' + req.params.musicId
    })
})

router.patch('/:musicId', (req, res, next) => {
    res.status(200).json({
        message: 'handling patch requests from /music/id id === ' + req.params.musicId
    })
})

router.delete('/:musicId', (req, res, next) => {
    res.status(200).json({
        message: 'handling delete requests from /music/id id === ' + req.params.musicId
    })
})

module.exports = router;