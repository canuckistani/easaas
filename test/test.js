var assert = require('assert');

var easy = require('../lib/easy');

var util = require('util');

describe('adding verbs contextually should mostly work.', function() {
  it('should return the phrase formatted correctly based on some heuristics', function() {
    assert.equal(easy.add_verb('it'), 'It\'s easy as shit.');
    assert.equal(easy.add_verb('foo'), 'Foo is easy as shit.');
    assert.equal(easy.add_verb('QUANTUMN MECHANICS'), 'Quantumn mechanics are easy as shit.');
    assert.equal(easy.add_verb('I'), 'I am easy as shit.');
  });
});

describe('get the extension if there is one', function() {
  it('should return the right extension for the url', function() {
    assert.equal(easy.get_ext('foo.json'), 'json');
    assert.equal(easy.get_ext('foo.txt'), 'txt');
    assert.equal(easy.get_ext('foo.html'), 'html');
    assert.equal(easy.get_ext('foo'), false);
    assert.equal(easy.get_ext('foo.foo'), 'foo');
  })
});

describe('get content type', function() {
  it('should return the right content type for the url extension', function() {
    assert.equal(easy.get_content_type('foo'), 'text/html');
    assert.equal(easy.get_content_type('foo.json'), 'application/json');
    assert.equal(easy.get_content_type('foo.html'), 'text/html');
    assert.equal(easy.get_content_type('foo bar baz.txt'), 'text/plain');
    assert.equal(easy.get_content_type('FOO.JSON'), 'application/json');
  });
});

describe('get content', function() {
  it('should return the content from the url', function() {
    assert.equal(easy.get_content('foo'), 'foo');
    assert.equal(easy.get_content('FOO.JSON'), 'FOO');
    assert.equal(easy.get_content('Foo bar baz.txt'), 'Foo bar baz');
  });
});
