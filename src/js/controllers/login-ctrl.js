angular.module('RDash')
        .controller('LoginCtrl', ['$scope', '$auth', '$state', 'toastr','$localStorage',function ($scope, $auth, $state, toastr,$localStorage) {
            
            $scope.authenticate = function (provider) {
                $auth.authenticate(provider)
                        .then(function (res) {
                            console.log("res from authen "+JSON.stringify(res.data));
                    $localStorage.store('displayName', res.data.displayName);
                    $localStorage.store('picture',res.data.picture);
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


