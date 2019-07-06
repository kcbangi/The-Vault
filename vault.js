'use strict';
module.exports = function() {

    const vault = {};

    const setValue = function(key, value) {
        vault[key] = value;
      };
    
    const getValue = function(key) {
        if (!key || !vault[key]) {
            return null;
        } else {
            return vault[key];
        }
    };

    return {
        getValue,
        setValue
    }

};