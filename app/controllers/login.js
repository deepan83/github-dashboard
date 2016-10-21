import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  actions: {
    authenticate() {
      this.get('session').authenticate('authenticator:torii', 'github-oauth2')
      .catch((reason) => {
        this.set('errorMessage', reason.error || reason);
      });
    }
  }
});
