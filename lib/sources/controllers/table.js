goog.provide( 'test.idk.controllers.Table' );

goog.require( 'zz.controllers.FEBase' );
goog.require( 'zz.environment.services.MVCRegistry' );

goog.require( 'test.idk.models.Table' );
goog.require( 'test.idk.views.Table' );

/**
 * Controller.
 * @extends {zz.controllers.FEBase}
 */
test.idk.controllers.Table = class extends zz.controllers.FEBase{

	constructor( ){
	    
		super( new test.idk.models.Table( ),
			test.idk.views.Table.getInstance( )  );
	}

	/**
	 * @override
	 */
	setupListenersInternal( ){}

	/**
	 * @override
	 */
	setupModelInternal( ){

        this.getModel( ).createLast( );
        this.getRootController( )
            .getLayoutController( )
            .updateActiveLink( );
	}

	/**
	 * @override
	 */
	bootstrap( ){}
};
zz.environment.services.MVCRegistry
	.setController(
	    'table' ,
	    test.idk.controllers.Table );