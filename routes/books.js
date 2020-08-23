const express = require('express');
const router = express.Router();
const bookController = require('../controllers/books');
const { response } = require('express');

router.get('/find-one', async(req, res) => {
    const bookFunction = new bookController(req);
    const result = await bookFunction.findOneBook(req);
    if (result) {
        res.json({
            data: result.data,
            message: result.message
        });
    } else {
        res.json({
            data: {},
            message: 'Error while processing'
        });
    }
});

router.get('/find-all', async (req, res) => {
    const bookFunction = new bookController(req);
    const result = await bookFunction.findAllBook();
    if (result) {
        res.json({
            data: result.data,
            message: result.message
        });
    } else {
        res.json({
            data: {},
            message: 'Error while processing'
        });
    }
});

router.post('/create', async (req, res) => {
    const bookFunction = new bookController(req.body);
    const result = await bookFunction.createBookData();
    if (result) {
        res.json({
            data: result.data,
            message: result.message
        });
    } else {
        res.json({
            data: {},
            message: 'Error while processing'
        });
    }
});

router.post('/update', async (req, res) => {
    const bookFunction = new bookController(req.body);
    const result = await bookFunction.updateBookData();
    if (result) {
        res.json({
            data: result.data,
            message: result.message
        });
    } else {
        res.json({
            data: {},
            message: 'Error while processing'
        });
    }
});

module.exports = router;