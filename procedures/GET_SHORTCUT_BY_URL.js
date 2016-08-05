use urls;

f = function GET_SHORTCUT_BY_URL (url) {
  return db.SHORTCUT
    .findOne({ url: url })
    ._id
    .valueOf();
}

db.proc.insert({
	_id: f.name,
	f: f
});
