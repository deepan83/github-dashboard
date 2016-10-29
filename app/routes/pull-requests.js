import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  flashMessages: Ember.inject.service(),
  socketIOService: Ember.inject.service('socket-io'),

  model() {
    const repositories = ['oam', 'bg-gaq-and-checkout', 'bg-home-services', 'home-move', 'retention', 'hi'];
    const ajax = this.get('ajax');
    let pullRequestPromises;

    pullRequestPromises = repositories.map((repository) => {
      return ajax
        .request(`https://api.github.com/search/issues?q=is:pr label:"Ready to merge" state:open repo:ConnectedHomes/${repository}`);
    });

    const socket = this.get('socketIOService').socketFor('https://github-cockpit.herokuapp.com/');
    socket.on('message', this.onMessage, this);

    return new Ember.RSVP.map(pullRequestPromises, (pullRequests) => {
      return {
        name: pullRequests.items,
        pullRequests: pullRequests.items,
      };
    });
  },

  onMessage() {
    const flashMessages = this.get('flashMessages');
    flashMessages.info('Pull request state!');
  }
});
