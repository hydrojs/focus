/**
 * Run the first test with "focus" tag.
 *
 * @param {Object} hydro
 * @api public
 */

module.exports = function(hydro, _) {
  var focus = false;
  var enabled = false;

  hydro.on('pre:all', function() {
    var tests = hydro.tests();
    _.forEach(hydro.tests(), function(test) {
      if (test.meta.indexOf('focus') !== -1) enabled = true;
    });
  });

  hydro.on('pre:test', function(test) {
    if (!enabled) return;
    if (focus || test.meta.indexOf('focus') == -1) return test.skip();
    focus = true;
  });
};
