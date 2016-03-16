'use strict';

angular.module('Friends', [])

    .controller('FriendsCtrl', function ($scope, $stateParams, $timeout,
                                         ionicMaterialMotion, ionicMaterialInk,
                                         FriendsService, $rootScope) {

        // Set Header
        $scope.$parent.showHeader();
        $scope.$parent.clearFabs();
        $scope.$parent.setHeaderFab('left');

        // Delay expansion
        $timeout(function () {
            $scope.isExpanded = true;
            $scope.$parent.setExpanded(true);
        }, 300);

        // Set Motion
        ionicMaterialMotion.fadeSlideInRight();

        // Set Ink
        ionicMaterialInk.displayEffect();


        $scope.friendsId = [];
        $scope.friendsInfo = [];

        $scope.array = [1, 2, 3];


        uploadFriends();


        function uploadFriends() {
            return FriendsService.getFriendsId($rootScope.userId)
                .then(function (data) {
                    $scope.friendsId = data;
                    // return $scope.friendsId;
                })
                .then(getFriendsInfo)
        }

        function getFriendsInfo() {
            angular.forEach($scope.friendsId, function (id) {
                FriendsService.getFriendInfo(id).then(function (result, error) {
                    $scope.friendsInfo.push(result);
                })
            });
        }

    });