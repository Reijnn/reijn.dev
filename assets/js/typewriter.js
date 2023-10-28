var subtitle = document.getElementById('subtitle');

var subwriter = new Typewriter(subtitle, {
  loop: true,
  delay: 100,
});

subwriter
  .pauseFor(100)
  .typeString('Software Engineer')
  .pauseFor(300)
  .deleteAll()

  .pauseFor(100)
  .typeString('Scrum Master')
  .pauseFor(300)
  .deleteAll()

  .pauseFor(100)
  .typeString('Management Consultant')
  .pauseFor(300)
  .deleteAll()
  .changeDelay(30)
  .start();

