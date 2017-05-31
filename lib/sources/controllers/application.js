goog.provide( 'test.idk.controllers.Application' );

goog.require( 'goog.array' );
goog.require( 'zz.app.controllers.FERootController' );
goog.require( 'zz.environment.services.MVCRegistry' );

goog.require( 'test.idk.models.Application' );
goog.require( 'test.idk.factories.Application' );
goog.require( 'test.idk.services.ServerApi' );

goog.require( 'test.idk.views.Application' );
goog.require( 'test.idk.controllers.Layout' );
goog.require( 'test.idk.controllers.Menu' );
goog.require( 'test.idk.views.Menu' );
goog.require( 'test.idk.controllers.List' );
goog.require( 'test.idk.controllers.Chart' );
goog.require( 'test.idk.controllers.Table' );
goog.require( 'test.idk.services.Router' );
goog.require( 'test.idk.events.DataIsReady' );

/**
 * Controller.
 * @extends {zz.app.controllers.FERootController}
 */
test.idk.controllers.Application =
    class extends zz.app.controllers.FERootController{

	constructor( ){
		super(
			new test.idk.models.Application(
			    undefined,
			    test.idk.factories.Application
			        .getInstance( )
			        .getApplicationDataset( ) ),
			test.idk.views.Application
			    .getInstance( ) );
	}

	/**
	 * @override
	 */
	setupListenersInternal( ){}

	/**
	 * @override
	 */
	setupModelInternal( ){ }

	/**
	 * @override
	 */
	bootstrap( ){

        /**
         * Data from json file
         * @private
         */
        this.data_= [];

		this
	        .getRouter( )
	        .setRootController( this )
            .when( '/dummylist', test.idk.controllers.Layout, test.idk.controllers.List )
            .when( '/dummychart', test.idk.controllers.Layout, test.idk.controllers.Chart )
            .when( '/dummytable', test.idk.controllers.Layout, test.idk.controllers.Table )
            .otherwise( '/dummylist' )
	        .bootstrap( );

        this.requestData_( );
	}

	/**
	 * @returns {test.idk.services.Router}
	 */
	getRouter( ){
	    
	    return test.idk.services.Router
	        .getInstance( );
	}

	/**
	 * Get layout controller.
	 * @return {test.idk.controllers.Layout}
	 */
	getLayoutController( ){

		return this.getChildAt( 0 );
	}

	/**
	 * Request data from json file
	 */
	requestData_( ){

		var self = this;
        test.idk.services.ServerApi.getInstance( ).getJson( )

            .then( function( result ){

            	var data = goog.json.parse( result );
                goog.array.sort( data, function( a, b ){

                    return a.order - b.order;
                } );

                self.data_ = data;
                self.dispatchEvent( new test.idk.events.DataIsReady( self.data_ ) );

            }, undefined, this );
	}

	/**
	 * Get data from json file.
	 * @return {Array}
	 */
	getData( ){

		return this.data_;
	}
};
