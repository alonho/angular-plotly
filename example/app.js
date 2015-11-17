var app = angular.module('plotlyTest', ['plotly']);
app.controller('controller', function($scope) {
    $scope.data = [{x: [1, 2, 3, 4, 5],
                    y: [1, 2, 4, 8, 16]}];
    $scope.layout = {height: 600, width: 1000, title: 'foobar'};
    $scope.options = {showLink: false, displayLogo: false};
    $scope.movePoint = function() {
        $scope.data[0].y[4]++;
    }
});
