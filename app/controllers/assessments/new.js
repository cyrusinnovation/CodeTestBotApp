import Ember from 'ember';
import AutoSaveable from 'code-test-bot-app/mixins/auto-saveable';
import Score from 'code-test-bot-app/models/score';

export default
Ember.ObjectController.extend(AutoSaveable, {
  breadCrumb: 'New Asessment',
  selectedLanguage: Ember.computed.alias('content.submission.language'),
  selectedLevel: Ember.computed.alias('content.submission.level'),
  showExemplaryOption: Ember.computed.equal('score', 3),

  scoreOptions: function () {
    return Score.scoreOptions();
  }.property(),

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
      assessment.set('published', true);
      return assessment.save().then(function () {
        self.transitionToRoute('assessment', assessment, {
          queryParams: {isSavedAssessment: 'true'}
        });
      });
    }
  }
});
