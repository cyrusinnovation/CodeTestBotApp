import AuthenticatedRoute from 'code-test-bot-app/routes/authenticated-route';
import UserAwareMixin from 'code-test-bot-app/mixins/user-aware';

export default AuthenticatedRoute.extend(UserAwareMixin, {
    beforeModel: function(transition, queryParams) {
        var self = this;
        self._super(transition, queryParams);
        return self.store.find('session', 'current').then(function(session) {
            self.set('user', session.get('user'));
        });
    },

    setupController: function(controller, model) {
        this._super(controller, model);
        this.controllerFor('menuController').set('user', this.get('user'));
        controller.set('user', this.get('user'));
    },

    renderTemplate: function() {
      this._super();
      this.render('menu', {
        into: 'application',
        outlet: 'menu',
        controller: 'menuController'
      });
    }
});
