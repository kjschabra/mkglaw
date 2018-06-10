Template.about.onRendered(function() {
  // Scroll reveal calls
  sr.reveal('.sr-images', {
    duration: 500,
    scale: 0.1,
  }, 50);
  sr.reveal('.display-4', {duration: 1000});
  sr.reveal('.container', {container: '.sr-containers'});
});
