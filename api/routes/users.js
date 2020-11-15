const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'handling get requests from /users'
    })
})

router.post('/signup', (req, res, next) => {
    res.status(200).json({
        message: 'handling post requests from /users/signup'
    })
})

router.post('/login', (req, res, next) => {
    res.status(200).json({
        message: 'handling post requests from /users/login'
    })
})

router.get('/:userId', (req, res, next) => {
    res.status(200).json({
        message: 'handling get requests from /users/id id === ' + req.params.userId
    })
})

router.patch('/:userId', (req, res, next) => {
    res.status(200).json({
        message: 'handling patch requests from /users/id id === ' + req.params.userId
    })
})

router.delete('/:userId', (req, res, next) => {
    res.status(200).json({
        message: 'handling delete requests from /users/id id === ' + req.params.userId
    })
})

module.exports = router;