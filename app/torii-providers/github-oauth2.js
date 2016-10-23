import Ember from 'ember';
import GithubOauth2Provider from 'torii/providers/github-oauth2';

export default GithubOauth2Provider.extend({
  ajax: Ember.inject.service(),
  fetch(data) {
    return data;
  },

  open() {
    return this._super()

    .then((toriiData) => {
      const authCode = toriiData.authorizationCode;
      const serverUrl =  `https://github-cockpit.herokuapp.com/token?code=${authCode}`;

      return this.get('ajax').post(serverUrl)
      .then((data) => {
        toriiData.accessToken = data.token;
        return toriiData;
      });
    });
  }

});
