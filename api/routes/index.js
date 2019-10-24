var express = require('express');
var router = express.Router();

var crtlHotels = require('../controllers/hotels.controllers.js');

router
    .route('/hotels')
    .get(crtlHotels.hotelsGetAll);

router
    .route('/hotels/:hotelId')
    .get(crtlHotels.hotelsGetOne);

router
    .route('/hotels/new')
    .post(crtlHotels.hotelsAddOne)

module.exports = router;
