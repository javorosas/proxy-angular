angular.module('MainCtrl', ['MessageService'])
	.controller('MainController', function ($scope, Message) {
		$scope.newMessage = '';

		Message.getAll().success(function (data) {
			$scope.messages = data;
		});

		$scope.new = function () {
			if ($scope.newMessage) {
				Message.add($scope.newMessage).success(function (message) {
					$scope.messages.push(message);
				});
				$scope.newMessage = '';
			}
		};
	});