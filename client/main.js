import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import '/imports/theme/theme.css';

import ScrollReveal from 'scrollreveal/dist/scrollreveal.js';
window.ScrollReveal = ScrollReveal;

import 'magnific-popup/dist/magnific-popup.css';
import 'magnific-popup/dist/jquery.magnific-popup.js';

import fontawesome from '@fortawesome/fontawesome';
import faUsers from '@fortawesome/fontawesome-free-solid/faUsers';
import faGavel from '@fortawesome/fontawesome-free-solid/faGavel';
import faBook from '@fortawesome/fontawesome-free-solid/faBook';

fontawesome.library.add(faUsers);
fontawesome.library.add(faGavel);
fontawesome.library.add(faBook);

Template.main.onRendered(function() {
  import '/imports/theme/theme.js';
  window.scrollTo(0, 0);
});
