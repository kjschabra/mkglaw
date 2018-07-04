import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import '/imports/theme/theme.css';

import ScrollReveal from 'scrollreveal/dist/scrollreveal.js';
window.sr = ScrollReveal();

import 'magnific-popup/dist/magnific-popup.css';
import 'magnific-popup/dist/jquery.magnific-popup.js';

import fontawesome from '@fortawesome/fontawesome';
import faUsers from '@fortawesome/fontawesome-free-solid/faUsers';
import faGavel from '@fortawesome/fontawesome-free-solid/faGavel';
import faBook from '@fortawesome/fontawesome-free-solid/faBook';
import faChevronDown from '@fortawesome/fontawesome-free-solid/faChevronDown';
import faLinkedIn from '@fortawesome/fontawesome-free-brands/faLinkedIn';

fontawesome.library.add(faUsers);
fontawesome.library.add(faGavel);
fontawesome.library.add(faBook);
fontawesome.library.add(faChevronDown);
fontawesome.library.add(faLinkedIn);

Template.main.onRendered(function() {
  import '/imports/theme/theme.js';
  this.autorun(() => {
    const path = FlowRouter.watchPathChange();
    window.scrollTo(0, 0);
  });
});

Template.home.onRendered(function() {
  // Scroll reveal calls
  sr.reveal('.sr-icons', {
    duration: 500,
    distance: '5px',
    viewFactor: 0.1
  }, 200);
  sr.reveal('.sr-button', {
    duration: 500,
    viewFactor: 0.1
  });
  sr.reveal('.sr-images', {
    duration: 500,
    scale: 0.2,
  }, 50);
  sr.reveal('.container', {
    duration: 500,
    container: '.sr-containers',
  }, 100)
  sr.reveal('.section-heading', {duration: 300}, 50);
});

Template.footer.onRendered(function() {
  this.$('[data-toggle="tooltip"]').tooltip();
});
