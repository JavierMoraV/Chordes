//alert("hoola")
$( document ).ready(function() {
    obtenerDatos()
    $("#sa2").on('click', function(){
        Swal.fire('instrumentos')
    })
    validarDatos();
    abrirMapa();
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
                
                $("#tabla").append(filaTAbla)

            }
        },
        error: function (jqXhr, textStatus, errorMessage) {
            alert("No me pude conectar a la api: error"+errorMessage+" estado:"+textStatus  )
        }
    });
}
function validarDatos() {
    nombre = document.getElementById("nombreForm").value
    apellido = document.getElementById("apellidoForm").value
    edad = document.getElementById("edadForm").value
    direccion = document.getElementById("direccionForm").value
    //otroDato = prompt("ingrese cualquier cosa")
    //console.log("nombre: "+nombre+"\n apellido: "+apellido+ "\n edad: "+edad+ "\n direccion: "+direccion+"\n otro dato: "+otroDato)
    if (nombre=="") {
      document.getElementById("nombreFormError").style.display="block"
      validarNombre=false
    }else{
      document.getElementById("nombreFormError").style.display="none"
      validarNombre=true
    }
    if (apellido=="") {
      document.getElementById("apellidoFormError").style.display="block"
      validarApellido=false
    }else{
      document.getElementById("apellidoFormError").style.display="none"
      validarApellido=true
    }
    if (direccion=="") {
      document.getElementById("direccionFormError").style.display="block"
      validarDireccion=false
    }else{
      document.getElementById("direccionFormError").style.display="none"
      validarDireccion=true
    }

    if (edad<18) {
      document.getElementById("edadFormError").style.display="block"
      validarEdad=false
    }else{
      document.getElementById("edadFormError").style.display="none"
      validarEdad=true
    }
    if(validarNombre&validarApellido&validarDireccion&validarEdad==true){
      Swal.fire('Datos enviados con exito')
      
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Fatan Datos!',
        footer: '<a href="">Revisa y vuelve a intentar</a>'
      })
    }
    
}
function abrirMapa() {
  Swal.fire({
    title: 'Chordes!',
    text: 'Av. Manuel Antonio Matta 470',
    imageUrl: 'resources/mapaChordes.jpg',
    imageWidth: 450,
    imageHeight: 380,
    imageAlt: 'Custom image',
  })
}