$(document).ready(function(){
    $("#prox").click(function(){
        let idPoke = parseInt($("#number").val()) + 1
        ProxPoke(idPoke)
    });

    $("#ante").click(function(){
        let idPoke = parseInt($("#number").val()) - 1
        ProxPoke(idPoke)
    });

});

window.onload = function(){
    let weight = mascaraPeso($("#peso")[0].childNodes[0].nodeValue)
    let height = mascaraAltura($("#altura")[0].childNodes[0].nodeValue)

    $("#peso")[0].childNodes[0].nodeValue = weight
    $("#altura")[0].childNodes[0].nodeValue = height
}

function ProxPoke(idPoke){
    let infoBox = $(".infoBox")
    let imgBox = $(".imgBox")

    $.ajax({
        url: '',
        type: 'post',
        contentType: 'application/json',
        data: JSON.stringify({
            idPoke: idPoke
        }),
        success: function(response){
            console.log(response.data)

            let height = "" + response.data.height
            let weight = "" + response.data.weight

            height = mascaraAltura(height)
            weight = mascaraPeso(weight)

            dados = '<p class="infoNameBg"><span class="numberInfo"><img src="static/images/pokeball.svg" alt="pokeball" style="vertical-align: sub;"> '+response.data.number+'</span>'
            dados += '<span class="nameText">'+response.data.name+'</span></p>' 
            if (response.data.type.length > 1) {
                let tipo1
                let tipo2
                switch (response.data.type[0].type.name) {

                    case "grass":
                        tipo1 = '<p class="textInfo mt-5"><span class="typeInfo" style="background-color: #74BE3D">'+response.data.type[0].type.name+'</span>'
                        break

                    case "fire":
                        tipo1 = '<p class="textInfo mt-5"><span class="typeInfo" style="background-color: #DA390F">'+response.data.type[0].type.name+'</span>'
                        break
                    
                    case "water":
                        tipo1 = '<p class="textInfo mt-5"><span class="typeInfo" style="background-color: #3892EC">'+response.data.type[0].type.name+'</span>'
                        break

                    case "normal":
                        tipo1 = '<p class="textInfo mt-5"><span class="typeInfo" style="background-color: #CFCAA8">'+response.data.type[0].type.name+'</span>'
                        break

                    case "bug":
                        tipo1 = '<p class="textInfo mt-5"><span class="typeInfo" style="background-color: #A5B424">'+response.data.type[0].type.name+'</span>'
                        break

                    case "flying":
                        tipo1 = '<p class="textInfo mt-5"><span class="typeInfo" style="background-color: #99A6ED">'+response.data.type[0].type.name+'</span>'
                        break

                    case "electric":
                        tipo1 = '<p class="textInfo mt-5"><span class="typeInfo" style="background-color: #F8BC28">'+response.data.type[0].type.name+'</span>'
                        break

                    case "rock":
                        tipo1 = '<p class="textInfo mt-5"><span class="typeInfo" style="background-color: #9A8C37">'+response.data.type[0].type.name+'</span>'
                        break

                    case "dark":
                        tipo1 = '<p class="textInfo mt-5"><span class="typeInfo" style="background-color: #503928">'+response.data.type[0].type.name+'</span>'
                        break

                    case "fairy":
                        tipo1 = '<p class="textInfo mt-5"><span class="typeInfo" style="background-color: #EFB8F0">'+response.data.type[0].type.name+'</span>'
                        break

                    case "ground":
                        tipo1 = '<p class="textInfo mt-5"><span class="typeInfo" style="background-color: #DF993F">'+response.data.type[0].type.name+'</span>'
                        break

                    case "steel":
                        tipo1 = '<p class="textInfo mt-5"><span class="typeInfo" style="background-color: #B6B3B7">'+response.data.type[0].type.name+'</span>'
                        break

                    case "dragon":
                        tipo1 = '<p class="textInfo mt-5"><span class="typeInfo" style="background-color: #756FD3">'+response.data.type[0].type.name+'</span>'
                        break

                    case "fighting":
                        tipo1 = '<p class="textInfo mt-5"><span class="typeInfo" style="background-color: #823425">'+response.data.type[0].type.name+'</span>'
                        break

                    case "ghost":
                        tipo1 = '<p class="textInfo mt-5"><span class="typeInfo" style="background-color: #5E64AB">'+response.data.type[0].type.name+'</span>'
                        break

                    case "ice":
                        tipo1 = '<p class="textInfo mt-5"><span class="typeInfo" style="background-color: #9FDEF9">'+response.data.type[0].type.name+'</span>'
                        break

                    case "psychic":
                        tipo1 = '<p class="textInfo mt-5"><span class="typeInfo" style="background-color: #DF497B">'+response.data.type[0].type.name+'</span>' 
                        break

                    case "poison":
                        tipo1 = '<p class="textInfo mt-5"><span class="typeInfo" style="background-color: #8D468B">'+response.data.type[0].type.name+'</span>' 
                        break
               
                }
                switch (response.data.type[1].type.name) {
            
                    case "grass":
                        tipo2 = '<span class="typeInfo2" style="background-color: #74BE3D">'+response.data.type[1].type.name+'</span></p>'
                        break

                    case "fire":
                        tipo2 = '<span class="typeInfo2" style="background-color: #DA390F">'+response.data.type[1].type.name+'</span></p>'
                        break
                    
                    case "water":
                        tipo2 = '<span class="typeInfo2" style="background-color: #3892EC">'+response.data.type[1].type.name+'</span></p>'
                        break

                    case "normal":
                        tipo2 = '<span class="typeInfo2" style="background-color: #CFCAA8">'+response.data.type[1].type.name+'</span></p>'
                        break

                    case "bug":
                        tipo2 = '<span class="typeInfo2" style="background-color: #A5B424">'+response.data.type[1].type.name+'</span></p>'
                        break

                    case "flying":
                        tipo2 = '<span class="typeInfo2" style="background-color: #99A6ED">'+response.data.type[1].type.name+'</span></p>'
                        break

                    case "electric":
                        tipo2 = '<span class="typeInfo2" style="background-color: #F8BC28">'+response.data.type[1].type.name+'</span></p>'
                        break

                    case "rock":
                        tipo2 = '<span class="typeInfo2" style="background-color: #9A8C37">'+response.data.type[1].type.name+'</span></p>'
                        break

                    case "dark":
                        tipo2 = '<span class="typeInfo2" style="background-color: #503928">'+response.data.type[1].type.name+'</span></p>'
                        break

                    case "fairy":
                        tipo2 = '<span class="typeInfo2" style="background-color: #EFB8F0">'+response.data.type[1].type.name+'</span></p>'
                        break

                    case "ground":
                        tipo2 = '<span class="typeInfo2" style="background-color: #DF993F">'+response.data.type[1].type.name+'</span></p>'
                        break

                    case "steel":
                        tipo2 = '<span class="typeInfo2" style="background-color: #B6B3B7">'+response.data.type[1].type.name+'</span></p>'
                        break

                    case "dragon":
                        tipo2 = '<span class="typeInfo2" style="background-color: #756FD3">'+response.data.type[1].type.name+'</span></p>'
                        break

                    case "fighting":
                        tipo2 = '<span class="typeInfo2" style="background-color: #823425">'+response.data.type[1].type.name+'</span></p>'
                        break

                    case "ghost":
                        tipo2 = '<span class="typeInfo2" style="background-color: #5E64AB">'+response.data.type[1].type.name+'</span></p>'
                        break

                    case "ice":
                        tipo2 = '<span class="typeInfo2" style="background-color: #9FDEF9">'+response.data.type[1].type.name+'</span></p>'
                        break

                    case "psychic":
                        tipo2 = '<span class="typeInfo2" style="background-color: #DF497B">'+response.data.type[1].type.name+'</span></p>'
                        break

                    case "poison":
                        tipo2 = '<span class="typeInfo2" style="background-color: #8D468B">'+response.data.type[1].type.name+'</span></p>'
                        break

                }

                dados += tipo1+tipo2

            } else {   
                let tipo
                switch (response.data.type[0].type.name) {

                    case "grass":
                        tipo = '<p class="textInfo mt-5"><span class="typeInfo" style="background-color: #74BE3D">'+response.data.type[0].type.name+'</span></p>'
                        break

                    case "fire":
                        tipo = '<p class="textInfo mt-5"><span class="typeInfo" style="background-color: #DA390F">'+response.data.type[0].type.name+'</span></p>'
                        break
                    
                    case "water":
                        tipo = '<p class="textInfo mt-5"><span class="typeInfo" style="background-color: #3892EC">'+response.data.type[0].type.name+'</span></p>'
                        break

                    case "normal":
                        tipo = '<p class="textInfo mt-5"><span class="typeInfo" style="background-color: #CFCAA8">'+response.data.type[0].type.name+'</span></p>'
                        break

                    case "bug":
                        tipo = '<p class="textInfo mt-5"><span class="typeInfo" style="background-color: #A5B424">'+response.data.type[0].type.name+'</span></p>'
                        break

                    case "flying":
                        tipo = '<p class="textInfo mt-5"><span class="typeInfo" style="background-color: #99A6ED">'+response.data.type[0].type.name+'</span></p>'
                        break

                    case "electric":
                        tipo = '<p class="textInfo mt-5"><span class="typeInfo" style="background-color: #F8BC28">'+response.data.type[0].type.name+'</span></p>'
                        break

                    case "rock":
                        tipo = '<p class="textInfo mt-5"><span class="typeInfo" style="background-color: #9A8C37">'+response.data.type[0].type.name+'</span></p>'
                        break

                    case "dark":
                        tipo = '<p class="textInfo mt-5"><span class="typeInfo" style="background-color: #503928">'+response.data.type[0].type.name+'</span></p>'
                        break

                    case "fairy":
                        tipo = '<p class="textInfo mt-5"><span class="typeInfo" style="background-color: #EFB8F0">'+response.data.type[0].type.name+'</span></p>'
                        break

                    case "ground":
                        tipo = '<p class="textInfo mt-5"><span class="typeInfo" style="background-color: #DF993F">'+response.data.type[0].type.name+'</span></p>'
                        break

                    case "steel":
                        tipo = '<p class="textInfo mt-5"><span class="typeInfo" style="background-color: #B6B3B7">'+response.data.type[0].type.name+'</span></p>'
                        break

                    case "dragon":
                        tipo = '<p class="textInfo mt-5"><span class="typeInfo" style="background-color: #756FD3">'+response.data.type[0].type.name+'</span></p>'
                        break

                    case "fighting":
                        tipo = '<p class="textInfo mt-5"><span class="typeInfo" style="background-color: #823425">'+response.data.type[0].type.name+'</span></p>'
                        break

                    case "ghost":
                        tipo = '<p class="textInfo mt-5"><span class="typeInfo" style="background-color: #5E64AB">'+response.data.type[0].type.name+'</span></p>'
                        break

                    case "ice":
                        tipo = '<p class="textInfo mt-5"><span class="typeInfo" style="background-color: #9FDEF9">'+response.data.type[0].type.name+'</span></p>'
                        break

                    case "psychic":
                        tipo = '<p class="textInfo mt-5"><span class="typeInfo" style="background-color: #DF497B">'+response.data.type[0].type.name+'</span></p>'
                        break

                    case "poison":
                        tipo = '<p class="textInfo mt-5"><span class="typeInfo" style="background-color: #8D468B">'+response.data.type[0].type.name+'</span></p>'
                        break

                }

                dados += tipo

            }
            dados += '<p class="hwInfo mt-5">Height <span class="padWH" id="altura">'+height+'</span>m<span class="wt">Weight <span class="padWH" id="peso">'+weight+'</span>kg</span></p>'
            dados += '<input type="hidden" value="'+ response.data.number +'" id="number">' 

            dadosImg = '<img src="'+ response.data.sprite +'" alt="'+ response.data.name +'" class="img-fluid">'

            imgBox.empty()
            infoBox.empty()
            imgBox.append(dadosImg)
            infoBox.append(dados)
        }
    })
}

function mascaraPeso(total){
    if(total.length <= 4) {
        let v1 = ""
        let v2 = ""

        if(total.length === 1) {
            total = '0,' + total;
        } 

        else if(total.length === 2) {
            v1 = total.slice(0, -1)
            v2 = total.slice(-1)
            total = v1 +","+ v2;
        } 

        else if(total.length === 3) {
            v1 = total.slice(0, -1)
            v2 = total.slice(-1)
            total = v1 +","+v2;
        } 

        else if(total.length === 4) {
            v1 = total.slice(0, -1)
            v2 = total.slice(-1)
            total = v1 +","+v2;
        } 

    }

    return total
    
}

function mascaraAltura(total){
    if(total.length <= 3) {
        let v1 = ""
        let v2 = ""

        if(total.length === 1) {
            total = '0.' + total;
        } 

        else if(total.length === 2) {
            v1 = total.slice(0, -1)
            v2 = total.slice(-1)
            total = v1 +"."+ v2;
        } 

        else if(total.length === 3) {
            v1 = total.slice(0, -1)
            v2 = total.slice(-1)
            total = v1 +"."+v2;
        } 

    }

    return total
    
}
