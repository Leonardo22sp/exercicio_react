Exercícios Práticos de React ⚛️
Este repositório contém as soluções para uma série de exercícios práticos desenvolvidos para solidificar o conhecimento nos fundamentos do React. Cada exercício foca em um conceito chave, construindo uma base sólida para o desenvolvimento de aplicações mais complexas.

🎯 Sobre o Projeto
O objetivo deste projeto é servir como um guia prático e um portfólio de código, demonstrando a aplicação dos principais hooks e padrões do React em cenários comuns do dia a dia de um desenvolvedor front-end.

✨ Conceitos Abordados
Através destes exercícios, foram praticados os seguintes conceitos fundamentais do React:

Criação de Componentes Funcionais: Estruturação da UI em componentes reutilizáveis.

JSX: Sintaxe para descrever a aparência da interface de usuário.

Gerenciamento de Estado com useState: Criação e atualização de variáveis de estado para tornar a UI dinâmica e interativa.

Manipulação de Eventos: Captura de interações do usuário, como onClick e onChange.

Renderização Condicional: Alteração da UI com base no estado atual (usando o operador ternário).

Renderização de Listas: Mapeamento de dados de um array para elementos JSX com o método .map().

Componentes Controlados: Vinculação do valor de campos de formulário ao estado do React.

Imutabilidade do Estado: Prática de atualizar estados (arrays e objetos) criando novas instâncias em vez de modificá-los diretamente.

🚀 Os Exercícios
1 & 2. Cartão de Perfil com Botão de Curtir
Objetivo: Criar um componente estático CartaoPerfil e, em seguida, adicionar interatividade com um botão "Curtir" que incrementa um contador a cada clique.

Componente: src/components/CartaoPerfil.js

3. Botão de Toggle
Objetivo: Desenvolver um botão que alterna seu texto entre "ON" e "OFF" e também muda sua cor de fundo a cada clique, demonstrando o controle de um estado booleano.

Componente: src/components/BotaoToggle.js

4. Input Controlado
Objetivo: Criar um campo de texto cujo valor é controlado pelo estado do React. O texto digitado pelo usuário é exibido em tempo real em um parágrafo na tela.

Componente: src/components/InputControlado.js

5. Lista Dinâmica
Objetivo: Exibir uma lista de itens a partir de um array. Um botão "Adicionar Fruta" permite inserir um novo item à lista, que é renderizada dinamicamente na tela.

Componente: src/components/ListaDinamica.js

📁 Estrutura de Arquivos
O projeto está organizado de forma modular para facilitar a manutenção e a escalabilidade.

meu-app-de-exercicios/
├── public/
├── src/
│   ├── components/
│   │   ├── BotaoToggle.js
│   │   ├── CartaoPerfil.js
│   │   ├── InputControlado.js
│   │   └── ListaDinamica.js
│   ├── App.js
│   ├── index.js
│   └── styles.css
├── .gitignore
├── package.json
└── README.md

⚙️ Como Executar Localmente
Para clonar e rodar este projeto em sua máquina, siga os passos abaixo. Você precisa ter o Node.js e o npm (ou Yarn) instalados.

Bash

# 1. Clone o repositório
git clone https://github.com/seu-usuario/seu-repositorio.git

# 2. Navegue até o diretório do projeto
cd seu-repositorio

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm start
Após executar npm start, a aplicação será aberta automaticamente em seu navegador no endereço http://localhost:3000.

👨‍💻 Autor
Feito com ❤️ por Leonardo Silva.
