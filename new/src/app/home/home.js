
angular.module( 'ylc.home', [
  'ui.router',
  'plusOne'
])
.config(function config( $stateProvider ) {
  $stateProvider.state( 'home', {
    url: '/home',
    views: {
      "main": {
        controller: 'HomeCtrl',
        templateUrl: 'home/home.tpl.html'
      }
    },
    data:{ pageTitle: 'Home' },
      resolve : {
          hotelDetails : function($stateParams,HomeService) {
              return HomeService.getHomeData();
          }
      }
  });
})

.controller( 'HomeCtrl', function HomeController( $scope, hotelDetails, $state) {
    console.log(hotelDetails.data.hotel_experiences);
    $scope.experienceCardData = hotelDetails.data.hotel_experiences;
    // Card click
    $scope.cardClick = function (data) {
        console.log("Data "+data);
        $state.go('experiences.detail',{experience_id : data})
    };

}).factory('HomeService', function ($http) {
    return {
        getHomeData: function () {
            return $http.get('https://ylc-api.herokuapp.com/hotels/the_bernic_hotel_nyc/')
        }
    }
})

    .controller("ExperienceCardCtrl",function($scope, $rootScope, $location, HomeService){
        //experienceCardData - It is an object which stores the urls & data of cities

        // Card click
        $scope.cardClick = function (data) {
            $rootScope.clickCardData = data;
            $location.path('/experienceDetails');
        };

    })

    //Filter category controller
    .controller("FilterCtrl",function ($scope) {
        $scope.categoryStatus = {
            isopen: false
        };
        //Category Menu
        $scope.categoryMenu = [
            "Family friendly",
            "Cooking",
            "Food",
            "Shopping",
            "Traditional",
            "Anshul",
            "Testing",
            "Category Test"
        ];
        $scope.boroughMenu = [
            "Manhattan",
            "Brooklyn",
            "Bronx",
            "Queens",
            "Borough Test"
        ];

    })

    .controller("FilterSearchCtrl",function($scope){
        $scope.categoryItemSelected = function(categoryItems){
            $scope.categoryFilter= categoryItems;
            $scope.categoryFilterDisplay = "Results: ";
            $scope.filterClicked = true;
        };
        $scope.boroughItemSelected = function(boroughItems){
            $scope.boroughFilter= boroughItems;
            $scope.categoryFilterDisplay = "Results: ";
            $scope.boroughFilterDisplay = " ";
            $scope.filterClicked = true;
        };
        $scope.removeFilter=function(){
            $scope.categoryFilter="";
            $scope.categoryFilterDisplay="";
            $scope.boroughFilterDisplay= "";
            $scope.boroughFilter="";
            $scope.filterClicked = false;
        };

    })

    .controller("HotelDescCtrl", function($scope){
        $scope.hotelDescHeadline = "Book unique tours and activities from NYC Locals";
        $scope.hotelDescData = "The Bernic Hotel offers a number of unique experiences from actual locals through our partner, Your Local Cousin. Don't just walk through Times Square, take a tour with a Broadway actor and get a behind the scenes look at the costume closet of the Lion King. Celebrating a special occasion? Take a dessert tour of the West Village and get your sugar fix! You can even take a street art tour of Williamsburg or explore DUMBO with some of the best views of the city. If you don't see an experience you want, just ask! We can also make recommendations.";
    });

