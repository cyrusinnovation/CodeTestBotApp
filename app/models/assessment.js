/* globals marked */
import DS from 'ember-data';

export default
DS.Model.extend({
  score: DS.attr(),
  exemplary: DS.attr(),
  pros: DS.attr(),
  cons: DS.attr(),
  notes: DS.attr(),
  published: DS.attr(),
  createdAt: DS.attr(),
  updatedAt: DS.attr(),
  submission: DS.belongsTo('submission'),
  assessor: DS.belongsTo('assessor'),

  createdAtDisplay: function () {
    return this.get('createdAtMoment').format('l LT');
  }.property('createdAtMoment'),

  createdAtMoment: function () {
    return moment(this.get('createdAt'));
  }.property('createdAt'),

  updatedAtDisplay: function () {
    return moment(this.get('updatedAt')).format('l LT');
  }.property('updatedAt'),

  notesDisplay: function () {
    var renderer = new marked.Renderer();
    var notes_value = this.get('notes') || '';
    return marked(notes_value, {renderer: renderer});
  }.property('notes'),

  prosDisplay: function () {
    var renderer = new marked.Renderer();
    var text = this.get('pros') || '';
    return marked(text, {renderer: renderer});
  }.property('pros'),

  consDisplay: function () {
    var renderer = new marked.Renderer();
    var text = this.get('cons') || '';
    return marked(text, {renderer: renderer});
  }.property('cons'),

  clearExemplaryFlag: function () {
    if (this.get('score') !== 3) {
      this.set('exemplary', false);
    }
  }.observes('score')
});
