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
      if (pullRequests.items.length) {
        const repositoryUrl = pullRequests.items[0].repository_url;
        const repositoryName = repositoryUrl.substr(repositoryUrl.lastIndexOf('/') + 1);

        return {
          name: repositoryName,
          pullRequests: pullRequests.items,
        };
      } else {
        return null;
      }
    })
    .then((pullRequests) => {
      return pullRequests.compact();
    });
  },

  onPullRequestUpdate(pullRequest) {
    const model = this.modelFor(this.routeName);
    const pullRequestJSON = JSON.parse(pullRequest);
    const pullRequestsForRepository = model.findBy('name', pullRequestJSON.head.repo.name).pullRequests;

    if (pullRequestsForRepository.length) {
      const matchingPullRequest = pullRequestsForRepository.findBy('number', pullRequestJSON.number);

      if (matchingPullRequest) {
        pullRequestsForRepository.removeObject(matchingPullRequest);
      } else {
        pullRequestsForRepository.pushObject(pullRequestJSON);
      }
    }
  }
});
