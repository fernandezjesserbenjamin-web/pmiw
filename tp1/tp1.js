let bg;
let bgMenu; // variable para la imagen del menu
let animCaminar = [];
let animGritar = [];

// maquina de estados
const INICIO = -1; 
const CAMINANDO = 0;
const GRITANDO = 1;
let estadoActual = INICIO; // arranca en el menú

// variables del personaje
let zombieX, zombieY;
let direccion = 1; 
let velocidadMovimiento = 2.5;
let escalaZombie = 2.5; 

// variable para el manejo temporal del grito
let contadorGrito = 0;

function preload() {
  bg = loadImage("data/Fondohoradeaventura.png"); 
  bgMenu = loadImage("data/MenuHDA.png"); 
  
  animCaminar = cargarSecuencia("data/ZombieCaminando", 16);
  animGritar = cargarSecuencia("data/ZombieGritando", 10);
}

function setup() {
  createCanvas(800, 600); 
  
  // posicion inicial
  zombieX = width / 2;
  zombieY = height / 2 + 100; 
}

function draw() {
  imageMode(CORNER);
  
  // dibuja el fondo dependiendo del estado
  if (estadoActual === INICIO) {
    if (bgMenu) {
      image(bgMenu, 0, 0, width, height);
    } else {
      background(50); 
    }
  } else {
    // para los estados CAMINANDO y GRITANDO usamos el fondo 
    if (bg) {
      image(bg, 0, 0, width, height);
    } else {
      background(150);
    }
  }
  
  // maquina de estados 
  switch(estadoActual) {
    case INICIO:
      dibujarInteraccionMenu(); // el borde del boton en la imagen
      break;

    case CAMINANDO:
      cursor(ARROW); // restaura cursor normal
      
      zombieX += velocidadMovimiento * direccion;
      
      if (zombieX > width - 50) {
        direccion = -1; 
      } else if (zombieX < 50) {
        direccion = 1;  
      }
      
      reproducirAnimacionLoop(animCaminar, zombieX, zombieY, 0.2, direccion, escalaZombie);
      break;
      
    case GRITANDO:
      let terminoGrito = reproducirAnimacionUnaVez(animGritar, zombieX, zombieY, 0.15, direccion, escalaZombie);
      
      if (terminoGrito) {
        estadoActual = CAMINANDO; 
      }
      break;
  }
}


// EVENTOS DE MOUSE

function mousePressed() {
  if (estadoActual === INICIO) {
    // mismas coordenadas que usamos para dibujar el rectangulo (zona de la palabra PLAY)
    let areaX = width / 2 - 110;
    let areaY = height - 160;
    let areaAncho = 220;
    let areaAlto = 100;
    
    // si el clic ocurre dentro del área del "PLAY"
    if (mouseX > areaX && mouseX < areaX + areaAncho && mouseY > areaY && mouseY < areaY + areaAlto) {
      estadoActual = CAMINANDO; 
    }
  } else if (estadoActual === CAMINANDO) {
    estadoActual = GRITANDO;
    contadorGrito = 0; 
  }
}


// FUNCIONES PROPIAS 

function dibujarInteraccionMenu() {
  // define el area invisible justo sobre la palabra "PLAY" en la imagen
  
  let areaX = width / 2 -130;
  let areaY = height - 160;
  let areaAncho = 220;
  let areaAlto = 100;

  let sobrePlay = mouseX > areaX && mouseX < areaX + areaAncho && mouseY > areaY && mouseY < areaY + areaAlto;

  if (sobrePlay) {
    cursor(HAND); 
    
    // dibuja el pequeño borde blanco alrededor de la palabra PLAY al pasar el mouse
    push();
    noFill();
    stroke(255, 200); // color
    strokeWeight(2);
    rect(areaX, areaY, areaAncho, areaAlto, 20); // el "20" redondea las esquinas
    pop();
  } else {
    cursor(ARROW); 
  }
}

function cargarSecuencia(prefijo, cantidad) {
  let frames = [];
  for (let i = 0; i < cantidad; i++) {
    let nombreArchivo = prefijo + nf(i, 4) + ".png"; 
    frames.push(loadImage(nombreArchivo));
  }
  return frames; 
}

function reproducirAnimacionLoop(frames, x, y, velAnim, dir, escala) {
  let frameActual = floor(frameCount * velAnim) % frames.length;
  dibujarFrame(frames[frameActual], x, y, dir, escala);
}

function reproducirAnimacionUnaVez(frames, x, y, velAnim, dir, escala) {
  contadorGrito += velAnim;
  let frameActual = floor(contadorGrito);
  
  if (frameActual >= frames.length) {
    contadorGrito = 0; 
    return true; 
  } else {
    dibujarFrame(frames[frameActual], x, y, dir, escala);
    return false; 
  }
}
// dibuja al zombie espejado al llegar al final del fondo 
function dibujarFrame(img, x, y, dir, escala) {
  push();
  translate(x, y);
  scale(dir * escala, escala); 
  imageMode(CENTER);
  if (img) image(img, 0, 0);
  pop();
}
