define(['dojo/_base/declare', 'jimu/BaseWidget'],
function(declare, BaseWidget) {
  //To create a widget, you need to derive from BaseWidget.
  return declare([BaseWidget], {

    // Custom widget code goes here

    baseClass: 'infographic-group-fields',
    // this property is set by the framework when widget is loaded.
    // name: 'InfographicGroupFields',
    // add additional properties here

    //methods to communication with app container:
    postCreate: function() {
      this.inherited(arguments);
      console.log('InfographicGroupFields::postCreate');
    }

    // startup: function() {
    //   this.inherited(arguments);
    //   console.log('InfographicGroupFields::startup');
    // },

    // onOpen: function(){
    //   console.log('InfographicGroupFields::onOpen');
    // },

    // onClose: function(){
    //   console.log('InfographicGroupFields::onClose');
    // },

    // onMinimize: function(){
    //   console.log('InfographicGroupFields::onMinimize');
    // },

    // onMaximize: function(){
    //   console.log('InfographicGroupFields::onMaximize');
    // },

    // onSignIn: function(credential){
    //   console.log('InfographicGroupFields::onSignIn', credential);
    // },

    // onSignOut: function(){
    //   console.log('InfographicGroupFields::onSignOut');
    // }

    // onPositionChange: function(){
    //   console.log('InfographicGroupFields::onPositionChange');
    // },

    // resize: function(){
    //   console.log('InfographicGroupFields::resize');
    // }

    //methods to communication between widgets:

  });

});
