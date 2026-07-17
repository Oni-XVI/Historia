const photos = [

    {
        image:"fotos/Nosotros.jpg",
        title:"Favorita 💖",
        memory:"Sin duda alguna, esta es de mis fotos favoritas junto a ti. 💕."
    },

    {
        image:"fotos/Juego.jpg",
        title:"Noche de juegos 🌝",
        memory:"Este es un gran recuerdo de nuestra noche de juegos de terror. 👻"
    },

    {
        image:"fotos/Locura.jpg",
        title:"Admiración ✨",
        memory:"Recuerdo haber hecho esta imagen para tenerte de fondo de pantalla en mi PC y celular. Definitivamente amo esta imagen. "
    },

    {
        image:"fotos/Mirada.jpg",
        title:"Tus ojos 👀",
        memory:"Adoro perderme en tus ojos. Esta foto es mi tesoro, el recuerdo perfecto de ese momento que tanto te pedía y que hoy ilumina mi vida."
    },
    
    {
        image:"fotos/1foto.jpg",
        title:"Nuestra primera foto 🫂",
        memory:"Esta es una de las fotos que más amo. Es una de nuestras primeras fotos que nunca olvidare."
    },

    {
        image:"fotos/Roblox.jpg",
        title:"Primera vez jugando 👾",
        memory:"Este día fue el más lindo que pude haber tenido contigo, nuestra primera vez jugando."
    },

    {
        image:"fotos/Susto.jpg",
        title:"¿Valerita en camino? 😫",
        memory:"JAJA este día fue lo más gracioso. Mientras yo estaba feliz y preocupado a la vez, tú estabas viendo todos los escenarios posibles para enfrentar esta situación."
    },

    {
        image:"fotos/Valerita.jpg",
        title:"Inocencia 👧",
        memory:"Amo ver esta foto cada día, muestras una ternura e inocencia... Siempre pienso en lo bonito que sería tener fotos de Valerita así esta."
    },

       {
        image:"fotos/Vale.jpg",
        title:"Primer foto 📸",
        memory:"Esta fue una de las primeras fotos que me llegaste a mandar. No sabes lo loco que estuve ese día."
    },
    
    {
        image:"fotos/Votaciones.jpg",
        title:"Primera actividad del colegio 🏫",
        memory:"Amo ver esta foto porque te hace ver como una niña tierna. Este momento fue una de nuestras primeras actividades que el colegio hizo donde estamos juntos (Partidos políticos)."
    },

    {
        image:"fotos/Papi.jpg",
        title:"Simplemente yo 😒",
        memory:"Claramente esto mata la vibra de la galería pero me vale. Valerita debe ver como era su papá de joven."
    },

    {
        image:"fotos/Vaquera.jpg",
        title:"Más fuerte que el acero, así es este sentimiento. 🤠",
        memory:"Con sombrero de vaquera o sin él, eres mi compañera de viaje perfecta. Más fuerte que el acero, así es este sentimiento que nos llevará a donde queramos."
    }
    
];

let currentPhoto = 0;

function openPhoto(index){

    currentPhoto = index;

    document.getElementById("viewer").style.display = "flex";

    updateViewer();

}

function updateViewer(){

    document.getElementById("viewerImage").src =
    photos[currentPhoto].image;

    document.getElementById("memoryTitle").innerHTML =
    photos[currentPhoto].title;

    document.getElementById("memoryText").innerHTML =
    photos[currentPhoto].memory;

}

function closePhoto(){

    document.getElementById("viewer").style.display = "none";

}

function nextPhoto(){

    currentPhoto++;

    if(currentPhoto >= photos.length){

        currentPhoto = 0;

    }

    updateViewer();

}

function previousPhoto(){

    currentPhoto--;

    if(currentPhoto < 0){

        currentPhoto = photos.length - 1;

    }

    updateViewer();

}

const starsContainer=document.getElementById("stars");

for(let i=0;i<150;i++){

    const star=document.createElement("div");

    star.className="star";

    star.style.left=Math.random()*100+"%";

    star.style.top=Math.random()*100+"%";

    star.style.animationDuration=
    (2+Math.random()*3)+"s";

    star.style.opacity=
    Math.random();

    starsContainer.appendChild(star);

}

const particlesContainer = document.getElementById("particles");

for(let i = 0; i < 35; i++){

    const particle = document.createElement("div");

    particle.className = "particle";

    particle.style.left = Math.random()*100 + "%";

    particle.style.animationDuration =
        (8 + Math.random()*8) + "s";

    particle.style.animationDelay =
        Math.random()*10 + "s";

    particle.style.width =
        (2 + Math.random()*4) + "px";

    particle.style.height =
        particle.style.width;

    particlesContainer.appendChild(particle);

}

setTimeout(()=>{

    document.getElementById("intro").remove();

},6000);