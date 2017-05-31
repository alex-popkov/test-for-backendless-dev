goog.provide( 'test.idk.views.Layout' );

goog.require( 'goog.dom.classlist' );

goog.require( 'zz.views.FEBase' );
goog.require( 'zz.environment.services.MVCRegistry' );

goog.require( 'test.idk.templates.layout' );
goog.require( 'test.idk.enums.CssClass' );

/**
 * View.
 * @extends {zz.views.FEBase}
 */
test.idk.views.Layout = class extends zz.views.FEBase{

	constructor( ){

		super( test.idk.templates.layout.model );
	}
	
	/**
	 * @param {test.idk.contollers.Layout} controller
	 */
	fadeoutView( controller ){
	    
	    var element = goog.dom.getElementByClass(
            test.idk.enums.CssClass.VIEW_WRAPPER,
	        controller.getElement( ) );
	    
	    goog.style.setStyle(
	        element,
	        'margin-bottom',
	        '-100%' );
	        
	    goog.style.setStyle(
	        element,
	        'margin-top',
	        '100%' );
	    goog.style.setStyle(
	        element,
	        'opacity',
	        '0' );
	}
	
	/**
	 * @param {test.idk.contollers.Layout} controller
	 */
	fadeinView( controller ){
	    
	    var element = goog.dom.getElementByClass(
            test.idk.enums.CssClass.VIEW_WRAPPER,
	        controller.getElement( ) );
	    
	    goog.style.setStyle(
	        element,
	        'margin-top',
	        '20px' );
	    goog.style.setStyle(
	        element,
	        'opacity',
	        '1' );
	        
	    goog.Timer.callOnce( function( ){
	        
	        goog.style.setStyle(
    	        element,
    	        'margin-bottom',
    	        '' );
	    }, 100 );
	    
	}
};
goog.addSingletonGetter( test.idk.views.Layout );
zz.environment.services.MVCRegistry
	.setView( 'layout' , test.idk.views.Layout );