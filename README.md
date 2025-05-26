# 🛍️ Loja Online

Uma loja online desenvolvida com **React + Vite**, estilizada com **Styled-Components** e com backend simulado usando **JSON Server**. 
O projeto permite ao usuário navegar pelos produtos, adicionar e remover itens do carrinho, visualizar o resumo das compras e confirmar o pedido através de um modal.

## 🚀 Funcionalidades

- 🛒 Listagem de produtos
- ➕ Adicionar produtos ao carrinho
- ➖ Remover produtos do carrinho
- 🔢 Cálculo automático do valor total
- ✅ Modal de confirmação dos itens do carrinho
- 📱 Layout responsivo para diferentes tamanhos de tela

## 🛠️ Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Styled-Components](https://styled-components.com/)
- [JSON Server](https://github.com/typicode/json-server)

## 💻 Como rodar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado

### Instalação

1. Clone o repositório:

```bash
git clone https://github.com/Shadowzzd/loja-online.git
```

2. Acesse a pasta do projeto:

```bash
cd loja-online
```

3. Instale as dependências:

```bash
npm install
```

4. Inicie o JSON Server (o arquivo `db.json` precisa estar na raiz do projeto):

```bash
npx json-server --watch db.json --port 3001
```

> 🔗 O JSON Server ficará disponível em `http://localhost:3001`

5. Em outro terminal, inicie o frontend:

```bash
npm run dev
```

6. Acesse a aplicação:

```bash
http://localhost:5173
```


## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

Desenvolvido por [Shadowzzd](https://github.com/Shadowzzd) 💙
