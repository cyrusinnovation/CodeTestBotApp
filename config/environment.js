/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'code-test-bot-app',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.SERVER_HOST = 'http://localhost:3000';
    ENV.APP_HOST = 'http://localhost:4200';
    ENV.NEW_SESSION_URL = 'http://localhost:3000/sessions/new';
  }

  if (environment === 'staging') {
      ENV.SERVER_HOST = 'https://codetestbotserver-staging.herokuapp.com';
      ENV.APP_HOST = 'https://codetestbot-staging.herokuapp.com';
      ENV.NEW_SESSION_URL = 'https://codetestbotserver-staging.herokuapp.com/sessions/new';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';

    // stuff we've added - We should not need this with a HTTP mock server.
    ENV.SERVER_HOST = 'http://localhost:3000';
    ENV.APP_HOST = 'http://localhost:4200';
    ENV.NEW_SESSION_URL = 'http://localhost:3000/sessions/new';
  }

  if (environment === 'production') {
    ENV.SERVER_HOST = 'https://codetestbotserver.herokuapp.com';
    ENV.APP_HOST = 'https://codetestbot.herokuapp.com';
    ENV.NEW_SESSION_URL = 'https://codetestbotserver.herokuapp.com/sessions/new';
  }

  return ENV;
};
