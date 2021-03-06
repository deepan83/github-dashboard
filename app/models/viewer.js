import DS from 'ember-data';

export default DS.Model.extend({
  login: DS.attr('string'),
  organizations: DS.hasMany('organization', {
    arguments:{
      name: 'first',
      value: 10
    }
  })
});
