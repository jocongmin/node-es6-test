'use strict';
import Admin from "../../models/test.js"
const admin=new Admin

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
}

export default new TestCls()