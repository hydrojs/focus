/**
 * Run the first test with "focus" tag.
 *
 * @param {Object} hydro
 * @api public
 */

module.exports = function(hydro, _) {
  var focus = false;
  var enabled = false;
  var RootTest = null;

  if (typeof Hydro === 'undefined') {
    Root = require('hydro').Test;
  } else {
    RootTest = Hydro.Test;
  }

  RootTest.SyncTest.prototype.focus =
  RootTest.AsyncTest.prototype.focus = function() {
    this.meta.push('focus');
  };

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
