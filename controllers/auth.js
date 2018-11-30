const User = require('../models/user');

module.exports = (app) => {
	// Get Sign-Up page
	app.get('/sign-up', (req, res) => {
		res.render('sign-up')
	});

	// Post Sign-Up form
	app.post('/sign-up', (req, res) => {
		// instantiate instance of user model
		const user = new User(req.body);
		// save instance of flare model to db
		console.log(req.body);
		flare.save((err, flare) => {
			// redirect to the index
			console.log(flare);
			console.log(err);
			return res.redirect('/flares');
		});
	})
}