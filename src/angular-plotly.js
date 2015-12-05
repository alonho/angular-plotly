(function(){
    'use strict';
    angular.module('plotly', [])
    .directive('plotly', function($window) {
      return {
        restrict: 'E',
        template: '<div></div>',
        scope: {
          data: '=',
          layout: '=',
          options: '='
        },
        link: function(scope, element) {
          element = element[0].children[0];
          var init = false;
          var plot = function() {
            if (init)
              return;
            else
              init = true;
            Plotly.newPlot(element, scope.data, scope.layout, scope.options);
          }

          scope.$watch('layout', function(layout, old) {
            plot();
            if (layout == old)
              return;
            Plotly.relayout(element, layout);
          }, true);

          scope.$watch('data', function(data, old) {
            plot();
            if (data == old)
              return;
            Plotly.redraw(element);
          }, true);

          var w = angular.element($window);
          scope.getWindowDimensions = function () {
            return {
              'h': w.height(),
              'w': w.width()
            };
          };
          scope.$watch(scope.getWindowDimensions, function () {
            Plotly.Plots.resize(element);
          }, true);
          w.bind('resize', function () {
            scope.$apply();
          });
        }
      };
    });
})();
