/**
 * Created by jorgeramos on 3/21/16.
 */
var mainModule = angular.module('mainModule', ['ngAnimate']);

mainModule.controller('HomeController', ['$scope', function($scope) {
    $("#app-body").removeClass("blog-page header-blog");
    $("#header").removeClass("header-blog");
    $("#home").addClass("active");
    $("#contact a").removeClass("active nav-item");
    document.title = 'Red GlobalMX Capitulo Raleigh';
}]);
mainModule.controller('ConocenosController', ['$scope', '$http', function($scope, $http) {
    $http.get('assets/js/data.json').success(function(data) {
        $scope.socios = data;
        $scope.sociosOrder = 'name';
        $("#app-body").addClass("blog-page header-blog");
        $("#header").addClass("header-blog");
        $("#home").removeClass("active");
        $("#contact a").addClass("active nav-item");
        document.title = 'Conocenos';
    });
}]);
mainModule.controller('ActividadesController', ['$scope', function($scope) {
        $("#app-body").addClass("blog-page header-blog");
        $("#header").addClass("header-blog");
        $("#home").removeClass("active");
        $("#activities a").addClass("active nav-item");
        document.title = 'Actividades';

}]);
mainModule.controller('DiaDeLaCienciaController', ['$scope', function($scope) {
    $("#app-body").addClass("blog-page header-blog");
    $("#header").addClass("header-blog");
    $("#home").removeClass("active");
    $("#contact a").addClass("active nav-item");
    document.title = 'Día de la ciencia';
}]);
mainModule.controller('ProyectoMexicoController', ['$scope', function($scope) {
    $("#app-body").addClass("blog-page header-blog");
    $("#header").addClass("header-blog");
    $("#home").removeClass("active");
    $("#contact a").addClass("active nav-item");
    document.title = 'Proyecto México';
}]);
mainModule.controller('BilinguismoController', ['$scope', function($scope) {
    $("#app-body").addClass("blog-page header-blog");
    $("#header").addClass("header-blog");
    $("#home").removeClass("active");
    $("#contact a").addClass("active nav-item");
    document.title = 'Proyecto BILINGÜISMO 2018';
}]);
mainModule.controller('MentoriasController', ['$scope', function($scope) {
    $("#app-body").addClass("blog-page header-blog");
    $("#header").addClass("header-blog");
    $("#home").removeClass("active");
    $("#contact a").addClass("active nav-item");
    document.title = 'Proyecto Mentorias';
}]);
mainModule.controller('BecaRedController', ['$scope', function($scope) {
    $("#app-body").addClass("blog-page header-blog");
    $("#header").addClass("header-blog");
    $("#home").removeClass("active");
    $("#contact a").addClass("active nav-item");
    document.title = 'Proyecto Beca Red-NCSHP';
}]);
mainModule.controller('CiudadesHermanasController', ['$scope', function($scope) {
    $("#app-body").addClass("blog-page header-blog");
    $("#header").addClass("header-blog");
    $("#home").removeClass("active");
    $("#contact a").addClass("active nav-item");
    document.title = 'Proyecto Ciudades Hermanas';
}]);
mainModule.controller('ProyectosController', ['$scope', function($scope) {
    $("#app-body").addClass("blog-page header-blog");
    $("#header").addClass("header-blog");
    $("#home").removeClass("active");
    $("#projects a").addClass("active nav-item");
    document.title = 'Proyectos';

}]);
mainModule.controller('CienciaController', ['$scope', function($scope) {
    $("#app-body").addClass("blog-page header-blog");
    $("#header").addClass("header-blog");
    $("#home").removeClass("active");
    $("#projects a").addClass("active nav-item");
    document.title = 'Ciencias';

}]);
mainModule.controller('EnlaceSocialController', ['$scope', function($scope) {
    $("#app-body").addClass("blog-page header-blog");
    $("#header").addClass("header-blog");
    $("#home").removeClass("active");
    $("#projects a").addClass("active nav-item");
    document.title = 'Enlace Social';

}]);
mainModule.controller('SocioController', ['$scope', '$http', '$routeParams','$sce', function($scope, $http, $routeParams,$sce) {
    $http.get('assets/js/data.json').success(function(data) {
        $scope.socios = data;
        $scope.whichItem = $routeParams.itemId;
        $scope.bio = function() {
            return $sce.trustAsHtml($scope.socios[$scope.whichItem].bio);
        };
        $("#app-body").addClass("blog-page header-blog");
        $("#header").addClass("header-blog");
        $("#home").removeClass("active");
        $("#contact a").addClass("active nav-item");
        document.title = $scope.socios[$scope.whichItem].name;
        if($routeParams.itemId > 0 ){
            $scope.prevItem = Number($routeParams.itemId) - 1;
        } else{
            $scope.prevItem = $scope.socios.length - 1;
        }
        if($routeParams.itemId < $scope.socios.length-1){
            $scope.nextItem = Number($routeParams.itemId) + 1;
        } else{
            $scope.nextItem = 0;
        }
    });
}]);