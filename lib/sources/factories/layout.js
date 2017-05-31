goog.provide( 'test.idk.factories.Layout' );
goog.require( 'zz.factories.BaseFactory' );

/**
 * Layout data factory.
 * @extends {zz.factories.BaseFactory}
 */
test.idk.factories.Layout = class extends zz.factories.BaseFactory{

	constructor( ){
		super( 'test.idk.factories.Layout' );
	}

    /**
     * @return {Array}
     */
    getLayoutDataset( ){
        
        return [ [
            'Test based on IDK'
        ] ];
    }
};
goog.addSingletonGetter( test.idk.factories.Layout );