new (Backbone.Router.extend({
  routes: module.routes,
  index: function(){
    console.log('ow stop hitting me')
    var peopleCollection = new Application.Collections["people"](); 




    peopleCollection.fetch({
      success: function(collection, response, options){
        var peopleView = new Application.Views["people"]({
          collection: peopleCollection
        });
  
        Application.setView(peopleView);

      },
      error: function(collection, response, options){
        console.log('collection could not be fetched')
      }
    })
  }

}))