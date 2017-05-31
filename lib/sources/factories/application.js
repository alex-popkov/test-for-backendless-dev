goog.provide( 'test.idk.factories.Application' );
goog.require( 'zz.factories.BaseFactory' );

/**
 * Application data factory.
 * @extends {zz.factories.BaseFactory}
 */
test.idk.factories.Application = class extends zz.factories.BaseFactory{

	constructor( ){

		super( 'test.idk.factories.Application' );
	}

    /**
     * @return {Array}
     */
    getApplicationDataset( ){
        
        return [ [
            'test.idk',
            '0.0.1'
        ] ];
    }
};
goog.addSingletonGetter( test.idk.factories.Application );