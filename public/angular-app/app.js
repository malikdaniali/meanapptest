angular.module('meanhotel',['ngRoute','angular-jwt']).config(config).run(run);


function config($httpProvider, $routeProvider){
    $httpProvider.interceptors.push('AuthInterceptor');

    $routeProvider
        .when('/',{
            templateUrl: 'angular-app/main/main.html',
            access: {
                restriction: false
            }
        })
        .when('/hotels',{  
            templateUrl: 'angular-app/hotel-list/hotels.html',
            controller: HotelsController,
            controllerAs: 'vm',
            access: {
                restriction: false
            } 
        })
        .when('/hotels/new', {
            templateUrl: 'angular-app/hotel-new/new.html',
            controller: NewController,
            controllerAs: 'vm',
            access: {
                restriction: false
            }
        })
        .when('/hotel/:id',{
            templateUrl: 'angular-app/hotel-display/hotel.html',
            controller: HotelController,
            controllerAs: 'vm',
            access: {
                restriction: false
            }
        })
        .when('/register',{
            templateUrl: 'angular-app/register/register.html',
            controller: RegisterController,
            controllerAs: 'vm',
            access: {
                restriction: false 
            }
        })
        .when('/profile',{
            templateUrl: 'angular-app/profile/profile.html',
            controllerAs: 'vm',  
            access: {
                restriction: true
            }
        })
        .otherwise({
            redirectTo: '/'
        });
} 

function run($rootScope, $location, $window, AuthFactory){
    $rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute){
        if(nextRoute.access !== undefined && nextRoute.access.restriction && !$window.sessionStorage.token && !AuthFactory.isLoggedIn)
        {
            event.preventDefault();
            $location.path('/');
        }
    })
}