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

// optional controllers
function HomeCtrl($scope, $http) {
}
function ProjectCtrl($scope, $http) {
}
function PrivacyCtrl($scope, $http, $timeout) {
}
function AboutCtrl($scope, $http, $timeout) {
}
function SkillCtrl($scope, $http, $timeout) {
}
function ExperienceCtrl($scope, $http, $timeout) {
}
function EducationCtrl($scope, $http, $timeout) {
}
function BlogCtrl($scope, $http, $timeout) {
}


app.controller('ContactCtrl', function($scope) {

    $scope.master = {};

     $scope.update = function(user) {
        var Contact = {
            objectId:'',
            nome:"",
            email:"",
            msg:""
        }
        
        Contact.objectId = $scope.user.id;
        Contact.nome     = $scope.user.nome;
        Contact.email    = $scope.user.email;
        Contact.msg      = $scope.user.msg;
        
        console.log(Contact);

        $scope.master = angular.copy(user);
    };


    $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
    };

    $scope.isUnchanged = function(user) {
        return angular.equals(user, $scope.master);
    };

    $scope.reset();

});