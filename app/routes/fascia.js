import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  ajax: Ember.inject.service(),
  session: Ember.inject.service(),
  model() {
    const ajax = this.get('ajax');
    return ajax
      .request('https://api.github.com/user')
      .then((user) => {
        return ajax.request(`https://api.github.com/orgs/ConnectedHomes/members/${user.login}`)
          .then(() => {
            this.get('session').set('user', user);
            return user;
          });
      })
      .catch((err) => {
        console.log(err);
      });

    // return this.store.queryRecord('viewer', {});
  }
});
