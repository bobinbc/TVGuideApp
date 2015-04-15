'use strict';


var controllers = angular.module('tvguide.controllers', []);


controllers.controller('AppCtrl', function ($scope) {
    $scope.name = "Module!";

});

controllers.controller('GetCityNameCtrl', ['$scope', '$http', function ($scope, $http) {
    // controller code goes here

    //controllers.controller('GetCityNameCtrl', function ($scope, $http) {
    //    $scope.data;
    //    $scope.city = "London";

    $scope.updateCity = function () {
        //        this.city = "Kitchener";
        //        $scope.data;
        //        this.city = "Kitchener";
        //        $scope.data;

        $http.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&&units=metric').
        success(function (data, status, headers, config) {
            $scope.data = data.data;
            console.log(data);
        }).
        error(function (data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });





    };

    $scope.change = function ($scope) {
        console.log("something changed");
    };
    //});
    }]);


controllers.controller('WeatherListCtrl', function ($scope, $http) {
    $scope.data;
    $scope.city;
    var fullScope = $scope;
    var city = fullScope.city;
    //$scope.city = "London";
    //    city = 'Kitchener';



});