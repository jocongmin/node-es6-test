'use strict';

import test from "./demo.js"

const routes =(app)=>{
	app.use('/test', test);
}

export default routes