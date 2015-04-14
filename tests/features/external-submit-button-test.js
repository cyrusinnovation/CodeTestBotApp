import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

module('Feature: Validation of Submission Page', {
  setup: function () {
    App = startApp();
  },
  teardown: function () {
    Ember.run(App, 'destroy');
  }
});

test('preventing external submission when fields are empty', function () {
  visit('/extsubmissions/new');

  andThen(function () {
    var button = $('button');

    equal(button.length, 1);
    equal(button.prop('disabled'), true);
  });
});
