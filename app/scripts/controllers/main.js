'use strict';

angular.module('helpAppApp')
  .controller('MainCtrl', function ($scope, angularFire) {
  	$scope.names = [];
    var ref = new Firebase("https://lorin911.firebaseio.com/names");
    angularFire(ref, $scope, "names");

  	$scope.addName = function(name) {
  		$scope.names.push(name)
  		console.log($scope.names)
  	}

  	$scope.deleteName = function(index) {
  		$scope.names.splice(index, 1)
  	}

  	$scope.clearAll = function() {
  		$scope.names = [];
  	}

  });
