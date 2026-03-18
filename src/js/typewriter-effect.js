import Typewriter from 'typewriter-effect/dist/core';

const roles = ['Software Engineer', 'Product Owner', 'Data Engineer', 'Management Consultant'];

const subtitle = document.querySelector('h1 + p');

if (subtitle) {
  const typewriter = new Typewriter(subtitle, { loop: true, delay: 100 });

  typewriter.pauseFor(100);
  for (const role of roles) {
    typewriter.typeString(role).pauseFor(300).deleteAll().pauseFor(100);
  }
  typewriter.changeDelay(30).start();
}
