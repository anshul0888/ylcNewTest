var app = angular.module('YlcApp',['ui.bootstrap','ngRoute','HomeApp','ExperienceApp']);

//Routing Configurations
app.config(function($routeProvider){
    //Home Route
    $routeProvider.when('/home',{
        templateUrl:"./home/home.tpl.html"
    });
    $routeProvider.when('/experienceDetails',{
        templateUrl:"./experienceDetails/experienceDetails.tpl.html"
    });
    $routeProvider.otherwise({
        redirectTo: '/home'
    });
});

// Logo Controller
app.controller("LogoCtrl",function($scope,$rootScope, $q, $http){
    //Logo Variable
    $scope.logo = "./assets/images/bernicLogo.png";
    // Page Title Variable
    $rootScope.title = "Your Local Cousin";

    // $scope.testFun = function(){
    //     $http({
    //         url : "http://localhost:3030/api/exp/users",
    //         method : "GET"
    //     }).then(function(response){
    //         console.log(response);
    //         $scope.logo = response.data.lg;
    //     },function(response){
    //         console.log("fail");
    //     });
    // };
    // $scope.testFun();

});

// Navigation Bar Controller
app.controller("NavBarCtrl",function($scope){
    $scope.isNavCollapsed = true;
    $scope.ylcLogo = './assets/images/ylcLogo.png';
});

app.controller("RefreshCtrl",function ($location) {
    $location.path("/");
});

