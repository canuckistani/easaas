
var F = require('util').format,
  inflect = require('i')();

/*
 * GET home page.
 */

function ez_baby(what) {

  var C = function(s) { 
    return s.charAt(0).toUpperCase() + s.slice(1); 
  }

  var _what;
  if (what === 'it') {
    _what = "It's";
  }
  else if (what == 'you' || what === 'are') {
    _what = 'You are';
  }
  else if (what === 'I') {
    _what = 'I am';
  }
  else {
    _what = F('%s is', C(what));
  }

  return F('%s easy as shit.', _what);
}

exports.index = function(req, res){
  res.render('index', { what: ez_baby('it') });
};

exports.what = function(req, res) {
  res.render('index', { what: ez_baby(req.params.what) });
}