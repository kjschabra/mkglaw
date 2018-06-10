import swal from 'sweetalert';

import fontawesome from '@fortawesome/fontawesome';
import faPaperPlane from '@fortawesome/fontawesome-free-solid/faPaperPlane';
import faMapMarkerAlt from '@fortawesome/fontawesome-free-solid/faMapMarkerAlt';
import faPhone from '@fortawesome/fontawesome-free-solid/faPhone';
import faFax from '@fortawesome/fontawesome-free-solid/faFax';
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope';
import faChevronDown from '@fortawesome/fontawesome-free-solid/faChevronDown';

fontawesome.library.add(faPaperPlane);
fontawesome.library.add(faMapMarkerAlt);
fontawesome.library.add(faPhone);
fontawesome.library.add(faFax);
fontawesome.library.add(faEnvelope);
fontawesome.library.add(faChevronDown);

Template.contact.onRendered(function() {
  window.scrollTo(0, 0);
});


Template.contact_form.events({
  'click #send-message': (e, t) => {
    e.preventDefault();
    const $name  = t.$('input#name');
    if (! $name.val() || !$name.val().trim() ) {
      
      swal("Oops","Name field is required", "error").then(() => $name.focus() );
      return;
    }
    const $email = t.$('input#email');
    if (! $email.val() || ! $email.val().trim() ) {
      swal("Oops", "E-mail field is required", "error");
      $email.focus();
      return;
    }
    const $message = t.$('textarea#message');
    if (! $message.val() || ! $message.val().trim() ) {
      swal("Oops", "Message field is required", "error");
      $message.focus();
      return;
    }
    Meteor.call('sendMessage', $name.val(), $email.val(), $message.val(), (err, resp) => {
      console.log(err, resp);
    });
  }
});
