const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false})); 
app.use(bodyParser.json()); 

app.get("/happybirthday/:name?", (req,res)=>{


	//picking collors
	var pallete = ["p1","p2","p3","p4","p5"];
	var colors = [];
	var isDark = false;

	chosenpalette = pallete[Math.floor(Math.random() * pallete.length)];

	if(chosenpalette=="p1"){
		colors = ["#CD113B", "#FF7600", "#FFA900"];
	}else if (chosenpalette=="p2"){
		colors = ["#04293A", "#064663", "#ECB365"];
		isDark = true;
	}else if (chosenpalette=="p3"){
		colors = ["#2C394B", "#334756", "#FF4C29"];
		isDark = true;
	}else if (chosenpalette=="p4"){
		colors = ["#D1E8E4", "#C37B89", "#BCCC9A"];
	}else{
		colors = ["#064635", "#519259", "#F0BB62"];
		isDark = true;
	}

	//picking messages
	var messages = [
		"Tenha um feliz aniversário cheio\nde sorrisos e gargalhadas, repleto\nde paz, amor e muita alegria.\nParabéns por mais um ano de vida!",
		"Parabéns e muitas felicidades!\nEste é seu dia especial\nE por isso deve festejar com alegria.\nEspero que receba muito carinho\nHomenagens e surpresas boas.\nQue hoje e sempre não falte a\nSaúde, a paz e o amor.\nFeliz aniversário!",
		"Desejo que este dia seja muito feliz, repleto de surpresas encantadoras e passado ao lado de quem você mais ama. Tenha um aniversário muito especial; rodeie-se de sensações positivas. E divirta-se! O mais importante é viver esta data com intensidade. Você é uma pessoa muito especial e merece tudo que existe de bom na vida. Parabéns por mais um ano de existência neste mundo tão deslumbrante. Feliz Aniversário!",
		"Feliz aniversário! Hoje você completa mais um ano de vida e é hora de comemorar com muita alegria. Que seu dia seja repleto de luz e paz. Que as pessoas queridas estejam com você e que o amor invada seu coração! Desejo que seu aniversário lhe traga uma felicidade imensa e que você possa realizar todos seus desejos nessa nova etapa de vida. Parabéns!",
		"Parabéns! Hoje é um dia muito especial, pois você completa mais um ano de vida. Curta muito o seu aniversário ao lado das pessoas que mais ama. Que o próximo ano seja o melhor que já viveu. Que todos os seus sonhos se realizem e a felicidade nunca abandone o seu caminho. Aproveite sempre a vida ao máximo e lute por tudo que deseja alcançar. Seja feliz com as conquistas e aprenda com os fracassos. Feliz Aniversário!",
		"Hoje é o seu dia especial!Desejo a você um dia de muita paz, saúde, sorrisos e muito mais! Aniversário é o início de uma nova jornada e espero que seja leve a sua caminhada. Desejo a você muita paz e prosperidade! Há sempre motivo para comemorar, não importa a idade! Feliz aniversário!",
		"Feliz aniversário! Que tudo de bom lhe aconteça neste dia tão marcante e especial na sua vida. Aproveite com um grande sorriso no rosto, e divirta-se muito! Mas acima de tudo rodeie-se dos melhores amigos e dos familiares que sempre estiveram ao seu lado. Orgulhe-se de tudo aquilo que conquistou neste ano que termina hoje, e prepare-se para o novo que começa agora mesmo. Parabéns!",
		"Feliz aniversário! Hoje é o seu dia especial, pois completa mais um ano de vida e isso é motivo para se alegrar e festejar muito. Eu desejo que você celebre essa data por muitos anos, e que nunca lhe falte paz no coração, amor na vida, sorrisos no rosto e companhias maravilhosas. E que cada novo dia seja o renovar de uma esperança e um entusiasmo infinitos. Parabéns e muitas felicidades!",
		"Hoje o dia nasceu radiante de alegria e luz, pois hoje é o seu dia especial. Feliz aniversário! Gostaria mesmo muito de estar com você, de lhe dar meus votos pessoalmente e apertar você nos meus braços. Infelizmente a vida nem sempre nos permite realizar os desejos, mas espero que pelo menos cumpra os seus hoje e sempre, e os meus desejos para você de muita alegria, saúde, amor, amizade e sucesso. Tenha um dia lindo e uma vida esplêndida! Seja muito feliz, hoje e sempre!",
		"Feliz aniversário! Hoje é o seu dia e por todo lado sente-se uma energia diferente, pois o mundo celebra mais um ano de vida de alguém muito especial: você! Desejo que as homenagens e as palavras de carinho sejam muitas e sinceras, e que você viva cada instante de hoje com muita alegria no coração. Seja feliz com o que tem e com o que ainda quer ter, pois enquanto houver vida haverá esperança e forma de lutar pelos sonhos. Então sonhe muito e lute ainda mais! Parabéns e felicidades!"
	];

	//picking name
	var name = req.params.name;
	if(!name){
		name = "Você"
	}

	res.render("index.ejs", {
		name: name,
		message: messages[Math.floor(Math.random() * messages.length)],
		colors: colors,
		isDark: isDark,
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