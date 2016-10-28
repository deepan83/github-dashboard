import GraphQLAdapter from 'ember-graphql-adapter';
import Compiler from 'github-dashboard/graphql-adapter/compiler';

export default GraphQLAdapter.extend({
  session: Ember.inject.service(),
  httpMethod: 'POST',
  endpoint: `${EmberENV.apiBaseUrl}/graphql`,
  headers: Ember.computed('session.data.authenticated.accessToken', function() {
    const Authorization = `bearer ${this.get('session.data.authenticated.accessToken')}`;

    return {
      Authorization
    };
  }),

  request(store, type, options) {
    let compiledQuery = this.compile(store, type, options);
    let url = this.endpoint;
    let ajaxOpts = this.ajaxOptions(url, JSON.stringify({ query: compiledQuery }));
    return this.ajax(ajaxOpts);
  },

  compile: function(store, type, options) {
   options['normalizeCaseFn'] = this.normalizeCase;
   return Compiler.compile(type, store, options);
 },

});
