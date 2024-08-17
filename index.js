document.addEventListener('DOMContentLoaded', async function(){

   const response = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL');

   if(response.ok){

      let inputVlDolar = document.getElementById('vlDolar');

      inputVlDolar.value = 1;

      let json = await response.json();
      
      let cotacaoNoFormat =  json.USDBRL.bid;

      let formatador = new Intl.NumberFormat('pt-BR', {
         style: 'currency',
         currency: 'BRL'
     });
     
      let cotacaoFormatada = formatador.format(cotacaoNoFormat);
      
      document.getElementById('result').value = cotacaoFormatada;
      
      inputVlDolar.addEventListener('change', function(){

         cotacaoFormatada = formatador.format(cotacaoNoFormat * inputVlDolar.value );
         
         document.getElementById('result').value = cotacaoFormatada;
         
      });

      inputVlDolar.addEventListener('input', function(){

         cotacaoFormatada = formatador.format(cotacaoNoFormat * inputVlDolar.value );
         
         document.getElementById('result').value = cotacaoFormatada;
         
      });
      
   }


});

