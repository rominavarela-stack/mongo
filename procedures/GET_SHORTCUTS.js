use urls;

f = function GET_SHORTCUTS () {
  return db.SHORTCUT
    .find()
    .map(function(data){
      return {
        id: data._id.valueOf(),
        url: data.url,
        timestamp: data.timestamp.toString()
      }
    });
}

db.proc.insert({
	_id: f.name,
	f: f
});
