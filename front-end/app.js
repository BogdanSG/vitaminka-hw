"use strict";

const appName = 'VtaminkaApp';
const appControllersName = `${appName}.controllers`;
const appServicesName = `${appName}.services`;
const appDirectivesName = `${appName}.directives`;

//Directives

import HeaderDirective from './directives/HeaderDirective';
import SmallMenuDirective from './directives/SmallMenuDirective';
import ScriptsDirective from './directives/ScriptsDirective';
import FooterDirective from './directives/FooterDirective';

//Settings

angular.module(appControllersName, []);
angular.module(appServicesName, []);
angular.module(appDirectivesName, []);

angular.module(appDirectivesName).directive('headerDirective', HeaderDirective);
angular.module(appDirectivesName).directive('smallMenuDirective', SmallMenuDirective);
angular.module(appDirectivesName).directive('scriptsDirective', ScriptsDirective);
angular.module(appDirectivesName).directive('footerDirective', FooterDirective);

const app = angular.module(appName,[
    'ngRoute',
    'ui.router',
    appControllersName,
    appServicesName,
    appDirectivesName
]);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider.state('home' , {
        'url': '/home',
        'views':{
            "content": {
                'templateUrl': "templates/home.html",
            },
        },
    });

}]);

app.run();
