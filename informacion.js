 const inputNombre = document.getElementById('nombre')
const inputTelefono = document.getElementById('telefono')
const inputEdad = document.getElementById('edad')
const inputUbicacion = document.getElementById('ubicacion')
const submitButton = document.getElementById('submit')

submitButton.onclick = function(){

const nombre = inputNombre.value;
const telefono = inputTelefono.value;
const ubicacion = inputUbicacion.value;
const edad = inputEdad.value;

firebase.auth().signInWithEmailAndPassword("juan@gmail.com","123456").then(function () {
    console.log("inicio de sesión :)");
    const user = firebase.auth().currentUser;
    console.log(user);
    user.updateProfile({
        ubicacion: ubicacion
    }).then(function (response) {
            console.log(user.ubicacion)
    })
})
}
