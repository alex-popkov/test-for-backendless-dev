goog.provide( 'test.idk.views.Application' );
goog.require( 'test.idk.templates.application' );
goog.require( 'zz.views.FEBase' );

/**
 * Application (root controller) view.
 * @extends {zz.views.FEBase}
 */
test.idk.views.Application = class extends zz.views.FEBase{

	constructor( ){
		super(
		    test.idk.templates.application.model,
		    test.idk.templates.application.dataset,
		    test.idk.templates.application.datarow );
	}
};
goog.addSingletonGetter( test.idk.views.Application );