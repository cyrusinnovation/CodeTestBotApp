import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

module('Integration: Load Thanks Page', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('visiting /thanks', function() {
  visit('/thanks');

  andThen(function() {
    equal(currentPath(), 'thanks');
  });
});

test('loads thanks element', function() {
  visit('/thanks');

  andThen(function() {
    equal(find('.thank-you-img-container').length, 1);
  });
});
