/* globals ENV */

import { defineFixture } from 'ic-ajax';

defineFixture(ENV.NEW_SESSION_URL + '?redirect_uri=' + ENV.APP_HOST + '/auth/complete', {
    response: {auth_uri: 'testing_uri'},
    jqXHR: {},
    textStatus: 'success'
});

defineServerFixture('/sessions/current', {
    session: { id: 1, user_id: 2 },
    users: [
        { id: 2, name: 'User2' }
    ]
});

defineServerFixture('/users', { users: [
    { id: 1, name: 'User1', editable: true },
    { id: 2, name: 'User2', editable: false }
]});

defineServerFixture('/languages', { languages: [
    { id: 1, name: 'Java' },
    { id: 2, name: 'Ruby' }
]});
defineServerFixture('/languages/1', { language: { id: 1, name: 'Java' } });
defineServerFixture('/languages/2', { language: { id: 2, name: 'Ruby' } });

defineServerFixture('/levels', { levels: [
    { id: 1, text: 'Junior' },
    { id: 2, text: 'Mid' },
    { id: 3, text: 'Senior' },
    { id: 4, text: 'Tech Lead' }
]});
defineServerFixture('/levels/1', { level: { id: 1, text: 'Junior' } });
defineServerFixture('/levels/2', { level: { id: 2, text: 'Mid' } });

defineServerFixture('/candidates', {
    candidates: [
        { id: 1, name: 'Candidate1', level_id: 1 },
        { id: 2, name: 'Candidate2', level_id: 2 }
    ],
    levels: [
        { id: 1, text: 'Junior'},
        { id: 2, text: 'Mid'}
    ]
});
defineServerFixture('/candidates/1', {
    candidate: { id: 1, name: 'Candidate1', level_id: 1 },
    levels: [{ id: 1, text: 'Junior'}]
});
defineServerFixture('/candidates/2', {
    candidate: { id: 2, name: 'Candidate2', level_id: 2 },
    levels: [{ id: 2, text: 'Mid'}]
});

defineServerFixture('/submissions/1', {
    submission: {
        id: 1,
        email_text: 'some text',
        zipfile: 'url to file',
        language_id: 1,
        candidate_id: 1
    },
    candidates: [
        { id: 1, name: 'Candidate1', level_id: 1}
    ],
    levels: [
        { id: 1, text: 'Junior' }
    ],
    languages: [
        { id: 1, name: 'Java' }
    ]
});

function defineServerFixture(path, response, options) {
    options = Ember.merge({ jqXHR: {}, textStatus: 'success' }, options);
    options.response = response;

    defineFixture(ENV.SERVER_HOST + path, options);
}

export default {};