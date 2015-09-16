(function ()
{
    'use strict';

    angular.module('GalleryApp.controllers', ['GalleryApp.services']);

    function HomeController($scope, Photos)
    {
        Photos.success(function(data)
        {
            $scope.photos = data;
        });
    }

    function PhotoController($scope, Photos, $routeParams)
    {
        Photos.success(function(data)
        {
            $scope.detail = data[$routeParams.id];
        });
    }

    angular
        .module('GalleryApp.controllers')
        .controller('HomeController', HomeController)
        .controller('PhotoController', PhotoController);

})();
