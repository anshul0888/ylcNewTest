var homeApp = angular.module('HomeApp',[]);

// Experience Card Controller
homeApp.controller("ExperienceCardCtrl",function($scope, $rootScope, $location){
    //experienceCardData - It is an object which stores the urls & data of cities
    $scope.experienceCardData = [
        {
            url: "https://www.filepicker.io/api/file/XjXg5l5VThaaELADqKAw",
            experienceId:"exp1",
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
            borough:[
                "Manhattan",
                "Brooklyn"
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
            experienceId:"exp2",
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
            borough:[
                "Queens"
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
            experienceId:"exp3",
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
            borough:[
                "Manhattan",
                "Brooklyn",
                "Bronx",
                "Queens"
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
            url: "./assets/images/Brooklyn.png",
            experienceId:"exp4",
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
            borough:[
                "Manhattan",
                "Brooklyn",
                "Bronx",
                "Queens"
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
            url: "./assets/images/mexico.png",
            experienceId:"exp5",
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
            borough:[
                "Manhattan",
                "Brooklyn",
                "Bronx",
                "Queens"
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
            experienceId:"exp6",
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
            borough:[
                "Manhattan",
                "Brooklyn",
                "Bronx",
                "Queens"
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
            experienceId:"exp7",
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
            borough:[
                "Manhattan",
                "Brooklyn",
                "Bronx",
                "Queens"
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
            experienceId:"exp8",
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
            borough:[
                "Manhattan",
                "Brooklyn",
                "Bronx",
                "Queens"
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
            url: "./assets/images/Brooklyn.png",
            experienceId:"exp9",
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
            borough:[
                "Manhattan",
                "Brooklyn",
                "Bronx",
                "Queens"
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
            url: "./assets/images/mexico.png",
            experienceId:"exp10",
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
                "Traditional",
                "Category Test"
            ],
            borough:[
                "Manhattan",
                "Brooklyn",
                "Bronx",
                "Queens"
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
            experienceId:"exp11",
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
                "Testing",
                "Category Test"
            ],
            borough:[
                "Manhattan",
                "Brooklyn",
                "Bronx",
                "Queens",
                "Borough Test"
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
homeApp.controller("FilterCtrl",function ($scope) {
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

});
homeApp.controller("FilterSearchCtrl",function($scope){
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

});

homeApp.controller("HotelDescCtrl", function($scope){
    $scope.hotelDescHeadline = "Book unique tours and activities from NYC Locals";
    $scope.hotelDescData = "The Bernic Hotel offers a number of unique experiences from actual locals through our partner, Your Local Cousin. Don't just walk through Times Square, take a tour with a Broadway actor and get a behind the scenes look at the costume closet of the Lion King. Celebrating a special occasion? Take a dessert tour of the West Village and get your sugar fix! You can even take a street art tour of Williamsburg or explore DUMBO with some of the best views of the city. If you don't see an experience you want, just ask! We can also make recommendations.";
});