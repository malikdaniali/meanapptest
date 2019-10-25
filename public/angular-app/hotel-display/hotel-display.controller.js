angular.module('meanhotel').controller('HotelController', HotelController);

function HotelController($route, hotelDataFactory, $routeParams, AuthFactory) {
    var vm = this;
    var id = $routeParams.id;

    hotelDataFactory.hotelDisplay(id).then(function (response) {
        //console.log(response);
        vm.hotel = response;
        vm.stars = _getStarsRating(response.stars);
    });

    function _getStarsRating(stars) {
        return new Array(stars);
    }

    vm.isLoggedIn = function () {
        if (AuthFactory.isLoggedIn) {
            return true;
        } else {
            return false;
        }
    };

    vm.addReview = function () {
        var postData = {
            name: vm.name,
            rating: vm.rating,
            review: vm.review
        };
        if (vm.reviewForm.$valid) {
            hotelDataFactory.postReview(id, postData).then(function (response) {
                window.location.reload();
            }).catch(function (error) {
                console.log(error);
            });
        } else {
            vm.isSubmmited = true;
        }
    };
}