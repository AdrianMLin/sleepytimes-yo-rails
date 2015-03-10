'use strict';

angular.module('angular', ['ngResource', 'ui.router', 'ui.bootstrap'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('about', {
      	url: '/about',
      	templateUrl: 'app/about/about.html',
      	controller: 'AboutController',
        controllerAs: 'abCtrl'
      })
      .state('analysis', {
      	url: '/analysis',
      	templateUrl: 'app/analysis/analysis.html',
      	controller: 'AnalysisController',
        controllerAs: 'anCtrl'
      })
      .state('profile', {
      	url: '/profile',
      	templateUrl: 'app/profile/profile.html',
      	controller: 'ProfileController',
        controllerAs: 'prCtrl'
      })
      .state('new-entry', {
      	url: '/new-entry',
      	templateUrl: 'app/entry/entry.html',
      	controller: 'EntryController',
        controllerAs: 'enCtrl'
      });

    $urlRouterProvider.otherwise('/about');
  })
;
