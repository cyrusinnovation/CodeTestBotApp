import Ember from 'ember';

export default Ember.Route.extend({
    beforeModel: function(transition) {
        var params = transition.queryParams;
        var token_data = {
            access_token: params.token,
            expires_at: params.expires_at,
            expires: params.expires
        };

        var self = this;
        transition.then(function() {
            return self.get('session').authenticate('authenticator:out-of-band-token', token_data).then(function() {
                var attemptedTransition = window.CodeTestBotApp.get('dataStore').getItem('attemptedTransition') || '/';
                window.CodeTestBotApp.get('dataStore').removeItem('attemptedTransition');

                return self.transitionTo(attemptedTransition);
            });
        });
    }
});
