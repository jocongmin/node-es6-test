'use strict';
import testModle from "../../models/test.js"

class TestCls {
	constructor() {}
	async sendTemp(req, res, next) {
		var data = await testModle.qryMytable();
		res.render('test', {
			data: data,
		});
	}
}

export default new TestCls()