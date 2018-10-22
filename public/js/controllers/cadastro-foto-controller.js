angular.module('alurapic').controller('CadastroFotoController', function ($scope, $http, $routeParams) {

    $scope.foto = {};
    $scope.mensagem = '';

    // caso para edição
    var id = $routeParams.fotoId;
    if (id) {
        $http.get('v1/fotos/' + id)
        .success(function (foto) {
            $scope.foto = foto;
        })
        .error(function (erro) {
            $scope.mensagem = 'Foto não encontrada';
        });
    }

    $scope.submeter = function () {
        
        if ($scope.formulario.$valid) {
            // PUT : edição
            if (id) {
                $http.put('v1/fotos/' + id, $scope.foto)
                .success(function () {
                    $scope.mensagem = 'Foto atualizada!';
                })
                .error(function (erro) {
                    $scope.mensagem = 'Erro ao atualizar a foto';
                    console.log(erro);
                });

            // POST : novo
            } else {
                $http.post('v1/fotos', $scope.foto)
                .success(function () {
                    $scope.foto = {};
                    $scope.mensagem = 'Foto incluida com sucesso';
                })
                .error(function (erro) {
                    $scope.mensagem = 'Não foi possível incluir';
                    console.log(erro);
                })
            }
        }
    };
});