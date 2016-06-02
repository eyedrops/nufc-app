angular.module('nufc.controllers', [])

.controller('HomeCtrl', function($scope, $http) {

  YUI().use('yql', function(Y){
    var query = 'select * from rss(0,10) where url = "www.chroniclelive.co.uk/all-about/newcastle-united-fc?service=rss"'
    var q = Y.YQL(query, function(data){

      console.log(JSON.stringify(data.query.results.item));
      //r now contains the result of the YQL Query as a JSON
      $scope.feed = data.query.results.item // get feed as array of entries
    })
  })
})

.controller('ChatsCtrl', function($scope) {})


.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
