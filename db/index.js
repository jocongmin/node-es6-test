var mysql = require('mysql');
var db=mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'123456',
	database:'mytest',
	port:3306
});
db.connect((err)=>{
	if(err){
		console.log('connect fail')
	}else{
		console.log('connect suc')
	}
});
export default db;