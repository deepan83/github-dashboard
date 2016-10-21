import Ember from 'ember';
import GithubOauth2Provider from 'torii/providers/github-oauth2';

export default GithubOauth2Provider.extend({
  ajax: Ember.inject.service(),
  fetch(data) {
    return data;
  },

  open(params) {
    return this._super().then((toriiData) => {
      const authCode = toriiData.authorizationCode;
      const serverUrl = `https://github.com/login/oauth/access_token`;

      debugger;

      return this.get('ajax').post(serverUrl, {
         data: {
           client_id: '32b96c8ef042cebd8842',
           client_secret: '53593fcc304d9f8b1a22f5b3329675526c1b60ee',
           code: authCode
         }
      })
      .then((data) => {
        toriiData.accessToken = data.token;
        return toriiData;
      });
    });
  }

});
