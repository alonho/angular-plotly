var app = angular.module('plotlyTest', ['plotly']);
app.controller('controller', function($scope, $timeout) {
    $scope.data = [{x: [1, 2, 3, 4, 5],
                    y: [1, 2, 4, 8, 16]}];
    $scope.layout = {height: 600, width: 1000, title: 'foobar'};
    $scope.options = {showLink: false, displayLogo: false};
    $scope.movePoint = function() {
        // deep watch will pick up change.
        $scope.data[0].y[4]++;
    }
    $scope.NumberOfSelectedPoints = 0;
    $scope.plotlyEvents = function (graph){
      // Create custom events that subscribe to graph
      graph.on('plotly_selected', function(event){
        if (event) {
            $timeout(function() {
                $scope.NumberOfSelectedPoints = event.points.length;
            });          
        }
      });
    };
});
