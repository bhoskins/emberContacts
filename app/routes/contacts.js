import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    // the model is an Array of all the posts
    return this.store.find('contact');
    //will look for app/models/contact.js
  }
});
