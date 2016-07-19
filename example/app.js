var app = angular.module('plotlyTest', ['plotly']);
app.controller('controller', function($scope) {
    $scope.data = [{x: [1, 2, 3, 4, 5],
                    y: [1, 2, 4, 8, 16]}];
    $scope.layout = {height: 600, width: 1000, title: 'foobar'};
    $scope.options = {showLink: false, displayLogo: false};
    $scope.movePoint = function() {
        // change reference to trigger watch
        data = angular.copy($scope.data);
        data[0].y[4]++;
        $scope.data = data
    }
    $scope.NumberOfSelectedPoints = 0;
    $scope.plotlyEvents = function (graph){
      // Create custom events that subscribe to graph
      graph.on('plotly_selecting', function(event, eventdata){
        if (event) {
          $scope.NumberOfSelectedPoints = event.points.length;
          $scope.$digest();
        }
      });
    };
});
