(function() {
    'use strict';
    angular.module('plotly', []).directive('plotly', [
        '$window',
        function($window) {
            return {
                restrict: 'E',
                template: '<div></div>',
                scope: {
                    plotlyData: '=',
                    plotlyLayout: '=',
                    plotlyOptions: '='
                },
                link: function(scope, element) {
                    var graph = element[0].children[0];
                    var initialized = false;

                    function onUpdate() {
                        //No data yet, or clearing out old data
                        if (!(scope.plotlyData)) {
                            if (initialized) {
                                Plotly.Plots.purge(graph);
                                graph.innerHTML = '';
                            }
                            return;
                        }
                        //If this is the first run with data, initialize
                        if (!initialized) {
                            initialized = true;
                            Plotly.newPlot(graph, scope.plotlyData, scope.plotlyLayout, scope.plotlyOptions);
                        }
                        graph.layout = scope.plotlyLayout;
                        graph.data = scope.plotlyData;
                        Plotly.redraw(graph);
                        Plotly.Plots.resize(graph);
                    }

                    function onResize() {
                        if (!(initialized && scope.plotlyData)) return;
                        Plotly.Plots.resize(graph);
                    }

                    scope.$watchGroup([
                        function() {
                            return scope.plotlyLayout;
                        },
                        function() {
                            return scope.plotlyData;
                        }
                    ], function(newValue, oldValue) {
                        if (angular.equals(newValue, oldValue)) return;
                        onUpdate();
                    }, true);

                    scope.$watch(function() {
                        return {
                            'h': element[0].offsetHeight,
                            'w': element[0].offsetWidth
                        };
                    }, function(newValue, oldValue) {
                        if (angular.equals(newValue, oldValue)) return;
                        onResize();
                    }, true);

                    angular.element($window).bind('resize', onResize);
                }
            };
        }
    ]);
})();
