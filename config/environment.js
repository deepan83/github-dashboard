/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'github-dashboard',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      apiBaseUrl: 'https://api.github.com',
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    torii: {
      providers: {
        'github-oauth2': {
          apiKey: '32b96c8ef042cebd8842',
          redirectUri: 'https://github-cockpit.herokuapp.com/',
          scope: 'user,repo,read:org'
        }
      }
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.torii.providers = {
      'github-oauth2': {
        apiKey: '03ca4a94cb48d2d6a95a',
        redirectUri: 'http://127.0.0.1:4200/',
        scope: 'user,repo,read:org'
      }
    }
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
