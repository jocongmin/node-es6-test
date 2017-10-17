'use strict';

import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const adminSchema = new Schema({
	user_name: String,
})

adminSchema.methods = {

	/**
	 * Save article and upload image
	 *
	 * @param {Object} images
	 * @api private
	 */

	insertit: function(name) {
		this.user_name="jotwo"
		return this.save();
	},

};

adminSchema.statics = {
	findit: function(name) {
		return this.find()
	},
};
const Admin = mongoose.model('Admin', adminSchema);


export default Admin