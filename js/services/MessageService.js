angular.module('MessageService', [])
	.factory('Message', function ($http) {
		// github.com/javorosas/proxy2014
		var root = 'http://proxy-javorosas.rhcloud.com';
		return {
			getAll: function () {
				return $http.get(root + '/api/messages');
			},
			get: function (id) {
				return $http.get(root + '/api/message/' + id);
			},
			add: function (content) {
				return $http.post(root + '/api/message', { content: content });
			},
			remove: function (id) {
				return $http.delete(root + '/api/message/' + id);
			}
		};
	});