import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('fascia');
  this.route('pull-requests');
  this.route('releases');
});

export default Router;
