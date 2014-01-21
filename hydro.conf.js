/**
 * Test config.
 *
 * @param {Object} hydro
 * @api public
 */

module.exports = function(hydro) {
  hydro.set({
    suite: 'hydro-focus',
    formatter: 'hydro-simple',
    plugins: [
      'hydro-require',
    ],
    proxies: {
      test: 'addTest'
    },
    require: {
      assert: 'simple-assert',
      Hydro: 'hydro'
    },
    tests: [
      'test/*.js'
    ]
  });
};
