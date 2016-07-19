# Angular Plotly.js

## Usage

Install with bower:

```bash
bower install angular-plotly
```

Include angular, plotly and angular-plotly:

```html
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular.min.js"></script>
<script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
<script src="bower_components/angular-plotly/src/angular-plotly.js"></script>
```

Add plotly dependency:

```js
var app = angular.module('yourApp', ['plotly']);
```


Add a chart:

```html
<plotly plotly-data="data" plotly-layout="layout" plotly-options="options"></plotly>
```

The values expected for `data`, `layout` and `options` can be found in [plotly's documentation](https://plot.ly/javascript/).

## Running the example

Run a simple webserver from the root of your repository:

```bash
python -m SimpleHTTPServer 8000
```

Open the following url:

```
http://127.0.0.1:8000/example/index.html
```

## Optional Event Subscription:

Plotly can also be initialized with `plotly-events`
```html
<plotly plotly-data="data" plotly-layout="layout" plotly-options="options" plotly-events="plotlyEvents"></plotly>
```
Where `plotlyEvents` is a function that accepts the `plotly.graph` Object as a parameter.
This function is only called once during initialization and can be used to create listeners for the various
plot events such as:
 * plotly_click
 * plotly_beforehover
 * plotly_hover
 * plotly_unhover
 * plotly_relayout
 * plotly_selecting
 * plotly_deselect
 * plotly_doubleclick
 * plotly_beforeexport
 * plotly_afterexport
 * plotly_afterplot
 * plotly_redraw
 * plotly_clickannotation

An example `plotlyEvents` definition is:

```javascript
$scope.NumberOfSelectedPoints = 0;
$scope.plotlyEvents = function (graph){
  graph.on('plotly_selecting', function(event){
    if (event) {
      $scope.NumberOfSelectedPoints = event.points.length;
      $scope.$digest();
    }
  });
};
```
