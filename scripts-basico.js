document.addEventListener('DOMContentLoaded',function() {

    //alert(123);
    
    //tipos de dados */
    //String: Sequencia de caracter */
    //Number: nú,meros inteiros ou pontos flutuantes (10.4) */
    //Boolean:Retorna dois valores, true ou false */
    //object:estrutura de dados que pode armazenar multiplos valores
    //NULL:quando está vazio;
    //array:objeto especial ordenado 
    //function: blopco de código reutilizável;
      
     const teste = 50; //const é usado para declarar uma variável cujo o valor é permanente 
    
     //let é usado para declarar  variáveis que os valores podem ser retribuidos//
    
     let C = 0 
    
     console. log(C)
    
     const notaMedia = 3;
    
     if(notaMedia >= 6){
      //alert("Aluno passou");
     }
     else if (notaMedia >= 4 && notaMedia < 6) {
      //alert("aluno quase passou")
     }
     else {
      //alert("aluno reprovou")
     }
    });
        //------Operadores------//
        // = sinal de atribuição, recebe
        // == sinal de comparação
        // === verifica se os dois são iguai e têm o mesmo tipo de dados
        // != se é diferente
        // !== se é estritamente diferente 
        // > maior
        // < menor   
    
        const num = 6;
        if(num == 6){
          //alert("é igual");
        }
    else {
      //alert("não é igual");
    }
    const professor = "João"
    if (professor == "Lucas") {
      console.log('Sim é Lucas')
      }else {
    console.log('Não é Lucas')
      }
      function primeirafuncao(){
        return parametro + ',' + segundoparametro
      }

      const parametro = "ESSA É UMA FUNCAO COM PARAMETRO"
      const segundoparametro= "agora com dois parametros"
      console.log(primeirafuncao(parametro, segundoparametro));
       
      //-----------------------------------------------//

    //arrays em javascript  sao estruturas de dados que permitem armazenar uma colecao ordenada de elementos 

    let primeiraArray = ['joao', 'paulo', 'marcos', 'ryan']
     console.log(primeiraArray[3]); //numero 2 para percorrer o array

     //--------------------------//------------------//

     //os objetos sao coleçoes NAO ORDENADAS de pares chave-valor, onde cada valor é associado a uma chave unica

     let pessoa = {
        nome: 'maria',
        idade: '22',
        profissao: 'progamador'
        
}
   console.log (pessoa['idade'])