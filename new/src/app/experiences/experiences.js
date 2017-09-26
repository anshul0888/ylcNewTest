
angular.module( 'ylc.experiences', [
  'ui.router',
  'plusOne'
])
.config(function config( $stateProvider ) {
  $stateProvider.state( 'experiences', {
      url: '/experiences',
      views: {
        "main": {
          templateUrl: 'experiences/experiences.tpl.html'
        }
      },
      data:{ pageTitle: 'Experiences' },
      abstract : true
  }).state( 'experiences.detail', {
      url: '/:experience_id',
      views: {
          "experience": {
              controller: 'ExperienceDataCtrl',
              templateUrl: 'experiences/experiences.detail.tpl.html'
          }
      },
      data:{ pageTitle: 'Experiences' },
      resolve : {
          experienceDetails : function($stateParams,ExperienceService) {
              return ExperienceService.getExperienceData($stateParams.experience_id);
          }
      }
  });
})
    .directive('showMore', [function() {
        return {
            restrict: 'AE',
            replace: true,
            scope: {
                text: '=',
                limit:'='
            },

            template: '<div>\
                        <p style="font-size: 15px;" ng-show="largeText"> <span ng-bind-html="filteredText"></span>\
                            <span ng-if="isShowMore">....</span>\
                            <a href="javascript:;" ng-click="showMore()" ng-show="isShowMore" style=" transition: initial">\
                                <div ng-if="largeText"  style="text-align: right; font-size: 20px; margin-top: -30px;">+</div>\
                            </a>\
                            <a href="javascript:;" ng-click="showLess()" ng-hide="isShowMore" style=" transition: initial">\
                                <div ng-if="largeText"  style="text-align: right; font-size: 20px; margin-top: -30px;">-</div>\
                            </a>\
                        </p>\
                        <p style="font-size: 15px;" ng-hide="largeText"><span ng-bind-html="filteredText"></span></p>\
                    </div> ',

            link: function(scope, iElement, iAttrs) {


                scope.end = scope.limit;
                scope.filteredText = scope.text.substring(0, scope.limit);
                scope.isShowMore = true;
                scope.largeText = true;

                if (scope.text.length <= scope.limit) {
                    scope.largeText = false;
                };

                scope.showMore = function() {

                    scope.end = scope.text.length;
                    scope.filteredText = scope.text;
                    scope.isShowMore = false;
                };

                scope.showLess = function() {
                    scope.filteredText = scope.text.substring(0, scope.limit);
                    scope.end = scope.limit;
                    scope.isShowMore = true;
                };
            }
        };
    }])
.controller( 'ExperienceDataCtrl', function HomeController( $scope, $rootScope,experienceDetails ) {
    console.log(experienceDetails);

    $scope.expData = experienceDetails.data;
    console.log($scope.expData);
    $rootScope.carouselPhoto = experienceDetails.data.experience_photos;
    console.log($rootScope.carouselPhoto)

    var photoCollection = $scope.expData.experience_photos;
    $scope.firstPhoto = photoCollection.splice(0, 1);
    $scope.photos = photoCollection;


    var experienceKeyVal = {
        'broadway-classic-dessert-and-history-tour' : '',
        'chelsea-and-west-village-dessert-tour' : '',
        'dessert-tour-in-hells-kitchen' : '',
        'east-village-pierogi-walk' : '',
        'entertaining-stories-with-lady-liberty-ellis-island' : '',
        'exclusive-disney-on-broadway-costume-closet' : '',
        'explore-dumbo-brooklyn-with-nancy' : '',
        'graffiti-and-street-art-walking-tour-in-brooklyn' : '',
        'history-of-statue-of-liberty-ellis-island' : '',
        'italians-of-greenwich-village' : '',
        'meatball-crawl-of-greenwich-village' : '',
        'new-yorks-underground-art-scene' : '',
        'private-photo-tours-around-new-york-city' : '',
        'world-trade-center-tour-9-11-museum' : ''
    }


})
    .factory('ExperienceService', function ($http) {
        return {
            getExperienceData: function (experience_id) {
                return $http.get('https://ylc-api.herokuapp.com/hotels/the_bernic_hotel_nyc/hotel_experiences/' + experience_id)
            }
        }
    })



    // //ExpControllers
    // .controller("ExperienceDataCtrl",function($scope, $rootScope){
    //     $scope.expData = $rootScope.clickCardData;
    // })


    //Experience Carousel Controller
    .controller('CarouselDemoCtrl', function ($scope, $rootScope) {
        $scope.myInterval = 3000;
        $scope.noWrapSlides = false;
        $scope.active = 0;
        var slides = $scope.slides = [];
        var currIndex = 0;

        $scope.addSlide = function() {
            var newWidth = 450 + slides.length + 1;
            slides.push({
                image: $rootScope.carouselPhoto,
                id: currIndex++
            });
        };
        console.log($rootScope.carouselPhoto.length)
        for (var i = 0; i < $rootScope.carouselPhoto.length; i++) {
            $scope.addSlide();
        }
    });


