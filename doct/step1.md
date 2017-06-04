## webpack.config.js
* Simply way to plugin the bundle.js inside the html file
```
/*index.html file*/
<html>
<head>
</head>
<body>
<div id="root"></div>
<script text="text/javascript" src="bundle.js"></script>
</body>
</html>
```
* Better way to do that:
```
/*Inside the webpack.config.js use the plugins*/

new HtmlWebpackPlugin({
          template: __dirname + '/app/index.tmpl.html'
      }),

```
