(function ()
{
    'use strict';

    angular.module('GalleryApp', ['ngRoute', 'GalleryApp.controllers']);

    function configuracion ($routeProvider)
    {
        $routeProvider
            .when('/', {
                controller: 'HomeController',
                templateUrl: 'views/home.html'
            })
            .when('/photos/:id', {
                controller: 'PhotoController',
                templateUrl: 'views/photo.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    }

    angular
        .module('GalleryApp')
        .config(configuracion);

})();
