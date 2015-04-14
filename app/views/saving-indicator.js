import Ember from 'ember';

export default Ember.View.extend({
    templateName: 'saving-indicator',
    message: '',
    spinner: null,

    didInsertElement: function() {
      this.set('spinner', this.$('.fa-spinner'));
      this.$().hide();
      if (!this.get('controller.isNew')) { this.showLastSavedTime(); }
    },

    showLastSavedTime: function() {
      this.$().show();
      var timestamp = this.get('controller.updatedAt');
      var formattedTime = timestamp.toLocaleTimeString() +
          ' ' + timestamp.toLocaleDateString();
      this.set('message', 'Saved at ' + formattedTime);
      this.spinner.hide();
    },

    onSaveStatusChange: function() {
      if (this.get('controller.isSaving')) {
        this.set('message', 'Saving...');
        this.spinner.show();
        this.$().show();
      } else {
        if (this.get('controller.updatedAt')) { this.showLastSavedTime(); }
      }
    }.observes('controller.isSaving')
});

