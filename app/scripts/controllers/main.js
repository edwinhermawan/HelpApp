'use strict';

angular.module('helpAppApp')
  .controller('MainCtrl', function ($scope) {
  	$scope.names = [];

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
