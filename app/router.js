import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('protected');
  this.route('signup');
  this.route('login');
  this.route('private', { path: ':user_id' });
  this.route('hash');
});

export default Router;
