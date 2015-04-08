import Ember from 'ember';
import UserAwareControllerMixin from 'code-test-bot-app/mixins/user-aware-controller';

var AssessmentsIndexController = Ember.ArrayController.extend(UserAwareControllerMixin, {
    needs: ['submission'],
    itemController: 'assessments/item',
    userHasPublishedAssessment: false,

    showAssessments: Ember.computed.or('userHasPublishedAssessment', 'isRecruiter', 'isParentSubmissionClosed'),

    updateUserHasAssessment: function() {
        this.set('userHasPublishedAssessment', this.get('content').findBy('assessor.id', this.get('user.id')) !== undefined);
    }.observes('content.[]'),

    isParentSubmissionClosed: function() {
      var parentSubmission = this.get('controllers.submission');
      var isSubmissionActive = parentSubmission.get('active');
      return !isSubmissionActive;
    }.property()
});

export default AssessmentsIndexController;
