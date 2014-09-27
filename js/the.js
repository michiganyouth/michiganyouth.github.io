var app = angular.module('theApp', []);

app.controller('theCtrl', [ '$scope', function ($scope) {
    $scope.test = '';
    $scope.click = function () {
        console.log('this is working');
        console.log('test: ' + $scope.test);
    };
}]);

