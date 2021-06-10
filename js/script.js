const nome = document.querySelector("#nome");
const sobrenome = document.querySelector("#sobrenome");
const email = document.querySelector("#email");
const botao = document.querySelector("#botao");

function validate(){
  if (nome.value != "" && sobrenome.value != "" && email.value != ""){
    alert("Prontinho");
  }
  else{
    alert("Preencher campos");
  }
}

botao.addEventListener("click", validate);