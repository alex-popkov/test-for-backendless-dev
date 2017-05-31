
goog.provide( 'test.idk.services.Router' );

goog.require( 'goog.json' );
goog.require( 'goog.events.EventHandler' );

goog.require( 'zz.app.services.FERouter' );

/**
 * Router.
 * @constructor
 * @extends {zz.app.services.FERouter}
 */
test.idk.services.Router = function( ){

    goog.base( this, 'test.idk.services.Router' );
};

goog.inherits( test.idk.services.Router, zz.app.services.FERouter );
goog.addSingletonGetter( test.idk.services.Router );

/**
 * Check if the current menu link is active.
 * @params {string} linkId
 * @return {boolean}
 */
test.idk.services.Router.prototype.isMenuLinkActive = function( linkId ){

    return this.getFragment( ).indexOf( linkId ) >= 0;
};

