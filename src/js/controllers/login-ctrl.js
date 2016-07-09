angular.module('RDash')
        .controller('LoginCtrl', ['$scope', '$auth', '$state', 'toastr',function ($scope, $auth, $state, toastr) {
            
            $scope.authenticate = function (provider) {
                $auth.authenticate(provider)
                        .then(function () {
                            toastr.success('You have successfully signed in with ' + provider + '!');
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


