angular.module('meanhotel').controller('NewController', NewController);

function NewController(hotelDataFactory, $location, AuthFactory){
    var vm = this;

    vm.newHotel = function(){

        var post = {
            name = vm.name,
            address = vm.address,
            description = vm.description,
            services = vm.services
        };

        vm.isLoggedIn = function () {
            if (AuthFactory.isLoggedIn) {
                return true;
            } else {
                return false;
            }
        };

        hotelDataFactory.newHotel(post).then(function(response){
            $location.path('#!/hotels').replace();
        }).catch(function(error){
            console.log(error);
        }); 

    }
}