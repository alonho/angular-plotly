(function(){
    'use strict';
    angular.module('plotly', [])
        .directive('plotly', function() {
                   return {
                       restrict: 'E',
                       template: '<div></div>',
                       scope: {
                           data: '=',
                           layout: '=',
                           options: '='
                       },
                       link: function(scope, element) {
                           var element = element[0].children[0];
                           Plotly.newPlot(element, scope.data, scope.layout, scope.options);
                           scope.$watch('layout', function(layout, old) {
                               if (layout == old)
                                   return;
                               Plotly.relayout(element, layout);
                           }, true);
                           scope.$watch('data', function(data, old) {
                               if (data == old)
                                   return;
                               Plotly.redraw(element);
                           }, true);
                       }
                   };
        });
})();
