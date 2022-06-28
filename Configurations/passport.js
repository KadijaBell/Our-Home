const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const Task = require('../Models/Task');

//Swap task for user
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  function(accessToken, refreshToken, profile, cb) {
    Task.findOne({ 'googleId': profile.id }, function(err, task) {
      if (err) return cb(err);
      if () {
          if(!student.avatar){
        task.avatar = profile.photo[0].value;
        task.save(function(err){
            return cb(null, task);
        });
        
      } else {
       return cb(nukk, task);
      }
    }else{
        const newTask = new Task({
          name: profile.displayName,
          email: profile.emails[0].value,
          googleId: profile.id
        });
        newTask.save(function(err) {
          if (err) return cb(err);
          return cb(null, newTask);
        });
      }
    });
  }
));

passport.serializeUser(function(task, done) {
    done(null, task.id);
});

passport.deserializeUser(function(id, done) {
    Task.findById(id, function(err, task) {
      done(err, task);
    });
  });
  