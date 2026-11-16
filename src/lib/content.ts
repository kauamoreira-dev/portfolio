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
  vagasTapajos: "https://vagastapajos.com.br/",
};

export const sectionIds = ["about", "services", "projects", "stack", "education", "contact"] as const;
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
    pitch:
      "Crio aplicações web completas, do banco de dados à interface, com React, TypeScript e Supabase. Código limpo, interfaces rápidas e foco no que gera resultado.",
    ctaProjects: "Ver projetos",
    ctaContact: "Vamos conversar",
    location: "Santarém, PA · Brasil",
    terminal: [
      { cmd: "whoami", out: "kauã moreira — desenvolvedor full stack" },
      { cmd: "cat stack.txt", out: "react · typescript · supabase · vite" },
      { cmd: "ls projetos/", out: "vagas-tapajos/  (em produção)" },
      { cmd: "status", out: "● disponível para novos projetos" },
    ],
  },
  about: {
    label: "Sobre",
    title: "Desenvolvedor focado em produtos que funcionam de ponta a ponta",
    p1: "Sou desenvolvedor Full Stack e estudante de Análise e Desenvolvimento de Sistemas. Trabalho com React e TypeScript no front-end e Supabase e APIs REST no back-end, cuidando de cada parte do produto: modelagem de dados, autenticação, regras de negócio e interface.",
    p2: "Desenvolvi o Vagas Tapajós, uma plataforma de vagas de emprego em produção, e hoje aprofundo meus conhecimentos em Inteligência Artificial aplicada a produtos digitais pela trilha AI Product.",
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
    title: "Projeto em destaque",
    status: "Em produção",
    vagas: {
      name: "Vagas Tapajós",
      tagline: "Plataforma de vagas de emprego para Santarém e região do Tapajós",
      imageAlt: "Tela inicial do Vagas Tapajós",
      blocks: [
        {
          k: "Desafio",
          v: "Conectar candidatos e empresas de Santarém e região do Tapajós em um só lugar, de forma simples para quem procura e para quem contrata.",
        },
        {
          k: "Solução",
          v: "Uma plataforma web com dois perfis, candidato e empresa: empresas publicam vagas e candidatos se candidatam direto pelo site.",
        },
        {
          k: "O que construí",
          v: "A aplicação de ponta a ponta: front-end em React/Vite e back-end no Supabase, com banco de dados, autenticação, perfis, vagas, candidaturas e interface responsiva.",
        },
      ],
      role: "Função",
      roleValue: "Desenvolvedor Full Stack · projeto autoral",
    },
    visit: "Visitar site",
    more: "Mais no GitHub",
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
    success: "Mensagem enviada! Retorno em breve.",
    error: "Não foi possível enviar agora. Tente pelo e-mail ou WhatsApp.",
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
    pitch:
      "I build complete web applications, from the database to the interface, with React, TypeScript and Supabase. Clean code, fast interfaces and a focus on results.",
    ctaProjects: "See projects",
    ctaContact: "Let's talk",
    location: "Santarém, PA · Brazil",
    terminal: [
      { cmd: "whoami", out: "kauã moreira — full stack developer" },
      { cmd: "cat stack.txt", out: "react · typescript · supabase · vite" },
      { cmd: "ls projects/", out: "vagas-tapajos/  (in production)" },
      { cmd: "status", out: "● available for new projects" },
    ],
  },
  about: {
    label: "About",
    title: "A developer focused on products that work end to end",
    p1: "I'm a Full Stack developer and a Systems Analysis and Development student. I work with React and TypeScript on the front-end and Supabase and REST APIs on the back-end, taking care of every part of the product: data modeling, authentication, business rules and interface.",
    p2: "I built Vagas Tapajós, a job board running in production, and I'm currently deepening my knowledge of AI applied to digital products through the AI Product track.",
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
    title: "Featured project",
    status: "In production",
    vagas: {
      name: "Vagas Tapajós",
      tagline: "A job board for Santarém and the Tapajós region",
      imageAlt: "Vagas Tapajós home screen",
      blocks: [
        {
          k: "Challenge",
          v: "Connect candidates and companies from Santarém and the Tapajós region in one place, making it simple for both job seekers and employers.",
        },
        {
          k: "Solution",
          v: "A web platform with two profiles, candidate and company: companies post openings and candidates apply directly on the site.",
        },
        {
          k: "What I built",
          v: "The whole application: React/Vite front-end and Supabase back-end, with database, authentication, profiles, job posts, applications and a responsive UI.",
        },
      ],
      role: "Role",
      roleValue: "Full Stack Developer · personal project",
    },
    visit: "Visit site",
    more: "More on GitHub",
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
    success: "Message sent! I'll get back to you soon.",
    error: "Couldn't send right now. Please try email or WhatsApp.",
  },
  footer: { built: "Built with Next.js and TypeScript", top: "Back to top" },
  langToggle: "Switch language to Portuguese",
  menu: "Open menu",
};

export const dictionaries: Record<Lang, Dictionary> = { pt, en };
