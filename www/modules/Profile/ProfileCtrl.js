'use strict';

angular.module('Profile', [])

    .controller('ProfileCtrl', function ($scope, $stateParams, $timeout,
                                         ionicMaterialMotion, ionicMaterialInk
    ) {
        // Set Header
        $scope.$parent.showHeader();
        $scope.$parent.clearFabs();
        $scope.isExpanded = false;
        $scope.$parent.setExpanded(false);
        $scope.$parent.setHeaderFab(false);

        $scope.array = [1,2,3];

        // Set Motion
        $timeout(function () {
            ionicMaterialMotion.slideUp({
                selector: '.slide-up'
            });
        }, 300);

        $timeout(function () {
            ionicMaterialMotion.fadeSlideInRight({
                startVelocity: 4000
            });
        }, 1000);

        // Set Ink
        ionicMaterialInk.displayEffect();
    });