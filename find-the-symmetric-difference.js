function sym() {
  const args = [];

  for (let i = 0; i < arguments.length; i++){
    args.push(arguments[i]);
  }


function symDiff(arrOne, arrTwo){
  const results = [];

  arrOne.forEach(function (item) {
    if (arrTwo.indexOf(item) < 0 && results.indexOf(item) < 0){
      results.push(item);
    }
  });

  arrTwo.forEach(function (item) {
    if (arrOne.indexOf(item) < 0 && results.indexOf(item) < 0){
      results.push(item);
    }
  });

  return results;
}

return args.reduce(symDiff);
}