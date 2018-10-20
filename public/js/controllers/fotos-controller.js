/**
 *  Veja que chamamos novamente angular.module, só que dessa vez sem 
 *  passar o segundo parâmetro, o array vazio. Quando fazemos isso, 
 *  indicamos que queremos acessar o módulo e não criar um novo. 
 *  Faz todo sentido, se queremos que nosso controller faça parte do módulo
 *  alurapic
 */
angular.module('alurapic').controller('FotosController', function ($scope, $http) {
    
    // lista de fotos
    $scope.fotos = [];
    // para filtrar a lista a medida que for digitando
    $scope.filtro = '';

    // forma abreviada
    $http.get('/v1/fotos')
    .success(function (fotos) {
        $scope.fotos = fotos;
    })
    .error(function (erro) {
        console.log(erro);
    });

    /* forma extendida
    $http.get('/v1/fotos')
    .then(function (retorno) {
        $scope.fotos = retorno.data;
    })
    .catch(function (erro) {
        console.log(erro);
    });
    */
});