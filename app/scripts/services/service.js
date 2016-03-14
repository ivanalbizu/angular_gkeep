(function() {
  'use strict';

  angular.module('gkeepApp')
    .factory('TaskServices', TaskServices);

    TaskServices.$inject = ['$resource', '$rootScope'];
    function TaskServices($resource, $rootScope) {
      var url_one = 'http://127.0.0.1:8000/tasks/:id';
      var url_all = 'http://127.0.0.1:8000/tasks';
      return $resource(
        url_one, {}, {
          get: {method: 'GET', cache: false, isArray: false},
          save: {method: 'POST', cache: false, isArray: false},
          update: {method: 'PUT', cache: false, isArray: false},
          delete: {method: 'DELETE', cache: false, isArray: false},
          get_all: {method: 'GET', url: url_all, cache: false, isArray: true},
        }
      );
    }
})();

