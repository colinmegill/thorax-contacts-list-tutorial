Thorax.View.extend({
  
  name: "people",
  events: {
    "click button[name='deleteButton']": function(e){
      event.preventDefault();
      var modelClicked = $(event.target).model();
      this.collection.remove(modelClicked);
    }
  },
  initialize: function(){
    this.personForm = new Application.Views["personForm"]({
      collection: this.collection
    })
  }

})