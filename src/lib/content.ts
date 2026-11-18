export type Lang = "pt" | "en";

export const profile = {
  name: "Kauã Moreira Cirino",
  shortName: "Kauã Moreira",
  initials: "KM",
  email: "kauacirinom@icloud.com",
  phoneDisplay: "(69) 98429-9960",
  whatsapp: "https://wa.me/5569984299960",
  linkedin: "https://www.linkedin.com/in/kauamoreira-dev",
  instagram: "https://www.instagram.com/kauamoreira.dev",
  github: "https://github.com/kauamoreira-dev",
};

export const sectionIds = ["projects", "services", "about", "contact"] as const;
export type SectionId = (typeof sectionIds)[number];

const pt = {
  nav: {
    about: "Sobre",
    services: "Serviços",
    projects: "Projetos",
    stack: "Stack",
    education: "Formação",
    contact: "Contato",
  },
  hero: {
    status: "Disponível para projetos",
    role: "Desenvolvedor Full Stack",
    headline: { start: "Problemas reais pedem soluções", accent: "sob medida", end: "." },
    pitch:
      "Transformo processos manuais, ideias e gargalos em sites e sistemas web que funcionam, como o Vagas Tapajós e o Currículo Tapajós, criados para resolver problemas reais da região.",
    ctaQuote: "Solicitar orçamento",
    ctaProjects: "Ver projetos",
    highlights: ["2 produtos no ar", "Do planejamento à publicação", "Atendimento remoto", "Resposta em até 24h úteis"],
    ctaContact: "Vamos conversar",
    location: "Santarém, PA · Brasil",
    terminal: [
      { cmd: "whoami", out: "kauã moreira — desenvolvedor full stack" },
      { cmd: "cat servicos.txt", out: "sites · sistemas web · landing pages · manutenção" },
      { cmd: "ls projetos/", out: "vagas-tapajos/  curriculo-tapajos/" },
      { cmd: "status", out: "● disponível para novos projetos" },
    ],
  },
  about: {
    label: "Sobre",
    title: "Desenvolvedor focado em produtos que funcionam de ponta a ponta",
    p1: "Sou desenvolvedor Full Stack e estudante de Análise e Desenvolvimento de Sistemas. Trabalho com React e TypeScript no front-end e Supabase e APIs REST no back-end, cuidando de cada parte do produto: modelagem de dados, autenticação, regras de negócio e interface.",
    p2: "Desenvolvi o Vagas Tapajós, uma plataforma de vagas de emprego, e o Currículo Tapajós, um gerador de currículos gratuito; os dois estão em produção. Hoje aprofundo meus conhecimentos em Inteligência Artificial aplicada a produtos digitais pela trilha AI Product.",
    p3: "Estou disponível para novos projetos e oportunidades em desenvolvimento de software.",
    photoAlt: "Foto de Kauã Moreira Cirino",
    facts: [
      { k: "Base", v: "Santarém, PA" },
      { k: "Foco", v: "Full Stack · React + Supabase" },
      { k: "Formação", v: "ADS · UNAMA" },
      { k: "Status", v: "Disponível para projetos" },
    ],
  },
  services: {
    label: "Serviços",
    title: "Como posso ajudar no seu projeto",
    items: [
      {
        title: "Sites e landing pages",
        text: "Páginas rápidas, responsivas e otimizadas para SEO, que apresentam seu negócio e convertem visitantes em clientes.",
      },
      {
        title: "Sistemas web",
        text: "Aplicações sob medida com login, painéis, cadastros e regras de negócio, do banco de dados à interface.",
      },
      {
        title: "Back-end com Supabase",
        text: "Modelagem de banco de dados, autenticação, armazenamento de arquivos e APIs seguras para o seu produto.",
      },
      {
        title: "Manutenção e melhorias",
        text: "Correção de bugs, novas funcionalidades, ajustes de performance e deploy contínuo na Vercel.",
      },
    ],
  },
  projects: {
    label: "Projetos",
    title: "Projetos em destaque",
    status: "Em produção",
    role: "Função",
    visit: "Visitar site",
    code: "Ver código",
    more: "Mais no GitHub",
    items: [
      {
        id: "vagas",
        name: "Vagas Tapajós",
        tagline: "Plataforma de vagas de emprego para Santarém e região do Tapajós",
        imageAlt: "Tela inicial do Vagas Tapajós",
        blocks: [
          {
            k: "Desafio",
            v: "Conectar candidatos e empresas de Santarém e região do Tapajós em um só lugar.",
          },
          {
            k: "Solução",
            v: "Plataforma com perfis de candidato e empresa: empresas publicam vagas e candidatos se candidatam pelo site.",
          },
          {
            k: "O que construí",
            v: "Tudo, de ponta a ponta: front-end, back-end, banco de dados, login, perfis, vagas e candidaturas.",
          },
        ],
        roleValue: "Desenvolvedor Full Stack · projeto autoral",
      },
      {
        id: "curriculo",
        name: "Currículo Tapajós",
        tagline: "Gerador de currículos gratuito e sem cadastro, do ecossistema Tapajós",
        imageAlt: "Tela inicial do Currículo Tapajós com exemplo de currículo",
        blocks: [
          {
            k: "Desafio",
            v: "Ajudar quem procura emprego a montar um bom currículo, sem cadastro e sem pagar nada. Complementa o Vagas Tapajós.",
          },
          {
            k: "Solução",
            v: "Editor com prévia ao vivo, três modelos prontos e PDF para imprimir.",
          },
          {
            k: "O que construí",
            v: "A aplicação inteira, com os dados salvos só no aparelho do usuário: sem servidor e com mais privacidade.",
          },
        ],
        roleValue: "Desenvolvedor Full Stack · projeto autoral",
      },
    ],
  },
  stack: {
    label: "Stack",
    title: "Tecnologias que uso no dia a dia",
    groups: { languages: "Front-end", backend: "Back-end e dados", tools: "Ferramentas e deploy" },
  },
  education: {
    label: "Formação",
    title: "Formação e certificações",
    degreeLabel: "Graduação",
    degree: "Análise e Desenvolvimento de Sistemas",
    school: "UNAMA · Universidade da Amazônia",
    period: "Em andamento",
    certsTitle: "Certificações",
    certs: [
      { name: "JavaScript", note: "Concluído" },
      { name: "TypeScript", note: "Concluído" },
      { name: "Desenvolvimento Front-end React", note: "Concluído" },
      { name: "AI Product", note: "IA aplicada a produtos digitais" },
    ],
  },
  contact: {
    label: "Contato",
    title: "Tem um projeto em mente?",
    text: "Conte o que você precisa: um site, um sistema ou uma melhoria em algo que já existe. Respondo em até 24 horas úteis.",
    name: "Nome",
    email: "E-mail",
    message: "Mensagem",
    namePh: "Seu nome",
    emailPh: "voce@email.com",
    messagePh: "Conte um pouco sobre o projeto, prazo e objetivo...",
    send: "Enviar mensagem",
    sending: "Enviando...",
    success: "Mensagem enviada, {name}! Recebi tudo certinho e respondo em até 24 horas úteis.",
    errorInvalid: "Confira os campos destacados e tente de novo.",
    errorServer: "O envio está indisponível no momento. Fale comigo pelo e-mail ou WhatsApp ao lado.",
    errorNetwork: "Sem conexão com a internet. Verifique sua rede e tente de novo.",
    fieldErrors: {
      nameRequired: "Digite seu nome.",
      nameLong: "Nome muito longo (máximo de 100 caracteres).",
      emailInvalid: "Digite um e-mail válido, como voce@email.com.",
      messageShort: "Escreva pelo menos 10 caracteres.",
      messageLong: "Mensagem muito longa (máximo de 5.000 caracteres).",
    },
    whatsappText: "Olá, Kauã! Vi seu portfólio e gostaria de conversar sobre um projeto.",
    emailSubject: "Contato pelo portfólio",
  },
  footer: { built: "Desenvolvido com Next.js e TypeScript", top: "Voltar ao topo" },
  langToggle: "Mudar idioma para inglês",
  menu: "Abrir menu",
};

