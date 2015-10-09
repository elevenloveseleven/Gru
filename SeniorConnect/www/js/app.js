//<editor-fold desc="Initialization of angular module">
mod = angular.module('starter', ['ionic', 'ngCordova', 'openfb', 'twitterLib',
  'family.controllers', 'family.services'])
  .config(function ($compileProvider) {
    $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
  })

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })
  .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    //$ionicConfigProvider.tabs.position("bottom");

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

      // setup an abstract state for the tabs directive
      .state('tab', {
        url: "/tab",
        abstract: true,
        templateUrl: "templates/tabs.html"
      })
      .state('tab.family', {
        url: "/family",
        abstract: true,
        views: {
          'tab-family': {
            templateUrl: "templates/family/tabs.html",
            controller: 'FamilyTabsCtrl'
          }
        }
      })

      .state('single-page', {
        url: "/single-page",
        abstract: true,
        templateUrl: "templates/family/single-page-container.html"
      })

      .state('tab.family.social', {
        url: '/social',
        views: {
          'tab-family-social': {
            templateUrl: 'templates/family/tab-social.html',
            controller: 'SocialCtrl'
          }
        }
      })

      .state('tab.family.friend-social', {
        url: '/social/:friendId',
        views: {
          'tab-family-social': {
            templateUrl: 'templates/family/tab-social.html',
            controller: 'SocialCtrl'
          }
        }
      })

      .state('single-page.social-new-post-text-only', {
        url: '/family/social/new-post-text-only',
        views: {
          'main-view': {
            templateUrl: 'templates/family/social/new-post-text-only.html',
            controller: 'SocialNewPostCtrl'
          }
        }
      })

      .state('single-page.social-new-post-new-photo', {
        url: '/family/social/new-post-with-photo',
        views: {
          'main-view': {
            templateUrl: 'templates/family/social/new-post-with-photo.html',
            controller: 'SocialNewPostCtrl'
          }
        }
      })

      .state('single-page.social-new-post-upload-photo', {
        url: '/family/social/new-post-upload-photo',
        views: {
          'main-view': {
            templateUrl: 'templates/family/social/new-post-with-photo.html',
            controller: 'SocialNewPostCtrl'
          }
        }
      })

      .state('tab.family.chats', {
        url: '/chats',
        views: {
          'tab-family-chats': {
            templateUrl: 'templates/family/tab-chats.html',
            controller: 'ChatsCtrl'
          }
        }
      })
      .state('tab.family.chat-detail', {
        url: '/chats/:chatId',
        views: {
          'tab-family-chats': {
            templateUrl: 'templates/family/chat/chat-detail.html',
            controller: 'ChatDetailCtrl'
          }
        }
      })

      .state('single-page.manage-a-group', {
        url: '/family/chats/manage-a-group/:groupId',
        views: {
          'main-view': {
            templateUrl: 'templates/family/chat/manage-a-group.html',
            controller: 'ChatgroupDetailCtrl'
          }
        }
      })

      .state('single-page.manage-all-groups', {
        url: '/family/chats/manage-all-groups',
        views: {
          'main-view': {
            templateUrl: 'templates/family/chat/manage-all-groups.html',
            controller: 'ChatgroupCtrl'
          }
        }
      })

      .state('tab.family.friends', {
        url: '/friends',
        views: {
          'tab-family-friends': {
            templateUrl: 'templates/family/tab-friends.html',
            controller: 'FriendsCtrl'
          }
        }
      })

      .state('single-page.add-friend-from-contacts', {
        url: '/family/friend/add-from-contacts',
        views: {
          'main-view': {
            templateUrl: 'templates/family/friend/add-friend-from-contacts.html',
            controller: 'AddFriendFromContactsCtrl'
          }
        }
      })

      .state('tab.family.friend-requests', {
        url: '/friend/requests',
        views: {
          'tab-family-friends': {
            templateUrl: 'templates/family/friend/view-friend-requests.html',
            controller: 'FriendRequestCtrl'
          }
        }
      })

      .state('tab.family.friend-detail', {
        url: '/friend/:friendId',
        views: {
          'tab-family-friends': {
            templateUrl: 'templates/family/friend/friend-detail.html',
            controller: 'FriendDetailCtrl'
          }
        }
      })

      .state('tab.family.account', {
        url: '/account',
        views: {
          'tab-family-account': {
            templateUrl: 'templates/family/tab-account.html',
            controller: 'AccountCtrl'
          }
        }
      });
    //</editor-fold>

    //<editor-fold desc="Initialization State">
    $stateProvider
      .state('init', {
        url: "/init",
        abstract: true,
        templateUrl: 'templates/init/init-container.html',
        controller: 'InitCtrl'
      })
      .state('init.enter_phone_number', {
        url: '/enter_phone_number',
        views: {
          'init-main-view': {
            templateUrl: 'templates/init/enter-phone-number.html'
          }
        }
      })
      .state('init.verify_phone_number', {
        url: '/verify_phone_number',
        views: {
          'init-main-view': {
            templateUrl: 'templates/init/verify-phone-number.html'
          }
        }
      })
      .state('init.login', {
        url: '/login',
        views: {
          'init-main-view': {
            templateUrl: 'templates/init/login.html'
          }
        }
      });


    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/family/chats');

  });



