const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false})); 
app.use(bodyParser.json()); 

app.get("/happybirthday/:name?", (req,res)=>{
	var name = req.params.name;
	if(!name){
		name = "Your Name"
	}
	res.render("index.ejs", {
		name: name,
	});
});

app.get("/hpname", (req,res)=>{
	res.render("hpname.ejs");
});

app.post("/post", (req,res)=>{
	var name = req.body.name;
	res.redirect(`/happybirthday/${name}`);
});

app.listen(8080,()=>{console.log("server started")});