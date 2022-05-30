function calcular() {
    var joinha          = document.getElementById('joinha').value * 6;
    var cura            = document.getElementById('cura').value * 5;
    var ampulheta       = document.getElementById('ampulheta').value * 5;
    var energetico      = document.getElementById('energetico').value * 10;
    var invencibilidade = document.getElementById('invencibilidade').value * 10;
    var anjo            = document.getElementById('anjo').value * 15;
    var invisibilidade  = document.getElementById('invisibilidade').value * 20;

    var result          = joinha + cura + ampulheta + energetico + invencibilidade + anjo + invisibilidade;

    document.getElementById('total').innerHTML = result + ' créditos.';
}
