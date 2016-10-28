import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  model() {
    const repositories = ['oam', 'bg-gaq-and-checkout', 'bg-home-services', 'home-move', 'retention', 'hi'];
    const ajax = this.get('ajax');
    let pullRequestPromises;

    pullRequestPromises = repositories.map((repository) => {
      return ajax
        .request(`https://api.github.com/repos/ConnectedHomes/${repository}/pulls`);
    });

    return new Ember.RSVP.map(pullRequestPromises, (pullRequests) => {
      return {
        name: pullRequests.get('firstObject.head.repo.name'),
        pullRequests,
      };
    });
  }
});
