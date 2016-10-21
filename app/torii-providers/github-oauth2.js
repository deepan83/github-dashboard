import Ember from 'ember';
import GithubOauth2Provider from 'torii/providers/github-oauth2';

export default GithubOauth2Provider.extend({
  ajax: Ember.inject.service(),
  fetch(data) {
    return data;
  },

  open() {
    return this._super().then((toriiData) => {
      const authCode = toriiData.authorizationCode;
      const serverUrl =  `https://github.com/login/oauth/access_token?client_id=32b96c8ef042cebd8842&client_secret=d4de1e4a71e1e4db920a484cb18fa05cbea2edc3&code=${authCode}`;

      return this.get('ajax').post(serverUrl)
      .then((data) => {
        toriiData.accessToken = data.token;
        return toriiData;
      });
    });
  }

});
