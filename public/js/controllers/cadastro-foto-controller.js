angular.module('alurapic').controller('CadastroFotoController', function ($scope, cadastroDeFoto, recursoFoto, $routeParams) {

    $scope.foto = {};
    $scope.mensagem = '';

    // caso para edição
    var id = $routeParams.fotoId;
    if (id) {
        recursoFoto.get({fotoId: id},
            function (foto) {
                $scope.foto = foto;
            },
            function (erro) {
                $scope.mensagem = 'Foto não encontrada';
                console.log(erro);
            }
        );
    }

    $scope.submeter = function () {
        
        if ($scope.formulario.$valid) {
            cadastroDeFoto.cadastro($scope.foto)
            .then(function (dados) {
                $scope.mensagem = dados.mensagem;
                if (dados.inclusao) $scope.foto = {};
            })
            .catch(function (dados) {
                $scope.mensagem = dados.mensagem;
            });
        }
    };
});