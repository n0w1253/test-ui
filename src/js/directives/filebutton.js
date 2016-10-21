
angular
        .module('RDash')
        .directive('onReadFile',['$parse', function onReadFile($parse) {
    return {
        restrict: 'A',
        scope: false,
        link: function (scope, element, attrs) {
            var fn = $parse(attrs.onReadFile);

            element.on('change', function (onChangeEvent) {
               // console.log("on change "+(onChangeEvent.srcElement || onChangeEvent.target).files[0]);
                var reader = new FileReader();

                reader.onload = function (onLoadEvent) {
                 //   console.log("on load "+(onChangeEvent.srcElement || onChangeEvent.target).files[0]);
                    scope.$apply(function () {
                  //      console.log("in apply "+(onChangeEvent.srcElement || onChangeEvent.target).files[0]);
                        fn(scope, {$file: {file: (onChangeEvent.srcElement || onChangeEvent.target).files[0],
                            fileContent: onLoadEvent.target.result}});
                    });
                };

                reader.readAsDataURL((onChangeEvent.srcElement || onChangeEvent.target).files[0]);
            });
        }
    };
}])
;


