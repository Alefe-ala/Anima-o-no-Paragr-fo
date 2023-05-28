var verMais = document.querySelector('button');

verMais.addEventListener('click',function(){
    var conteudo = document.querySelector('.content');

    if(conteudo.classList.contains('mostrar')){
        verMais.innerHTML = 'Ver Mais!';
        conteudo.classList.remove('mostrar');
        
      
    }
    else{
        verMais.innerHTML = 'Ocultar';
        conteudo.classList.add('mostrar');
    }
});