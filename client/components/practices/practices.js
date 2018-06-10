Template.practices.onRendered(function() {
  sr.reveal('.sr-containers', 50);
  sr.reveal('.display-4', {duration: 1000});
  sr.reveal('.section-heading', {duration: 500});
  sr.reveal('.item', {duration: 1000, viewFactor: 0.7}, 50 );
});
