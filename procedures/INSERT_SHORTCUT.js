use urls;

f = function INSERT_SHORTCUT (url) {
  return db.SHORTCUT.insert({
    url: url,
    timestamp: new Date()
  });
}

db.proc.insert({
	_id: f.name,
	f: f
});

//db.proc.findOne({_id:"INSERT_SHORTCUT"})
