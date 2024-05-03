function mostrarAlert(){
    alert("mostrarAlert")
}
function registrarse(){
    
    var nombre = document.registro_usuario.nombre.value
    var apellido = document.registro_usuario.apellido.value
    var email = document.getElementById("email_id").value
    var dni = document.getElementById("dni_id").value
    var telefono = document.getElementById("telefono_id").value
    console.log(nombre,apellido,dni,email,telefono)
    //1=="1" -> true
    //1==="1" -> false
    //1!="1" -> false
    //1!=="1" -> true
    if(nombre==""){
        document.getElementById("nombre_error").innerHTML = "El campo nombre es obligatorio"
    }else{
        document.getElementById("nombre_error").innerHTML = ""
    }
}
function valorTipoSeguro(){
    var tipoSeguro = document.getElementById("tipo_seguro_id").value
    console.log(tipoSeguro)
    switch(tipoSeguro){
        case "1": document.getElementById("mensajeValorTipoSeguro").innerHTML = "$ 500"; break;
        case "2": document.getElementById("mensajeValorTipoSeguro").innerHTML = "$ 1000"; break;
        case "3": document.getElementById("mensajeValorTipoSeguro").innerHTML = "$ 1500"; break;
    }
}
valorTipoSeguro()