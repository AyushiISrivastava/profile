var mongoose = require('mongoose');

console.log("userProfile");

const Schema = mongoose.Schema();
const userProfileSchema = mongoose.Schema({
	username: {
		type : String,
		required: true
	},
	phoneNo: {
		type : String,
		required: true
	},
	email: {
		type : String,
		required: true
	},
	jobTitle: {
		type : String,
		required: true
	},
	resumeUploaded: Buffer,
	createdDt: {
		type : Date,
		default : Date.now
	}
});


module.exports= userProfileSchema