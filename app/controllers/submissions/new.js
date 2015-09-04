import Ember from 'ember';

export default Ember.ObjectController.extend({
  breadCrumb: 'New Submission',
  postSubmitURL: '/submissions',
  submitter: "Candidate",
  levelPrompt: "Select candidate level",
  languageLabel: "Submission Language",
  languagePrompt: "Select a language",
  sourceLabel: "Source of Referral",
  notesLabel: "Email Text",
  notesPlaceholder: "Copy and paste the email text or any instructions given by the candidate",
  zipfileLabel: "Zipfile",
  resumefileLabel: "Resume File",

  sources: ['LinkedIn', 'StackOverflow', 'Whitetruffle', 'Switch', 'Recuiter / Agency', 'Referral', 'Other'],

  isFormIncomplete: function () {
    return Ember.isEmpty(this.get('submission.candidateName')) ||
      Ember.isEmpty(this.get('submission.candidateEmail')) ||
      Ember.isEmpty(this.get('submission.level')) ||
      Ember.isEmpty(this.get('submission.language')) ||
      Ember.isEmpty(this.get('submission.emailText')) ||
      Ember.isEmpty(this.get('submission.agile')) ||
      Ember.isEmpty(this.get('submission.zipfile'));
  }.property('submission.candidateName', 'submission.candidateEmail', 'submission.emailText', 'submission.agile', 'submission.level', 'submission.language', 'submission.zipfile'),

  isExternalFormIncomplete: function () {
    return Ember.isEmpty(this.get('submission.candidateName')) ||
      Ember.isEmpty(this.get('submission.level')) ||
      Ember.isEmpty(this.get('submission.language')) ||
      Ember.isEmpty(this.get('submission.emailText')) ||
      Ember.isEmpty(this.get('submission.zipfile'));
  }.property('submission.candidateName', 'submission.emailText', 'submission.level', 'submission.language', 'submission.zipfile'),

  actions: {
    submit: function () {
      var self = this;
      self.get('submission').save().then(function () {
        self.get('submission').set('resumeChanged', false);
        self.transitionToRoute(self.get('postSubmitURL'));
      });
    }
  }
});

