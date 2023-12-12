// JavaScript: Lógica para limitar intentos de inicio de sesión con fallos y errores
console.log('Ultimo probando');
let intentos = 0;
const credencialesCorrectas = {
    username: "usuario123",
    password: "contraseñaSegura"
};

document.getElementById('loginForm').addEventListener('submit', function(event){
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Fallo: Se supone que el límite es de tres intentos, pero debido a un error lógico,
    // el sistema permite un intento adicional.
    // Defecto: Uso incorrecto del operador, debería ser '>='
    if (intentos > 3) {
        alert('Has superado el número de intentos');
        // Error: El formulario no se bloquea después de superar los intentos
    } else {
        console.log('Verificando credenciales...');
        alert('Intento número ' + intentos);
        if(username === credencialesCorrectas.username && password === credencialesCorrectas.password) {
            alert('Inicio de sesión exitoso');
            // Redirigir al usuario a bienvenida.html
            window.location.href = 'bienvenida.html';
        } else {
            alert('Usuario o contraseña incorrectas >:v');
            intentos++;
        }
    }
});
