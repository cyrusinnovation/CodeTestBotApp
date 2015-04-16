import Ember from 'ember';
import DS from 'ember-data';
import Score from 'code-test-bot-app/models/score';

export default DS.Model.extend({
    candidateName: DS.attr(),
    candidateEmail: DS.attr(),
    emailText: DS.attr(),
    zipfile: DS.attr(),
    zipfileName: DS.attr(),
    active: DS.attr(),
    createdAt: DS.attr(),
    updatedAt: DS.attr(),
    averageScore: DS.attr(),
    source: DS.attr(),
    github: DS.attr(),
    linkedin: DS.attr(),
    resumefile: DS.attr(),
    resumefileName: DS.attr(),
    level: DS.belongsTo('level'),
    language: DS.belongsTo('language'),
    assessments: DS.hasMany('assessment'),

    // START OF HACK
    // We are using 'resumefile' to represent two different fields
    // When creating a new submission, it represents the uploaded file content
    // When showing a submission, it represents the uploaded file path
    // We are implementing the ability to upload a resume on the show page,
    // and the following properties help us manage that
    resumeChanged: false,
    resumeChangedOnce: false,

    resumeChangedObserver: function() {
        if(this.get('resumefile') && !this.get('resumeChangedOnce')) {
            this.set('resumeChanged',true);
            this.set('resumeChangedOnce',true);
        }
    }.observes('resumefile'),

    showResumeDownload: function(){
        return this.get('resumefile') && !(this.get('resumeChanged'));
    }.property('resumeChanged', 'resumefile'),
    // END OF HACK


    candidateDisplay: function() {
        return this.get('candidateName') + ' <' + this.get('candidateEmail') + '>';
    }.property('candidateName', 'candidateEmail'),

    languageDisplay: function() {
        return Ember.isNone(this.get('language')) ? 'Unknown' : this.get('language.name');
    }.property('language'),

    averageScoreShortText: function() {
        return Score.shortDisplayTextForScore(Math.round(this.get('averageScore')));
    }.property('averageScore'),

    createdAtDisplay: function() {
        return moment(this.get('createdAt')).format('l LT');
    }.property('createdAt'),

    updatedAtDisplay: function() {
        return moment(this.get('updatedAt')).format('l LT');
    }.property('updatedAt'),

    githubDisplay: function(){
      var github = this.get('github');
      if(!!github && github.indexOf('https://') !== 0){
        return 'https://' + github;
      }
      return github;
    }.property('github'),

    linkedinDisplay: function(){
        var linkedin = this.get('linkedin');
        if(!!linkedin && linkedin.indexOf('https://') !== 0){
            return 'https://' + linkedin;
        }
        return linkedin;
    }.property('linkedin')


});

