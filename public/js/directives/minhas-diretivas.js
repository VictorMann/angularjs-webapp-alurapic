angular.module('minhasDiretivas', [])
// o nome da diretiva deve ser camel case
.directive('meuPainel', function () {
    // directive definition object (DDO)
    var ddo = {};

    // Veja que estamos retornando um objeto ainda sem qualquer configuração. Vamos começar restringindo a forma de uso da nossa diretiva. Como assim? Uma diretiva em Angular pode ser usada como Elemento, Atributo ou Comentário (esta última muito incomum). Vamos estipular que nossa diretiva pode ser usada tanto como atributo ou como elemento, adicionando em nosso DDO a propriedade restrict com valor "AE":
    ddo.restrict = 'AE';
    // Para que cada diretiva tenha seu próprio título, cada uma precisará ter um escopo isolado, que existe independente do contexto na qual está incluída.
    ddo.scope = {
        // titulo: @titulo -> como possuem o mesmo nome pode ausentar
        // no segundo
        titulo: '@'
    };
    // Para que o Angular preserve o conteúdo original da diretiva, precisamos usar o mecanismo de transclusão
    ddo.transclude = true;


    // definindo a marcação HTML que será utilizada por ela
    // ddo.template = '<div>...</div>'
    // buscando por um arquivo
    ddo.templateUrl = 'js/directives/meu-painel.html';

    return ddo;
})
.directive('minhaFoto', function () {

    var ddo = {};

    ddo.restrict = 'AE';

    ddo.scope = {
        titulo: '@',
        url: '@'
    };

    ddo.template = '<img src="{{ url }}" alt="{{ titulo }}" class="img-responsive center-block">';

    return ddo;
})
.directive('meuBotaoPerigo', function () {

    var ddo = {};

    ddo.restrict = 'E';

    ddo.scope = {
        nome: '@',
        acao: '&'
    };

    ddo.template = '<button ng-click="acao(foto)" class="btn btn-danger btn-block">{{ nome }}</button>';

    return ddo;
})
.directive('meuFocus', function () {

    var ddo = {};

    ddo.link = function (scope, element) {
        scope.$on('fotoCadastrada', function () {
            // defive evento de foco no elemento
            element[0].focus();
        });
    };

    return ddo;
})