module.exports = (app) => {

	// Get Sign-Up page
	app.get('/sign-up', (req, res) => {
		res.send('hello world')
	});
}
