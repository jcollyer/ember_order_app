var App = Ember.Application.create();

App.Router.map(function() {
  this.resource('tables');
});

App.TablesRoute = Ember.Route.extend({
  model: function() {
    return App.Table.find();
  }
})

App.TablesController = Ember.ArrayController.extend();

App.Store = DS.Store.extend({
  revision: 11,
  adapter: 'DS.FixtureAdapter'
});

App.Table = DS.Model.extend();

App.Table.FIXTURES = [{
  id: 1,
  tab: 1
}, {
  id: 2,
  tab: 2
}, {
  id: 3,
  tab: 3
}, {
  id: 4,
  tab: 4
}, {
  id: 5,
  tab: 5
}, {
  id: 6,
  tab: 6
}];
