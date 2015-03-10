import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

module('Acceptance: Secured', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('visiting /', function() {
  visit('/');

  andThen(function() {
    equal(currentPath(), 'auth/login');
  });
});
