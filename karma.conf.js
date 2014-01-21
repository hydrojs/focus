module.exports = function(config) {
  var browsers = process.env.TRAVIS
    ? [ 'PhantomJS' ]
    : [ 'PhantomJS', 'Chrome', 'Firefox', 'Safari' ];

  config.set({
    frameworks: [ 'hydro' ],
    singleRun: true,
    browsers: browsers,
    hydro: {
      before: [
        'build/build.js'
      ]
    },
    client: {
      hydro: {
        setup: true,
        suite: 'hydro-focus',
        plugins: [
          'hydro-require'
        ],
        require: {
          assert: 'simple-assert',
          Hydro: 'hydro'
        },
        proxies: {
          test: 'addTest',
        },
      }
    },
    files: [
      'test/*.js'
    ]
  });
};