export type Dictionary = typeof pt;

const en: Dictionary = {
  nav: {
    about: "About",
    services: "Services",
    projects: "Projects",
    stack: "Stack",
    education: "Education",
    contact: "Contact",
  },
  hero: {
    status: "Available for projects",
    role: "Full Stack Developer",
    headline: { start: "Real problems call for", accent: "tailored solutions", end: "." },
    pitch:
      "I turn manual processes, ideas and bottlenecks into websites and web systems that work, like Vagas Tapajós and Currículo Tapajós, built to solve real problems in the region.",
    ctaQuote: "Request a quote",
    ctaProjects: "See projects",
    highlights: ["2 products live", "From planning to launch", "Remote work", "Reply within 1 business day"],
    ctaContact: "Let's talk",
    location: "Santarém, PA · Brazil",
    terminal: [
      { cmd: "whoami", out: "kauã moreira — full stack developer" },
      { cmd: "cat services.txt", out: "websites · web apps · landing pages · maintenance" },
      { cmd: "ls projects/", out: "vagas-tapajos/  curriculo-tapajos/" },
      { cmd: "status", out: "● available for new projects" },
    ],
  },
  about: {
    label: "About",
    title: "A developer focused on products that work end to end",
    p1: "I'm a Full Stack developer and a Systems Analysis and Development student. I work with React and TypeScript on the front-end and Supabase and REST APIs on the back-end, taking care of every part of the product: data modeling, authentication, business rules and interface.",
    p2: "I built Vagas Tapajós, a job board, and Currículo Tapajós, a free resume builder; both are running in production. I'm currently deepening my knowledge of AI applied to digital products through the AI Product track.",
    p3: "I'm available for new projects and software development opportunities.",
    photoAlt: "Photo of Kauã Moreira Cirino",
    facts: [
      { k: "Based in", v: "Santarém, Brazil" },
      { k: "Focus", v: "Full Stack · React + Supabase" },
      { k: "Education", v: "Systems Analysis · UNAMA" },
      { k: "Status", v: "Available for projects" },
    ],
  },
  services: {
    label: "Services",
    title: "How I can help with your project",
    items: [
      {
        title: "Websites and landing pages",
        text: "Fast, responsive, SEO-friendly pages that present your business and turn visitors into customers.",
      },
      {
        title: "Web applications",
        text: "Custom apps with login, dashboards, forms and business rules, from the database to the interface.",
      },
      {
        title: "Supabase back-end",
        text: "Database modeling, authentication, file storage and secure APIs for your product.",
      },
      {
        title: "Maintenance and improvements",
        text: "Bug fixes, new features, performance tuning and continuous deployment on Vercel.",
      },
    ],
  },
  projects: {
    label: "Projects",
    title: "Featured projects",
    status: "In production",
    role: "Role",
    visit: "Visit site",
    code: "View code",
    more: "More on GitHub",
    items: [
      {
        id: "vagas",
        name: "Vagas Tapajós",
        tagline: "A job board for Santarém and the Tapajós region",
        imageAlt: "Vagas Tapajós home screen",
        blocks: [
          {
            k: "Challenge",
            v: "Connect candidates and companies from Santarém and the Tapajós region in one place.",
          },
          {
            k: "Solution",
            v: "A platform with candidate and company profiles: companies post openings and candidates apply on the site.",
          },
          {
            k: "What I built",
            v: "Everything, end to end: front-end, back-end, database, login, profiles, job posts and applications.",
          },
        ],
        roleValue: "Full Stack Developer · personal project",
      },
      {
        id: "curriculo",
        name: "Currículo Tapajós",
        tagline: "A free, sign-up-free resume builder, part of the Tapajós ecosystem",
        imageAlt: "Currículo Tapajós home screen with a sample resume",
        blocks: [
          {
            k: "Challenge",
            v: "Help job seekers build a good resume, with no sign-up and no cost. It complements Vagas Tapajós.",
          },
          {
            k: "Solution",
            v: "An editor with live preview, three ready-made templates and print-ready PDF.",
          },
          {
            k: "What I built",
            v: "The whole app, with data stored only on the user's device: no server and more privacy.",
          },
        ],
        roleValue: "Full Stack Developer · personal project",
      },
    ],
  },
  stack: {
    label: "Stack",
    title: "Technologies I use every day",
    groups: { languages: "Front-end", backend: "Back-end and data", tools: "Tools and deployment" },
  },
  education: {
    label: "Education",
    title: "Education and certifications",
    degreeLabel: "Degree",
    degree: "Systems Analysis and Development",
    school: "UNAMA · Universidade da Amazônia",
    period: "In progress",
    certsTitle: "Certifications",
    certs: [
      { name: "JavaScript", note: "Completed" },
      { name: "TypeScript", note: "Completed" },
      { name: "Front-end Development with React", note: "Completed" },
      { name: "AI Product", note: "AI applied to digital products" },
    ],
  },
  contact: {
    label: "Contact",
    title: "Have a project in mind?",
    text: "Tell me what you need: a website, an application or an improvement to something that already exists. I reply within one business day.",
    name: "Name",
    email: "Email",
    message: "Message",
    namePh: "Your name",
    emailPh: "you@email.com",
    messagePh: "Tell me about the project, timeline and goal...",
    send: "Send message",
    sending: "Sending...",
    success: "Message sent, {name}! I got everything and will reply within one business day.",
    errorInvalid: "Please check the highlighted fields and try again.",
    errorServer: "Sending is unavailable right now. Reach me by email or WhatsApp instead.",
    errorNetwork: "No internet connection. Check your network and try again.",
    fieldErrors: {
      nameRequired: "Please enter your name.",
      nameLong: "Name is too long (100 characters max).",
      emailInvalid: "Please enter a valid email, like you@email.com.",
      messageShort: "Please write at least 10 characters.",
      messageLong: "Message is too long (5,000 characters max).",
    },
    whatsappText: "Hi Kauã! I saw your portfolio and would like to talk about a project.",
    emailSubject: "Contact from your portfolio",
  },
  footer: { built: "Built with Next.js and TypeScript", top: "Back to top" },
  langToggle: "Switch language to Portuguese",
  menu: "Open menu",
};

export const dictionaries: Record<Lang, Dictionary> = { pt, en };
