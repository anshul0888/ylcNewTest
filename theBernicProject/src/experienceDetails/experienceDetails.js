const expApp = angular.module("ExperienceApp",[]);

expApp.controller("ExperienceDataCtrl",function($scope, $rootScope){
    $scope.expData = $rootScope.clickCardData;
});


//Experience Carousel Controller
expApp.controller('CarouselDemoCtrl', function ($scope) {
    $scope.myInterval = 1000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [];
    var currIndex = 0;

    $scope.addSlide = function() {
        var newWidth = 450 + slides.length + 1;
        slides.push({
            image: ["./images/car1.png","./images/car2.png","https://www.filepicker.io/api/file/ypHLqUlVSYedDqN8Me9C","https://www.filepicker.io/api/file/XjXg5l5VThaaELADqKAw"],
            id: currIndex++
        });
    };

    for (var i = 0; i < 4; i++) {
        $scope.addSlide();
    }
});