var plugin = typeof window === 'undefined'
  ? require('../')
  : require('hydro-focus');

test('with focus tag', function(done) {
  var hydro = Hydro();

  hydro.push('plugins', plugin);

  hydro.addSuite('with focus test', function() {
    hydro.addTest('has focus', 'focus', function(){});
    hydro.addTest('no focus', function(){});
    hydro.addTest('no focus too', function(){});
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

test('no focus', function(done) {
  var hydro = Hydro();

  hydro.push('plugins', plugin);

  hydro.addSuite('with focus test', function() {
    hydro.addTest('has no focus', function(){});
    hydro.addTest('no focus', function(){});
    hydro.addTest('no focus too', function(){});
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
