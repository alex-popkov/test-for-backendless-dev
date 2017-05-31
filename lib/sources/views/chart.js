goog.provide( 'test.idk.views.Chart' );

goog.require( 'test.idk.templates.chart' );
goog.require( 'zz.views.FEBase' );
goog.require( 'zz.environment.services.MVCRegistry' );

/**
 * Chart view.
 * @extends {zz.views.FEBase}
 */
test.idk.views.Chart = class extends zz.views.FEBase{

    constructor( opt_model ){

        super( opt_model || test.idk.templates.chart.model )
    }
};

goog.addSingletonGetter(
    test.idk.views.Chart );

zz.environment.services.MVCRegistry
    .setView(
        'chart' ,
        test.idk.views.Chart );