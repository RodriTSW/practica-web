console.log("Sitio cargado correctamente 🚀");

document.addEventListener("DOMContentLoaded", function(){
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("¡Gracias por tu mensaje!");
    });
});
