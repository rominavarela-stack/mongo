use urls;

f = function GET_SHORTCUT_BY_ID (id) {
  return db.SHORTCUT
    .findOne({ _id: new ObjectId(id) })
    .url;
}

db.proc.insert({
	_id: f.name,
	f: f
});
