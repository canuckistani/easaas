var easy = require('../lib/easy');

exports.index = function(req, res) {

  // do we have a param?
  var what = 'it', 
    content_type = 'test/html',
    content = easy.add_verb('it');

  if (req.params.what) {
    // console.log(req.params.what);
    what = easy.get_content(req.params.what);
    content_type = easy.get_content_type(req.params.what);
    content = easy.add_verb(what);
  }

  // console.log(what, content_type, content);
  res.set('Content-type', content_type);
  switch(content_type) {
    case 'application/json':
      res.json({payload: content});
      break;
    case 'text/plain':
      res.send(content);
      break;
    default:
      res.render('index', {what: content});
      break;
  }
};
