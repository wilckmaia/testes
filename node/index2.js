const n = require("fs").promises;

async function manipularArquivo() {
  try {
    await n.writeFile("meuarquivo2.txt", "Olá, Node.js!");
    console.log("Arquivo criado com sucesso!");

    const data = await n.readFile("meuarquivo2.txt", "utf-8");
    console.log("Conteúdo do arquivo:", data);
  } catch (err) {
    console.error("Erro:", err);
  }
}

manipularArquivo();
