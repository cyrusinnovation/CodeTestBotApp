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
    equal(currentPath(), 'secured.index');
  });
});

test('submission list renders', function() {
  visit('/');

  andThen(function() {
    equal(find('td:nth-child(1)').eq(0).html(), 'Candi Date');
  });
});
