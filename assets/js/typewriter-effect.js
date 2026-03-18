// Initialize typewriter animation on homepage subtitle
// Note: typewriter-effect is loaded globally via npm dependency
if (typeof Typewriter !== 'undefined') {
  const subtitle = document.querySelector('h1 + p');

  if (subtitle) {
    const subwriter = new Typewriter(subtitle, {
      loop: true,
      delay: 100,
    });

    subwriter
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
}
