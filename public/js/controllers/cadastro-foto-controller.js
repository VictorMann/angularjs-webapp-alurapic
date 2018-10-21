angular.module('alurapic').controller('CadastroFotoController', function ($scope) {

    $scope.foto = {};

    $scope.submeter = function () {
        console.log($scope.foto)
    };
});