var fs = require('fs');

var _hubConfiguration = null;

exports.getHubConfiguration = function() {
	if (_hubConfiguration !== null) {
		return _hubConfiguration;
	}

	fs.readFile('config.json', function(err, data) {
		if (err) {
			log.warn("Unable to read config.json");
			throw err;
		}
		_hubConfiguration = data.toString();
		data.success = true;
		return _hubConfiguration;
	});
};