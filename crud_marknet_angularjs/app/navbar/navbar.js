'use strict';

angular.module('myApp').component('navbar', {
    templateUrl: 'navbar/navbar.html',
    controller: 'navbarCtrl',
})

.controller('navbarCtrl', function($scope, $location) {

    $scope.getLocation = function() {
        return $location.path().substring(1,$location.path().length)
    }

});