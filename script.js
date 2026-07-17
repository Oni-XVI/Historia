     /* CURSOR */

    const glow =
      document.querySelector('.cursor-glow');

    window.addEventListener('mousemove', (e) => {

      glow.style.left =
        e.clientX + 'px';

      glow.style.top =
        e.clientY + 'px';

    });

    /* ESTRELLAS */

    const starsContainer =
      document.getElementById('stars');

    const starMessages = [

      "💖 Te amo muchísimo.",

      "🌙 Gracias por llegar a mi vida.",

      "✨ Eres mi lugar seguro.",

      "🌸 Tu sonrisa es mi favorita.",

      "💕 Siempre escogería volver a conocerte.",

      "⭐ Ojalá todas las noches pudiera ver las estrellas contigo.",

      "🥹 Gracias por hacerme tan feliz.",

      "💗 Eres mi casualidad favorita."

    ];

    for (let i = 0; i < 180; i++) {

      const star = document.createElement('div');

      star.classList.add('star');

      star.style.top = Math.random() * 100 + "%";

      star.style.left = Math.random() * 100 + "%";

      star.style.animationDuration = (Math.random() * 3 + 2) + "s";

      if (Math.random() < 0.08) {

        star.classList.add("special-star");

        star.onclick = () => showStarMessage(star);

      }

      starsContainer.appendChild(star);

    }

    /* ESTRELLAS FUGACES */

    for (let i = 0; i < 6; i++) {

      const shootingStar =
        document.createElement('div');

      shootingStar.classList.add('shooting-star');

      shootingStar.style.top =
        Math.random() * 40 + '%';

      shootingStar.style.left =
        (Math.random() * 40 + 60) + '%';

      shootingStar.style.animationDelay =
        Math.random() * 10 + 's';

      starsContainer.appendChild(shootingStar);

    }

    /* PARTICULAS */

    const particlesContainer =
      document.getElementById('particles');

    for (let i = 0; i < 70; i++) {

      const particle =
        document.createElement('div');

      particle.classList.add('particle');

      particle.style.left =
        Math.random() * 100 + 'vw';

      particle.style.animationDuration =
        (Math.random() * 10 + 8) + 's';

      particle.style.animationDelay =
        Math.random() * 8 + 's';

      particlesContainer.appendChild(particle);

    }

    /* MENSAJE */

    function mostrarMensaje() {

      alert(
        '💖 Gracias por existir y haber llegado a mi vida, mi pequeña niña ✨'
      );

    }

    /* CONTADOR */

    const fechaInicio =
      new Date("2026-03-21 00:00:00").getTime();

    function actualizarContador() {

      const ahora = new Date().getTime();

      const diferencia =
        ahora - fechaInicio;

      const dias =
        Math.floor(
          diferencia / (1000 * 60 * 60 * 24));

      const horas =
        Math.floor(
          (diferencia % (1000 * 60 * 60 * 24))
          / (1000 * 60 * 60));

      const minutos =
        Math.floor(
          (diferencia % (1000 * 60 * 60))
          / (1000 * 60));

      const segundos =
        Math.floor(
          (diferencia % (1000 * 60))
          / 1000);

      document.getElementById('days').innerHTML = dias;
      document.getElementById('hours').innerHTML = horas;
      document.getElementById('minutes').innerHTML = minutos;
      document.getElementById('seconds').innerHTML = segundos;

    }

    setInterval(actualizarContador, 1000);

    /* CARTAS */

    function openLetter(card) {

      card.classList.toggle('open');

    }

    /* MENSAJES MAGICOS */

    const messages = [

      "💖 Eres la casualidad más bonita.",

      "🌙 Me encanta existir contigo.",

      "✨ Tu sonrisa ilumina muchísimo mis días.",

      "⭐ Gracias por llegar a mi vida.",

      "🫂 Siempre estare a tu lado mi niña.",

      "👀 No existe luz más bonita que la que brilla en tus ojos.",

      "🏡 Eres mi refugio favorito, ese lugar donde me siento completamente a salvo.",

      "🌌 Eres la paz que calma mi mundo entero."

    ];

    function randomMessage() {

      const random =
        messages[Math.floor(Math.random() * messages.length)];

      document.getElementById('magicText')
        .innerHTML = random;

    }

    /* MENSAJE FINAL */

    function secretMessage() {

      alert(
        '💖 Gracias por hacer este mundo muchísimo más bonito ✨'
      );

    }

    /* LLUVIA DE CORAZONES */

    function heartRain() {

      for (let i = 0; i < 35; i++) {

        const heart =
          document.createElement('div');

        heart.classList.add('heart-rain');

        heart.innerHTML = '💖';

        heart.style.left =
          Math.random() * 100 + 'vw';

        heart.style.animationDuration =
          (Math.random() * 3 + 2) + 's';

        document.body.appendChild(heart);

        setTimeout(() => {

          heart.remove();

        }, 5000);

      }

    }

    /* MUSICA */

    const music =
      document.getElementById('bgMusic');

    music.volume = 0.15;

    function iniciarMusica() {

      music.play()
        .then(() => {

          console.log("Música iniciada ✨");

        })
        .catch((error) => {

          console.log("El navegador bloqueó el audio:", error);

        });

      document.removeEventListener(
        'click',
        iniciarMusica
      );

    }

    document.addEventListener(
      'click',
      iniciarMusica
    );

    function irASeccion() {

      document.getElementById('specialSection')
        .scrollIntoView({

          behavior: 'smooth'

        });

    }

    function showStarMessage(star) {

      const msg = document.createElement("div");

      msg.className = "star-message";

      msg.innerHTML = starMessages[
        Math.floor(Math.random() * starMessages.length)
      ];

      msg.style.left = (window.innerWidth / 2 - 120) + "px";

      msg.style.top = (window.innerHeight - 180) + "px";

      document.body.appendChild(msg);

      star.style.transform = "scale(2)";
      star.style.boxShadow = "0 0 40px white";

      setTimeout(() => {

        star.style.transform = "";

        star.style.boxShadow = "";

        msg.remove();

      }, 3000);

    }

    const galleryImages = [

      "fotos/Nosotros.jpg",

      "fotos/Ternura.jpg",

      "fotos/Sonrisa.jpg",

      "fotos/Rock.jpg"

    ];

    let currentImage = 0;

    function openGallery(index) {

      currentImage = index;

      document.getElementById("lightbox").style.display = "flex";

      document.getElementById("lightboxImage").src = galleryImages[index];

    }

    function closeGallery(event) {

      if (event.target.id === "lightbox" || event.target.className === "close") {

        document.getElementById("lightbox").style.display = "none";

      }

    }

    function nextImage(event) {

      event.stopPropagation();

      currentImage++;

      if (currentImage >= galleryImages.length) {

        currentImage = 0;

      }

      document.getElementById("lightboxImage").src = galleryImages[currentImage];

    }

    function previousImage(event) {

      event.stopPropagation();

      currentImage--;

      if (currentImage < 0) {

        currentImage = galleryImages.length - 1;

      }

      document.getElementById("lightboxImage").src = galleryImages[currentImage];

    }
