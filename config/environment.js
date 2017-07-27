/* eslint-env node */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'bustle-clone',
    environment: environment,
    rootURL: '/',
    firebase: {
      apiKey: "AIzaSyBYdsNAVWDQEhNhTeZOsFnb9iHk2wbwEPI",
      authDomain: "bustle-clone-322a9.firebaseapp.com",
      databaseURL: "https://bustle-clone-322a9.firebaseio.com",      
      projectId: "bustle-clone-322a9",
      storageBucket: "bustle-clone-322a9.appspot.com",
      messagingSenderId: "457095214329"
    },
    torii: {
     sessionServiceName: 'session'
   },
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
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
  }

  if (environment === 'test') {
    // Testem prefers this...
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
