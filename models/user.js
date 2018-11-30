
const mongoose = require("mongoose"),
	bcrypt = require("bcryptjs"),
	Schema = mongoose.Schema;

const UserSchema = new Schema({
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	}
});

UserSchema.pre("save", (next) => {
	// ENCRYPT PASSWORD
	var user = this;
	if (!user.isModified("password")) {
		return next();
	}
	bcrypt.genSalt(10, (err, salt) => {
		bcrypt.hash(user.password, salt, (err, hash) => {
			user.password = hash;
			next();
		});
	});
});

UserSchema.methods.comparePassword = (password, done) => {
	bcrypt.compare(password, this.password, (err, isMatch) => {
		done(err, isMatch);
	});
};

module.exports = mongoose.model("User", UserSchema);