/* jshint esversion: 6 */
module.exports = [
  "$scope",
  "newroomDefaults",
  "roomData",
  "roomService",
  function ($scope, newroomDefaults, roomData, roomService) {
    let me = $scope;
    me.defaults = newroomDefaults;

    /** Watch rommService's data */
    me.room = roomService.data.room;
    me.game = roomService.data.game;
    me.user = roomService.data.user;

    ////////////////
    // INITIALIZE //
    ////////////////
    this.$onInit = () => {
      roomService.initializeRoom(roomData);
    };

    /////////////
    // DESTROY //
    /////////////
    this.$onDestroy = () => {
      roomService.destroyRoom();
    };

    /////////////
    // OPTIONS //
    /////////////
    me.numberPlacesChanged = number => {
      roomService.numberPlacesChanged(number);
    };

    me.timeChanged = time => {
      roomService.timeChanged(time);
    };

    ////////////
    // PLACES //
    ////////////
    me.takePlace = data => {
      roomService.takePlace(data);
    };

    me.getUp = () => {
      roomService.getUp();
    };
  }
];
