// módulo principal
/**
 *  Args: primeiro é o nome do módulo que desejamos criar e o 
 *  segundo é uma array com todos os módulos de que nosso 
 *  módulo depende
 */
// angular.module('alurapic', ['minhasDiretivas']);
angular.module('alurapic', ['minhasDiretivas', 'ngAnimate', 'ngRoute'])
.config(function ($routeProvider, $locationProvider) {

    // defindo rota sem /#/ deve-se configurar o back-end antes
    $locationProvider.html5Mode(true);

    // define rota para lista de fotos
    $routeProvider.when('/fotos', {
        templateUrl: 'partials/principal.html',
        controller: 'FotosController'
    });

    // cadastro de novas fotos
    $routeProvider.when('/fotos/new', {
        templateUrl: 'partials/foto.html',
        controller: 'CadastroFotoController'
    });

    // edição de imagem
    $routeProvider.when('/fotos/edit/:fotoId', {
        templateUrl: 'partials/foto.html',
        controller: 'CadastroFotoController'
    });


    // redireciona caso não encontre uma rota
    $routeProvider.otherwise({
        redirectTo: '/fotos'
    });
});