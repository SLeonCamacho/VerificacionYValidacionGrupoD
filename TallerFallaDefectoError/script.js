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

    // Fallo: Se supone que el límite es de tres intentos, pero debido a un error lógico,
    // el sistema permite un intento adicional.
    // Defecto: Uso incorrecto del operador, debería ser '>='
    if (intentos > 3) {
        showAlert('Has superado el número de intentos')
        // Error: El formulario no se bloquea después de superar los intentos
    } else {
        console.log('Verificando credenciales...');
        showAlert('Intento número ' + intentos);
        console.log('Intento número ' + intentos);

        // Fallo: Se supone que el sistema debe comprobar que el usuario y la contraseña sean correctos,
        // pero debido a un error del programador, el sistema permite el inicio de sesión ya sea con el usuario o la contraseña correcta.
        // Defecto: Uso incorrecto del operador, debería ser '&&'
        if(username === credencialesCorrectas.username || password === credencialesCorrectas.password) {
            showAlert('Inicio de sesión exitoso');
            // Error: El sistema ingresa al usuario aunque la contraseña sea incorrecta y viceversa
            // Redirigir al usuario a bienvenida.html
            window.location.href = 'bienvenida.html';
        } else {
            showAlert('Usuario o contraseña incorrectas >:v');
            document.getElementById('username').value = "";
            document.getElementById('password').value = "";
            intentos++;
        }
    }
});

function showAlert(message) {
    const customToast = new bootstrap.Toast(document.getElementById('customToast'));
    document.querySelector('.toast-body').textContent = message;
    customToast.show();
}