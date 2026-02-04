var ctx = null, canvas = null;
function iniciar() {
    canvas = document.getElementById('lienzo');
    ctx = canvas.getContext('2d');
    // Primer rectángulo
    ctx.fillStyle = "rgba(0, 0, 0, 0.5)"; //Color
    ctx.fillRect(100, 10, 60, 50); //Ractángulo relleno
    // Segundo rectángulo
    ctx.lineWidth = 5 //ancho de contorno
    ctx.strokeStyle = "red"; //COlor
    ctx.strokeRect(200, 70, 60, 50); //Rectángulo de solo contorno
}
window.addEventListener("load", iniciar, false);