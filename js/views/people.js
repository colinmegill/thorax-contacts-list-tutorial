Thorax.View.extend({
  
  name: "people",
  events: {
    "click button[name='deleteButton']": function(event){
      //event.preventDefault();
      //var modelClicked = $(event.target).model();
      //this.collection.remove(modelClicked); -- the faster way to do all this is the handleDelete method implemented below
    } 
  },
  initialize: function(){
    this.personForm = new Application.Views["personForm"]({
      collection: this.collection
    })
  },
  handleDelete: function(e) {
      var modelClicked = $(event.target).model();
      this.collection.remove(modelClicked);
  }

})