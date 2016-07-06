/**
 * Store and manage data effectively and efficiently.
 *
 * @module data-manager
 */
;(function () {
  'use strict'

  /* Imports */
  var typeCheck = require('type-check').typeCheck
  var helper = require('./lib/helper')

  var ACTIONS = {
    REGISTER: 'register',
    WRITE: 'write',
    READ: 'read',
    SEARCH: 'search'
  }
  /* Exports */
  module.exports = main

  /**
   *
   * @function main
   * @alias data-manager
   *
   * @param {options} options contains all function parameters
   * @param {callback} callback handles results
   */
  function main (options, callback) {
    var error = invalidOptions(options)

    var result = helper([options.x, options.y, options.z])

    callback(error, result)
  }

  /**
   * Define the options object.
   *
   * @typedef {Object} options all function parameters
   *
   * @property {String|Number} x anything that can be added
   * @property {String|Number} y anything that can be added
   * @property {String|Number} z anything that can be added
   */

  /**
   * This comment describes the callback function accepted by
   * main.
   *
   * @callback callback
   *
   * @param {Error} error describes any errors that may have occurred
   * @param {String|Number} result of this function call
   */

  /**
   * Validate inputs.
   *
   * @param {options} options contains all function parameters
   *
   * @return {Error} any errors due to invalid inputs.
   */
  function invalidOptions (options) {
    var stringOrNumber = 'String|Number'

    var xyz = ['x', 'y', 'z']

    var xyzError = xyz.reduce(function (error, param) {
      if (error) return error

      if (!typeCheck(stringOrNumber, options[param])) {
        error = new Error('invalid ' + param + ': ' + options[param])
      }

      return error
    }, null)

    return xyzError
  }
})()
