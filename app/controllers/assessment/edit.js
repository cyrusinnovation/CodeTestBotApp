import Ember from 'ember';
import UserAwareControllerMixin from 'code-test-bot-app/mixins/user-aware-controller';
import AutoSaveable from 'code-test-bot-app/mixins/auto-saveable';
import Score from 'code-test-bot-app/models/score';

export default
Ember.ObjectController.extend(UserAwareControllerMixin, AutoSaveable, {
  breadCrumb: 'Edit Asessment',
  selectedLanguage: Ember.computed.alias('content.submission.language'),
  selectedLevel: Ember.computed.alias('content.submission.level'),
  showExemplaryOption: Ember.computed.equal('score', 3),

  notOwnAssessment: Ember.computed.not('ownAssessment').volatile(),

  scoreOptions: function () {
    return Score.scoreOptions();
  }.property(),

  ownAssessment: function () {
    return this.get('user.id') === this.get('assessor.id');
  }.property('ownAssessment').volatile(),

  isFormIncomplete: function () {
    return Ember.isEmpty(this.get('score')) || Ember.isEmpty(this.get('pros')) || Ember.isEmpty(this.get('cons'));
  }.property('score', 'pros', 'cons'),

  save: function () {
    this.get('content').save();
  },

  actions: {
    saveAssessment: function () {
      var self = this;
      var assessment = this.get('content');
      assessment.save();
      return assessment.save().then(function () {
        self.transitionToRoute('assessment', assessment, {
          queryParams: {isSavedAssessment: 'true'}
        });
      });
    }
  }
});
