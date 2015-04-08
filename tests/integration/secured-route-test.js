import Ember from 'ember';
import CodeTestBotApp from 'code-test-bot-app/app';
import SecuredRoute from 'code-test-bot-app/routes/secured';
import startApp from '../helpers/start-app';

module("Integration: routes/secured", {
  setup: function() {
    window.CodeTestBotApp = startApp();
  },
  teardown: function() {
    Ember.run(window.CodeTestBotApp, 'destroy');
  }
});

test("if not authenticated, store attempted transition", function() {
  visit('/submissions/80');
  var expected = "/submissions/80";

  andThen(function(){
    equal(window.CodeTestBotApp.get('dataStore').getItem('attemptedTransition'), expected);
  });
});