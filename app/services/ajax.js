import Ember from 'ember';
import AjaxService from 'ember-ajax/services/ajax';

export default AjaxService.extend({
  session: Ember.inject.service(),
  headers: Ember.computed('session.data.accessToken', {
    get() {
      let headers = {};
      const accessToken = this.get('session.data.accessToken');
      if (accessToken) {
        headers['Authorization'] = `token ${accessToken}`;
      }
      return headers;
    }
  })
});
