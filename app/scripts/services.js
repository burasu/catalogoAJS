(function ()
{
    'use strict';

    angular.module('GalleryApp.services', []);

    function Photos ($http, BaseUrl)
    {
        return $http.get(BaseUrl)
            .success(function(data) {
                return data;
            })
            .error(function(data)
            {
                return data;
            });
    }

    angular
        .module('GalleryApp.services')
        .constant('BaseUrl', 'https://s3.amazonaws.com/codecademy-content/courses/ltp4/photos-api/photos.json')
        .factory('Photos', Photos);
})();
