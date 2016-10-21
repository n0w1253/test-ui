angular.module('RDash')
        .controller('ImagesCtrl', ['$scope',
            function ($scope) {
                $scope.images=["img/gallery/1.jpg","img/gallery/2.jpg","img/gallery/3.jpg","img/gallery/4.jpg",
                    "img/gallery/5.jpg","img/gallery/6.jpg","img/gallery/7.jpg","img/gallery/8.jpg",
                    "img/gallery/9.jpg","img/gallery/10.jpg","img/gallery/11.jpg","img/gallery/12.jpg",
                     "img/gallery/13.jpg"
                    
                    
                ];
                
                $scope.current = 0;
                $scope.setCurrent = function (index) {
                    $scope.current = index || 0;
                };
                
                $scope.showContent = function($fileContent){
                   //console.log("in ShowContent"+JSON.stringify($fileContent));
                   $scope.images.push($fileContent);
                }; 

            }]);

