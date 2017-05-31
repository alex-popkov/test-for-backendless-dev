goog.provide( 'test.idk.controllers.Chart' );

goog.require( 'zz.controllers.FEBase' );
goog.require( 'zz.environment.services.MVCRegistry' );

goog.require( 'test.idk.models.Table' );
goog.require( 'test.idk.views.Chart' );

/**
 * Controller.
 * @extends {zz.controllers.FEBase}
 */
test.idk.controllers.Chart = class extends zz.controllers.FEBase{

	constructor( ){
	    
		super( new test.idk.models.Table( ),
			test.idk.views.Chart.getInstance( )  );
	}

	/**
	 * @override
	 */
	setupChartenersInternal( ){}

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
	    'chart' ,
	    test.idk.controllers.Chart );