"use strict";

const appName = 'VtaminkaApp';
const appControllersName = `${appName}.controllers`;
const appServicesName = `${appName}.services`;
const appDirectivesName = `${appName}.directives`;
const appFiltersName = `${appName}.filters`;

//Directives

import HeaderDirective from './directives/HeaderDirective';
import SmallMenuDirective from './directives/SmallMenuDirective';
import ScriptsDirective from './directives/ScriptsDirective';
import FooterDirective from './directives/FooterDirective';
import ContactUsDirective from './directives/ContactUsDirective';
import NewsDirective from './directives/NewsDirective';
import CatalogDirective from './directives/CatalogDirective';
import SvgSpriteDirective from './directives/SvgSpriteDirective';
import BlogDirective from './directives/BlogDirective';
import CartDirective from './directives/CartDirective';

//Services

import CatalogService from './services/CatalogService';
import NewsService from './services/NewsService';
import BlogService from './services/BlogService';
import CartService from './services/CartService';

//Controllers

import ArticleController from './controllers/ArticleController';
import ProductController from './controllers/ProductController';

//Filters

import CatalogSortFilter from './filters/CatalogSortFilter';
import CatalogOffsetFilter from './filters/CatalogOffsetFilter';

//Settings

angular.module(appControllersName, []);
angular.module(appServicesName, []);
angular.module(appDirectivesName, []);
angular.module(appFiltersName, []);

//Settings Directives

angular.module(appDirectivesName).directive('headerDirective', HeaderDirective);
angular.module(appDirectivesName).directive('smallMenuDirective', SmallMenuDirective);
angular.module(appDirectivesName).directive('scriptsDirective', ScriptsDirective);
angular.module(appDirectivesName).directive('footerDirective', FooterDirective);
angular.module(appDirectivesName).directive('contactUsDirective', ContactUsDirective);
angular.module(appDirectivesName).directive('newsDirective', NewsDirective);
angular.module(appDirectivesName).directive('catalogDirective', CatalogDirective);
angular.module(appDirectivesName).directive('svgSpriteDirective', SvgSpriteDirective);
angular.module(appDirectivesName).directive('blogDirective', BlogDirective);
angular.module(appDirectivesName).directive('cartDirective', CartDirective);

//Settings Services

angular.module(appServicesName).service('CatalogService'  , [ '$http' , CatalogService ]);
angular.module(appServicesName).service('NewsService'  , [ '$http' , NewsService ]);
angular.module(appServicesName).service('BlogService'  , [ '$http' , BlogService ]);
angular.module(appServicesName).service('CartService'  , [ '$cookies', 'CatalogService' , CartService ]);

//Settings Filters

angular.module(appFiltersName).filter('CatalogSortFilter', CatalogSortFilter);
angular.module(appFiltersName).filter('CatalogOffsetFilter', CatalogOffsetFilter);

const app = angular.module(appName,[
    'ngRoute',
    'ngCookies',
    'ui.router',
    appControllersName,
    appServicesName,
    appDirectivesName,
    appFiltersName
]);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider.state('home' , {
        'url': '/home',
        'views':{
            'content': {
                'templateUrl': "templates/home.html",
            },
        },
    });

    $stateProvider.state('about_us' , {
        'url': '/about_us',
        'views':{
            'content': {
                'templateUrl': "templates/about_us.html",
            },
        },
    });

    $stateProvider.state('article' , {
        'url': '/article/:singleBlogID',
        'views':{
            'content': {
                'templateUrl': "templates/article.html",
                'controller': [  '$scope', 'singleBlog', ArticleController ]
            },
        },
        'resolve': {
            'singleBlog': ['$stateParams', 'BlogService', function ($stateParams, BlogService){

                return BlogService.getBlogByID($stateParams.singleBlogID);

            } ]
        }
    });

    $stateProvider.state('blog' , {
        'url': '/blog',
        'views':{
            'content': {
                'templateUrl': "templates/blog.html",
            },
        },
    });

    $stateProvider.state('cart' , {
        'url': '/cart',
        'views':{
            'content': {
                'templateUrl': "templates/cart.html",
            },
        },
    });

    $stateProvider.state('checkout' , {
        'url': '/checkout',
        'views':{
            'content': {
                'templateUrl': "templates/checkout.html",
            },
        },
    });

    $stateProvider.state('contacts' , {
        'url': '/contacts',
        'views':{
            'content': {
                'templateUrl': "templates/contacts.html",
            },
        },
    });

    $stateProvider.state('product' , {
        'url': '/product/:productID',
        'views':{
            'content': {
                'templateUrl': "templates/product.html",
                'controller': [  '$scope', 'product', ProductController ]
            },
        },
        'resolve': {
            'product': ['$stateParams', 'CatalogService', function ($stateParams, CatalogService){

                return CatalogService.getProductByID($stateParams.productID);

            } ]
        }
    });

    $stateProvider.state('products' , {
        'url': '/products/:sortParam',
        'views':{
            'content': {
                'templateUrl': "templates/products.html",
                'controller': [  '$scope', 'sortParam', function ($scope, sortParam) {

                    let category;

                    switch (sortParam) {

                        case 'all': category = 'Все'; break;

                        case 'male': category = 'Мужские'; break;

                        case 'female': category = 'Женские'; break;

                        case 'children': category = 'Детские'; break;

                        case 'sport': category = 'Спортивные'; break;

                        default: break;

                    }//switch

                    $scope.category = category;

                } ]
            },
        },
        'resolve': {
            'sortParam': ['$stateParams' , function ($stateParams){
                return $stateParams.sortParam;
            } ]
        }
    });

}]);

app.run();
