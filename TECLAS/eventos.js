//alert('todo bien');
var teclas = {
    UP:38,
    DOWN : 40,
    LEFT : 37,
    RIGHT : 39
};

//console.log(teclas);
//Global Declarations - Properities, Fields, EventListeners
document.addEventListener('keydown' , dibujarTeclado);
document.addEventListener('mouseup' , testMouseDrawAvailability);
var drawingFrame = document.getElementById('canvasArrows');
var colorPicker = document.getElementById('colorPicker');
var pincelSize = document.getElementById('size');
var limpiador_activado = document.getElementById('limpiar');
limpiador_activado.addEventListener('click', limpiarClick);
colorPicker.addEventListener('change', changeColor);
pincelSize.addEventListener('change', changeNumber);
drawingFrame.addEventListener('mousedown', testMouseDrawAvailability);
drawingFrame.addEventListener('mousemove', dibujarMouse);

var paper = drawingFrame.getContext('2d');
var anchoCanvas = parseInt(drawingFrame.offsetWidth);
var wControllerCounter = anchoCanvas;
var mainColor = colorPicker.value;
var userSize = pincelSize.value;
var limpiador_activado = limpiar;
var frameColor = 'orange';
var x = 200;
var y = 200;
var drawingFrame =false;
for(var i = 0; i <= 1; i++)
{
    for(var j = 0; j <= anchoCanvas; j + anchoCanvas)
    {
        dibujarLinea(paper, 5, frameColor, i * anchoCanvas, i * anchoCanvas);
        wControllerCounter = anchoCanvas;
    }
};

//FUNCIONES

function testMouseDrawAvailability(evento)
{
    if(evento.type == 'mousedown')
    {
        drawingEnabled = true;
    }
    else if(evento.type == 'mouseup')
    {
        drawingEnabled = true;
    }
};

function changeColor()
{
    mainColor = colorPicker.value;
}

function changeNumber()
{
    userSize = pincelSize.value;
};

function limpiarClick()
{
    limpiador_activado.value = limpiar;
}

//FUNCION QUE DIBUJA UNA LINEA

function dibujarLinea(lienzo, size, color, xinicial, yinicial,xfinal,yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = size;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.ClosePath();
};

function dibujarTeclado(evento)
{
    var movement = 10;
    switch(evento.KeyCode)
    {
        case teclas.DOWN:
                dibujarLinea(paper, userSize, mainColor, x, y, x, y + movement);
                y += movement;
            break;
        case teclas.LEFT:
                dibujarLinea(paper, userSize,mainColor, x, y, x - movement, y);
                x -= movement;
            break;
        case teclas.RIGHT:
                dibujarLinea(paper, userSize, mainColor, x, y, x + movement, y);
            break;
        case teclas.UP:
                dibujarLinea(paper, userSize, mainColor, x, y, x, y - movement);
                y -= movement;
            break;
            default:
    }
};


function dibujarMouse(evento)
{
    dibujarLinea(paper, userSize, mainColor, evento.offsetX - 2, evento.offsetY -2, evento.offsetX + 1, evento.offsetY + 1);
};

/*function elClick(evento)
{
    evento.buttons = 1;
    x = evento.layerX;
    y = evento.layerY;
};

function moverElClick(evento)
{
    if(evento.buttons == 1)
    {
        dibujarLinea(color.value, x, y, evento.layerX, evento.layerY);
        x = evento.layerX;
        y = evento.layerY;
    } else{
        x = evento.layerX;
        y = evento.layerY;
    }
};*/

/*function finalClick(evento)
{
    estado_del_click = 0;
};*/

function limpiarClick()
{
    lienzo.clearRect(0, 0, drawingFrame.width, drawingFrame.height);
};

