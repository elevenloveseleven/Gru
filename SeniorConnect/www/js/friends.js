/**
 * Created by Siqi on 01/10/15.
 */
angular.module('sc.friends',[])

  .controller('FriendsCtrl', function($scope, Friends) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.friends = Friends.all();
  })
  .controller('CreateGroupCtrl', function($scope, Friends){
    $scope.friends = Friends.all();
    console.log("here");
    console.log($scope.friends);
    $scope.remove = function(chat) {
      Friends.remove(friend);
    };
    $scope.createGroup = function(createGroupForm) {

    };
  })

  .controller('GetPhoneContactListCtrl', function($scope, PhoneContactList) {
    $scope.phoneContactListPeople = PhoneContactList.all();
    console.log("here");
    console.log($scope.phoneContactListPeople);
  })

  .controller('PhoneContactListPersonCtrl', function($scope, $stateParams, phoneContactListPeople) {
    $scope.phoneContactListPerson =phoneContactListPeople.get($stateParams.phoneContactListPersonID);
  });
