var texto = document.getElementById('texto_lineas');
var boton = document.getElementById('botoncito');
boton.addEventListener('click', dibujoPorClick );


//variables
var d = document.getElementById('dibujito');
var ancho = d.width;
var lienzo = d.getContext('2d');



function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal); 
    lienzo.stroke();
    lienzo.closePath();
}


function dibujoPorClick()
{
    var lineas = parseInt(texto.value);
    //var lineas = 30;
    var l = 0;
    var yi , xf;
    var espacio = ancho / lineas;
    console.log('linea', + 1);
    //var colorcito = '#21C2F2';

//Bordes
    dibujarLinea('#FB0202', 1, 1, 1, 299);//derecho
    dibujarLinea('red', 1, 299, 299, 299);//inferior
    dibujarLinea('red', 299, 1, 299, 299);//izquierda
    dibujarLinea('#FB0202', 1, 1, 299, 1);//superior 

//Bucles

for (l; l < lineas; l++)
{
    yi = espacio * l;
    xf = espacio * (l + 1);
    yf = 300 -[10 * (l+1)];
    xi = 300 - (10 * l);

    dibujarLinea ('red', 1, yi, xf, 299);//Esquina inferior izquierda
    dibujarLinea ('red', yi, 1, 299, xf);//Esquina superior derecha
    dibujarLinea ('red', yi, 299, 299, yf);//Esquina inferior derecha
    dibujarLinea ('red', 1, xi, xf, 1);//Esquina superior derecha
    dibujarLinea ('red', xi, 0, 150, 150);//
    //dibujarLinea ('green', 150, xi, 200, 300);
    dibujarLinea ('red', 0, yi, 152, 150);//
    dibujarLinea ('red', 300, xi, 150, 150);//
}

    //console.log('texto');
    //var x = texto.value;
    //alert('No me toques ahi ' + texto.value);
}
