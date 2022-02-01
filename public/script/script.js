function setColors(){
  var colors = [];
  var dark = "false";
  colors.push(document.getElementById('color0').innerHTML);
  colors.push(document.getElementById('color1').innerHTML);
  colors.push(document.getElementById('color2').innerHTML);
  dark = (document.getElementById('isDark').innerHTML);
  if(dark=="true"){
    document.body.style.color = "white";
  }
  document.getElementById("s0").style.backgroundColor = colors[0];
  document.getElementById("s1").style.backgroundColor = colors[1];
  document.getElementById("s2").style.backgroundColor = colors[2];
}

setColors();

function msg(){
  let name = document.getElementById('name');
  alert(`Tenha um ótimo dia, ${name.innerHTML} ;)\nCaso queira conferir o repositório oficial do Github: "https://github.com/iamthepoe/happy-birthday"`);
}

