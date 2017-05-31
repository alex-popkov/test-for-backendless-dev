goog.provide( 'test.idk.services.ServerApi' );

goog.require( 'goog.net.XhrIo' );
goog.require( 'goog.Promise' );

goog.require( 'zz.factories.BaseFactory' );

goog.require( 'test.idk.enums.Const' );
/**
 * Invoices data factory.
 * @extends {zz.factories.BaseFactory}
 */
test.idk.services.ServerApi = class extends zz.factories.BaseFactory{

	constructor( ){
		super( 'test.idk.services.ServerApi' );
	}

    /**
     * @return {goog.Promise}
     */
    getJson( ){

        return ( new goog.Promise( function( resolve, reject ){

            goog.net.XhrIo.send(

                test.idk.enums.Const.JSON_PATH,
                function( ){

                    var data = this.getResponseJson( );
                    resolve( data );
                }
            );
        }, this ) );
    }
};
goog.addSingletonGetter( test.idk.services.ServerApi );