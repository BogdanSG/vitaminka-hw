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
import ContactUsDirective from './directives/ContactUsDirective';
import NewsDirective from './directives/NewsDirective';
import CatalogDirective from './directives/CatalogDirective';
import SvgSpriteDirective from './directives/SvgSpriteDirective';

//Settings

angular.module(appControllersName, []);
angular.module(appServicesName, []);
angular.module(appDirectivesName, []);

angular.module(appDirectivesName).directive('headerDirective', HeaderDirective);
angular.module(appDirectivesName).directive('smallMenuDirective', SmallMenuDirective);
angular.module(appDirectivesName).directive('scriptsDirective', ScriptsDirective);
angular.module(appDirectivesName).directive('footerDirective', FooterDirective);
angular.module(appDirectivesName).directive('contactUsDirective', ContactUsDirective);
angular.module(appDirectivesName).directive('newsDirective', NewsDirective);
angular.module(appDirectivesName).directive('catalogDirective', CatalogDirective);
angular.module(appDirectivesName).directive('svgSpriteDirective', SvgSpriteDirective);

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

    $stateProvider.state('about_us' , {
        'url': '/about_us',
        'views':{
            "content": {
                'templateUrl': "templates/about_us.html",
            },
        },
    });

    $stateProvider.state('article' , {
        'url': '/article',
        'views':{
            "content": {
                'templateUrl': "templates/article.html",
            },
        },
    });

    $stateProvider.state('blog' , {
        'url': '/blog',
        'views':{
            "content": {
                'templateUrl': "templates/blog.html",
            },
        },
    });

    $stateProvider.state('cart' , {
        'url': '/cart',
        'views':{
            "content": {
                'templateUrl': "templates/cart.html",
            },
        },
    });

    $stateProvider.state('checkout' , {
        'url': '/checkout',
        'views':{
            "content": {
                'templateUrl': "templates/checkout.html",
            },
        },
    });

    $stateProvider.state('contacts' , {
        'url': '/contacts',
        'views':{
            "content": {
                'templateUrl': "templates/contacts.html",
            },
        },
    });

    $stateProvider.state('product' , {
        'url': '/product',
        'views':{
            "content": {
                'templateUrl': "templates/product.html",
            },
        },
    });

    $stateProvider.state('products' , {
        'url': '/products',
        'views':{
            "content": {
                'templateUrl': "templates/products.html",
            },
        },
    });

}]);

app.run();
