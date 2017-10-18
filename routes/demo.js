'use strict';

import express from 'express'
import TestCls from "../controller/test/index.js"

const router = express.Router();

router.get('/', TestCls.sendTemp);
router.get('/two', TestCls.sendTemp);
router.get('/3', TestCls.saveData);
router.get('/4', TestCls.findData);

export default router