function stuff(req, res, next) {
  res.render('index', { title: 'Stuff' });
}

module.exports.stuff = stuff;