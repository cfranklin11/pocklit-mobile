'use strict';

//jQuery Mobile config code to disable jqm's default navigation,
//so backbone can handle view serving
$( document ).bind( 'mobileinit', function () {

  $.mobile.ajaxEnabled = false;
  $.mobile.linkBindingEnabled = false;
  $.mobile.hashListeningEnabled = false;
  $.mobile.pushStateEnabled = false;

  // Remove page from DOM when it's being replaced
  $( 'div[data-role="page"]' ).on( 'pagehide', function ( event ) {
    $( event.currentTarget ).remove();
  });
});