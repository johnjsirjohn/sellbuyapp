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

//Post an ad
router.post('/postad', (req, res, next) => {
  let { title, description, picture, price, email, phone } = req.body;
  Ads.create(req.body)
    .then(ad => {
      res.status(201).json({
        message: 'A New Ad Was Added',
        'new Ads': ad
      });
    })
    .catch(error => next(error));
});

module.exports = router;
