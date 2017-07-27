import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function(){
    this.transitionTo('login');
  },
  model() {
    return this.store.findAll('article');
  },
  actions: {
    destroyArticle(article) {
      article.destroyRecord();
      this.transitionTo('index')
    }

  }

});
