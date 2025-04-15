function fibonacciAte(n) {
    const sequencia = [0, 1];
    while (true) {
      const proximo = sequencia[sequencia.length - 1] + sequencia[sequencia.length - 2];
      if (proximo > n) break;
      sequencia.push(proximo);
    }
    return sequencia;
  }
  
  console.log(fibonacciAte(10)); // Saída: [0, 1, 1, 2, 3, 5, 8]
  