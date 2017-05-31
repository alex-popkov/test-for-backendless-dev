goog.provide( 'test.idk.views.Table' );

goog.require( 'test.idk.templates.table' );
goog.require( 'zz.views.FEBase' );
goog.require( 'zz.environment.services.MVCRegistry' );

/**
 * Table view.
 * @extends {zz.views.FEBase}
 */
test.idk.views.Table = class extends zz.views.FEBase{

    constructor( opt_model ){

        super( opt_model || test.idk.templates.table.model )
    }
};

goog.addSingletonGetter(
    test.idk.views.Table );

zz.environment.services.MVCRegistry
    .setView(
        'table' ,
        test.idk.views.Table );