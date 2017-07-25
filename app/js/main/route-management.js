 

var metadataadminModule =angular.module('metadataadminModule',
		['ngRoute', 'encountersController', 'mainController']);

metadataadminModule.config(['$routeProvider',
                    function ($routeProvider) {
                      $routeProvider.
//                        when('/manage-encounters/:encounterUUID', {
//                          templateUrl: 'js/encounters/manage-encounters.html',
//                          controller: 'manageEncounterCtrl',
//                        }).
                        when('/add-encounter', {
                          templateUrl: 'js/encounters/manage-encounters.html',
                          controller: 'AddNewEncounterCtrl',
                        }).
                        when('/manage-encounter-types', {
                          templateUrl: 'js/encounters/manage-encounter-type.html',
                          controller: 'manageEncounterTypeCtrl',
                        }).
                        when('/manage-encounter-roles', {
                          templateUrl: 'js/encounters/manage-encounter-role.html',
                          controller: 'manageEncounterRoleCtrl',
                        }).
                        otherwise({
                          templateUrl: 'js/home/home.html',
                          controller: 'mainHomeCtrl',
                        
                        });
                    }]);


