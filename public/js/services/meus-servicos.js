angular.module('meusServicos', ['ngResource'])
.factory('recursoFoto', function ($resource) {

    return $resource('/v1/fotos/:fotoId', null, {
        update: {
            method: 'PUT'
        }
    });
})
.factory('cadastroDeFoto', function (recursoFoto, $q, $rootScope) {

    var servico = {};
    var evento  = 'fotoCadastrada';

    servico.cadastro = function (foto) {
        return $q(function (resolve, reject) {
            if (foto._id) {
                recursoFoto.update({fotoId: foto._id}, foto, 
                    function () {
                        // dispara o evento para a diretiva meuFotcos
                        $rootScope.$broadcast(evento);

                        resolve({
                            mensagem: 'Foto ' + foto.titulo + ' atualizada com sucesso!',
                            inclusao: false
                        });
                    }, 
                    function (erro) {
                        console.log(erro);
                        reject({
                            mensagem: 'Não foi possível alterar a foto ' + foto.titulo
                        });
                    }
                );
            } else {
                recursoFoto.save(foto,
                    function () {
                        // dispara o evento para a diretiva meuFotcos
                        $rootScope.$broadcast(evento);

                        resolve({
                            mensagem: 'Foto ' + foto.titulo + ' incluida com sucesso!',
                            inclusao: true
                        });
                    },
                    function (erro) {
                        console.log(erro);
                        reject({
                            mensagem: 'Não foi possível incluir a foto ' + foto.titulo 
                        });
                    }
                );
            }
        });
    };

    return servico;
});