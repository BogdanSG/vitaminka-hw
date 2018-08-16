"use strict";

export default class GoogleMapsController {

    constructor($scope, NgMap){

        this.$scope = $scope;

        this.$scope.URLApi = 'http://maps.google.com/maps/api/js?key=AIzaSyAFgM81Qz-SwfTzUsr4F51AgDj0HdN88CQ';

        this.$scope.center = {
            'lat': 48.017694,
            'lng': 37.805154
        };

        NgMap.getMap().then(function(map) {

            map.setCenter($scope.center);

        });

    }//constructor

}//GoogleMapsController