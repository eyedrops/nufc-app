angular.module('nufc.controllers', [])

.controller('HomeCtrl', function($scope, $http) {

  YUI().use('yql', function(Y){
    var urls = [
      '"www.chroniclelive.co.uk/all-about/newcastle-united-fc?service=rss",' +
      '"http://talksport.com/rss/football/newcastle-united/feed"'
    ];

    var query = 'select * from rss where url in(' + urls + ')';

    var getJSON = Y.YQL(query, function(data){
      console.log(data);
      $scope.feed = data.query.results.item
    })
  })
})

.controller('ChatsCtrl', function($scope) {})


.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
