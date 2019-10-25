angular.module('meanhotel').constant('RegisterController', RegisterController);

function RegisterController($http){
    var vm = this;

    vm.register = function(){
        
        var user = {
            username: vm.username,
            password: vm.password
        };
        
        if(!vm.username || !vm.password ){
            vm.error = "Please add username and password";
        } else {
            if( vm.password !== vm.passwordRepeat ){
                vm.error = "Please make sure the password match";
            } else {
                $http.post('/api/users/register', user)
                    .then(function(result)
                        {
                            console.log(result);
                            vm.message = "Sucessful registeration, please login"                        
                        }
                    ).catch(function(error){
                    console.log(error);
                    vm.error = '';
                });      
            }
        }
    }
    
};