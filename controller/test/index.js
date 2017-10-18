'use strict';
import Admin from "../../models/test.js"
import MyCollection from "../../models/projectTest.js"
const admin=new Admin
const myCollection=new MyCollection

class TestCls {
	constructor() {}
	async sendTemp(req, res, next) {
		var data=await Admin.findit('jocongmin')
		console.log(data)
	}
	async sendData(req,res,next){
		var data=await admin.insertit('jothree')
		console.log(data)
	}
	async saveData(req,res,next){
		var data=await myCollection.saveData({name:"skdfjksd",home:"fujian",like:"football"})
		console.log(data)
	}
	async findData(req,res,next){
		var data=await MyCollection.findData()
		console.log(data)
	}
}

export default new TestCls()