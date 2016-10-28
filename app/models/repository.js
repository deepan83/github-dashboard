import DS from 'ember-data';

export default DS.Model.extend({
  pullRequests: DS.hasMany('pullRequest', {
    arguments: {
      name: 'first',
      value: 20
    }
  })
});
