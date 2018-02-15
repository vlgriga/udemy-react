const express = require('express');

const mongoose = require('mongoose'); 
const authRoutes = require('./routes/authRoutes.js');
const keys = require('./config/keys.js');



require('./services/passport');
require('./models/user.js');
// Mongo connect
mongoose.connect(keys.mongoURI);

const app = express();
authRoutes(app); 

app.set('PORT', process.env.PORT || 3000);
app.listen(app.get('PORT') , ()=> {
	console.log("Server is running on port 3000");
});