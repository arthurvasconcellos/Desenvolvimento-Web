Para acessar o servidor Node.js configurado com Express, siga os passos abaixo:

1. Instale o Node.js a partir do site oficial: https://nodejs.org/
2. Clone o repositório (se aplicável) com git clone <URL_DO_REPOSITORIO>.
3. Navegue até o diretório do projeto: cd /caminho/para/seu-projeto.
4. Instale as dependências executando npm install.
5. Inicie o servidor com node server.js. Você verá a mensagem: "Servidor rodando em http://localhost:3000".
6. Acesse as páginas no navegador:
    -Página Inicial: http://localhost:3000/index
    -Página Sobre: http://localhost:3000/about
7. Para encerrar o servidor, pressione Ctrl + C no terminal

COMANDOS uCRL para validação:

1 -- Acessar a Página Inicial:
curl http://localhost:3000/index

2 -- Acessar a Página Sobre:
curl http://localhost:3000/about

3 -- Simular um Upload:
curl -X POST http://localhost:3000/upload -d "dados=exemplo"


Chegando até aqui, todas as etapas foram concluídas e você pode navegar pelas páginas do servidor!