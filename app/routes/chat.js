'use strict';

const express = require('express');
const router = express.Router();
const slug = require('slug');

router.get('/:slug', (req, res) => {
    let slug = req.params.slug;
    res.render('chat/index', {
        slug: slug
    });
});

router.post('/', (req, res) => {
    let chat = slug(req.body.name);
    res.redirect(`chat/${chat}`);
});

module.exports = router;
