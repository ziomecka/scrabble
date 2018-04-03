/* jshint esversion: 6 */
module.exports = [
  "$scope",
  "appService",
  "authorizationService",
  "authorizationStates",
  function ($scope, appService, authorizationService, authorizationStates) {
    const me = $scope;

    // TODO move to authorizationService?
    const authorize = data => {
      authorizationService.authorize(data);
      authorizationService.go();
    };

    me.resNoLogin = false;
    me.resAuthorizeFailed = false;
    me.buttonsDisabled = false;
    me.login = "";
    me.password = "";

    me.goNewuser = () => {
      authorizationService.go({state: authorizationStates.newuser});
    };

    me.loginUser = data => {
      me.resNoLogin = false;
      me.resAuthorizeFailed = false;
      me.buttonsDisabled = true;
      appService.authorize({
        data: data,
        callback: {
          success: data => authorize(data),
          failureLogin: () => {
            me.buttonsDisabled = false;
            me.resNoLogin = true;
          },
          failurePassword: () => {
            me.buttonsDisabled = false;
            me.resAuthorizeFailed = true;
          }
        }
      });
    };
  }
];
