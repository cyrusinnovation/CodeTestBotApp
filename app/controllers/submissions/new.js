import Ember from 'ember';

export default Ember.ObjectController.extend({
    isExternal: false,
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

    candidateName: null,
    candidateEmail: null,
    selectedLanguage: null,
    selectedLevel: null,
    sources: ['LinkedIn', 'StackOverflow', 'Whitetruffle', 'Switch', 'Recuiter / Agency', 'Referral', 'Other'],

    isFormIncomplete: Ember.computed.or('isCandidateIncomplete', 'isSubmissionIncomplete'),

    isCandidateIncomplete: function() {
        return Ember.isEmpty(this.get('candidateName')) ||
            Ember.isEmpty(this.get('candidateEmail'));
    }.property('candidateName', 'candidateEmail'),

    isSubmissionIncomplete: function() {
        return Ember.isEmpty(this.get('submission.emailText')) ||
            Ember.isEmpty(this.get('submission.zipfile'));
    }.property('submission.emailText', 'submission.zipfile'),

    findCandidate: function() {
        return this.store.find('candidate', { email: this.get('candidateEmail') }).then(function(results) {
            return results.get('firstObject');
        });
    },

    createSubmission: function() {
        var submission = this.get('submission');
        submission.set('candidateName', this.get('candidateName'));
        submission.set('candidateEmail', this.get('candidateEmail'));
        submission.set('level', this.get('selectedLevel'));
        submission.set('language', this.get('selectedLanguage'));
        submission.set('source', this.get('selectedSource'));
        return submission.save();
    },

    actions: {
        submit: function() {
            var self = this;
            self.createSubmission() .then(function() {
                self.transitionToRoute(self.get('postSubmitURL'));
            });
        }
    }
});

