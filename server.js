var path = require('path');
var express = require('express');

var app = express();

app.use(express.static(path.join(__dirname, 'dist')));

// route all urls to vue js router
app.get('*', function (req, res) {
  res.sendFile(__dirname + '/dist/index.html')
})

app.set('port', process.env.PORT || 8080);
app.set('NODE_ENV', 'production');

var server = app.listen(app.get('port'), function() {
  console.log('listening on port ', server.address().port);
});
