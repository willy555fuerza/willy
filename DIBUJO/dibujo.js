var color = document.getElementById("colorcito");
var perimetro_de_dibujo = document.getElementById("area_de_desarrollo");
var perimetro_final_de_dibujo = perimetro_de_dibujo.getContext("2d");
var thick = document.getElementById("grosor_linea");
var limpiador_activado = document.getElementById("boton_determinante");
var x;
var y;

limpiador_activado.addEventListener("click", limpiarClick);
perimetro_de_dibujo.addEventListener("mousedown", elClick);
perimetro_de_dibujo.addEventListener("mousemove", moverElClick);
perimetro_de_dibujo.addEventListener("mouseup", finalClick);

// En la parte inferior esta todo lo relacionado a las funciones.
function dibujandoLasLineas(color, xini, yini, xfin, yfin) {
  perimetro_final_de_dibujo.lineWidth = thick.value;
  perimetro_final_de_dibujo.strokeStyle = color;
  perimetro_final_de_dibujo.lineJoin = "bevel";
  perimetro_final_de_dibujo.beginPath();
  perimetro_final_de_dibujo.moveTo(xini, yini);
  perimetro_final_de_dibujo.lineTo(xfin, yfin);
  perimetro_final_de_dibujo.stroke();
  perimetro_final_de_dibujo.closePath();
}

function elClick(evento) {
  evento.buttons = 1;
  x = evento.layerX;
  y = evento.layerY;
}

function moverElClick(evento) {
  if (evento.buttons == 1) {
    dibujandoLasLineas(color.value, x, y, evento.layerX, evento.layerY);
    x = evento.layerX;
    y = evento.layerY;
  } else {
    x = evento.layerX;
    y = evento.layerY;
  }
}

function finalClick(evento) {
  estado_del_click = 0;
}

function limpiarClick(evento) {
  perimetro_final_de_dibujo.clearRect(0, 0, perimetro_de_dibujo.width, perimetro_de_dibujo.height);
}