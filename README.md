# Chart.js-Rounded-Bar-Charts
Rounded Rectangles in Bar Charts

Tested with Chart.js 2.7.0

To use include the following:
```html
<script type="text/javascript" charset="utf-8" src="js/Chart.min.js"></script>
<script type="text/javascript" charset="utf-8" src="js/Chart.roundedBarCharts.min.js"></script>
```

Then set the radius in the options e.g.
```javascript
var options = {
    cornerRadius: number,
    fullCornerRadius: boolean, (default is true)
};
```

"cornerRadius" option will define how much of a curve you whant your bars to have.
"fullCornerRadius" option will make all the corners in the chart round and is a boolean; true or false.