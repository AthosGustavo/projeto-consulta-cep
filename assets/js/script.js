const form = document.querySelector('.box');
const entrada = document.querySelector('[data-entrada]');
const botao = document.querySelector('.botao');
const dados = document.querySelectorAll('[data-dado]');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    let cep = entrada.value;

    try {
        let response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        let dadosCep = await response.json();   

        if(dadosCep.erro == true) {
            dados[4].innerHTML = 'CEP não encontrado.';
            dados[0].value = "";
            dados[1].value = "";   
            dados[2].value = "";    
            dados[3].value = "";
        }else{
            dados[0].value = dadosCep.logradouro;
            dados[1].value = dadosCep.bairro;   
            dados[2].value = dadosCep.localidade;    
            dados[3].value = dadosCep.uf;
            
        }
    
    }catch (error) {
        console.error('Erro inexperado: ', error);
        dados[4].innerHTML = 'Erro na busca do CEP.';
    }
        
   
})
