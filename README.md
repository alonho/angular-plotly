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

Add a chart:

```html
<plotly data="data" layout="layout" options="options"></plotly>
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
