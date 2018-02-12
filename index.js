var express = require('express');
var app = express();

app.get('' , (req,res) => {
	res.send("Hello world");
});

app.set('PORT', process.env.PORT || 3000);

app.listen(app.get('PORT') , ()=> {
	console.log("Server is running on port 3000");
});