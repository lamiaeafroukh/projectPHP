function openNav0() {
    document.getElementById("food").style.width = "45%";
    document.getElementById("books").style.width="0%";
    document.getElementById("Vetement").style.width="0%";
    document.getElementById("electro").style.width="0%";
    document.getElementById("home").style.width="0%";
  }
  function closeNav0() {
    document.getElementById("food").style.width="0%";
  }
  function openNav1() {
    document.getElementById("Vetement").style.width = "45%";
    document.getElementById("food").style.width="0%";
    document.getElementById("books").style.width="0%";
    document.getElementById("electro").style.width="0%";
    document.getElementById("home").style.width="0%";
  }
  function closeNav1() {
    document.getElementById("Vetement").style.width="0%";
    
  }
  function openNav2() {
    document.getElementById("books").style.width = "45%";
    document.getElementById("food").style.width="0%";
    document.getElementById("Vetement").style.width="0%";
    document.getElementById("electro").style.width="0%";
    document.getElementById("home").style.width="0%";
  }
  function closeNav2() {
    document.getElementById("books").style.width="0%";
  }
  function openNav3() {
    document.getElementById("electro").style.width = "45%";
    document.getElementById("food").style.width="0%";
    document.getElementById("Vetement").style.width="0%";
    document.getElementById("home").style.width="0%";
    document.getElementById("books").style.width="0%";
  }
  function closeNav3() {
    document.getElementById("electro").style.width="0%";
  }
  function openNav4() {
    document.getElementById("home").style.width = "60%";
    document.getElementById("food").style.width="0%";
    document.getElementById("Vetement").style.width="0%";
    document.getElementById("books").style.width="0%";
    document.getElementById("electro").style.width="0%";
  }
  function closeNav4() {
    document.getElementById("home").style.width="0%";
  }
// partie de menu 
  function openmenu(){
    document.getElementById("menu").style.width="15%";
  } function closemenu(){
    document.getElementById("menu").style.width="7%";
  }
// java de partie de login 
function connexion(){
  document.getElementById("login").style.display="block";

}
function closelogin(){
  document.getElementById("login").style.display="none";
}
function opensign(){
  document.getElementById("login").style.display="none";
  document.getElementById("signup").style.display="block";
}
function openlogin(){
  document.getElementById("login").style.display="block";
  document.getElementById("signup").style.display="none";

}
function closesign(){
  document.getElementById("signup").style.display="none";
}
//fonction de la page de detail produits
function closedetail(){
  document.getElementById("pop").style.display="none";
}
function displaydetail(){
  document.getElementById("pop").style.display="block";
}

//search function
const input=document.querySelector('input');
const prods=document.querySelectorAll('.infoprod');
input.addEventListener('input',(e)=>{
  let content=e.target.value;
  prods.forEach((prod)=>{
if(prod.textContent.indexOf(content)>=0){
  prod.style.display="";
}else{
  prod.style.display="none";

}
  })
})
