const main = async () => {
  const maxConcurrency = 10;
  let count = 100;

  // Função auxiliar para simular uma tarefa assíncrona (ex: requisição web)
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const worker = async (k: number) => {
    while (count > 0) {
      // Capturamos o valor antes do delay para evitar que o print
      // mostre contagens negativas no final da execução
      const currentCount = count;
      count--;

      // Simula uma espera assíncrona (aleatória entre 0 e 10ms)
      await delay(Math.random() * 10);

      console.log(`Worker: ${k} | Count: ${currentCount}`);
    }
  };

  let calls = Array.from({ length: maxConcurrency }, (_, k) => worker(k));

  try {
    await Promise.all(calls);
    console.log("Fim! Count final:", count);
  } catch (error) {
    console.log(error);
  }
};

main();
