(function() {
  'use strict';

  /**
   * @ngdoc overview
   * @name gkeepApp
   * @description
   * # gkeepApp
   *
   * Main module of the application.
   */
  angular
    .module('gkeepApp', [
      'ngAnimate',
      'ngCookies',
      'ngResource',
      'ngRoute',
      'ngSanitize',
      'ngTouch'
    ])
    .config(config);

    function config($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'TasksCtrl',
          controllerAs: 'vm'
        })
        .otherwise({
          redirectTo: '/'
        });
    }

})();

