import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function () {
  this.resource('auth', function () {
    this.route('login');
    this.route('logout');
    this.route('complete');
  });

  this.route('extsubmissions/new');

  this.resource('secured', {path: '/'}, function () {
    this.route('edit');

    this.resource('submissions', function () {
      this.route('new');

      this.resource('submission', {path: '/:submission_id'}, function () {
        this.route('report');

        this.resource('assessments', function () {
          this.route('new');

          this.resource('assessment', {path: '/:assessment_id'}, function () {
            this.route('edit');
          });
        });
      });
    });

    this.resource('analytics', function () {

    });

    this.resource('admin', function () {
      this.resource('users', function () {
        this.resource('user', {path: '/:user_id'}, function () {
          this.route('edit');
        });
      });
    });
  });


  this.route('thanks');

  this.route('error', {path: '/*path'});
});
