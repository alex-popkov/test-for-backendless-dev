goog.provide( 'test.idk.controllers.Layout' );

goog.require( 'zz.controllers.enums.EventType' );
goog.require( 'zz.app.controllers.FELayoutController' );
goog.require( 'zz.environment.services.MVCRegistry' );

goog.require( 'test.idk.factories.Layout' );
goog.require( 'test.idk.models.Layout' );
goog.require( 'test.idk.views.Layout' );

/**
 * Controller.
 * @extends {zz.app.controllers.FEViewController}
 */
test.idk.controllers.Layout =
    class extends zz.app.controllers.FELayoutController{

	constructor( ){
		super(
			new test.idk.models.Layout(
			    undefined,
			    test.idk.factories.Layout
			        .getInstance( )
			        .getLayoutDataset( ) ),
			test.idk.views.Layout
			    .getInstance( ) );
	}
	
    /**
     * Add view controller.
     * @param {Function} viewCtrl
     * @protected
     * @override
     */
    fadeoutViewInternal( ){
    
        //
    }

    /**
     * Add view controller.
     * @param {Function} ViewCtrl
     * @protected
     * @override
     */
    setViewInternal( ViewCtrl ){
    
        this.viewCtrl_ = new ViewCtrl( );
        this.addChild( this.viewCtrl_, false );
        this.viewCtrl_.render( this.getViewWrapper( ) );
    }

    /**
     * Remove view controller.
     * @protected
     * @override
     */
    removeViewInternal( ){
    
        if( this.viewCtrl_ ){

            this.viewCtrl_.dispose( );
        }
    }

    /**
     * Set view controller.
     * @param {Function} constructorFn
     */
    setViewController( constructorFn ){
        
        this
            .getView( )
            .fadeoutView( this );
        
        goog.Timer.callOnce(
            
            function( ){
                
                
                this.removeViewInternal( );
                this.setViewInternal( constructorFn );
                this
                    .getView( )
                    .fadeinView( this );
            }, 
            200,
            this );
    }

	/**
	 * @override
	 */
	setupListenersInternal( ){}

	/**
	 * @override
	 */
	setupModelInternal( ){}

	/**
	 * @override
	 */
	bootstrap( ){}

	/**
	 * Update menu model according current route.
	 */
    updateActiveLink( ){

		var menu = this
			.getModel( )
			.firstDatarow( )
			.menu;

		var link = menu.firstDatarow( );
		do{

			link.active = this

				.getRootController( )
				.getRouter( )
				.isMenuLinkActive( link.id );

		}while( link = menu.nextDatarow( ) );
	}
};
zz.environment.services.MVCRegistry
	.setController(
	    'layout' ,
	    test.idk.controllers.Layout );
