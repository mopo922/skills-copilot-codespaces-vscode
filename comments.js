// Create web server

// Import express
const express = require('express');

// Import module
const comments = require('../modules/comments');

// Create router
const router = express.Router();

// Create routes
router.get('/', (req, res) => {
    comments.getAllComments()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            console.log('Error: ' + err);
        });
});

router.get('/:id', (req, res) => {
    comments.getComment(req.params.id)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            console.log('Error: ' + err);
        });
});

router.post('/', (req, res) => {
    comments.addComment(req.body)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            console.log('Error: ' + err);
        });
});

router.put('/:id', (req, res) => {
    comments.updateComment(req.params.id, req.body)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            console.log('Error: ' + err);
        });
});

router.delete('/:id', (req, res) => {
    comments.deleteComment(req.params.id)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            console.log('Error: ' + err);
        });
});

// Export router
module.exports = router;