var Hydro = require('hydro');

test('focus on', function(done) {
  var hydro = Hydro();
  var plugin = require('../');

  hydro.set({
    attach: global,
    plugins: [plugin],
    focus: true,
    proxies: {
      'describe': 'addSuite',
      'it': 'addTest',
    },
    tests: [__dirname + '/fixtures/1.js']
  });

  hydro.on('post:all', function() {
    var tests = hydro.tests();
    assert(tests[0].status === 'passed');
    assert(tests[1].status === 'skipped');
    assert(tests[2].status === 'skipped');
    done();
  });

  hydro.run();
});

test('focus off', function(done) {
  var hydro = Hydro();
  var plugin = require('../');

  hydro.set({
    attach: global,
    plugins: [plugin],
    proxies: {
      'describe': 'addSuite',
      'it': 'addTest',
    },
    tests: [__dirname + '/fixtures/2.js']
  });

  hydro.on('post:all', function() {
    var tests = hydro.tests();
    assert(tests[0].status === 'passed');
    assert(tests[1].status === 'passed');
    assert(tests[2].status === 'passed');
    done();
  });

  hydro.run();
});
