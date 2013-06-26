//THIS WILL HAVE TO BE UPDATED TO NEW SYNTAX


Thorax.View.extend({
  
  name: "people",
  initialize: function(){
    var colinInstance = new Application.Model({
      name:"colin"
    });

    this.model = colinInstance;
  },

})