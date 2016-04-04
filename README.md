Welcome to Pentagon-Rating for AngularJS (a.k.a. penta-rating)
===================
An angularjs directive which helps you include visually amazing Pentagon style Rating.

See live example at [Used Bikes by CruzyMe](http://cruzy.me/)

More Examples:
![Sample Image](https://raw.githubusercontent.com/gsk-gagan/pentagon-rating/master/Sample.png)

----------
How To Use - Using Bower
-------------
- Download all the files using bower.
```
$ bower install penta_rating
```
- In your **index.html** include these files
```HTML
<link rel="stylesheet" href="/bower_components/penta_rating/penta_rating.style.css"/>
```
```HTML
<script src="/bower_components/penta_rating/penta_rating.directive.js"></script>
```
- In your **app.js** include your directive as
```HTML
var app = angular.module('yourAngularApp',['app.directive.pentaRating']);
```
- Use your penta-rating directive as
```HTML
<penta-rating radius="30" rating="5" lighttheme="false"></penta-rating>
```

----------
How To Use - Manually
-------------
- Download all the files of this repository to your project.
- In your **index.html** include these files
```HTML
<link rel="stylesheet" href="your_project_folder/penta_rating.style.css"/>
```
```HTML
<script src="your_project_folder/penta_rating.directive.js"></script>
```
- In your **app.js** include your directive as
```HTML
var app = angular.module('yourAngularApp',['app.directive.pentaRating']);
```
- Use your penta-rating directive as
```HTML
<penta-rating radius="30" rating="5" lighttheme="false"></penta-rating>
```

----------
Attributes
-------------
- **radius** - Approximately equal to half of the rating size
- **rating** - The value of rating which is to be used (Color is Automatically Determined)
- **lighttheme** - To specify weather the background is dark or light (So as to change the text color of the inner rating)
