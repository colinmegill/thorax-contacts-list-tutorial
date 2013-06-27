Application.Collection.extend({
  name: "people",
  model: Application.Models["person"],
  localStorage: new Backbone.LocalStorage("SomeCollection")
  // url: "/people"
})
