/**
 * Register a new record.
 *
 * @module register
 */
;(function () {
  'use strict'

  /* Imports */
  var typeCheck = require('type-check').typeCheck
  const Configstore = require('configstore');
  const pkg = require('./package.json');
   
  // Init a Configstore instance with an unique ID e.g. 
  // package name and optionally some default values 
  const conf = new Configstore(pkg.name, {foo: 'bar'});
   
  conf.set('awesome', true);
   
  console.log(conf.get('awesome'));
  //=> true 
   
  console.log(conf.get('foo'));
  //=> bar 
   
  conf.set('bar.baz', true);
   
  console.log(conf.get('bar'));
  //=> { baz: true } 
   
  console.log(conf.all);
  //=> { foo: 'bar', awesome: true, bar: { baz: true } } 
   
  conf.del('awesome');
   
  console.log(conf.get('awesome'));
  //=> undefined 

  /* Exports */
  module.exports = main

  /**
   *
   * @function main
   * @alias register
   *
   * @param {Object} options all function parameters
   * @param {String} options.name the desired name for this record
   * @param {Function} callback handle results
   */
  function main (summands) {
    var database = new Configstore()
  }
  /**
   *
   * @function nameDatabase
   *
   * @param {Object} options all function parameters
   * @param {String} options.name the desired name for this record
   * @param {Function} callback handle results
   */
  function nameDatabase (options) {
    var timestamp = Number(new Date())

    
  }
})()
