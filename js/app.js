/**
 *
 * Responsive website using AngularJS
 * http://www.script-tutorials.com/responsive-website-using-angularjs/
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Script Tutorials
 * http://www.script-tutorials.com/
 */
'use strict';


/* App Module */
var app = angular.module('meuSite',["ui.bootstrap"]);

app.config(function($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'pages/about.html', activetab: 'about', controller: 'HomeCtrl' });
    $routeProvider.when('/blog', {templateUrl: 'pages/blog.html',
          controller: 'BlogCtrl',
          activetab: 'blog'});
    $routeProvider.when('/about', {templateUrl: 'pages/about.html',
          controller: 'AboutCtrl',
          activetab: 'about'});
    $routeProvider.when('/skill', { templateUrl: 'pages/skill.html',
          controller: 'SkillCtrl',
          activetab: 'skill'});
    $routeProvider.when('/experience', { templateUrl: 'pages/experience.html',
          controller: 'ExperienceCtrl',
          activetab: 'experience'});
    $routeProvider.when('/apps', { templateUrl: 'pages/apps.html',
          controller: 'AppsCtrl',
          activetab: 'apps'});
    $routeProvider.when('/apps/qr', { templateUrl: 'pages/qr.html',
          controller: 'QrCtrl',
          activetab: 'qr'});
    $routeProvider.when('/education', {templateUrl: 'pages/education.html',
          controller: 'EducationCtrl',
          activetab: 'education'});
    $routeProvider.when('/contact', {templateUrl: 'pages/contact.html',
          controller: 'ContactCtrl',
          activetab: 'contact'});
}).run(['$rootScope', '$http', '$browser', '$timeout', "$route",
    function ($scope, $http, $browser, $timeout, $route) {

    $scope.isViewLoading = "hidden";
    $scope.$on('$routeChangeStart', function() {
        //console.log("START");
        //console.log($scope.isViewLoading);
        $scope.isViewLoading = "";
    });
    $scope.$on("$routeChangeSuccess", function (scope, next, current) {
        //console.log("SUCESS");
        $scope.part = $route.current.activetab;
        $scope.isViewLoading = "hidden";
    });
       
}]);
