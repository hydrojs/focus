/**
 * Run the first test with "focus" tag.
 *
 * @param {Object} hydro
 * @api public
 */

module.exports = function(hydro) {
  if (!hydro.get('focus')) return;
  var focus = false;
  hydro.on('pre:test', function(test) {
    if (focus) return test.skip();
    if (test.meta.indexOf('focus') != -1) focus = true;
  });
};

/**
 * CLI flags.
 */

module.exports.flags = {
  '--focus': 'run the first test with "focus" tag'
};
