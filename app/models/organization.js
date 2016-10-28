import DS from 'ember-data';

export default DS.Model.extend({
  repository: DS.hasMany('repository', {
    arguments: {
      name: 'first',
      value: 10
    }
  })
});
