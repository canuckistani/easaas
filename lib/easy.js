var F = require('util').format;
var inflect = require('i')();

function capitalize(s) { 
  return s.charAt(0).toUpperCase() + s.slice(1); 
}

function get_ext(s) {
  var a = s.split('.');
  if (a.length > 1) {
    return a.pop().toLowerCase();
  }
  return false;
}

function add_verb(what) {
  what = what.toLowerCase();
  var _what;

  if (what === 'it') {
    _what = "It's";
  }
  else if (what == 'you' || what === 'are') {
    _what = 'You are';
  }
  else if (what === 'i') {
    _what = 'I am';
  }
  else { // is the last word in _what a plural?
    var _last = what.split(' ').pop();

    if (inflect.pluralize(_last) === _last) {
      _what = F('%s are', capitalize(what));
    } else {
      _what = F('%s is', capitalize(what));  
    }
  }
  return F('%s easy as shit.', _what);
}

function get_content_type(what) {
  // what content-type?
  var _ext = get_ext(what);

  if (_ext) { // 
    what = what.split('.').shift();
  }
  var content_type = 'text/html';
  if (_ext === 'json') {
    content_type = 'application/json';
  }
  else if(_ext === 'txt') {
    content_type = 'text/plain';
  }
  return content_type;
}

function get_content(what) {
  var a = what.split('.');
  if (a.length > 1) {
    return a.shift();
  }
  return what;
}


exports.capitalize = capitalize;
exports.get_ext = get_ext;
exports.get_content_type = get_content_type;
exports.get_content = get_content;
exports.add_verb = add_verb;

