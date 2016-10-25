'use strict';

angular.module('conFusion.services', ['ngResource'])
        .constant("baseURL","http://localhost:3000/")
        .factory('menuFactory', ['$resource', 'baseURL', function($resource,baseURL) {
            return $resource(baseURL+"dishes/:id",null,  {'update':{method:'PUT' }});
        }])

        .factory('corporateFactory', ['$resource', 'baseURL', function($resource,baseURL) {
    
    
            return $resource(baseURL+"leadership/:id");
    
        }])

        .factory('promotionFactory', ['$resource', 'baseURL', function ($resource, baseURL) {
                    return $resource(baseURL + "promotions/:id");

        }])

        .factory('feedbackFactory', ['$resource', 'baseURL', function($resource,baseURL) {
    
    
            return $resource(baseURL+"feedback/:id");
    
        }])

        .factory('favoriteFactory', ['$resource', 'baseURL', '$localStorage', function ($resource, baseURL, $localStorage) {
            var favFac = {};
            var favorites = [];
            favFac.addToFavorites = function (index) {
                // favorites = $localStorage.getObject('favorites', '[]');
                for (var i = 0; i < favorites.length; i++) {
                    if (favorites[i].id == index)
                        return;
                }
                console.log("favorites push:" + index);
                favorites.push({id: index});
                $localStorage.storeObject('favorites', favorites);
            };
            
            favFac.deleteFromFavorites = function (index) {
                // favorites = $localStorage.getObject('favorites', '[]');
                for (var i = 0; i < favorites.length; i++) {
                    if (favorites[i].id == index) {
                        favorites.splice(i, 1);
                    }
                }
                $localStorage.storeObject('favorites', favorites);
            }

            favFac.getFavorites = function () {
                favorites = $localStorage.getObject('favorites', '[]');
                console.log('getFavorites');
                return favorites;
            };            
            
            return favFac;
            }])

;
