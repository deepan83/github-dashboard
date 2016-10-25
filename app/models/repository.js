import DS from 'ember-data';

export default DS.Model.extend({
  pullRequests: DS.hasMany('pullRequest')
});
