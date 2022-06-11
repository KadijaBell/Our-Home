const express = require('express')
const router = express.Router()
const taskCtrl = require('../Controllers/taskCtrl.js')


router.get('/', taskCtrl.index)
router.get('/:id', taskCtrl.show)
// router.post('/', taskCtrl.create)
// //router.get('/new', taskCtrl.new)
// router.put('/:id', taskCtrl.update)
// router.delete('/:id', taskCtrl.destroy)
//router.get('/:id/task', taskCtrl.edit)









module.exports = router