/**
 * Add Angular implementation
 * Created by jorgeramos on 3/23/16.
 */
var myApp = angular.module('myApp',[
    'ngRoute',
    'ngSanitize',
    'mainModule'
]);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/home',{
            templateUrl: 'partials/home.html',
            controller: 'HomeController'
        }).
        when('/conocenos/',{
            templateUrl: 'partials/conocenos.html',
            controller: 'ConocenosController'
        }).
        when('/socio/:itemId',{
            templateUrl: 'partials/socio.html',
            controller: 'SocioController'
        }).
        when('/actividades',{
            templateUrl: 'partials/actividades.html',
            controller: 'ActividadesController'
        }).
        when('/diadelaciencia',{
            templateUrl: 'partials/actividades/diaDeLaCiencia.html',
            controller: 'DiaDeLaCienciaController'
        }).
        when('/proyectomexico',{
            templateUrl: 'partials/proyectos/proyectoMexico.html',
            controller: 'ProyectoMexicoController'
        }).
        when('/bilinguismo',{
            templateUrl: 'partials/proyectos/bilinguismo.html',
            controller: 'BilinguismoController'
        }).
        when('/mentorias',{
            templateUrl: 'partials/proyectos/mentorias.html',
            controller: 'MentoriasController'
        }).
        when('/becared-ncshp',{
            templateUrl: 'partials/proyectos/becared-ncshp.html',
            controller: 'BecaRedController'
        }).
        when('/ciudadeshermanas',{
            templateUrl: 'partials/proyectos/ciudadeshermanas.html',
            controller: 'CiudadesHermanasController'
        }).
        when('/proyectos',{
            templateUrl: 'partials/proyectos.html',
            controller: 'ProyectosController'
        }).
        when('/ciencias',{
            templateUrl: 'partials/proyectos/ciencias.html',
            controller: 'CienciaController'
        }).
        when('/enlacesocial',{
            templateUrl: 'partials/proyectos/enlaceSocial.html',
            controller: 'EnlaceSocialController'
        }).
        otherwise({
            redirectTo: '/home'
        });
}]);