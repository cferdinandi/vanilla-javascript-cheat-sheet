(function (root, factory) {
    if ( typeof define === 'function' && define.amd ) {
        define([], factory(root));
    } else if ( typeof exports === 'object' ) {
        module.exports = factory(root);
    } else {
        root.myPlugin = factory(root);
    }
})(typeof global !== 'undefined' ? global : this.window || this.global, function (root) {

    'use strict';

    //
    // Variables
    //

    var window = root; // Map window to root to avoid confusion
    var publicMethods = {}; // Placeholder for public methods


    //
    // Methods
    //

    /**
     * A private method
     * @private
     */
    var somePrivateMethod = function () {
        // Code goes here...
    };

    /**
     * A public method
     */
    publicMethods.doSomething = function () {
        somePrivateMethod();
        // Code goes here...
    };

    /**
     * Another public method
     */
    publicMethods.init = function ( options ) {

        // Listen for click events
        document.addEventListener( 'click', function (){
            // Do something...
        }, false );

        // Listen for window resize events
        window.addEventListener( 'resize',  function (){
            // Do something...
        }, false );

        // Code goes here...
        //
    };


    //
    // Public APIs
    //

    return publicMethods;

});