pokeNum = parseInt($("#number").val())

$(document).ready(function(){
    $("#prox").click(function(){
        idPoke = pokeNum + 1
        ProxPoke(idPoke)
    });
});

function ProxPoke(idPoke){

    fetch("/", {
        method: "POST",
        body: JSON.stringify({ "id" : idPoke }),
    }).then((_res) => {
        //window.location.href = "/";
        var myPokemon = JSON.parse('{{ pokemon | tojson }}');
        console.log(myPokemon)
    });
}