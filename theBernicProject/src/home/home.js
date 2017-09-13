var homeApp = angular.module('HomeApp',[]);

// Experience Card Controller
homeApp.controller("ExperienceCardCtrl",function($scope, $rootScope, $location){
    //experienceCardData - It is an object which stores the urls & data of cities
    $scope.experienceCardData = [
        {
            url: "https://www.filepicker.io/api/file/XjXg5l5VThaaELADqKAw",
            experienceId:"Here should be id",
            cityDescription: "Ancient Knife-making Workshop and Vietnamese Cooking Classes",
            cityName: "Hanoi center",
            countryName: "Vietnam",
            tourDetails: {
                timeInterval: "4 to 5 HOURS",
                language: "English",
                timeDetails: "8:00 AM to 1:00 PM or 3.30 pm to 7.30 PM"
            },
            aboutExperience: "If you are in love with Vietnamese food and would like to get to know more about Hanoian lifestyle and culture, you are warmly welcome to join my cooking classes. You will not only learn how to make dozens of delicious recipes but also have a “truly local” experience when you explore local life in the old quarters of Hanoi with me. " +
            "You can choose whether you want to follow your chef to the open market and shop or if you want everything purchased before you come, we can do that too." +
            " You are also requested to let us know before hand if you have any allergies or dietary restrictions to any kind of food as well as if you like your food spicy, mild or with no spices.",
            whatIncluded: [
                "English speaking guide",
                "Groceries and meat used to cook the food",
                "Hands-on demonstration",
                "1 drink (local beer)"
            ],
            whatExcluded: [
                "Transport"
            ],
            transportation: "Not Included",
            groupSize: "Maximum up to 4 people, 50$ for a single class, 75$ for 2 people and 96$ for 3 people.",
            cancellationPolicy: "If cancelled 3 days before the class, then 25% charged, 2 days before the class then 30% charged and if canceled on date of class then 100% charged and no refund is given.",
            category: [
                "Family friendly",
                "Cooking",
                "Food",
                "Shopping",
                "Traditional"
            ],
            goodFor: [
                "Families",
                "Senior citizens",
                "Couples",
                "Group of friends",
                "Solo travelers"
            ],
            hostImg: "https://www.filepicker.io/api/file/RNz8jv93SV6j0fC0QY5Y",
            aboutHost:"Hello! My name is Thanh. I graduated from Ha Noi University of Science in January 2015. I speak English fluently and it is during my time at the University that my",
            credentials:"Undergraduate degree in Environmental Science"
        },
        {
            url: "https://www.filepicker.io/api/file/rHKIXoCFT7CHiiRZMHc3",
            experienceId:"Here should be id",
            cityDescription: "Vegetarian and vegan delicacies with an impassioned local foodie",
            cityName: "Hanoi center",
            countryName: "Vietnam",
            tourDetails: {
                timeInterval: "4 to 5 HOURS",
                language: "English",
                timeDetails: "8:00 AM to 1:00 PM or 3.30 pm to 7.30 PM"
            },
            aboutExperience: "If you are in love with Vietnamese food and would like to get to know more about Hanoian lifestyle and culture, you are warmly welcome to join my cooking classes. You will not only learn how to make dozens of delicious recipes but also have a “truly local” experience when you explore local life in the old quarters of Hanoi with me. " +
            "You can choose whether you want to follow your chef to the open market and shop or if you want everything purchased before you come, we can do that too." +
            " You are also requested to let us know before hand if you have any allergies or dietary restrictions to any kind of food as well as if you like your food spicy, mild or with no spices.",
            whatIncluded: [
                "English speaking guide",
                "Groceries and meat used to cook the food",
                "Hands-on demonstration",
                "1 drink (local beer)"
            ],
            whatExcluded: [
                "Transport"
            ],
            transportation: "Not Included",
            groupSize: "Maximum up to 4 people, 50$ for a single class, 75$ for 2 people and 96$ for 3 people.",
            cancellationPolicy: "If cancelled 3 days before the class, then 25% charged, 2 days before the class then 30% charged and if canceled on date of class then 100% charged and no refund is given.",
            category: [
                "Family friendly",
                "Traditional"
            ],
            goodFor: [
                "Families",
                "Senior citizens",
                "Couples",
                "Group of friends",
                "Solo travelers"
            ],
            hostImg: "https://www.filepicker.io/api/file/RNz8jv93SV6j0fC0QY5Y",
            aboutHost:"Hello! My name is Thanh. I graduated from Ha Noi University of Science in January 2015. I speak English fluently and it is during my time at the University that my",
            credentials:"Undergraduate degree in Environmental Science"
        },
        {
            url: "https://www.filepicker.io/api/file/ypHLqUlVSYedDqN8Me9C",
            experienceId:"Here should be id",
            cityDescription: "City 3",
            cityName: "Hanoi center",
            countryName: "Vietnam",
            tourDetails: {
                timeInterval: "4 to 5 HOURS",
                language: "English",
                timeDetails: "8:00 AM to 1:00 PM or 3.30 pm to 7.30 PM"
            },
            aboutExperience: "If you are in love with Vietnamese food and would like to get to know more about Hanoian lifestyle and culture, you are warmly welcome to join my cooking classes. You will not only learn how to make dozens of delicious recipes but also have a “truly local” experience when you explore local life in the old quarters of Hanoi with me. " +
            "You can choose whether you want to follow your chef to the open market and shop or if you want everything purchased before you come, we can do that too." +
            " You are also requested to let us know before hand if you have any allergies or dietary restrictions to any kind of food as well as if you like your food spicy, mild or with no spices.",
            whatIncluded: [
                "English speaking guide",
                "Groceries and meat used to cook the food",
                "Hands-on demonstration",
                "1 drink (local beer)"
            ],
            whatExcluded: [
                "Transport"
            ],
            transportation: "Not Included",
            groupSize: "Maximum up to 4 people, 50$ for a single class, 75$ for 2 people and 96$ for 3 people.",
            cancellationPolicy: "If cancelled 3 days before the class, then 25% charged, 2 days before the class then 30% charged and if canceled on date of class then 100% charged and no refund is given.",
            category: [
                "Family friendly",
                "Cooking",
                "Food"
            ],
            goodFor: [
                "Families",
                "Senior citizens",
                "Couples",
                "Group of friends",
                "Solo travelers"
            ],
            hostImg: "https://www.filepicker.io/api/file/RNz8jv93SV6j0fC0QY5Y",
            aboutHost:"Hello! My name is Thanh. I graduated from Ha Noi University of Science in January 2015. I speak English fluently and it is during my time at the University that my",
            credentials:"Undergraduate degree in Environmental Science"
        },
        {
            url: "./images/Brooklyn.png",
            experienceId:"Here should be id",
            cityDescription: "City 4",
            cityName: "Hanoi center",
            countryName: "Vietnam",
            tourDetails: {
                timeInterval: "4 to 5 HOURS",
                language: "English",
                timeDetails: "8:00 AM to 1:00 PM or 3.30 pm to 7.30 PM"
            },
            aboutExperience: "If you are in love with Vietnamese food and would like to get to know more about Hanoian lifestyle and culture, you are warmly welcome to join my cooking classes. You will not only learn how to make dozens of delicious recipes but also have a “truly local” experience when you explore local life in the old quarters of Hanoi with me. " +
            "You can choose whether you want to follow your chef to the open market and shop or if you want everything purchased before you come, we can do that too." +
            " You are also requested to let us know before hand if you have any allergies or dietary restrictions to any kind of food as well as if you like your food spicy, mild or with no spices.",
            whatIncluded: [
                "English speaking guide",
                "Groceries and meat used to cook the food",
                "Hands-on demonstration",
                "1 drink (local beer)"
            ],
            whatExcluded: [
                "Transport"
            ],
            transportation: "Not Included",
            groupSize: "Maximum up to 4 people, 50$ for a single class, 75$ for 2 people and 96$ for 3 people.",
            cancellationPolicy: "If cancelled 3 days before the class, then 25% charged, 2 days before the class then 30% charged and if canceled on date of class then 100% charged and no refund is given.",
            category: [
                "Traditional"
            ],
            goodFor: [
                "Families",
                "Senior citizens",
                "Couples",
                "Group of friends",
                "Solo travelers"
            ],
            hostImg: "https://www.filepicker.io/api/file/RNz8jv93SV6j0fC0QY5Y",
            aboutHost:"Hello! My name is Thanh. I graduated from Ha Noi University of Science in January 2015. I speak English fluently and it is during my time at the University that my",
            credentials:"Undergraduate degree in Environmental Science"
        },
        {
            url: "./images/mexico.png",
            experienceId:"Here should be id",
            cityDescription: "City 5",
            cityName: "Hanoi center",
            countryName: "Vietnam",
            tourDetails: {
                timeInterval: "4 to 5 HOURS",
                language: "English",
                timeDetails: "8:00 AM to 1:00 PM or 3.30 pm to 7.30 PM"
            },
            aboutExperience: "If you are in love with Vietnamese food and would like to get to know more about Hanoian lifestyle and culture, you are warmly welcome to join my cooking classes. You will not only learn how to make dozens of delicious recipes but also have a “truly local” experience when you explore local life in the old quarters of Hanoi with me. " +
            "You can choose whether you want to follow your chef to the open market and shop or if you want everything purchased before you come, we can do that too." +
            " You are also requested to let us know before hand if you have any allergies or dietary restrictions to any kind of food as well as if you like your food spicy, mild or with no spices.",
            whatIncluded: [
                "English speaking guide",
                "Groceries and meat used to cook the food",
                "Hands-on demonstration",
                "1 drink (local beer)"
            ],
            whatExcluded: [
                "Transport"
            ],
            transportation: "Not Included",
            groupSize: "Maximum up to 4 people, 50$ for a single class, 75$ for 2 people and 96$ for 3 people.",
            cancellationPolicy: "If cancelled 3 days before the class, then 25% charged, 2 days before the class then 30% charged and if canceled on date of class then 100% charged and no refund is given.",
            category: [
                "Cooking",
                "Food",
                "Shopping",
                "Traditional"
            ],
            goodFor: [
                "Families",
                "Senior citizens",
                "Couples",
                "Group of friends",
                "Solo travelers"
            ],
            hostImg: "https://www.filepicker.io/api/file/RNz8jv93SV6j0fC0QY5Y",
            aboutHost:"Hello! My name is Thanh. I graduated from Ha Noi University of Science in January 2015. I speak English fluently and it is during my time at the University that my",
            credentials:"Undergraduate degree in Environmental Science"
        },
        {
            url: "https://www.filepicker.io/api/file/XjXg5l5VThaaELADqKAw",
            experienceId:"Here should be id",
            cityDescription: "City 6",
            cityName: "Hanoi center",
            countryName: "Vietnam",
            tourDetails: {
                timeInterval: "4 to 5 HOURS",
                language: "English",
                timeDetails: "8:00 AM to 1:00 PM or 3.30 pm to 7.30 PM"
            },
            aboutExperience: "If you are in love with Vietnamese food and would like to get to know more about Hanoian lifestyle and culture, you are warmly welcome to join my cooking classes. You will not only learn how to make dozens of delicious recipes but also have a “truly local” experience when you explore local life in the old quarters of Hanoi with me. " +
            "You can choose whether you want to follow your chef to the open market and shop or if you want everything purchased before you come, we can do that too." +
            " You are also requested to let us know before hand if you have any allergies or dietary restrictions to any kind of food as well as if you like your food spicy, mild or with no spices.",
            whatIncluded: [
                "English speaking guide",
                "Groceries and meat used to cook the food",
                "Hands-on demonstration",
                "1 drink (local beer)"
            ],
            whatExcluded: [
                "Transport"
            ],
            transportation: "Not Included",
            groupSize: "Maximum up to 4 people, 50$ for a single class, 75$ for 2 people and 96$ for 3 people.",
            cancellationPolicy: "If cancelled 3 days before the class, then 25% charged, 2 days before the class then 30% charged and if canceled on date of class then 100% charged and no refund is given.",
            category: [
                "Shopping",
                "Traditional"
            ],
            goodFor: [
                "Families",
                "Senior citizens",
                "Couples",
                "Group of friends",
                "Solo travelers"
            ],
            hostImg: "https://www.filepicker.io/api/file/RNz8jv93SV6j0fC0QY5Y",
            aboutHost:"Hello! My name is Thanh. I graduated from Ha Noi University of Science in January 2015. I speak English fluently and it is during my time at the University that my",
            credentials:"Undergraduate degree in Environmental Science"
        },
        {
            url: "https://www.filepicker.io/api/file/rHKIXoCFT7CHiiRZMHc3",
            experienceId:"Here should be id",
            cityDescription: "City 7",
            cityName: "Hanoi center",
            countryName: "Vietnam",
            tourDetails: {
                timeInterval: "4 to 5 HOURS",
                language: "English",
                timeDetails: "8:00 AM to 1:00 PM or 3.30 pm to 7.30 PM"
            },
            aboutExperience: "If you are in love with Vietnamese food and would like to get to know more about Hanoian lifestyle and culture, you are warmly welcome to join my cooking classes. You will not only learn how to make dozens of delicious recipes but also have a “truly local” experience when you explore local life in the old quarters of Hanoi with me. " +
            "You can choose whether you want to follow your chef to the open market and shop or if you want everything purchased before you come, we can do that too." +
            " You are also requested to let us know before hand if you have any allergies or dietary restrictions to any kind of food as well as if you like your food spicy, mild or with no spices.",
            whatIncluded: [
                "English speaking guide",
                "Groceries and meat used to cook the food",
                "Hands-on demonstration",
                "1 drink (local beer)"
            ],
            whatExcluded: [
                "Transport"
            ],
            transportation: "Not Included",
            groupSize: "Maximum up to 4 people, 50$ for a single class, 75$ for 2 people and 96$ for 3 people.",
            cancellationPolicy: "If cancelled 3 days before the class, then 25% charged, 2 days before the class then 30% charged and if canceled on date of class then 100% charged and no refund is given.",
            category: [
                "Family friendly",
                "Cooking",
                "Food",
                "Shopping",
                "Traditional",
                "Anshul"
            ],
            goodFor: [
                "Families",
                "Senior citizens",
                "Couples",
                "Group of friends",
                "Solo travelers"
            ],
            hostImg: "https://www.filepicker.io/api/file/RNz8jv93SV6j0fC0QY5Y",
            aboutHost:"Hello! My name is Thanh. I graduated from Ha Noi University of Science in January 2015. I speak English fluently and it is during my time at the University that my",
            credentials:"Undergraduate degree in Environmental Science"
        },{
            url: "https://www.filepicker.io/api/file/ypHLqUlVSYedDqN8Me9C",
            experienceId:"Here should be id",
            cityDescription: "City 8",
            cityName: "Hanoi center",
            countryName: "Vietnam",
            tourDetails: {
                timeInterval: "4 to 5 HOURS",
                language: "English",
                timeDetails: "8:00 AM to 1:00 PM or 3.30 pm to 7.30 PM"
            },
            aboutExperience: "If you are in love with Vietnamese food and would like to get to know more about Hanoian lifestyle and culture, you are warmly welcome to join my cooking classes. You will not only learn how to make dozens of delicious recipes but also have a “truly local” experience when you explore local life in the old quarters of Hanoi with me. " +
            "You can choose whether you want to follow your chef to the open market and shop or if you want everything purchased before you come, we can do that too." +
            " You are also requested to let us know before hand if you have any allergies or dietary restrictions to any kind of food as well as if you like your food spicy, mild or with no spices.",
            whatIncluded: [
                "English speaking guide",
                "Groceries and meat used to cook the food",
                "Hands-on demonstration",
                "1 drink (local beer)"
            ],
            whatExcluded: [
                "Transport"
            ],
            transportation: "Not Included",
            groupSize: "Maximum up to 4 people, 50$ for a single class, 75$ for 2 people and 96$ for 3 people.",
            cancellationPolicy: "If cancelled 3 days before the class, then 25% charged, 2 days before the class then 30% charged and if canceled on date of class then 100% charged and no refund is given.",
            category: [
                "Family friendly",
                "Cooking",
                "Food",
                "Shopping",
                "Traditional"
            ],
            goodFor: [
                "Families",
                "Senior citizens",
                "Couples",
                "Group of friends",
                "Solo travelers"
            ],
            hostImg: "https://www.filepicker.io/api/file/RNz8jv93SV6j0fC0QY5Y",
            aboutHost:"Hello! My name is Thanh. I graduated from Ha Noi University of Science in January 2015. I speak English fluently and it is during my time at the University that my",
            credentials:"Undergraduate degree in Environmental Science"
        },
        {
            url: "./images/Brooklyn.png",
            experienceId:"Here should be id",
            cityDescription: "City 9",
            cityName: "Hanoi center",
            countryName: "Vietnam",
            tourDetails: {
                timeInterval: "4 to 5 HOURS",
                language: "English",
                timeDetails: "8:00 AM to 1:00 PM or 3.30 pm to 7.30 PM"
            },
            aboutExperience: "If you are in love with Vietnamese food and would like to get to know more about Hanoian lifestyle and culture, you are warmly welcome to join my cooking classes. You will not only learn how to make dozens of delicious recipes but also have a “truly local” experience when you explore local life in the old quarters of Hanoi with me. " +
            "You can choose whether you want to follow your chef to the open market and shop or if you want everything purchased before you come, we can do that too." +
            " You are also requested to let us know before hand if you have any allergies or dietary restrictions to any kind of food as well as if you like your food spicy, mild or with no spices.",
            whatIncluded: [
                "English speaking guide",
                "Groceries and meat used to cook the food",
                "Hands-on demonstration",
                "1 drink (local beer)"
            ],
            whatExcluded: [
                "Transport"
            ],
            transportation: "Not Included",
            groupSize: "Maximum up to 4 people, 50$ for a single class, 75$ for 2 people and 96$ for 3 people.",
            cancellationPolicy: "If cancelled 3 days before the class, then 25% charged, 2 days before the class then 30% charged and if canceled on date of class then 100% charged and no refund is given.",
            category: [
                "Family friendly",
                "Cooking",
                "Food",
                "Shopping",
                "Traditional",
                "Testing"
            ],
            goodFor: [
                "Families",
                "Senior citizens",
                "Couples",
                "Group of friends",
                "Solo travelers"
            ],
            hostImg: "https://www.filepicker.io/api/file/RNz8jv93SV6j0fC0QY5Y",
            aboutHost:"Hello! My name is Thanh. I graduated from Ha Noi University of Science in January 2015. I speak English fluently and it is during my time at the University that my",
            credentials:"Undergraduate degree in Environmental Science"
        },
        {
            url: "./images/mexico.png",
            experienceId:"Here should be id",
            cityDescription: "City 10",
            cityName: "Hanoi center",
            countryName: "Vietnam",
            tourDetails: {
                timeInterval: "4 to 5 HOURS",
                language: "English",
                timeDetails: "8:00 AM to 1:00 PM or 3.30 pm to 7.30 PM"
            },
            aboutExperience: "If you are in love with Vietnamese food and would like to get to know more about Hanoian lifestyle and culture, you are warmly welcome to join my cooking classes. You will not only learn how to make dozens of delicious recipes but also have a “truly local” experience when you explore local life in the old quarters of Hanoi with me. " +
            "You can choose whether you want to follow your chef to the open market and shop or if you want everything purchased before you come, we can do that too." +
            " You are also requested to let us know before hand if you have any allergies or dietary restrictions to any kind of food as well as if you like your food spicy, mild or with no spices.",
            whatIncluded: [
                "English speaking guide",
                "Groceries and meat used to cook the food",
                "Hands-on demonstration",
                "1 drink (local beer)"
            ],
            whatExcluded: [
                "Transport"
            ],
            transportation: "Not Included",
            groupSize: "Maximum up to 4 people, 50$ for a single class, 75$ for 2 people and 96$ for 3 people.",
            cancellationPolicy: "If cancelled 3 days before the class, then 25% charged, 2 days before the class then 30% charged and if canceled on date of class then 100% charged and no refund is given.",
            category: [
                "Family friendly",
                "Cooking",
                "Food",
                "Shopping",
                "Traditional"
            ],
            goodFor: [
                "Families",
                "Senior citizens",
                "Couples",
                "Group of friends",
                "Solo travelers"
            ],
            hostImg: "https://www.filepicker.io/api/file/RNz8jv93SV6j0fC0QY5Y",
            aboutHost:"Hello! My name is Thanh. I graduated from Ha Noi University of Science in January 2015. I speak English fluently and it is during my time at the University that my",
            credentials:"Undergraduate degree in Environmental Science"
        },
        {
            url: "https://www.filepicker.io/api/file/XjXg5l5VThaaELADqKAw",
            experienceId:"Here should be id",
            cityDescription: "City 11",
            cityName: "Hanoi center",
            countryName: "Vietnam",
            tourDetails: {
                timeInterval: "4 to 5 HOURS",
                language: "English",
                timeDetails: "8:00 AM to 1:00 PM or 3.30 pm to 7.30 PM"
            },
            aboutExperience: "If you are in love with Vietnamese food and would like to get to know more about Hanoian lifestyle and culture, you are warmly welcome to join my cooking classes. You will not only learn how to make dozens of delicious recipes but also have a “truly local” experience when you explore local life in the old quarters of Hanoi with me. " +
            "You can choose whether you want to follow your chef to the open market and shop or if you want everything purchased before you come, we can do that too." +
            " You are also requested to let us know before hand if you have any allergies or dietary restrictions to any kind of food as well as if you like your food spicy, mild or with no spices.",
            whatIncluded: [
                "English speaking guide",
                "Groceries and meat used to cook the food",
                "Hands-on demonstration",
                "1 drink (local beer)"
            ],
            whatExcluded: [
                "Transport"
            ],
            transportation: "Not Included",
            groupSize: "Maximum up to 4 people, 50$ for a single class, 75$ for 2 people and 96$ for 3 people.",
            cancellationPolicy: "If cancelled 3 days before the class, then 25% charged, 2 days before the class then 30% charged and if canceled on date of class then 100% charged and no refund is given.",
            category: [
                "Testing"
            ],
            goodFor: [
                "Families",
                "Senior citizens",
                "Couples",
                "Group of friends",
                "Solo travelers"
            ],
            hostImg: "https://www.filepicker.io/api/file/RNz8jv93SV6j0fC0QY5Y",
            aboutHost:"Hello! My name is Thanh. I graduated from Ha Noi University of Science in January 2015. I speak English fluently and it is during my time at the University that my",
            credentials:"Undergraduate degree in Environmental Science"
        }
    ];
    // Card click
    $scope.cardClick = function (data) {
        $rootScope.clickCardData = data;
        $location.path('/experienceDetails');
    };

});

//Filter category controller
homeApp.controller("CategoryCtrl",function ($scope) {
    $scope.categoryStatus = {
        isopen: false
    };
    //Category Menu
    $scope.categoryMenu = ["Family friendly",
        "Cooking",
        "Food",
        "Shopping",
        "Traditional",
        "Anshul",
    "Testing"];

});
homeApp.controller("CategorySearchCtrl",function($scope){
    $scope.dropboxitemselected=function(categoryItems){
        $scope.categoryFilter= categoryItems;
    }
    $scope.removeFilter=function(){
        $scope.categoryFilter="";
    }
});