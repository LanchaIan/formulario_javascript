function funcion_reset() {
if (confirm("¿Está seguro de que quiere reinicializar todos los" +
" campos del formulario?")) {
return true
}
else {
return false
}
}

function conseguir_input_radio() {
    let radios = document.getElementsByName('sexo');
    for (let radio of radios)
    {
        if (radio.checked) {
            return radio.value;
        }
    }
}

function conseguir_datos() {
    let persona = [];
    let apellidos = document.getElementById("apellidos").value;
    let nombre = document.getElementById("nombre").value;
    let sexo = conseguir_input_radio();
    let correo = document.getElementById("correo").value;
    persona.push(apellidos);
    persona.push(nombre);
    persona.push(sexo);
    persona.push(correo);
    return persona;
}

function conseguir_datos_resumidos(){

}

function añadir(){
    let persona = document.createElement('option');
    let datos = conseguir_datos();
    persona.value = datos;
    persona.text = datos;
    let $select = document.querySelector("#personas");
    $select.appendChild(persona);
    alert("prueba3");
}