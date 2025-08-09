# React Router

Construído com React, React Router e CSS Modules, seguindo os princípios do Atomic Design.

![React](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)
![React Router](https://img.shields.io/badge/React_Router-7.7.1-red?style=for-the-badge&logo=react-router)
![CSS Modules](https://img.shields.io/badge/CSS_Modules-✓-green?style=for-the-badge)

## Sobre o Projeto

Desenvolvido como projeto de estudo para demonstrar:
- Roteamento dinâmico com React Router
- Componentização modular seguindo Atomic Design
- CSS Modules para estilos isolados
- Interface responsiva e moderna

## Funcionalidades

- ✅ Navegação dinâmica entre páginas
- ✅ Blog com artigos sobre tecnologia
- ✅ Página "Sobre" com informações pessoais
- ✅ Design responsivo para mobile e desktop
- ✅ Lazy loading para melhor performance
- ✅ 404 page personalizada

## Arquitetura

O projeto segue os princípios do **Atomic Design**:

- **Átomos**: Componentes básicos (`Button`, `MenuLink`)
- **Moléculas**: Componentes compostos (`Menu`, `PostCard`)
- **Organismos**: Componentes complexos (`PostModel`, `Banner`)
- **Templates**: Estruturas de página (`DefaultPage`)
- **Pages**: Páginas completas (`Home`, `About`, `Post`)

## Tecnologias

- React 19.1.0
- React Router 7.7.1
- React Markdown 10.1.0
- CSS Modules
- JavaScript ES6+
- Create React App

## Como Executar

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/react-router.git
cd react-router
```

2. Instale as dependências
```bash
npm install
```

3. Execute o projeto
```bash
npm start
```

4. Acesse `http://localhost:3000`

## Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Button/         # Átomo
│   ├── MenuLink/       # Átomo
│   ├── Menu/           # Molécula
│   ├── PostCard/       # Organismo
│   ├── PostModel/      # Organismo
│   ├── Banner/         # Organismo
│   └── DefaultPage/    # Template
├── pages/              # Páginas da aplicação
│   ├── Home/           # Página inicial
│   ├── About/          # Página sobre
│   ├── Post/           # Página de post
│   └── Undefined/      # Página 404
├── routes/             # Configuração de rotas
├── assets/             # Recursos estáticos
├── json/               # Dados JSON
└── App.js              # Componente principal
```

## Autor

**João Pedro** - Desenvolvedor Front-end

- 💼 [LinkedIn](https://www.linkedin.com/in/joao-4990791b7/)

