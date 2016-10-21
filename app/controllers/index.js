import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  actions: {
    authenticate() {
      if (this.get('session.isAuthenticated')) {
        const authorizationCode = this.get('session.data.authenticated.authorizationCode');
        Ember.$.ajax({
          url : 'https://api.github.com/user',
          beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', 'token ' + authorizationCode);
          }
        });
      } else {
        this.get('session').authenticate('authenticator:torii', 'github-oauth2')
          .catch((reason) => {
            this.set('errorMessage', reason.error || reason);
          });
      }
    }
  }
});
