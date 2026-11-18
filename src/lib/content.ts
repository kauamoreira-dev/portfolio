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
    title: "Desenvolvedor focado em transformar problemas em soluções que funcionam",
    p1: "Sou desenvolvedor Full Stack e estudante de Análise e Desenvolvimento de Sistemas. Crio sites e sistemas web completos com React, TypeScript e Supabase, cuidando de cada etapa: entendimento do problema, banco de dados, segurança, regras de negócio e interface.",
    p2: "Desenvolvi o Vagas Tapajós, uma plataforma de vagas de emprego, e o Currículo Tapajós, um gerador de currículos gratuito, os dois já no ar. Hoje aprofundo meus conhecimentos em Inteligência Artificial aplicada a produtos digitais.",
    p3: "Estou disponível para novos projetos, freelas e oportunidades em desenvolvimento de software.",
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
    process: {
      label: "Como funciona",
      title: "Do primeiro contato à entrega",
      steps: [
        {
          title: "Conversa",
          text: "Você me conta a ideia ou o problema pelo WhatsApp ou pelo formulário. Entendo o seu negócio e o que precisa ser resolvido.",
          tag: "Sem custo",
        },
        {
          title: "Proposta",
          text: "Envio uma proposta clara, com o que será feito, prazo e valor. Sem compromisso e sem letras miúdas.",
          tag: "Prazo e valor definidos",
        },
        {
          title: "Desenvolvimento e entrega",
          text: "Desenvolvo mostrando o andamento, publico o projeto no ar e acompanho os primeiros dias de uso.",
          tag: "Projeto no ar",
        },
      ],
      cta: "Começar uma conversa",
    },
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
            v: "Ajudar quem procura emprego a montar um currículo claro e bem organizado, sem criar conta nem pagar por ferramentas. Complementa o Vagas Tapajós.",
          },
          {
            k: "Solução",
            v: "Um editor em que a pessoa preenche as informações e vê a folha tomando forma em tempo real, com três modelos (Clássico, Moderno e Essencial) e PDF pronto para imprimir.",
          },
          {
            k: "O que construí",
            v: "A aplicação inteira em React, TypeScript e Vite: editor guiado por seções, prévia ao vivo, três modelos de layout, exportação em PDF e currículos salvos só no aparelho do usuário, sem servidor e com mais privacidade.",
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
    title: "A developer focused on turning problems into solutions that work",
    p1: "I'm a Full Stack developer and a Systems Analysis and Development student. I build complete websites and web systems with React, TypeScript and Supabase, taking care of every step: understanding the problem, database, security, business rules and interface.",
    p2: "I built Vagas Tapajós, a job board, and Currículo Tapajós, a free resume builder, both already live. I'm currently deepening my knowledge of AI applied to digital products.",
    p3: "I'm available for new projects, freelance work and software development opportunities.",
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
    process: {
      label: "How it works",
      title: "From first contact to delivery",
      steps: [
        {
          title: "Conversation",
          text: "Tell me about your idea or problem on WhatsApp or through the form. I get to know your business and what needs solving.",
          tag: "Free",
        },
        {
          title: "Proposal",
          text: "I send a clear proposal with scope, timeline and price. No commitment and no fine print.",
          tag: "Clear timeline and price",
        },
        {
          title: "Build and delivery",
          text: "I build while sharing progress, launch the project and follow up during the first days of use.",
          tag: "Project live",
        },
      ],
      cta: "Start a conversation",
    },
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
            v: "Help job seekers put together a clear, well-organized resume without creating an account or paying for tools. It complements Vagas Tapajós.",
          },
          {
            k: "Solution",
            v: "An editor where people fill in their information and watch the page take shape in real time, with three templates (Classic, Modern and Essential) and print-ready PDF.",
          },
          {
            k: "What I built",
            v: "The whole app in React, TypeScript and Vite: section-guided editor, live preview, three layout templates, PDF export and resumes stored only on the user's device, with no server and more privacy.",
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
