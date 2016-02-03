/**
 * only ES5 is allowed in this file,
 * so we apply babel es6-es5 transformation
 */
require('babel-core/register');



/**
 * Load patterns to run here
 */
var abstractFactory = require('./abstract-factory');
//abstractFactory();

var adapterPattern = require('./adapter-pattern');
//adapterPattern();

var facade = require('./facade-pattern');
//facade();
