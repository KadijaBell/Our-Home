
const passport = require('passport');
const express= require('express');
const router = express.Router();



router.get('/login', function(req, res) {
    res.render('login');
  });




 // Google OAuth login route 
  router.get('/auth/google', passport.authenticate(
    'google',
    { scope: ['profile', 'email'] }
  ));
  
  
// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
    'google',
    //{

    //     successRedirect : '',
    //     failureRedirect : ''

    // }
    ));
    
  
  router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });
  
  function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

module.exports = router;