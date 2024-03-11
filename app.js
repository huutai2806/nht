const express = require('express');
	const app = express();

	//setting view engine to ejs
	app.set("View engine", "ejs");
	app.use(express.static("public"));

	app.get('/', (req, res)=>{
		res.send('xin chào đến Lab01');
	});

	app.listen(4000, ()=>{
		console.log("listening to port 4000");
	app.get('/dang-nhap',(req,res)=>{
		res.render("login");
	});
	});