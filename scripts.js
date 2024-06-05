document.addEventListener('DOMContentLoaded', function(){

    const baseImagens = {
        todas: ['cidade.jpg','animal.jpg','natureza.jpg'],
        natureza: ['natureza.jpg'],
        cidade: ['cidade.jpg'],
        animal: ['animal.jpg'],
    }

    function carregaImagens(categoria){
    //Selecionar elementos HTML com base em um seletor
    const galeria = document.querySelector("#galeria-imagens");
    galeria.innerHTML=''; //limpar bloco, apaga tudo dentro dele
    
        const imagens = baseImagens[categoria]
        
        imagens.forEach(img => { 
            console.log(img);
            galeria.innerHTML += '<div class="imagem-item"> <img src="imagens/' + img + '" alt="' + img + '"/> </div>';
        })
    }
    function ordenaImagens(ordem){
    const imagens = Array.from(document.querySelectorAll("#galeria-imagens .imagem-item"));
    imagens.sort((a, b) => {
        const nameA = a.querySelector('img').getAttribute('alt');
        const nameB = b.querySelector('img').getAttribute('alt');
        //  operador ternário - se for true ? se não: 
        return ordem == 'asc' ? nameA.localeCompare(nameB):nameB.localeCompare(nameA);
    })

    const galeria = document.getElementById('galeria-imagens');

    galeria.innerHTML = '';
    imagens.forEach(imagem => {
        galeria.appendChild(imagem);//adiciona as imagens novamente, agora ordenada
    })



    }
    carregaImagens('todas');
    document.body.addEventListener('click', function(event){ //evento clique    '
        if(event.target.classList.contains('botao-categoria')) {//acessa a lista de classe de onde clicou e //procura pela classe botao-categoria
            
            const categoria = event.target.dataset.categoria;
            
            //alert(categoria);
            carregaImagens(categoria);
        }; 
        if(event.target.classList.contains('botao-ordenar')) {
            const ordem = event.target.dataset.ordem;
            ordenaImagens(ordem);
            
        }

    });
});