goog.provide( 'test.idk.controllers.Menu' );

goog.require( 'goog.array' );

goog.require( 'zz.controllers.enums.EventType' );
goog.require( 'zz.controllers.FEBase' );
goog.require( 'zz.environment.services.MVCRegistry' );

/**
 * Controller.
 * @extends {zz.controllers.FEBase}
 */
test.idk.controllers.Menu = class extends zz.controllers.FEBase{

    /**
     * @param {test.idk.models.List} model
     * @param {test.idk.views.List} view
     */
	constructor( model, view ){
	    
		super( model, view );
	}

	/**
	 * @override
	 */
	setupListenersInternal( ){

        this
            .getHandler( )
            .listenWithScope(

                this,
                zz.controllers.enums.EventType.ACTION,
                this.actionHandler_,
                false,
                this
            );

        if( !this.getRootController( ).getData( )
				.length ){

            this.getHandler( ).listenWithScope(

                this.getRootController( ),
                test.idk.enums.EventType.DATA_IS_READY,
                this.dataIsReadyListener_,
                false,
                this
            );
        }
	}

	/**
	 * @override
	 */
	setupModelInternal( ){

        if( this.getRootController( )

                .getData( )
                .length ){

            this.dataReadyListener_( );
        }
	}

	/**
	 * @override
	 */
	bootstrap( ){}

    /**
     * @param {zz.controllers.events.Action} e
     */
    actionHandler_( e ){

        this
            .getRootController( )
            .getRouter( )
            .setFragment( e.model.id );
    }

    /**
     * @param {test.idk.events.DataIsReady=} opt_e
     */
    dataIsReadyListener_( opt_e ){

		var data;
    	if( opt_e ){

    		data = opt_e.data;
		}else {

    		data = this.getRootController( ).getData( );
		}

        goog.array.forEach( data, function( item ){

        	this.getModel( ).createLast( [ '/' + item.id.toLowerCase( ), false, item.title ] );
        }, this );
    }
};
zz.environment.services.MVCRegistry
	.setController(
	    'menu' ,
	    test.idk.controllers.Menu );