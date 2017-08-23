const app = angular.module('YlcApp',['ui.bootstrap','ngRoute','HomeApp','ExperienceApp']);

//Routing Configurations
app.config(function($routeProvider){
    //Home Route
    $routeProvider.when('/home',{
        templateUrl:"./home/home.html"
    });
    $routeProvider.when('/experienceDetails',{
        templateUrl:"./experienceDetails/experienceDetails.html"
    });
    $routeProvider.otherwise({
        redirectTo: '/home'
    });
});

// Logo Controller
app.controller("LogoCtrl",function($scope,$rootScope){
    //Logo Variable
    $scope.logo = "theBernic";
    // Page Title Variable
    $rootScope.title = "Your Local Cousin";
})

// Navigation Bar Controller
app.controller("NavBarCtrl",function($scope){
    $scope.isNavCollapsed = true;
});