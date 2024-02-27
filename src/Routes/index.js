import express from 'express'
import Controller from '../Controller/index.js'
const router = express.Router()
// text file api of asset folder with content
router.get('/',Controller.readWriteFile)

export default router;