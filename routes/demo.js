'use strict';

import express from 'express'
import TestCls from "../controller/test/index.js"

const router = express.Router();

router.get('/', TestCls.sendTemp);

 
export default router