import Ember from 'ember';
import AjaxService from 'ember-ajax/services/ajax';

export default AjaxService.extend({
  session: Ember.inject.service(),
  trustedHosts: ['api.github.com'],
  headers: Ember.computed('session.data.authenticated.accessToken', {
    get() {
      let headers = {};
      const accessToken = this.get('session.data.authenticated.accessToken');

      if (accessToken) {
        headers['Authorization'] = `token ${accessToken}`;
      }
      return headers;
    }
  })
});
