export const myProjects = [
  {
    id: 1,
    title: "Plataforma de E-commerce",
    description:
      "Facilita compras em sites internacionais como Amazon e eBay, permitindo que clientes comprem nesses sites e recebam os produtos domesticamente.",
    subDescription: [
      "Construção de uma aplicação escalável com ASP.NET Core MVC, integrando plataformas globais como a Amazon para entrega doméstica.",
      "Implementação de autenticação segura e gerenciamento de banco de dados usando ASP.NET Core Identity e Entity Framework Core.",
      "Desenvolvimento de um frontend responsivo com Tailwind CSS, aprimorando a experiência do usuário.",
      "Adição de sistemas de pagamento, localização e filtros de produtos para melhorias de funcionalidade.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/accessories.jpg",
    tags: [
      { id: 1, name: "C#", path: "/assets/logos/csharp.svg" },
      { id: 2, name: ".Net", path: "/assets/logos/dotnet.svg" },
      { id: 3, name: "Ef Core", path: "/assets/logos/efcore.png" },
      { id: 4, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 2,
    title: "Sistema de Autenticação e Autorização",
    description:
      "Um sistema seguro de autenticação e autorização utilizando Auth0 para gerenciamento de usuários de forma integrada.",
    subDescription: [
      "Integração do Auth0 para autenticação, com suporte a OAuth, JWT e autenticação multifator.",
      "Implementação de controle de acesso baseado em papéis (RBAC) para permissões detalhadas de usuários.",
      "Desenvolvimento de frontend em React com Tailwind CSS para uma experiência de usuário moderna.",
      "Conexão com banco de dados SQLite seguro para armazenamento de dados dos usuários.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/auth-system.jpg",
    tags: [
      { id: 1, name: "Auth0", path: "/assets/logos/auth0.svg" },
      { id: 2, name: "React", path: "/assets/logos/react.svg" },
      { id: 3, name: "SQLite", path: "/assets/logos/sqlite.svg" },
      { id: 4, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 3,
    title: "Aplicação Web com Blazor",
    description:
      "Uma aplicação web moderna e interativa construída com Blazor WebAssembly e .NET Core.",
    subDescription: [
      "Desenvolvimento de uma Single Page Application (SPA) totalmente interativa usando Blazor WebAssembly.",
      "Implementação de interações com APIs utilizando .NET Core para um backend robusto.",
      "Criação de componentes de UI responsivos com Tailwind CSS para uma melhor experiência do usuário.",
      "Integração do SQLite para armazenamento eficiente de dados no lado do cliente.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/blazor-app.jpg",
    tags: [
      { id: 1, name: "Blazor", path: "/assets/logos/blazor.svg" },
      { id: 2, name: ".NET Core", path: "/assets/logos/dotnetcore.svg" },
      { id: 3, name: "SQLite", path: "/assets/logos/sqlite.svg" },
      { id: 4, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 4,
    title: "Engine de Jogos em C++",
    description:
      "Uma engine de jogos leve em C++ projetada para desenvolvimento de jogos 2D e 3D.",
    subDescription: [
      "Construção de um motor de renderização poderoso utilizando OpenGL e C++.",
      "Desenvolvimento de um motor de física com detecção de colisões e efeitos de partículas.",
      "Implementação de um sistema de scripts para fácil personalização dos jogos.",
      "Otimização de desempenho com multithreading e gerenciamento eficiente de memória.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/game-engine.jpg",
    tags: [
      { id: 1, name: "C++", path: "/assets/logos/cplusplus.svg" },
      { id: 2, name: "C#", path: "/assets/logos/csharp.svg" },
      { id: 3, name: "Git", path: "/assets/logos/git.svg" },
      { id: 4, name: "Microsoft", path: "/assets/logos/microsoft.svg" },
    ],
  },
  {
    id: 5,
    title: "Tema Personalizado para WordPress",
    description:
      "Um tema WordPress totalmente personalizável, otimizado para desempenho e SEO.",
    subDescription: [
      "Desenvolvimento de um tema WordPress responsivo utilizando HTML5, CSS3 e JavaScript.",
      "Integração do Tailwind CSS para estilização moderna e melhorias de UI.",
      "Otimização de SEO e velocidade de página utilizando Vite.js para builds rápidos.",
      "Implementação de widgets personalizados e compatibilidade com plugins para funcionalidades estendidas.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/wordpress-theme.jpg",
    tags: [
      { id: 1, name: "WordPress", path: "/assets/logos/wordpress.svg" },
      { id: 2, name: "HTML5", path: "/assets/logos/html5.svg" },
      { id: 3, name: "CSS3", path: "/assets/logos/css3.svg" },
      { id: 4, name: "Vite.js", path: "/assets/logos/vitejs.svg" },
    ],
  },
  {
    id: 6,
    title: "Plataforma de Ensino Online",
    description:
      "Uma aplicação web que permite aos usuários se matricularem em cursos, assistirem aulas em vídeo e realizarem questionários.",
    subDescription: [
      "Construída com Blazor WebAssembly para uma experiência SPA fluida.",
      "Implementação de streaming de vídeo utilizando Azure Media Services.",
      "Adição de um sistema de quizzes com geração dinâmica de perguntas e correção em tempo real.",
      "Integração da API do Stripe para processamento de pagamentos seguro.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/elearning.jpg",
    tags: [
      { id: 1, name: "Blazor", path: "/assets/logos/blazor.svg" },
      { id: 2, name: "Azure", path: "/assets/logos/azure.svg" },
      { id: 3, name: "Stripe", path: "/assets/logos/stripe.svg" },
      { id: 4, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/ali-sanati/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ali.sanatidev/reels/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Desenvolvedor de Software",
    job: "Projetos de Segurança e Defesa",
    date: "2021-2023",
    contents: [
      "Aprimoramento da segurança de aplicações e desenvolvimento de novas funcionalidades, seguindo padrões da Organização de Defesa Passiva e do Centro Nacional do Ciberespaço.",
      "Projeto e implementação de interfaces de mapas intuitivas usando MapsUI, melhorando a experiência do usuário e permitindo integração interativa fluida.",
      "Desenvolvimento de aplicações para automação industrial, utilizando C++ e a API Fatek para comunicação com PLC.",
      "Melhoria da responsividade e usabilidade das aplicações utilizando Windows Forms e WPF.",
      "Execução de conversões de XML para SVG usando X-DOM, garantindo visualização de dados dinâmica e eficiente.",
    ],
  },
  {
    title: "Desenvolvedor Back-End",
    job: "Indústria Automotiva",
    date: "2023-2024",
    contents: [
      "Desenvolvimento de sistemas para ingestão e análise de grandes volumes de dados, garantindo processamento e armazenamento eficientes.",
      "Criação de sistemas back-end que possibilitam comunicação veículo-nuvem para telemetria, diagnóstico e controle remoto:",
      "✅ Implementação de APIs seguras seguindo os padrões de segurança automotiva ISO 26262.",
      "✅ Garantia de privacidade de dados para clientes e parceiros por meio de protocolos compatíveis com a indústria.",
      "✅ Entrega de funcionalidades remotas como atualizações OTA, rastreamento em tempo real e partida remota.",
    ],
  },
  {
    title: "Desenvolvedor Freelance",
    job: "Autônomo",
    date: "2025-Presente",
    contents: [
      "Criação de um portfólio pessoal utilizando Three.js, React, Vite e WebAPI para demonstrar expertise técnica.",
      "Aprimoramento contínuo das habilidades técnicas e expansão do conhecimento em desenvolvimento web moderno e tecnologias back-end.",
    ],
  },
];

export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "Nunca vi nada parecido antes. É incrível. Eu adorei.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "Não sei o que dizer. Fiquei sem palavras. Isso é incrível.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "Estou sem palavras. Isso é incrível. Eu adorei.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "Sem dúvidas, a melhor coisa que já experimentei. Recomendo muito!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Trabalho incrível! A atenção aos detalhes é fenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "Isso superou todas as minhas expectativas. Absolutamente impressionante!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simplesmente de tirar o fôlego. A melhor decisão que tomei nos últimos tempos.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "Ainda bem que encontrei isso. Mudou completamente o jogo para mim.",
    img: "https://robohash.org/eve",
  },
];
