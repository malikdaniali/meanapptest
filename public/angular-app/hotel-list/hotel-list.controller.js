angular.module('meanhotel').controller('HotelsController', HotelsController);

function HotelsController(hotelDataFactory) {
    var vm = this;
    vm.title = "This is mean hotel App"; 

    hotelDataFactory.hotelList().then(function(response){
        //console.log(response); 
        vm.hotels = response;
    });
}    