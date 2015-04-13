import Ember from 'ember';

export default Ember.View.extend({
    templateName: 'saving-indicator',
    message: '',
    spinner: null,

    didInsertElement: function() {
        this.$().hide();
        this.set('spinner', this.$('.fa-spinner'));
    },

    onSaveStatusChange: function() {
      this.$().show();
      var timestamp = this.get('controller.updatedAt');
      var formattedTime = timestamp.toLocaleTimeString() +
          ' ' + timestamp.toLocaleDateString();
      this.set('message', 'Saved at ' + formattedTime);
      this.spinner.hide();
    }.observes('controller.isSaving')
});

