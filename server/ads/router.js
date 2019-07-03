const express = require('express');
const { Router } = require('express');
const Ads = require('./model');

const router = new Router();

//Show all ads
router.get('/ads', (request, response, next) =>
  Ads.findAll()
    .then(ads => response.send(ads))
    .catch(error => next(error))
);

module.exports = router;
