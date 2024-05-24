let usuarios = ['Gonzalo', 'Pedro', 'Luis', 'Gonzalo'];
let apellido = ['Fernandez', 'Gomez', 'Poca', 'Silva'];
let img = ['./imagenes/user.png'];
let desc = ['Estudiante en la asociacion', 'Profesor en la asociacion', 'Estudiante en la asociacion', 'Director de la asociacion'];

$(function() {
    $('#agregar').hide()
    for (let i = 0; i < usuarios.length; i++) {
        var crearusuario = $(`<div class="carta"> <img src="${img}"> <p class="nombre"><strong>${usuarios[i]}</strong><br><br>${apellido[i]}</p> <p class="desc">${desc[i]}</p> <button class="borrar">Borrar</button> </div>`);
        $('#personas').append(crearusuario);
    }
    $('#botonUsuario').click(function(){
        $('.carta').hide();
        $('#agregar').show()
    })
    $('#boton').click(function() {
        var resultado = $('#buscarPersona').val().toLowerCase();
        $('.carta').each(function() {
            var nombre = $(this).find('.nombre').text().toLowerCase();
            if (nombre.includes(resultado)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });


    $('#botonAgregar').click(function() {
        var nuevoNombre = $('#nuevoNombre').val();
        var nuevoApellido = $('#nuevoApellido').val();
        var nuevaDesc = $('#nuevaDesc').val();
        if (nuevoNombre && nuevoApellido && nuevaDesc) {
            usuarios.push(nuevoNombre);
            apellido.push(nuevoApellido);
            desc.push(nuevaDesc);
        };
        if($('#personas').empty()){
        for (let i = 0; i < usuarios.length; i++) {
            var crearusuario = $(`<div class="carta"> <img src="${img}"> <p class="nombre"><strong>${usuarios[i]}</strong><br><br>${apellido[i]}</p> <p class="desc">${desc[i]}</p> <button class="borrar">Borrar</button> </div>`);
            $('#personas').append(crearusuario);
        }}
        $('#agregar').hide();
        $('.carta').show();;
    })  
    

    $('#personas').on("click", ".borrar",function() {
            var index = $(this).parent().index();
            usuarios.splice(index, 1);
            apellido.splice(index, 1);
            desc.splice(index, 1);
            $('#personas').empty();
        for (let i = 0; i < usuarios.length; i++) {
            var crearusuario = $(`<div class="carta"> <img src="${img}"> <p class="nombre"><strong>${usuarios[i]}</strong><br><br>${apellido[i]}</p> <p class="desc">${desc[i]}</p> <button class="borrar">Borrar</button> </div>`);
        $('#personas').append(crearusuario);
    }
    })

    $(".botonUsuario").onclick = function() {
        modal.style.display = "block";
    }
})