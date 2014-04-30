/* globals expect, visit, andThen, equal, currentURL */

import { test } from 'ember-qunit';
import startApp from '../helpers/start-app';

module('Auth Complete Integration', {
    setup: function() {
        window.CodeTestBotApp = startApp({ dataStore: 'data-store:ephemeral' });
    },
    teardown: function() {
        CodeTestBotApp.reset();
    }
});

var url = '/auth/complete?token=token1234&expires_at=5000&expires=true';

test('authenticates the session with the OutOfBandTokenAuthenticator', function() {
    expect(3);

    visit(url);
    andThen(function() {
        var session = CodeTestBotApp.__container__.lookup('session:main');
        equal(session.get('access_token'), 'token1234');
        equal(session.get('expires_at'), 5000000);
        equal(session.get('expires'), true);
    });
});

test('transitions to the previously attempted transition after authentication', function() {
    expect(1);

    var store = CodeTestBotApp.get('dataStore');
    store.setItem('attemptedTransition', '/submissions/new');

    visit(url);
    andThen(function() {
        equal(currentURL(), '/submissions/new');
    });
});
