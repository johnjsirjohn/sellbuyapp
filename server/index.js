const bodyParser = require('body-parser');
const express = require('express');
const db = require('./db');

const Ads = require('./ads/model');
const AdsRouter = require('./ads/router');

const app = express(); //this const is the api server
const jsonParser = bodyParser.json(); //used for the server to read JSON request bodies

app.use(jsonParser);
app.use(AdsRouter);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Listening on port ${port}`));
