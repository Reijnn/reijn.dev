import Typewriter from 'typewriter-effect/dist/core';

// Initialize typewriter animation on homepage subtitle
const subtitle = document.querySelector('h1 + p');

if (subtitle) {
  const typewriter = new Typewriter(subtitle, {
    loop: true,
    delay: 100,
  });

  typewriter
    .pauseFor(100)
    .typeString('Software Engineer')
    .pauseFor(300)
    .deleteAll()
    .pauseFor(100)
    .typeString('Product Owner')
    .pauseFor(300)
    .deleteAll()
    .pauseFor(100)
    .typeString('Data Engineer')
    .pauseFor(300)
    .deleteAll()
    .pauseFor(100)
    .typeString('Management Consultant')
    .pauseFor(300)
    .deleteAll()
    .changeDelay(30)
    .start();
}
