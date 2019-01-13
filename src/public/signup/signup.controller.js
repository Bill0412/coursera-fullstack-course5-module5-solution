(function() {
  'use strict';

  angular.module('public')
  .controller('SignupController', SignupController);

  SignupController.$inject = ['UserService'];
  function SignupController (UserService) {
    var ctrl = this;

    ctrl.register = function () {
      UserService.register({
        firstName: ctrl.firstname,
        lastName: ctrl.lastname,
        email: ctrl.email,
        phone: ctrl.phoneNumber,
        favoriteMenu: ctrl.favoriteMenu
      });
      ctrl.isRegistered = true;
    }
  }
}());
