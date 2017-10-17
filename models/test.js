import db from "../db/index.js"
class testModle {
	constructor() {

	}
	qryMytable() {
		return new Promise((resolve => {
			db.query('select * from mytable', function(err, result) {
				if (err) {
					console.log('not get article')
					return;
				}
				resolve(result)
			})
		}))
	}
}
export default new testModle;