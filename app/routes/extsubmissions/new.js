import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.Object.create({
      extsubmission: this.store.createRecord('extsubmission'),
      languages: this.store.find('language'),
      levels: this.store.find('level')
    });
  },

  actions: {
    willTransition: function() {
      var submission = this.controller.get('extsubmission');
      if (submission.get('isNew')) {
        submission.deleteRecord();
      }
    }
  }
});
