const fs = require("fs").promises;

async function manipularArquivo() {
  try {
    await fs.writeFile("meuArquivo.txt", "Ola Node.js");

    const data = await fs.readFile("meuArquivo.txt", "UTF-8");
    console.log("Conteudo do arquivo:", data);
  } catch (err) {
    console.error("Erro", err);
  }
}

manipularArquivo();
