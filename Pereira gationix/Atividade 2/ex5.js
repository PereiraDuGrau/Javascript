function contarCaracteres(str) {
    const contagem = {};
    for (let char of str) {
      contagem[char] = (contagem[char] || 0) + 1;
    }
    return contagem;
  }
  
  console.log(contarCaracteres("banana")); // Saída: { b: 1, a: 3, n: 2 }
  