var mongoose = require('mongoose');
var Hotel = mongoose.model('Hotel');


module.exports.reviewsGetAll = function (req, res){

    var hotelId = req.params.hotelId;

    console.log('GET hotelId', hotelId);

    Hotel
        .findById(hotelId)
        .select('reviews')
        .exec(function (err, doc) {  
            res
                .status(200)
                .json(doc);
        }); 
};  

// GET single review for a hotel
module.exports.reviewsGetOne = function (req, res) {
    var hotelId = req.params.hotelId;
    var reviewId = req.params.reviewId;
    console.log('GET reviewId ' + reviewId + ' for hotelId ' + hotelId);

    Hotel
        .findById(hotelId)
        .select('reviews')
        .exec(function (err, hotel) {
            console.log("Hotel : "+ hotel);
            var review = hotel.reviews.id(reviewId);
            res
                .status(200)
                .json(review);
        });
};