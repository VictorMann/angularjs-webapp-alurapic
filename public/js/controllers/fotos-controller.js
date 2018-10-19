/**
 *  Veja que chamamos novamente angular.module, só que dessa vez sem 
 *  passar o segundo parâmetro, o array vazio. Quando fazemos isso, 
 *  indicamos que queremos acessar o módulo e não criar um novo. 
 *  Faz todo sentido, se queremos que nosso controller faça parte do módulo
 *  alurapic
 */
angular.module('alurapic').controller('FotosController', function ($scope) {
    
    $scope.foto = {
        url : 'https://i.pinimg.com/originals/37/2a/cc/372acc72dfb648efd50181542bad3c63.jpg',
        titulo : 'Panda vermelho'
    };
});