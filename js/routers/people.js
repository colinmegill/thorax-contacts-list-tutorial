new (Backbone.Router.extend({
  routes: module.routes,
  index: function(){
    console.log('ow stop hitting me')
    var peopleCollection = new Application.Collections["people"]();

    peopleCollection.fetch()

    var peopleView = new Application.Views["people"]({
      collection: peopleCollection
    });

    Application.setView(peopleView);
  }
}))