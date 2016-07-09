angular.module('RDash')
        .controller('LoginCtrl', ['$scope', '$auth', '$state', 'toastr','$rootScope',function ($scope, $auth, $state, toastr,$rootScope) {
            
            $scope.authenticate = function (provider) {
                $auth.authenticate(provider)
                        .then(function (res) {
                            console.log("res from authen "+JSON.stringify(res.data));
                    $rootScope.displayName = res.data.displayName;
                            toastr.success('Hello, '+res.data.displayName+'!');
                           // $location.path('#/master');
                            $state.go('master');
                        })
                        .catch(function (error) {
                            if (error.error) {
                                // Popup error - invalid redirect_uri, pressed cancel button, etc.
                                toastr.error(error.error);
                            } else if (error.data) {
                                // HTTP response error from server
                                toastr.error(error.data.message, error.status);
                            } else {
                                toastr.error(error);
                            }
                        });
            };

        }]);


