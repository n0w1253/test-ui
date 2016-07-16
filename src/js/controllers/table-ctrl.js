angular.module('RDash')
        .controller('TablesCtrl', ['$scope',
            function ($scope) {
                // Chart.js Data
                Chart.defaults.global.animation.duration=0;
                var originalData = [65, 59, 80, 81, 56, 55, 40, 8, 9, 10];
                var originalDataLabel = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
                $scope.data = {
                    labels: originalDataLabel,
                    datasets: [
                        {
                            label: 'My First dataset',
                            fill: false,
                            backgroundColor: "rgba(75,192,192,0.4)",
                            borderColor: "rgba(75,192,192,1)",
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: "rgba(75,192,192,1)",
                            pointBackgroundColor: "#fff",
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: "rgba(75,192,192,1)",
                            pointHoverBorderColor: "rgba(220,220,220,1)",
                            pointHoverBorderWidth: 2,
                            pointRadius: 4,
                            pointHitRadius: 10,
                            data: originalData,
                            lineTension: 0
                        },
                        {
                            label: 'My Second dataset',
                            fillColor: 'rgba(151,187,205,0.2)',
                            strokeColor: 'rgba(151,187,205,1)',
                            pointColor: 'rgba(151,187,205,1)',
                            pointStrokeColor: '#fff',
                            pointHighlightFill: '#fff',
                            pointHighlightStroke: 'rgba(151,187,205,1)',
                            data: [28, 48, 40, 19, 86, 27, 90]
                        }
                    ]
                };
                // Chart.js Options
                $scope.options = {
                    // Sets the chart to be responsive
                 //   responsive: true,
                    ///Boolean - Whether grid lines are shown across the chart
                    scaleShowGridLines: true,
                    //String - Colour of the grid lines
                    scaleGridLineColor: "rgba(0,0,0,.05)",
                    //Number - Width of the grid lines
                    scaleGridLineWidth: 1,
                    //Boolean - Whether the line is curved between points
                    bezierCurve: true,
                    //Number - Tension of the bezier curve between points
                    bezierCurveTension: 0.4,
                    //Boolean - Whether to show a dot for each point
                    pointDot: true,
                    //Number - Radius of each point dot in pixels
                    pointDotRadius: 4,
                    //Number - Pixel width of point dot stroke
                    pointDotStrokeWidth: 1,
                    //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
                    pointHitDetectionRadius: 20,
                    //Boolean - Whether to show a stroke for datasets
                    datasetStroke: true,
                    //Number - Pixel width of dataset stroke
                    datasetStrokeWidth: 2,
                    //Boolean - Whether to fill the dataset with a colour
                    datasetFill: true,
                    // Function - on animation progress
               //     onAnimationProgress: function () {},
                    // Function - on animation complete
              //      onAnimationComplete: function () {},
                    scales: {
                        xAxes: [{
                                display: true,
                                ticks: {
                                    userCallback: function (dataLabel, index) {
                                        return index % 2 === 0 ? dataLabel : '';
                                    }
                                },
                                position: 'bottom'
                            }],
                        yAxes: [{
                                display: true,
                                beginAtZero: false
                            }]

                    },
                    pan: {
                        enabled: true,
                        mode: 'xy',
                        threshold: 10
                    },
                    zoom: {
                        enabled: true,
                        mode: 'xy'
                    }
                    //String - A legend template
                  //  legendTemplate: '<ul class="tc-chart-js-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
                };

                $scope.slider = {
                    minValue: 1,
                    maxValue: 10,
                    options: {
                        id: 'slider-id',
                        floor: 1,
                        ceil: 10,
                        step: 1,
                        noSwitching: true,
                        onChange: function(id) {
            console.log('on Change ' + id+"min"+$scope.slider.minValue+"max"+$scope.slider.maxValue); // logs 'on end slider-id'
        $scope.data.labels = originalDataLabel.slice($scope.slider.minValue-1,$scope.slider.maxValue);
       // $scope.datasets.data = originalData.slice($scope.slider.minValue-1,$scope.slider.maxValue);
        
                    }
                }};
            }]);

