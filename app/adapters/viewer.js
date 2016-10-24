import GraphQLAdapter from 'ember-graphql-adapter';

export default GraphQLAdapter.extend({
  session: Ember.inject.service(),
  httpMethod: 'POST',
  endpoint: `${EmberENV.apiBaseUrl}/graphql`,
  headers: Ember.computed('session.data.authenticated.accessToken', function() {
    const Authorization = `bearer ${this.get('session.data.authenticated.accessToken')}`;

    return {
      Authorization
    };
  })
});
