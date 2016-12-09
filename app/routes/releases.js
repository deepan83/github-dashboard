import Ember from 'ember';

export default Ember.Route.extend( {
  ajax: Ember.inject.service(),
  model() {
    const repositories = ['oam', 'bg-gaq-and-checkout', 'bg-home-services', 'home-move', 'retention', 'hi'];

    let releases = repositories.map((repository) => {
      const ajax = this.get('ajax');
      return ajax
        .request(`https://api.github.com/repos/ConnectedHomes/${repository}/releases/latest`)
        .catch((err) => {
          console.log(err);
        });
    });

    return Ember.RSVP.all(releases);

    // return this.store.queryRecord('viewer', {});
  }

});
