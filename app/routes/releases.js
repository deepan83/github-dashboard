import Ember from 'ember';

export default Ember.Route.extend( {
  ajax: Ember.inject.service(),
  model() {
    const repositories = ['oam', 'bg-gaq-and-checkout', 'bg-home-services', 'home-move', 'retention', 'hi'];
    const ajax = this.get('ajax');
    return ajax
      .request('https://api.github.com/repos/ConnectedHomes/oam/releases/latest')
      .then((response) => {
        return [response];
      })
      .catch((err) => {
        console.log(err);
      });

    // return this.store.queryRecord('viewer', {});
  }
});
