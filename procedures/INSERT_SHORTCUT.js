use urls;

f = function INSERT_SHORTCUT (url) {
  db.SHORTCUT.insert({
    url: url,
    timestamp: new Date()
  });

  return db.proc.findOne({_id:"GET_SHORTCUT_BY_URL"}).f(url);
}

db.proc.insert({
	_id: f.name,
	f: f
});
