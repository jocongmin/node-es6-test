'use strict';

import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const myCollectionSchema = new Schema({
	name: String,
	home: String,
	like: String,
})

myCollectionSchema.methods = {
	saveData: function(data) {//一般操作行为需要放在methods里面
		this.name = data.name
		this.home = data.home
		this.like = data.like
		return this.save() //save方法只在methods里面有效
	},
};

myCollectionSchema.statics = { //单纯的查询行为需要放在statics里面
	findData: function() {
		return this.find() //find方法只在statics里面有效
	}
};
const MyCollection = mongoose.model('MyCollection', myCollectionSchema);


export default MyCollection