use urls;

db.createCollection(
	"SHORTCUT",
	{
    validator: { $or:
      [
        { url:{$type:"string", $regex:'[a-z]+://*'} },
        { timestamp:{$type:"date"} }
      ]
    }
	}
);

db.SHORTCUT.createIndex(
  { "url":"text" },
  { unique:true }
);
