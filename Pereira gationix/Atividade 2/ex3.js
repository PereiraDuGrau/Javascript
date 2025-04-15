function ehPrimo(n) {
    if (n <= 1) return "Não é primo";
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return "Não é primo";
    }
    return "É primo";
  }
  
  console.log(ehPrimo(7)); // Saída: "É primo"
  