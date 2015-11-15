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
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'TasksCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
