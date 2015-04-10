import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

module('Feature: Validation of Submission Page', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('preventing external submission when fields are empty', function() {
  visit('/extsubmissions/new');

  andThen(function() {
    var button = $('button');

    equal(button.length, 1);
    equal(button.prop('disabled'), true);
  });
});

test('allowing external submission after all required fields are filled out', function() {
  visit('/extsubmissions/new');

  var inputs = find('input');
  //the choose file button is a 'file' type input,
  //but we can not set a fake file in test, so we have
  //changed this to a 'text' input
  inputs[2].type = 'text';
  fillIn(inputs[0], 'Test Name');
  fillIn(inputs[1], 'test@email.com');
  fillIn(inputs[2], 'yo.rb');

  wait(1000);
  andThen(function() {
    var button = find('button');
    equal(button.prop('disabled'), false);
  });
});