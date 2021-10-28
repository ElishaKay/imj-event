module.exports = function(app, connection) {

// Handle / root route.
app.get('/', function(req, res) {
	res.sendfile('./public/views/index.html');
});

app.get('/app', function(req, res) {
	res.sendfile('./public/views/app.html');
});

}