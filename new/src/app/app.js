angular.module( 'ylc', [
  'templates-app',
  'templates-common',
  'ylc.home',
  'ylc.experiences',
  'ui.router'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/home' );
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | YLC - The Bernic Hotel' ;
    }
  });
})

// Logo Controller
    .controller("LogoCtrl",function($scope,$rootScope, $q, $http){
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

    })

    // Navigation Bar Controller
    .controller("NavBarCtrl",function($scope){
        $scope.isNavCollapsed = true;
        $scope.ylcLogo = './assets/images/ylcLogo.png';
    })

    .controller("RefreshCtrl",function ($location) {
        // $location.path("/");
    });

