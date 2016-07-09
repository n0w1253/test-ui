/**
 * Session Controller
 */

angular.module('RDash')
        .controller('TasksCtrl', ['$scope', SessionCtrl]);

function SessionCtrl($scope) {
    $scope.model = {};
    $scope.steps = [
        {
            templateUrl: '/templates/multi-step-form/step1.html',
            title: 'Saving data'
        },
        {
            templateUrl: '/templates/multi-step-form/step2.html',
            hasForm: true,
            title: 'Using scope inheritence'
        },
        {
            templateUrl: '/templates/multi-step-form/step3.html',
            hasForm: true,
            isolatedScope: true,
            controller: 'IsolatedStepCtrl',
            title: 'Isolated step scopes'
        },
        {
            templateUrl: '/templates/multi-step-form/step4.html',
            title: 'name is...'
        }
    ];
}


