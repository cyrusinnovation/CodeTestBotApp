var Application = require('code-test-bot-app/app')['default'];
var Router = require('code-test-bot-app/router')['default'];

function startApp(attrs) {
  var App;

  var attributes = Ember.merge({
    // useful Test defaults
    rootElement: '#ember-testing',
    LOG_ACTIVE_GENERATION:false,
    LOG_VIEW_LOOKUPS: false
  }, attrs); // but you can override;

  Router.reopen({
    location: 'none'
  });

  Ember.run(function(){
    App = Application.create(attributes);
    App.setupForTesting();
    App.injectTestHelpers();
  });

  App.reset(); // this shouldn't be needed, i want to be able to "start an app at a specific URL"

  return App;
}

export function startAppEphemeral(attrs) {
    attrs = Ember.merge({ storeFactory: 'session-store:ephemeral', dataStore: 'data-store:ephemeral' }, attrs);
    return window.CodeTestBotApp = startApp(attrs);
}

export function resetApp() {
    window.CodeTestBotApp.reset();
}

export default startApp;