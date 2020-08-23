const express = require('express');
const router = express.Router();
const bookController = require('../controllers/books');
const { response } = require('express');

/**
 * Find the book using id
 */
router.get('/find-one', async(req, res) => {
    const bookFunction = new bookController(req);
    const result = await bookFunction.findOneBook(req);
    if (result && Object.keys(result.data).length > 0) {
        res.status(200).json({
            data: result.data,
            message: result.message
        });
    } else if (Object.keys(result.data).length == 0) {
        res.status(202).json({
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

/**
 * Find all the books
 */
router.get('/find-all', async (req, res) => {
    const bookFunction = new bookController(req);
    const result = await bookFunction.findAllBook();
    if (result && Object.keys(result.data).length > 0) {
        res.status(200).json({
            data: result.data,
            message: result.message
        });
    } else if (Object.keys(result.data).length == 0) {
        res.status(202).json({
            data: result.data,
            message: result.message
        });
    } else {
        res.status(201).json({
            data: {},
            message: 'Error while processing'
        });
    }
});

/**
 * Create the book data
 */
router.post('/create', async (req, res) => {
    const bookFunction = new bookController(req.body);
    const result = await bookFunction.createBookData();
    if (result && Object.keys(result.data).length > 0) {
        res.status(200).json({
            data: result.data,
            message: result.message
        });
    } else if (Object.keys(result.data).length == 0) {
        res.status(202).json({
            data: result.data,
            message: result.message
        });
    } else {
        res.status(201).json({
            data: {},
            message: 'Error while processing'
        });
    }
});

/**
 * Update the book data
 */
router.post('/update', async (req, res) => {
    const bookFunction = new bookController(req.body);
    const result = await bookFunction.updateBookData();
    if (Object.keys(result.data).length > 0) {
        res.status(200).json({
            data: result.data,
            message: result.message
        });
    } else if (Object.keys(result.data).length == 0) {
        res.status(202).json({
            data: result.data,
            message: result.message
        });
    } else {
        res.status(201).json({
            data: {},
            message: 'Error while processing'
        });
    }
});

module.exports = router;