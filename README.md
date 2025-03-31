# Painel de Cotações Financeiras  📊
Esta é uma Aplicação frontend para visualização de dados financeiros em tempo real, conectada à API HG Brasil Finance.

- Ao acessar a aplicação, o usuário será redirecionado para a tela de login. Após fazer login ou cadastro, ele será autenticado e poderá visualizar o painel com as cotações.

- O sistema de autenticação verifica a validade da sessão e, caso a sessão expire (após 60 segundos de inatividade), o usuário será deslogado e redirecionado à tela de login.

- A aplicação busca dados de cotações da API da HG Brasil e exibe esses dados de forma clara, destacando a variação positiva ou negativa do preço com cores e setas indicativas.

- O gráfico interativo é gerado através da biblioteca Recharts, mostrando a evolução do preço do ativo selecionado.

##  Funcionalidades Principais ✨

🔐 Sistema de Autenticação
- Cadastro e login de usuários

- Persistência de sessão no LocalStorage

- Proteção de rotas privadas

- Logout automático após 15 minutos de inatividade

## Tecnologias Utilizadas
- React: Framework JavaScript para construção da interface.
- Zustand: Biblioteca para gerenciamento de estado global.
- Recharts: Biblioteca para gráficos.
- TailwindCSS: Framework de CSS para estilos responsivos e utilitários.
- Vite: Ferramenta de build para desenvolvimento rápido.
- API HG Brasil: API externa utilizada para obter cotações financeiras.

##  📈 Principais Desafios
Durante o desenvolvimento deste projeto, alguns dos desafios enfrentados foram:

1 - Gerenciamento de Sessão: Implementar o sistema de sessão de usuário, garantindo que a sessão expire após um tempo de inatividade e que o usuário seja redirecionado corretamente para a tela de login.

  - Solução: Utilizei o Zustand para o gerenciamento de estado global e criei funções para verificar e controlar o tempo de sessão com localStorage.

2 - Integração com a API: A integração com a API da HG Brasil apresentou alguns desafios iniciais, como lidar com erros de requisições e garantir que os dados retornados estivessem no formato esperado.

 - Solução: Implementação de tratamento de erros usando try...catch e verificações para garantir que os dados da API fossem corretamente manipulados.

3 - Exibição e Atualização de Dados em Tempo Real: Atualizar as cotações a cada intervalo de tempo sem prejudicar a experiência do usuário foi uma tarefa desafiadora.

  - Solução: Utilizei o setInterval para buscar os dados da API periodicamente (a cada 5 segundos), garantindo que as cotações ficassem atualizadas.

4 - Responsividade: Garantir que o design fosse responsivo e funcionasse bem em diferentes dispositivos.

  - Solução: Utilizei TailwindCSS com classes utilitárias para garantir que o layout fosse flexível e responsivo.

5- Gráficos de Evolução: Criar gráficos interativos para exibir a evolução dos preços foi um desafio técnico devido à necessidade de formatar corretamente os dados de histórico e garantir a renderização adequada dos gráficos.

  - Solução: Utilizei a biblioteca Recharts para renderizar gráficos de linha e manipular os dados.

## Instalação:
1- Clonar o repositorio:

    git clone ( https://github.com/erikaperciliano/finance-dashboard.git) 

2 - Navegue até o diretório do projeto:
    cd finance-dashboard
3 - Instale as dependencias:
   npm install
or
    yarn install    
    
4 - Crie um arquivo .env na raiz do projeto e adicione sua chave de API da HG Brasil
  VITE_HG_API_KEY=suachaveapi
  
5 - Inicie o servidor de desenvolvimento
  npm run dev
  
5 - Acesse a aplicação no seu navegador
  http://localhost:3000

## Link para o Projeto: 
[Live Demo] (https://franq-finance-dashboard.netlify.app/)

## Contribuição 🤝
Contribuições, problemas e solicitações de recursos são bem-vindos!
Sinta-se à vontade para verificar a página de problemas.   
