goog.provide( 'test.idk.views.Menu' );

goog.require( 'test.idk.templates.menu' );
goog.require( 'zz.views.FEBase' );
goog.require( 'zz.environment.services.MVCRegistry' );

/**
 * Menu view.
 * @extends {zz.views.FEBase}
 */
test.idk.views.Menu = class extends zz.views.FEBase{

    constructor( opt_model ){

        super( opt_model || test.idk.templates.menu.model )
    }
};

goog.addSingletonGetter(
    test.idk.views.Menu );

zz.environment.services.MVCRegistry
    .setView(
        'menu',
        test.idk.views.Menu );