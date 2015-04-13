import Ember from 'ember';

export default Ember.ObjectController.extend({
  breadCrumb: 'New Applicant',
  postSubmitURL: '/thanks',
  submitter: 'Your',
  levelPrompt: "Select level of application",
  languageLabel: "Programming Language",
  languagePrompt: "Select the language your submission uses",
  sourceLabel: "How Did You Find Us?",
  notesLabel: "Notes",
  notesPlaceholder: "Use this space for any general comments related to your submission that aren't already included in the README.",
  zipfileLabel: "Submission Zipfile",
  resumefileLabel: "Upload Resume",

  sources: ['LinkedIn', 'StackOverflow', 'Whitetruffle', 'Switch', 'Recuiter / Agency', 'Referral', 'Other'],

  isFormIncomplete: Ember.computed.or('isCandidateIncomplete', 'isSubmissionIncomplete'),

  isCandidateIncomplete: function() {
    return Ember.isEmpty(this.get('extsubmission.candidateName')) ||
      Ember.isEmpty(this.get('extsubmission.candidateEmail'));
  }.property('extsubmission.candidateName', 'extsubmission.candidateEmail'),

  isSubmissionIncomplete: function() {
    return Ember.isEmpty(this.get('extsubmission.emailText')) ||
      Ember.isEmpty(this.get('extsubmission.zipfile'));
  }.property('extsubmission.emailText', 'extsubmission.zipfile'),

  actions: {
    submit: function() {
      var self = this;
      self.get('extsubmission').save().then(function() {
        self.transitionToRoute('/thanks');
      });
    }
  }
});
