goog.provide( 'test.idk.controllers.List' );

goog.require( 'zz.controllers.FEBase' );
goog.require( 'zz.environment.services.MVCRegistry' );

goog.require( 'test.idk.models.Table' );
goog.require( 'test.idk.views.List' );

/**
 * Controller.
 * @extends {zz.controllers.FEBase}
 */
test.idk.controllers.List = class extends zz.controllers.FEBase{

	constructor( ){
	    
		super( new test.idk.models.Table( ),
			test.idk.views.List.getInstance( )  );
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
	    'list' ,
	    test.idk.controllers.List );