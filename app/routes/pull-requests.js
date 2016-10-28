import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  socketIOService: Ember.inject.service('socket-io'),
  model() {
    const repositories = ['oam', 'bg-gaq-and-checkout', 'bg-home-services', 'home-move', 'retention', 'hi'];
    const ajax = this.get('ajax');
    let pullRequestPromises;

    pullRequestPromises = repositories.map((repository) => {
      return ajax
        .request(`https://api.github.com/repos/ConnectedHomes/${repository}/pulls`);
    });

    const socket = this.get('socketIOService').socketFor('https://github-cockpit.herokuapp.com/');
    socket.on('message', this.onMessage, this);

    return new Ember.RSVP.map(pullRequestPromises, (pullRequests) => {
      return {
        name: pullRequests.get('firstObject.head.repo.name'),
        pullRequests,
      };
    });
  },

  onMessage() {
    console.log('hello!!!!!');
  }
});
