new (Backbone.Router.extend({
  routes: module.routes,
  index: function(){
    console.log('ow stop hitting me')
    //by making this collection global, you have access to it in all of your routes
    Application.Collections.peopleCollection = new Application.Collections.people(); 

    Application.Collections.peopleCollection.fetch({
      success: function(collection, response, options){
        var peopleView = new Application.Views["people"]({
          collection: collection //Application.Collections.people
        });
  
        Application.setView(peopleView);

      },
      error: function(collection, response, options){
        console.log('collection could not be fetched')
      }
    })
  },
  details: function(id){
    
    var modelDetailView = new Application.Views["personDetailView"]({
        model: Application.Collections.peopleCollection.get(id),
    })

    Application.setView(modelDetailView)

  }

}))