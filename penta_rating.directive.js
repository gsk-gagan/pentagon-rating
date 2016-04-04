angular.module('app.directive.pentaRating', [])
.directive('pentaRating', function() {
	return {
		restrict: 'E',
		scope: {
			lighttheme: '@',
			rating: '@',
			radius: '@'
		},
		templateUrl: 'shared/penta_rating/penta_rating.view.html',
		replace: true,
		controller: ['$scope', function($scope) {

			$scope.smallPentagonClass = function() {
				if($scope.lighttheme == 'true')
					return 'lightPentagon';
				return 'darkPentagon';
			};

			$scope.r = parseInt($scope.radius, 10);
			$scope.ratingNum = parseFloat($scope.rating, 10);

			$scope.parts = [];
			for(var i=0; i<5; i++) {
				$scope.parts[i] = renderPart($scope.r, $scope.r, $scope.r, i);
			}

			$scope.smallPentagon = getPentagon($scope.r, $scope.r, $scope.r);

			$scope.getPartClass = function() {
				if($scope.lighttheme == 'true') {
					if($scope.ratingNum >=4)
						return 'penta-part-green-light';
					if($scope.ratingNum >=3 && $scope.ratingNum < 4)
						return 'penta-part-yellow-light';
					if($scope.ratingNum < 3)
						return 'penta-part-red-light';
				} else {
					if($scope.ratingNum >=4)
						return 'penta-part-green-dark';
					if($scope.ratingNum >=3 && $scope.ratingNum < 4)
						return 'penta-part-yellow-dark';
					if($scope.ratingNum < 3)
						return 'penta-part-red-dark';
				}
			};

			$scope.getPartOpacity = function(partNum) {
				var temp = $scope.ratingNum - partNum;
				if(temp < 0.15)
					return 0.15;
				else if(temp > 1)
					return 1;
				else return temp;
			};

			function givePoints(r, x0, y0, devi) {
				var points = [];

				for (var i = 0; i < 5; i++) {
					var angle = ((2 * Math.PI / 5) * i - Math.PI / 2) + Math.PI*devi/180;
					var x = x0 + (r * Math.cos(angle));
					var y = y0 + (r * Math.sin(angle));
					var point = {
						"x": x,
						"y": y
					};
					points.push(point);
				}
				return points;
			}
			
			function renderPart(r, x0, y0, n) {
				var angDevi = 0.5;
				var pointsBigFrom = givePoints(r, x0, y0*1.1, angDevi);
				var pointsBigTo = givePoints(r, x0, y0*1.1, -1*angDevi);

				var pointsSmallFrom = givePoints(0.6*r, x0, y0*1.1, angDevi);
				var pointsSmallTo = givePoints(0.6*r, x0, y0*1.1, -1*angDevi);

				var f = n;
				var t = (n+1)%5;

				var resString = "";
				resString = pointsBigFrom[f].x + "," + pointsBigFrom[f].y + " " +
							pointsBigTo[t].x + "," + pointsBigTo[t].y + " " +
							pointsSmallTo[t].x + "," + pointsSmallTo[t].y + " " +
							pointsSmallFrom[f].x + "," + pointsSmallFrom[f].y;
				
				return resString;
			}

			function getPentagon(r, x0, y0) {
				var pentaPoints = givePoints(0.6*r, x0, 1.1*y0, 0);
				var resString = "";
				for(var i=0; i<5; i++) {
					resString += pentaPoints[i].x + "," + pentaPoints[i].y + " ";
				}
				return resString;
			}
		}]
	};
});