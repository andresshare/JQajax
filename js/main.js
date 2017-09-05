// //script1
// $(document).ready(function () {

//     $.ajax('social.html',{
//         //script de llamado basico
//         success: function (response) {
//            $('.contenedor').append($(response));
//          //console.log(response);
//         }
//     });
// });

//script2 //modo corto solicitud de datos
// $(document).ready(function () {
//     $.get("social.html",function (response ) {
//             $('.contenedor').append(response);
//         },

//     );
// });

//script3 obtener datos con Json

// $(document).ready(function () {
//     $.getJSON("https://randomuser.me/api/?results=50").then(function (respuesta) {

//         //insertar avatar
//         respuesta.results.forEach(function(persona) {
//            // console.log(persona.picture.thumbnail);
//             $('<img>').attr('src',persona.picture.thumbnail ).appendTo('.contenido');
//         });
//         }
//     );
// });

//script4 estado del objeto con callbacks

// $(document).ready(function () {
//     $.ajax('social.html', {

//         success: function (response, status, request) {
//             console.log(arguments);
//             $('.contenedor').append($(response));
//         },
//         error: function (request, tipoError, mensaje) {
//             console.log(arguments);
//         },
//         complete: function (request, status) {
//             console.info(arguments);

//         }, 
//             timeout: 1,
//         });
// });


//script5 estado del objeto JQuery 3.0 en adelante API PROMESAS
// $(document).ready(function () {


//     $.ajax('social.html')

//           //success
//           .done(function (response) { 
//               $('.contenedor').append($(response));
//              })

//             //error()
//             .fail(function (request,tipoError,mensaje) 
//             {
//                 console.error(arguments);
//               })

//           .always(function (request,status) 
//           {
//               console.log(arguments);
//             })   
// });

//script6 FORMULARIO //CORS:si el origen es diferente al destino se usa

// Realizamos la petición cno recarga y arcivo ajax.php

// $('form').on('submit', function (evt) {
//     evt.preventDefault();

//     // Realizamos la petición
//     $.ajax('http://localhost/jQAjax/ajax.php', {
//         type: 'POST',
//         dataType: 'json',
//         data: {
//             'nombre': $('#nombre').val(),
//             'mensaje': $('#mensaje').val(),
//         }
//     }).then(function (respuesta) {
//         console.log(respuesta);
//         $('form').children('ol').prepend($(`
//             <li>
//                 ${respuesta.nombre} - <small>${respuesta.fecha.weekday}</small><br>
//                 ${respuesta.mensaje}
//             </li>
//         `));
//     });
// });


//script 7 recorrer arrays AJAX

// $(document).ready(function () {
    
//     $('.adoptar').children('input').on('click.candidatos', function (evt) {
//         evt.preventDefault();

//         // Obteniendo los datos de los candidatos a adopción
//         $.getJSON('http://localhost/jQAjax/adopcion.php')
//             .then(mostrarCandidatos)
//             .fail(error => console.error(Error(error)))
//             .always(() => console.info('Request finalizado'));

//         // Componer las fichas de los candidatos
//         // e insertarlas en DOM
//         function mostrarCandidatos(canditatos) {
//             //eliminar evento onclick para click
//             $('.adoptar').children('input').off('click.candidatos'); //off para funciones anonimas
            
//             $.each(canditatos, function (indice, candidato) {
//                 $(`<div>
//                     <h4>${candidato.nombre} <i>(${candidato.edad})</i></h4>
//                     <h5>${candidato.info}</h5>
//                 </div>`)
//                     .css('background-image', `url(${candidato.imagen})`)
//                     .appendTo($('.candidatos'));
                    
//             });
//         }
//     }).on('click.mensaje',function (evt) {
//         alert("hola");
//         //$('.adoptar').children('input').trigger('candidatos')//evento totalmente personalizado cambios los On
//     });

// });
   





















