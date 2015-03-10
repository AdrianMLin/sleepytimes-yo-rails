'use strict';

angular.module('angular')
	.directive('pie', function(){
		return {
			restrict: 'E',
			templateUrl: '',
			controller: 'PiechartController',
			controllerAs: 'peCtrl',
			bindToController: true,
			scope: {
				//stuff goes here
			}
		}
	})
  .controller('AnalysisController', function() {
  	var self = this;

  });

'use strict'

angular.module('angular')
	//linechart stuff
	.directive('linechart', function(){
		return { 
			templateUrl: 'app/analysis/partials/linechart.html',
			restrict: 'E',
			controller: 'LinechartController',
			controllerAs: 'lcCtrl',
			bindToController: true,
			scope: {
				linechartObject: '='
			}
		}
	})
	.controller('LinechartController', function(sleepisodes){
		var self = this;
		console.log(sleepisodes);
		console.log(sleepisodes.dataArray);

		//take sleepisodes dates data to parse
			// get day of week
				// get start, end
		//one month?
		// {
		// 	week1: [ [start sleepiness data],[end sleepiness data] ],
		// 	week2: [ [start sleepiness data], [end sleepiness data] ]
		// }
			// then the pair of arrays will each be iterated into the series

		var startSleepinessData = [12, 9, 7, 8, 5, 3, 5];
		var endSleepinessData = [2, 1, 3.5, 7, 3, 5, 9];


		//line chart
		new Chartist.Line(
			'.ct-chart#line', 
			{
				labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
		  	series: [
			    startSleepinessData,
			    endSleepinessData
			  ]
			}, 
			{
			  fullWidth: true,
			  chartPadding: {
			    right: 40
			  }
			}
		);
	})


	//piechart stuff
	.directive('piechart', function(){ //if pieChart - how to write?
		return {
			templateUrl: 'app/analysis/partials/piechart.html',
			restrict: 'E',
			controller: 'PiechartController',
			controllerAs: 'pcCtrl',
			bindToController: true,
			scope: {
				piechartObject: "="
			}
		}
	})
	.controller('PiechartController', function(sleepisodes){
		var self = this;
		// move pie chart here

		self.entries = sleepisodes.dataArray;

		var histogram = {};

		//loop through, put each unique item into histogram set value to 0;
		for (var i = 0; i < self.entries.length; i++) {
			var sleepisode = sleepisodes.dataArray[i];

			//loop through, find item in histogram and increment
			if ( histogram[ sleepisode.location ] > 0 ) {
				histogram[ sleepisode.location ] += 1;
			} else {
				histogram[ sleepisode.location ] = 1;
			}
		}
		//histogram //=> {library: 1, dorm: 2}
		var labelData = [];
		var seriesData = [];

		for (var key in histogram) {
			labelData.push(key);
			seriesData.push( histogram[key] );
		}
		//labels //=> [librar, dorm]
		//dorm //=> 1, 2



		//pie chart
		new Chartist.Pie(
			'.ct-chart#pie',
			{
				labels: labelData,
				series: seriesData
			},
			{
				donut: true,
				donutWidth: 80,
				startAngle: 270,
				// total: 19
			}
		);
	}) 

	//barchart stuff
	.directive('barchart', function(){
		return {
			templateUrl: 'app/analysis/partials/barchart.html',
			restrict: 'E',
			controller: 'BarchartController',
			controllerAs: 'bcCtrl',
			bindToController: true,
			scope: {
				barchartObject: '='
			}
		}
	})
	.controller('BarchartController', function(sleepisodes){
		var self = this;

		self.entries = sleepisodes.dataArray;

		//doesnt seem to work from here

		var preSleepinessHistogram = {};
		var preWakefulnessHistogram = {};

		//preSleepinessHistogram
		for (var i = 0; i < self.entries.length; i++) {
			var sleepisode = sleepisodes.dataArray[i];

			//loop through, find item in histogram and increment
			if ( preSleepinessHistogram[ sleepisode.reason_sleepiness ] > 0 ) {
				preSleepinessHistogram[ sleepisode.reason_sleepiness ] += 1;
			} else {
				preSleepinessHistogram[ sleepisode.reason_sleepiness ] = 1;
			}
		}

		//preWakefulnessHistogram
		for (var i = 0; i < self.entries.length; i++) {
			var sleepisode = sleepisodes.dataArray[i];

			//loop through, find item in histogram and increment
			if ( preWakefulnessHistogram[ sleepisode.reason_waking ] > 0 ) {
				preWakefulnessHistogram[ sleepisode.reason_waking ] += 1;
			} else {
				preWakefulnessHistogram[ sleepisode.reason_waking ] = 1;
			}
		}


		var psLabels = [];
		var psSeries = [];
		//histogram //=> {library: 1, dorm: 2}
		for (var key in preSleepinessHistogram) {
			psLabels.push(key);
			psSeries.push( preSleepinessHistogram[key] );
		}

		var pwLabels = [];
		var pwSeries = [];
		//histogram //=> {library: 1, dorm: 2}
		for (var key in preWakefulnessHistogram) {
			pwLabels.push(key);
			pwSeries.push( preWakefulnessHistogram[key] );
		}


		var options = {
		  high: 10,
		  low: -10,
		  axisX: {
		    labelInterpolationFnc: function(value, index) {
		      return index % 2 === 0 ? value : null;
		    }
		  }
		};

		// var data = {
		//   labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
		//   series: [
		//     [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
		//   ]
		// };

		// var options = {
		//   high: 10,
		//   low: -10,
		//   axisX: {
		//     labelInterpolationFnc: function(value, index) {
		//       return index % 2 === 0 ? value : null;
		//     }
		//   }
		// };

		// new Chartist.Bar('.bar.ct-chart', data, options);
		new Chartist.Bar(
			'.ct-chart.bar#pre-sleepiness-activity', 
			{
				labels: psLabels,
				series: [psSeries]
			}, 
			options
		);

		new Chartist.Bar(
			'.ct-chart.bar#pre-wakefulness-activity',
			{
				labels: pwLabels,
				series: [pwSeries]
			},
			options
		);
	})


	//main controller bit


	.controller('AnalysisController', function(sleepisodes){
		var self = this;

		self.test = function(){
			console.log('test');
		}

		
	});

	//