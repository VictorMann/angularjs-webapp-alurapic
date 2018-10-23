angular.module('alurapic').controller('CadastroFotoController', function ($scope, $http, recursoFoto, $routeParams) {

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
            // PUT : edição
            if (id) {
                recursoFoto.update({fotoId: id}, $scope.foto,
                    function () {
                        $scope.mensagem = 'Foto atualizada!';
                    },
                    function (erro) {
                        $scope.mensagem = 'Erro ao atualizar a foto';
                        console.log(erro);
                    }
                );
                
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