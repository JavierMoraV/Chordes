
$( document ).ready(function() {
    obtenerDatos()
});
function obtenerDatos() {
    $.ajax('https://62b11514196a9e98702f2c86.mockapi.io/chordes', {
        type: 'GET',  // http method
        success: function (data, status, xhr) {
            for (var indice = 0; indice < data.length; indice++) {
                var generos = data[indice].generos
                var artistas = data[indice].artistas
                var historia = data[indice].historia
                var filaTAbla = '<tr>'
                                + '<td class="prc-25">'+generos+'</td>'
                                +  '<td class="prc-25">'+artistas+'</td>'
                                +   '<td class="prc-25">'+historia+'</td>'
                                +'</tr>'
                console.log(filaTAbla)
                $("#tabla").append(filaTAbla)

            }
        },
        error: function (jqXhr, textStatus, errorMessage) {
            alert("No me pude conectar a la api: error"+errorMessage+" estado:"+textStatus  )
        }
    });
}