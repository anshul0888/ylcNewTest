const expApp = angular.module("ExperienceApp",[]);

expApp.controller("ExperienceDataCtrl",function($scope, $rootScope){
    $scope.expData = $rootScope.clickCardData;
});


//Experience Carousel Controller
expApp.controller('CarouselDemoCtrl', function ($scope, $rootScope) {
    $scope.myInterval = 3000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [];
    var currIndex = 0;

    $scope.addSlide = function() {
        var newWidth = 450 + slides.length + 1;
        slides.push({
            image: $rootScope.clickCardData.experience_photos,
            id: currIndex++
        });
    };
    for (var i = 0; i < $rootScope.clickCardData.experience_photos.length; i++) {
        $scope.addSlide();
    }
});