function sym() {
  //cria uma lista vazia
  const args = [];
  //loop para percorrer todos os argumentos e empurrar para a lista vazia args
  for (let i = 0; i < arguments.length; i++){
    args.push(arguments[i]);
  }


function symDiff(arrOne, arrTwo){
  const results = [];
  //analisa o arrOne, ve se tem não tem no arrTwo e se não tem na lista da variavel results, se tiver, empurra para results
  arrOne.forEach(function (item) {
    if (arrTwo.indexOf(item) < 0 && results.indexOf(item) < 0){
      results.push(item);
    }
  });
  //realiza o mesmo processo que anterior, mas para o arrTwo, analisando para o arrOne e results, empurrando para results
  arrTwo.forEach(function (item) {
    if (arrOne.indexOf(item) < 0 && results.indexOf(item) < 0){
      results.push(item);
    }
  });

  return results;
}
  //concatena todos os valores com diferença assimetrica
return args.reduce(symDiff);
}
