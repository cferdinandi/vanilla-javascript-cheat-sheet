var myPlugin = (function () {

    'use strict';

    //
    // Variables
    //

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
    publicMethods.init = function () {
        // Code goes here...
    };


    //
    // Public APIs
    //

    return publicMethods;

})();