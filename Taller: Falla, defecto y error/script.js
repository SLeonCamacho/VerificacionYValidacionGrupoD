// JavaScript: Lógica para limitar intentos de inicio de sesión con fallos y errores

let intentos = 0;

document.getElementById('loginForm').addEventListener('submit', function(event){
    event.preventDefault();

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
    }
});
