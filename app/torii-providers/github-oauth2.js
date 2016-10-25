import Ember from 'ember';
import ENV from 'github-dashboard/config/environment';
import GithubOauth2Provider from 'torii/providers/github-oauth2';

export default GithubOauth2Provider.extend({
  ajax: Ember.inject.service(),
  fetch(data) {
    return data;
  },

  open() {
    return this._super()

    .then((toriiData) => {
      debugger;
      const authCode = toriiData.authorizationCode;
      const clientId =  ENV.torii.providers['github-oauth2'].apiKey;
      const serverUrl =  `https://github-cockpit.herokuapp.com/token?code=${authCode}&clientId=${clientId}`;

      return this.get('ajax').post(serverUrl)
      .then((data) => {
        toriiData.accessToken = data.token;
        return toriiData;
      });
    });
  }

});
