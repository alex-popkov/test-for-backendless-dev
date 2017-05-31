/**
* @fileoverview Provide test.idk base object.
* @license Apache-2.0
* @author popkov.aleksander@gmail.com (Popkov Alexander)
*/

goog.provide( 'test.idk' );

goog.require( 'test.idk.controllers.Application' );

/**
* Base namespace for test.idk module.
* @const
*/
test.idk = test.idk || { };

/**
* Bootstrap module method.
*/
test.idk.bootstrap = function( ){

    var controller = new test.idk.controllers.Application( );
};
goog.exportSymbol( 'test.idk.bootstrap', test.idk.bootstrap );