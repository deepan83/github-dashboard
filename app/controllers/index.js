import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  cookies: Ember.inject.service(),

  actions: {
    authenticate() {
      if (this.get('session.isAuthenticated')) {
        const accessToken = this.get('cookies').read('access_token');
        Ember.$.ajax({
          url : 'https://api.github.com/user',
          beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', 'token ' + accessToken);
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
