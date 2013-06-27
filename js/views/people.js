Thorax.View.extend({
  
  name: "people",
  initialize: function(){
    this.personForm = new Application.Views["personForm"]({
      collection: this.collection
    })
  }

})