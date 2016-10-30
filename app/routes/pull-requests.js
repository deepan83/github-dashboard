import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  flashMessages: Ember.inject.service(),
  socketIOService: Ember.inject.service('socket-io'),

  model() {
    const repositories = ['oam', 'bg-gaq-and-checkout', 'bg-home-services', 'home-move', 'retention', 'hi'];
    const ajax = this.get('ajax');
    const socket = this.get('socketIOService').socketFor('https://github-cockpit.herokuapp.com/');
    let pullRequestPromises;

    pullRequestPromises = repositories.map((repository) => {
      return ajax
        .request(`https://api.github.com/search/issues?q=is:pr label:"Ready to merge" state:open repo:ConnectedHomes/${repository}`);
    });

    // Setup socket
    socket.on('pullRequestUpdate', this.onPullRequestUpdate, this);

    return new Ember.RSVP.map(pullRequestPromises, (pullRequests) => {
      return {
        name: pullRequests.items,
        pullRequests: pullRequests.items,
      };
    });
  },

  onPullRequestUpdate(event) {
    const model = this.modelFor(this.routeName);
    const pullRequests = [].concat(...model.mapBy('pullRequests'));

    console.log(JSON.parse(event));
  }
});
