document.getElementById("contactoForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let nombre = document.getElementById("nombre").value.trim();
    let email = document.getElementById("email").value.trim();
    let motivo = document.getElementById("motivo").value.trim();
    
    if (nombre === "" || email === "" || motivo === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }
    
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return;
    }
    
    alert("Formulario enviado correctamente.");
    document.getElementById("contactoForm").reset();
});