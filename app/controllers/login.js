import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  ajax: Ember.inject.service(),

  actions: {
    authenticate() {
      this.get('session').authenticate('authenticator:torii', 'github-oauth2')
      .then(() => {
        this.transitionToRoute('fascia');
      })
      .catch((reason) => {
        this.set('errorMessage', reason.error || reason);
      });
    }
  }
});