/*var cuadrito = document.getElementById('area_de_dibujo');
var papel = cuadrito.getContext('2d'); 
var x = 100;
var y = 100;

dibujarLinea('red', x-1, y-1, x+1, y+1, papel)

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal); 
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarTeclado(evento)
{   
    var colorcito = 'red';
    var movimiento = 1;
    switch(evento.keyCode)
    {
        case teclas.UP:
            dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
            y = y - movimiento;

        break;
        case teclas.DOWN:
            dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
            y = y + movimiento;
        break;
        //default:
        case teclas.LEFT:
            dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
            x = x - movimiento;
        break;
        case teclas.RIGHT:
            dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
            x = x + movimiento;
        break;
        default:
    }
    //console.log('Tecla oprimida');
}*/

//PROYECTO POKEMON

/*const area_de_dibujo = document.querySelector('#area_de_dibujo')
const ctx = area_de_dibujo.getContext('2d')
ctx.fillStyle = '#d30f0e'
ctx.fillRect(30, 30, 410, 190)
ctx.strokeStyle = 'rgba(0, 0, 0, .5)'
ctx.lineWidth = 5
ctx.strokeRect(130, 50, 200, 150)

ctx.strokeStyle = 'black'
ctx.lineWidth = 3
ctx.lineTo(200, 110)
ctx.lineTo(220, 140)
ctx.lineTo(180, 180)
ctx.lineTo(255, 140)
ctx.lineTo(240, 110)
ctx.lineTo(290, 75)
ctx.closePath()
ctx.fillStyle = '#f4c521'
ctx.fill()
ctx.stroke()

ctx.beginPath()

ctx.lineWidth = 10
const inset = ctx.lineWidth / 2
const radius = [50, 0, 50, 0]
const topLeftRadius = radius[0]
const topRightRadius = radius[1]
const bottonRightRadius = radius[2]
const bottonLeftRadius = radius[3]

const width = area_de_dibujo.width
const height = area_de_dibujo.height

ctx.lineTo(topLeftRadius, inset)
ctx.lineTo(width - topRightRadius, inset)
ctx.lineTo(width - inset, topRightRadius)
ctx.lineTo(width - inset, height - bottonRightRadius)
ctx.lineTo(width - bottonRightRadius, height - inset)
ctx.lineTo(bottonLeftRadius, height - inset)
ctx.lineTo(inset , height - bottonLeftRadius)
ctx.lineTo(inset ,topLeftRadius)
ctx.closePath()
ctx.stroke()
*/

/*const $canvas = document.querySelector('#canvas');
const contexto = $canvas.getContext('2d');
const COLOR = 'black';
const GROSOR = 2;
let xAnterior = 0, yAnterior = 0, xActual = 0, yActual = 0;
const obtenerXReal = (clientX) => clientX - $canvas.getBoundingClientRect().left;
const obtenerYReal = (clientY) => clientY - $canvas.getBoundingClientRect().top;
let haComenzadoDibujo = false; //Bandera que indica si el usuario está presionando el b
$canvas.addEventListener('mousedown' , evento =>{
    //En este evento solo se ha iniciado el click, asi que dibujamos un punto
    xAnterior = xActual;
    yAnterior = yActual;
    xActual = obtenerXReal(evento.clientX);
    yActual = obtenerYReal(evento.clientY);
    contexto.beginPath();
    contexto.fillStyle = COLOR;
    contexto.fillRect(xActual, yActual, GROSOR, GROSOR);
    contexto.closePath();
    //y Establecemos la Bandera
    haComenzadoDibujo = true;

});

$canvas.addEventListener('mousemove', (evento) => {
    if (!haComenzadoDibujo) {
        return;
    }
    //El mouse se está moviendo y el usuario está presionando el botón, asi que dibujamos
    xAnterior = xActual;
    yAnterior = yActual;
    xActual = obtenerXReal(evento.clientX);
    yActual = obtenerYReal(evento.clientY);
    contexto.beginPath();
    contexto.moveTo(xAnterior, yAnterior);
    contexto.lineTo(xActual, yActual);
    contexto.strokeStyle = COLOR;
    contexto.lineWidth = GROSOR;
    contexto.stroke();
    contexto.closePath();
});
['mouseup', 'mouseout'].forEach(nombreDeEvento =>{
    $canvas.addEventListener(nombreDeEvento, () =>{
        haComenzadoDibujo = false;
    });
});*/
