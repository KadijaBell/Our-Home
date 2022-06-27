const express = require('express')
const router = express.Router()
const taskCtrl = require('../Controllers/taskCtrl.js')
const passport = require('passport');


// router.get('/', taskCtrl.index)
// router.get('/:id', taskCtrl.show)
router.post('/', taskCtrl.create)
// router.get('/new', taskCtrl.new)
// router.post('/update/:id', taskCtrl.update )
// router.delete('/:id', taskCtrl.destroy)
// router.get('/edit/:id', taskCtrl.edit )

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
    'google',
    { scope: ['profile', 'email'] }
  ));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
    'google',
    {
      successRedirect : '/task',
      failureRedirect : '/task'
    }
  ));

// OAuth logout route
router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/task');
  });


 module.exports = router