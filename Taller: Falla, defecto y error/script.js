// JavaScript: Lógica para limitar intentos de inicio de sesión con fallos y errores

let intentos = 0;
const credencialesCorrectas = {
    username: "usuario123",
    password: "contraseñaSegura"
};

document.getElementById('loginForm').addEventListener('submit', function(event){
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    intentos++;

    // Fallo: Se supone que el límite es de tres intentos, pero debido a un error lógico,
    // el sistema permite un intento adicional.
    // Defecto: Uso incorrecto del operador, debería ser '>'
    if (intentos >= 3) {
        alert('Has superado el número de intentos');
        // Error: El formulario no se bloquea después de superar los intentos
        // Debería haber una lógica aquí para deshabilitar el formulario
    } else {
        // Lógica para verificar las credenciales del usuario (simulada aquí)
        console.log('Verificando credenciales...');
        if(username === credencialesCorrectas.username && password === credencialesCorrectas.password) {
            alert('Inicio de sesión exitoso');
        // Aquí se debería redirigir al usuario o cambiar la interfaz para indicar el éxito del inicio de sesión
        } else {
            alert('Usuario o contraseña incorrectas >:v');
        }
    }
});
