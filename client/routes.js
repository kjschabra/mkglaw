FlowRouter.route('/', {
  name   : 'home',
  action : () => BlazeLayout.render('main', {content: 'home'})
});

FlowRouter.route('/about-us', {
  name:'about-us',
  action: () => BlazeLayout.render('main', {content:'about'})
});

FlowRouter.route('/practices', {
  name:'practices',
  action: () => BlazeLayout.render('main', {content:'practices'})
});

FlowRouter.route('/contact', {
  name:'contact',
  action: () => BlazeLayout.render('main', {content:'contact'})
});

FlowRouter.notFound = {
  action: () => BlazeLayout.render('main', {content: 'home'})
}
