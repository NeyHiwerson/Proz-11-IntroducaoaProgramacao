
const input_email = document.getElementById('input_email');
const btn_cadastrar = document.getElementById('btn_cadastar');

console.log(input_email, btn_cadastrar);

/* função para verificar input e habilitar e desabilitar o botao cadastrar */
input_email.addEventListener('keyup',(e) => {
    if(e.target.value == ""){
      btn_cadastrar.setAttribute('disabled','true');
    }else{
      btn_cadastrar.removeAttribute('disabled');
    }

});
