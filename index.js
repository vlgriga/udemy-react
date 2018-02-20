const express = require('express');
const mongoose = require('mongoose'); 
const authRoutes = require('./routes/authRoutes.js');
const billingRoutes = require('./routes/billingRoutes.js');
const cookieSession = require('cookie-session');
const passport = require('passport'); 
const keys = require('./config/keys.js');

// Mongo connect
require('./models/user.js');
require('./services/passport');
mongoose.connect(keys.mongoURI);


// Install App and Routes
const app = express();

app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey]
	})
);

app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);
billingRoutes(app);


app.set('PORT', process.env.PORT || 3000);
app.listen(app.get('PORT') , ()=> {
	console.log("Server is running on port 3000");
});