import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr('string'),
  description: DS.attr('string'),
  publishedAt: DS.attr('string'),
  title: DS.attr('string'),
  url: DS.attr('string'),
  urlToImage: DS.attr('string')
});
