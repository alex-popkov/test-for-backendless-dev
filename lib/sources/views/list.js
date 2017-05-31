goog.provide( 'test.idk.views.List' );

goog.require( 'test.idk.templates.list' );
goog.require( 'zz.views.FEBase' );
goog.require( 'zz.environment.services.MVCRegistry' );

/**
 * List view.
 * @extends {zz.views.FEBase}
 */
test.idk.views.List = class extends zz.views.FEBase{

    constructor( opt_model ){

        super( opt_model || test.idk.templates.list.model )
    }
};

goog.addSingletonGetter(
    test.idk.views.List );

zz.environment.services.MVCRegistry
    .setView(
        'list' ,
        test.idk.views.List );