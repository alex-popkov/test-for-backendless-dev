// This file was autogenerated by idk compile models.
// Please do not edit.

goog.provide( 'test.idk.models.Menu' );
goog.provide( 'test.idk.models.MenuDatarow' );

goog.require( 'zz.models.Datarow' );
goog.require( 'zz.models.Dataset' );
goog.require( 'zz.models.enums.FieldType' );



/**
* @param {!zz.models.Dataset} dataset
* @param {?Array.<string>} opt_data
* @extends {zz.models.Datarow}
* @constructor
*/
test.idk.models.MenuDatarow = function( dataset, opt_data ){

    /**
     * @type {string}
     */
    this.id = undefined;

    /**
     * @type {boolean}
     */
    this.active = undefined;

    /**
     * @type {string}
     */
    this.caption = undefined;



/**
* Call parent constructor.
*/
zz.models.Datarow.call( this, dataset, opt_data );
};

goog.inherits( test.idk.models.MenuDatarow, zz.models.Datarow );

/**
* @param {goog.event.EventTarget=} opt_parent
* @param {Array.<Array>=} opt_data
* @extends {zz.models.Dataset}
* @constructor
*/
test.idk.models.Menu = function( opt_parent, opt_data ){

zz.models.Dataset.call( this, opt_parent, opt_data );
};
goog.inherits( test.idk.models.Menu, zz.models.Dataset );

/**
* Current dataset row type.
* @constructor
* @overwrite
* @type {test.idk.models.MenuDatarow}
*/
test.idk.models.Menu.prototype.DatarowConstructor = test.idk.models.MenuDatarow;

/**
* Return test.idk.models.MenuDatarow schema object.
* @override
* @returns {Object}
*/
test.idk.models.Menu.prototype.getDatarowSchema = function( ){

return {
        id: {
                index: 0,
                type: zz.models.enums.FieldType.STRING,
                required: false
        },
        active: {
                index: 1,
                type: zz.models.enums.FieldType.BOOLEAN,
                required: false
        },
        caption: {
                index: 2,
                type: zz.models.enums.FieldType.STRING,
                required: false
        }
};
};