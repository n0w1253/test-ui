angular.module('RDash')
        .controller('ImagesCtrl', ['$scope',
            function ($scope) {
             
                $scope.images = ["img/gallery/1.jpg", "img/gallery/2.jpg", "img/gallery/3.jpg", "img/gallery/4.jpg",
                    "img/gallery/5.jpg", "img/gallery/6.jpg", "img/gallery/7.jpg", "img/gallery/8.jpg",
                    "img/gallery/9.jpg", "img/gallery/10.jpg", "img/gallery/11.jpg", "img/gallery/12.jpg",
                    "img/gallery/13.jpg"


                ];

                $scope.current = 0;
                $scope.setCurrent = function (index) {
                    $scope.current = index || 0;
                };

                $scope.showContent = function ($file) {
                    console.log("in ShowContent" + $file.file);
                    console.log("in ShowContent" + JSON.stringify($file.fileContent));

                    $scope.images.push($file.fileContent);

                };

                var getFileBlob = function (url, cb) {
                    var xhr = new XMLHttpRequest();
                    xhr.open("GET", url);
                    xhr.responseType = "blob";
                    xhr.addEventListener('load', function () {
                        cb(xhr.response);
                    });
                    xhr.send();
                };

                var blobToFile = function (blob, name) {
                    blob.lastModifiedDate = new Date();
                    blob.name = name;
                    return blob;
                };

                var getFileObject = function (filePathOrUrl, cb) {
                    getFileBlob(filePathOrUrl, function (blob) {
                        cb(blobToFile(blob, 'test.jpg'));
                    });
                };
                /*
                for (var i = 0; i < imagePaths.length; i++) {
                    
                    getFileObject(imagePaths[i], function (fileObject) {
                        console.log("getFileObject" + i);
                        var reader = new FileReader();

                        reader.onload = function (onLoadEvent) {
                            var content = onLoadEvent.target.result;
                           // $scope.images.push(content);
                            //console.log("in onload" + JSON.stringify(content));

                        };

                        reader.readAsDataURL(fileObject);
                    });
                }*/




            }]);

