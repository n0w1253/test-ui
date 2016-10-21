angular.module('RDash')
        .controller('TablesCtrl', ['$scope',
            function ($scope) {
//Use ZingChart
                var originalData = [65, 59, 80, 81, 56, 55, 40, 8, 9, 10];
                var originalBigData = new Array(60000)
                        .join().split(',')
                        .map(function (item, index) {
                            return (Math.random() * (5.120 - 3.0200) + 3.0200).toFixed(4);
                        });
                originalBigData[30000] = 20.0;



                var result0 = originalData.map(function (x) {
                    return parseFloat(x, 10);
                });
                var max0 = Math.max.apply(null, result0);

                var min0 = Math.min.apply(null, result0);

                var step0 = (Math.ceil(max0) - Math.floor(min0)) / 10.0;

                var yscaleVal0 = (Math.floor(min0) - step0) + ":" + (Math.ceil(max0) + step0) + ":" + step0;
                console.log("yscaleVal0 " + yscaleVal0);

                $scope.myJson0 = {
                    "type": "line",
                    "scale-x": {
                        "zooming": true,
                        "item": {
                            "font-size": 10
                        }
                    },
                    "scroll-x": {
                    },
                    "scale-y": {
                        "zooming": true,
                        // "values": "50:350:50",
                        "values": yscaleVal0,
                        "guide": {
                            "line-style": "dotted"
                        },
                        "item": {
                            "font-size": 10
                        }
                    },
                    "legend": {
                        "layout": "1x1", //row x column
                        "x": "20%",
                        "y": "8%"
                    },
                    "plotarea": {
                        "margin-bottom": "5%",
                        "margin-top": "20%"
                    },
                    "plot": {
                        "line-width": 1,
                        "line-color": "#ff9933",
                        "marker": {
                            "size": 3,
                            "background-color": "#ccccff #00ff00",
                            "border-width": 1,
                            "border-color": "#ff9933"
                        },
                        "tooltip": {
                            "visible": false
                        }
                    },
                    "crosshair-x": {
                        "plot-label": {
                            "text": "%v"
                        },
                        "scale-label": {
                            "visible": false
                        }
                    },
                    "crosshair-y": {
                        "type": "multiple",
                        "scale-label": {
                            "visible": false
                        }
                    },
                    "series": [
                        {
                            "values": result0,
                            "legend-text": "accuracy"
                        }
                    ]
                };







                var result = originalBigData.map(function (x) {
                    return parseFloat(x);
                });
                var max = Math.max.apply(null, result);

                var min = Math.min.apply(null, result);

                var step = (Math.ceil(max) - Math.floor(min)) / 10.0;

                var yscaleVal = (Math.floor(min) - step) + ":" + (Math.ceil(max) + step) + ":" + step;
                console.log("yscaleVal " + yscaleVal);

                $scope.myJson = {
                    "type": "line",
                    "scale-x": {
                        "zooming": true,
                        "item": {
                            "font-size": 10
                        }
                    },
                    "scroll-x": {
                    },
                    "scale-y": {
                        "zooming": true,
                        // "values": "50:350:50",
                        "values": yscaleVal,
                        "guide": {
                            "line-style": "dotted"
                        },
                        "item": {
                            "font-size": 10
                        }
                    },
                    "legend": {
                        "layout": "1x1", //row x column
                        "x": "20%",
                        "y": "8%"
                    },
                    "plotarea": {
                        "margin-bottom": "5%",
                        "margin-top": "20%"
                    },
                    "plot": {
                        "line-width": 1,
                        "line-color": "#3399ff",
                        "marker": {
                            "size": 3,
                            "background-color": "#ccccff #00ff00",
                            "border-width": 1,
                            "border-color": "#3399ff"
                        },
                        "tooltip": {
                            "visible": false
                        }
                    },
                    "crosshair-x": {
                        "plot-label": {
                            "text": "%v"
                        },
                        "scale-label": {
                            "visible": false
                        }
                    },
                    "crosshair-y": {
                        "type": "multiple",
                        "scale-label": {
                            "visible": false
                        }
                    },
                    "series": [
                        {
                            "values": result,
                            "legend-text": "LNoise" 
                        }
                    ]
                };



            }]);

