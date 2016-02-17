/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ace-screener',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',

    // Fix for ember-devtools
    contentSecurityPolicy: {
      'script-src': "'self' 'unsafe-inline'"
    },

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      // Load the ember-devtools plugin
      // TOOD: See if this can be moved into the environment-specific section
      emberDevTools: {global: true}
    }
  };


  if (environment === 'development') {
    ENV['ember-cli-mirage'] = {enabled: false};
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
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
    ENV.locationType = 'hash';
    ENV.baseURL = '/ace-toolkit';
  }

  return ENV;
};
