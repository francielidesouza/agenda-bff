## Instruções:

<p>Para rodar este Projeto fullstack primeiro você precisará ter instalado na sua máquina:</p>
<ul>
<li>Vscode: <a>https://code.visualstudio.com/download</a></li>
<li>PostgreSQL: <a>https://www.postgresql.org/download/</a></li>
<li>Dbeaver: <a>https://dbeaver.com/download/</a></li>
<li>Insomnia: <a>https://insomnia.rest/download</a></li>
<li>React: <a>https://react-cn.github.io/react/downloads.html</a></li>

## Oservações:

-> Para executar o projeto fullstack você precisará executar o backend primeiro e deixar "rodando" e, em seguida, executar o frontend
-> Caso queira utilizar somente a parte do backend, você pode utilizar o Insominia para testar as rotas e não precisa realizar o passo a passo frontend, logo abaixo.

## Backend

<ul>
<li>Clone o repositório do GitHub: <a>git@github.com:francielidesouza/agenda-bff.git</a></li>
<li>Abra um terminal na pasta onde projeto foi clonado do repositório</li>
<li>No terminal execute o comando: "cd backend"</li>
<li>Execute o comando: "npm install"</li>
<li>Crie um banco de dados no PostgreSQL, você pode criá-lo pelo DBeaver, basta clicar em: Databases> Create New Database.</li>
<li>Após criar a sua Database, clique o botão direito do mouse sobre o nome da sua database em: "set as default"</li>
<li>Crie um arquivo .env no vscode dentro da pasta: backend > </li>
<li>Configure o aeu .env seguindo o exemplo do arquivo .env.exemple</li>
<li>Execute o comando: npm run typeorm migration:run -- -d ./src/data-source, no seu terminal para gerar as entidades (tabelas)</li>
<li>Em seguida, rode o comando: "npm run dev" para e executar a API localmente. No seu terminal parecerá a menssagem : "Servidor executando". O servidor estará na rota <a>http://localhost:3000</a></li>
</ul>

## DER - Diagrama de Entidade e Relacionamento

(der.png)

## Endpoints

USER

<ul>
<li>POST/users -> Cadastrar um usuário | sem autenticação</li>
<li>GET/users -> Listar todos os usuários | com autenticação</li>
<li>GET/users/id -> Capturar informações de um usuário por ID | com autenticação</li>
<li>PATCH/users/id -> Atualizar dados de um usuário| com autenticação</li>
<li>DELETE/users/id -> Excluir um usuário por ID | com autenticação</li>
</ul>

CONTACTS

<ul>
<li>POST/contacts -> Cadastrar um contato | com autenticação</li>
<li>GET/contacts -> Listar todos os contatos | com autenticação</li>
<li>GET/contacts/id -> Capturar informações de um contato por ID | com autenticação</li>
<li>PATCH/contacts/id -> Atualizar dados de um contato| com autenticação</li>
<li>DELETE/contacts/id -> Excluir um contato por ID | com autenticação</li>
</ul>

LOGIN

<ul>
<li>POST/login -> "logar" com a conta de usuário criada</li>
</ul>
------------------------------------------------------------

## Frontend

<ul>
<li>No vscode abra um novo terminal, você pode renomaá-lo como front se quiser, basta clocar com o botão direito sobre o terminal e, em seguida, clocar em: "renomear"</li>
<li>No terminal execute o comando: "cd frontend"</li>
<li>Execute o comando: "npm install" e, em seguida:  "npm run dev" </li>
<li>Clique sobre o link: <a>http://localhost:5173/</a> com o CTRL pressionado</li>
<li>Pronto! agora você já pode usufruir do projeto: Agenda Online, uma página no seu navegador deve ter sido renderizada e deve estar integrada com o backend e "rodando" perfeitamente. </li>
</ul>
