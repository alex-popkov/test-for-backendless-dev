goog.provide( 'test.idk.events.DataIsReady' );

goog.require( 'zz.events.BaseEvent' );
goog.require( 'test.idk.enums.EventType' );

/**
 * Data is ready event class.
 * @param {Object} data
 * @extends {zz.events.BaseEvent}
 * @constructor
 */
test.idk.events.DataIsReady = function( data ){

	goog.base( this, test.idk.enums.EventType.DATA_IS_READY );

	/**
	 * Data from fb.
	 * @type {Object}
	 */
	this.data = data;
};
goog.inherits( test.idk.events.DataIsReady, zz.events.BaseEvent );