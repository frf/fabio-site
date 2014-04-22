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
var app = angular.module('example359', 
    ["ui.bootstrap"]);


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
    $routeProvider.when('/education', {templateUrl: 'pages/education.html',
          controller: 'EducationCtrl',
          activetab: 'education'});
    $routeProvider.when('/contact', {templateUrl: 'pages/contact.html',
          controller: 'ContactCtrl',
          activetab: 'contact'});
}).run(['$rootScope', '$http', '$browser', '$timeout', "$route", 
    function ($scope, $http, $browser, $timeout, $route) {

    $scope.$on("$routeChangeSuccess", function (scope, next, current) {
        console.log(next);
        $scope.part = $route.current.activetab;
    });
       
}]);

