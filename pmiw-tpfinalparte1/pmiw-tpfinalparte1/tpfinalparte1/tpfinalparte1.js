
 
//Un día en la vida de un estudiante facultativo.
//Diamela Molteni y Benjamin Fernandez Jesser - Comisión 3

let imagenes = [];
let cantidad = 46;
let inicio = 37;
let tipografia;
let alarma;
let musicaFondo;
let tiempoInicio;
let opcion;
let textoEntra = true;
let textoSale = false;
let esperaTexto = 0;
let posicionTexto = -150;
//variable hecha para que, segun  el camino que elijas, si llegas desde un camino el texto dice una cosa y si llegas desde otro el texto dice otra cosa pero manteniendo la misma imagen.
let camino28 = 0;

function preload() {
  for (let i = 0; i < cantidad; i++) {
    let numero = nf(i, 2);
    imagenes[i] = loadImage("data/img" + numero + ".png");
  }
  alarma = loadSound("data/alarma.mp3");
  musicaFondo = loadSound("data/cancionfondo.mp3");
  tipografia = loadFont("data/determination.ttf");
}

function setup() {
  createCanvas(800, 450);
  textAlign(CENTER, CENTER);
  textFont(tipografia);
}

function draw() {
  image(imagenes[inicio], 0, 0, width, height);

  // globo de texto de 01
  if (inicio === 0) {
    // aparece dps de 3 segs
    if (millis() - tiempoInicio > 3000) {
      fill(0, 191);
      rect(40, 330, 720, 90);
      fill(255);
      textSize(20);
      textAlign(LEFT, CENTER);
      text("Jueves, 6 de la mañana. Suena tu alarma, tenés facultad, ¿qué haces?", 60, 375);
    }
  }

  // globo de texto de 02
  if (inicio === 4) {
    fill(0, 191);
    rect(40, 330, 720, 90);
    fill(255);
    textSize(20);
    textAlign(LEFT, CENTER);
    text("Se te hizo tarde! No llegas a desayunar y tenés que pedirte un uber.", 60, 375);
  }

  // globo de texto de 03
  if (inicio === 2) {
    fill(0, 191);
    rect(40, 330, 720, 90);
    fill(255);
    textSize(20);
    text("Tenés que llevar un objeto para Imagen Digital, qué elegis?", 400, 375);
  }

  if (inicio === 3) {
    fill(0, 191);
    rect(40, 330, 720, 90);
    fill(255);
    textSize(20);
    textAlign(LEFT, CENTER);
    text("Te tomás un micro hasta la facultad.", 60, 375);
  }

  // globo de texto de 06, 07 y 08
  if (inicio === 6 || inicio === 7 || inicio === 8) {
    fill(0, 191);
    rect(40, 330, 720, 90);
    fill(255);
    textSize(20);
    text("LLegaste a clases te dijeron que el objeto estaba bien, genial!", 400, 375);
  }
   if (inicio === 30) {
    fill(0, 191);
    rect(40, 330, 720, 90);
    fill(255);
    textSize(20);
    textAlign(LEFT, CENTER);
    text("Te sentas afuera del kiosco para comer el yogur.", 55, 350);
    text("Luego, volves para terminar la clase de Imágen Digital.", 55, 385);
 }
 if (inicio === 31) {
    fill(0, 191);
    rect(40, 330, 720, 90);
    fill(255);
    textSize(20);
    textAlign(LEFT, CENTER);
    text("Te sentas afuera del kiosco para comer las galletitas.", 55, 350);
    text("Luego, volves para terminar la clase de Imágen Digital.", 55, 385);
 }
  if (inicio === 34) {
    fill(0, 191);
    rect(40, 330, 720, 90);
    fill(255);
    textSize(20);
    textAlign(LEFT, CENTER);
    text("Al salir de clases a las 12 pm pensás en ir a comprarte", 55, 350);
    text("algo por que tenes hambre. Vas a comprarte algo para picar?", 55, 385);
  }
 if (inicio === 9) {
    fill(0, 191);
    rect(40, 310, 720, 100);
    fill(255);
    textSize(20);
    textAlign(LEFT, CENTER);
    text("¡Te olvidaste de llevar un objeto para Imágen Digital!", 55, 330);
    text("El profe se tomó eso a mal, tuviste que haber llevado algo.", 55, 360);
 }
  if (inicio === 38 || inicio === 39 ) {
    fill(0, 191);
    rect(40, 310, 720, 100);
    fill(255);
    textSize(20);
    textAlign(LEFT, CENTER);
    text("Ven una pelicula que les pareció bastante divertida.", 55, 330);
    text("¡Gran idea!", 55, 360);
 }
   if (inicio === 21) {
    fill(0, 191);
    rect(40, 310, 720, 100);
    fill(255);
    textSize(20);
    textAlign(LEFT, CENTER);
    text("Una vez terminada la peli, decidis que ya tenes que.", 55, 330);
    text("volver a casa. Preferis pedirte un uber para volver.", 55, 360);
 }
   if (inicio === 33) {
    fill(0, 191);
    rect(40, 310, 720, 100);
    fill(255);
    textSize(20);
    textAlign(LEFT, CENTER);
    text("Una vez en tu casa prendes la compu y te pones a jugar ", 55, 330);
    text("al valorant un rato, probablemente durante la noche sigas jugando.", 55, 360);
 }
  if (inicio === 10) {
    fill(0, 191);
    rect(40, 310, 720, 100);
    fill(255);
    textSize(15);
    textAlign(LEFT, CENTER);
    text("Tu amiga te encuentra en el patio antes de la clase de Medios Digitales.", 55, 330);
    text("Te dice que no quiere ir porque no tienen casi avances y te pregunta si querés ir", 55, 355);
    text("con ella a hacer algo. Te quedás con tu amiga o preferis ir a clases?", 55, 385);
  }

  if (inicio === 11) {
    fill(0, 191);
    rect(40, 310, 720, 100);
    fill(255);
    textSize(18);
    textAlign(LEFT, CENTER);
    text("Te despedis de tu amiga y te dirigis hacia el aula donde tenés esa clase.", 55, 330);
  }

  if (inicio === 23) {
    fill(0, 191);
    rect(40, 310, 720, 100);
    fill(255);
    textSize(22);
    textAlign(LEFT, CENTER);
    text("Luego de una larga clase, salis de la facu y te", 55, 330);
    text("tomas un micro para volver a casa.", 55, 355);
  }

  if (inicio === 25) {
    fill(0, 191);
    rect(40, 310, 720, 100);
    fill(255);
    textSize(22);
    textAlign(LEFT, CENTER);
    text("Al llegar a casa, decidis cocinar algo simple", 55, 330);
    text("para cenar y luego irte a dormir.", 55, 355);
  }
if (inicio === 36) {
    fill(0, 191);
    rect(40, 310, 720, 100);
    fill(255);
    textSize(22);
    textAlign(LEFT, CENTER);
    text("Vas al patio de la facu nuevamente para comer", 55, 330);
    text("tu almuerzo. Tu amiga viene en un rato.", 55, 355);
  }
  if (inicio === 12) {
    fill(0, 191);
    rect(40, 310, 720, 100);
    fill(255);
    textSize(22);
    textAlign(LEFT, CENTER);
    text("Mientras caminan, tu amiga te pregunta qué querés", 55, 330);
    text("hacer.", 55, 355);
  }
    if (inicio === 13) {
    fill(0, 191);
    rect(40, 310, 720, 100);
    fill(255);
    textSize(22);
    textAlign(LEFT, CENTER);
    text("Tu amiga te dice de comprar algo para comer.", 55, 330);
    text("¿Qué preferis comprar?", 55, 355);
  }
      if (inicio === 16 || inicio === 40) {
    fill(0, 191);
    rect(40, 310, 720, 100);
    fill(255);
    textSize(22);
    textAlign(LEFT, CENTER);
    text("Pasas la tarde tomando mates  y comiendo algo rico", 55, 330);
    text("con tu amiga, despejando un poco y pasandola lindo.", 55, 355);
  }
        if (inicio === 42) {
    fill(0, 191);
    rect(40, 310, 720, 100);
    fill(255);
    textSize(22);
    textAlign(LEFT, CENTER);
    text("Más tarde, decidis que ya es hora de volver a tu casa.", 55, 330);
    text("Aprovchas y volves caminando mientras escuchás música.", 55, 355);
  }
     if (inicio === 26) {
    fill(0, 191);
    rect(40, 310, 720, 100);
    fill(255);
    textSize(22);
    textAlign(LEFT, CENTER);
    text("Llegas a tu casa, comes algo así nomás y decidis", 55, 330);
    text("irte a dormir. Fue un lindo día.", 55, 355);
  }
  // textos de la pantalla 28 segun el camino elegido
  if (inicio === 28) {
    fill(0, 191);
    rect(40, 310, 720, 100);
    fill(255);
    textSize(20);
    textAlign(LEFT, CENTER);

    if (camino28 === 1) {
      text("Vas al kiosco para comprarte un buen sanguche de milanesa", 55, 355);
            text("y una coca bien fria.", 55, 375);
    }
    else if (camino28 === 2) {
      text("Te vas un rato de la clase para comprarte algo", 55, 355);
      text("de desayunar en el kiosco", 55, 375);
    }
  }

  if (inicio === 41) {
    fill(255);
    textSize(35);
    textAlign(CENTER, CENTER);
    text("FINAL 1: ESTUDIOSO.", 400, 50);
    textSize(22);
    textAlign(CENTER, CENTER);
    text("Cumpliste con todas tus responsabilidades,", 400, 150);
    text("preferiste saltearte una juntada por ir a clases", 400, 180);
    text("y al llegar a casa simplemente cocinaste y descansaste.", 400, 210);
  }
      if (inicio === 43) {
    fill(255);
    textSize(35);
    textAlign(CENTER, CENTER);
    text("FINAL 2: A TU RITMO.", 400, 50);
    textSize(22);
    textAlign(CENTER, CENTER);
    text("Fue un día tranquilo, cumpliste algunas de tus", 400, 150);
    text("responsabilidades pero tambien despejaste un rato.", 400, 180);
    text("Fue un día tranquilo.", 400, 210);
  }

    if (inicio === 44) {
    fill(255);
    textSize(35);
    textAlign(CENTER, CENTER);
    text("FINAL 3: DIVERTIDO.", 400, 50);
    textSize(22);
    textAlign(CENTER, CENTER);
    text("Fue un día donde preferiste pasarla bien", 400, 150);
    text("y no centrarte en tus estudios por hoy.", 400, 180);
    text("Fue un gran día.", 400, 210);
  }

if (inicio === 45) {
  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  text("'UN DÍA EN LA VIDA DE UN ESTUDIANTE'", 400, posicionTexto);
  textSize(26);
  text("hecho por Benjamin Fernandez Jesser 122395/2", 400, posicionTexto + 75);
  text("y Diamela Molteni - 122463/6", 400, posicionTexto + 105);
  text("Comisión 3", 400, posicionTexto + 135);
  if (textoEntra) {
    posicionTexto += 4;
    if (posicionTexto >= height / 2 - 100) {
      posicionTexto = height / 2 - 100;
      textoEntra = false;
      esperaTexto = 420;
    }
  }
  if (!textoEntra && !textoSale && esperaTexto > 0) {
    esperaTexto--;
  }
  if (!textoEntra && !textoSale && esperaTexto === 0) {
    textoSale = true;
  }
  if (textoSale) {
    posicionTexto += 4;
    if (posicionTexto > height + 150) {
      posicionTexto = -150;
      textoEntra = true;
      textoSale = false;
    }
  }
}

  botones(inicio);
}
