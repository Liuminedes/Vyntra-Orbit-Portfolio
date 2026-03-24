export const translations = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      resume: "Resume",
      work: "Work",
      contact: "Contact",
      hire: "Hire me",
    },
    home: {
      role: "Full-Stack Developer",
      greeting: "Hi! I'm",
      name: "Mauricio Rodriguez",
      bio: "I craft elegant digital experiences and build full-stack products that scale. From SaaS platforms to automation systems — fast delivery, clean code.",
      downloadCV: "Download CV",
      poweredBy: "Powered by",
    },
    stats: [
      { num: 3, text: "Years of experience" },
      { num: 8, text: "Projects delivered" },
      { num: 10, text: "Technologies mastered" },
    ],
    services: {
      items: [
        {
          num: "01",
          title: "Platform Development",
          description:
            "Custom web platforms focused on performance and security. API integrations, admin dashboards, and CI/CD pipelines ready to scale.",
        },
        {
          num: "02",
          title: "UI/UX Design",
          description:
            "User-centered UI/UX: research, information architecture, and prototypes. Accessible, developer-ready handoff.",
        },
        {
          num: "03",
          title: "Automation",
          description:
            "End-to-end automations via APIs, webhooks, and orchestrators (Zapier/Make) or Node.js cron jobs. Sync data, trigger alerts, generate reports.",
        },
        {
          num: "04",
          title: "Technical Support",
          description:
            "Ongoing support: performance, security, backups, and monitoring. Fast incident response and continuous improvements.",
        },
      ],
    },
    resume: {
      tabs: {
        experience: "Experience",
        education: "Education",
        skills: "Skills",
        about: "About me",
      },
      experience: {
        title: "My Experience",
        description:
          "Over 3 years combining IT support and full-stack development, sharpening my craft with every new challenge.",
        items: [
          { company: "Almotores S.A", position: "IT Support Specialist", duration: "2022 – Present" },
          { company: "Freelance", position: "E-Commerce Developer", duration: "2023" },
          { company: "Freelance", position: "Law Firm Website Developer", duration: "2024 – 2025" },
        ],
      },
      education: {
        title: "Education",
        description: "A continuous learning journey across formal education and self-directed courses.",
        items: [
          { institution: "CECEP", degree: "IT Developer Technologist", duration: "2021 – Present" },
          { institution: "ISO 27000 / 27001", degree: "Information Security Certification", duration: "2025" },
          { institution: "Udemy", degree: "Full-Stack Development Course", duration: "2024" },
          { institution: "Udemy", degree: "Frontend Bootcamp with ReactJS", duration: "2024" },
          { institution: "Udemy", degree: "Backend Bootcamp with NodeJS", duration: "2024" },
          { institution: "Research Cert.", degree: "AI Integration Research", duration: "2022" },
        ],
      },
      skills: {
        title: "My Skills",
        description: "Core technologies I use to build web, mobile, and desktop applications.",
      },
      about: {
        title: "About me",
        description:
          "I'm a full-stack developer who embraces challenges and loves creative problem-solving. Self-taught by conviction and curious by nature — I learn fast and adapt to any environment.",
        info: [
          { fieldName: "Name", fieldValue: "Mauricio Rodriguez L." },
          { fieldName: "Phone", fieldValue: "(+57) 317 768 6358" },
          { fieldName: "Experience", fieldValue: "3 years" },
          { fieldName: "Email", fieldValue: "liu.galax.dev.ops@gmail.com" },
          { fieldName: "Discord", fieldValue: "liu_galax_dev_ops" },
          { fieldName: "Freelance", fieldValue: "Available" },
          { fieldName: "Languages", fieldValue: "Spanish & English" },
        ],
      },
    },
    work: {
      live: "Live Project",
      github: "GitHub Repo",
      inDev: "In Development",
      completed: "Completed",
      projects: [
        {
          num: "01",
          category: "SyncDealer",
          title: "SyncDealer Almotores",
          description:
            "Internal commission management platform for a multi-brand automotive dealership (KIA, Renault, VW, JAC/Jetour). Tracks sales, calculates commissions, generates PDF payslips, and handles vehicle delivery traceability.",
          stack: ["React.js", "Node.js/Express", "MySQL", "Sequelize", "MUI", "Zustand"],
          image: "/assets/work/syncdealear.png",
          live: "",
          github: "",
          badge: "completed",
        },
        {
          num: "02",
          category: "Shaddai Canino",
          title: "Shaddai Canino",
          description:
            "Professional website for a pet care and veterinary brand. Showcases services, team, and enables appointment booking via WhatsApp integration.",
          stack: ["Next.js", "Tailwind CSS", "Framer Motion"],
          image: "/assets/work/shaddai.png",
          live: "",
          github: "",
          badge: "completed",
        },
        {
          num: "03",
          category: "Atlas Market Suite",
          title: "Atlas Market Suite",
          description:
            "Trading analytics SaaS dashboard integrating AI signals, portfolio tracking, and binary options strategy tools — built for active traders.",
          stack: ["React.js", "Node.js", "TradingView Widget", "Python"],
          image: "/assets/work/atlas.png",
          live: "",
          github: "",
          badge: "in-dev",
        },
        {
          num: "04",
          category: "Mi Lista",
          title: "MercadoApp — Mi Lista",
          description: "Mobile grocery shopping app for Android. Shopping lists with budget tracking, store management, community price sharing, and AI-powered receipt scanning via OCR to auto-detect products.",
          stack: ["Flutter", "Firebase", "Google ML Kit", "Dart", "FCM"],
          image: "/assets/work/milista.png",
          live: "",
          github: "",
          badge: "in-dev",
        },
        {
          num: "05",
          category: "DentalSaaS",
          title: "Dental SaaS Platform",
          description:
            "Cloud-based SaaS for dental clinics. Patient management, appointment scheduling, treatment history, and billing — all in one dashboard.",
          stack: ["React.js", "Node.js/Express", "MySQL", "Tailwind CSS"],
          image: "/assets/work/dental.png",
          live: "",
          github: "",
          badge: "in-dev",
        },
        {
          num: "06",
          category: "IntraCom",
          title: "IntraCom",
          description:
            "Private corporate chat for internal teams. Real-time messaging, document preview (PDF, Word, Excel, ZIP), role management, search, and admin panel.",
          stack: ["React.js", "Node.js/Express", "Tailwind CSS", "MySQL/MariaDB"],
          image: "/assets/work/intracom.png",
          live: "",
          github: "",
          badge: "completed",
        },
      ],
    },
    contact: {
      heading: "Let's work together",
      subheading: "Fill out the form to get in touch and build what you need.",
      fields: {
        firstname: "First name",
        lastname: "Last name",
        email: "Email",
        phone: "Phone",
        selectService: "Select a service",
        message: "Write your message here.",
        send: "Send message",
        sending: "Sending…",
      },
      services: ["Web Development", "UI/UX Design", "Logo Design", "Custom Consultation"],
      info: [
        { title: "Phone", description: "(+57) 317 768 6358" },
        { title: "Email", description: "liu.galax.dev.ops@gmail.com" },
        { title: "Discord", description: "liu_galax_dev_ops" },
      ],
      toast: {
        missingFields: "Missing required fields",
        reviewFields: "Please review these fields",
        successTitle: "Message sent!",
        successDetail: "I'll get back to you shortly.",
        errorTitle: "Could not send",
        errorRetry: "Please try again.",
      },
    },
  },

  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      resume: "Sobre mí",
      work: "Trabajos",
      contact: "Contacto",
      hire: "Contáctame",
    },
    home: {
      role: "Desarrollador Full-Stack",
      greeting: "¡Hola! Soy",
      name: "Mauricio Rodriguez",
      bio: "Me destaco en la creación de experiencias digitales elegantes y construyo productos full-stack que escalan. Desde plataformas SaaS hasta sistemas de automatización — entrega rápida, código limpio.",
      downloadCV: "Descargar CV",
      poweredBy: "Desarrollado por",
    },
    stats: [
      { num: 3, text: "Años de experiencia" },
      { num: 8, text: "Proyectos entregados" },
      { num: 10, text: "Tecnologías dominadas" },
    ],
    services: {
      items: [
        {
          num: "01",
          title: "Desarrollo de Plataformas",
          description:
            "Desarrollo a medida con foco en rendimiento y seguridad. Integraciones (APIs, pagos), panel de control y CI/CD listos para crecer.",
        },
        {
          num: "02",
          title: "Diseño de UI/UX",
          description:
            "UI/UX centrado en el usuario: investigación, arquitectura de información y prototipos. Accesibilidad y handoff impecable para dev.",
        },
        {
          num: "03",
          title: "Automatizaciones",
          description:
            "Automatizaciones end-to-end con APIs, webhooks y orquestadores (Zapier/Make) o Node/cron jobs: sincroniza datos, envía alertas, genera reportes.",
        },
      ],
    },
    resume: {
      tabs: {
        experience: "Experiencia",
        education: "Formación",
        skills: "Habilidades",
        about: "Sobre mí",
      },
      experience: {
        title: "Mi Experiencia",
        description:
          "Más de 3 años combinando soporte IT y desarrollo full-stack, perfeccionando mi desempeño con cada nuevo reto.",
        items: [
          { company: "Almotores S.A", position: "Auxiliar de Informática", duration: "2022 – Actual" },
          { company: "Independiente", position: "Desarrollador E-Commerce", duration: "2023" },
          { company: "Independiente", position: "Desarrollador Web Firma de Abogados", duration: "2024 – 2025" },
        ],
      },
      education: {
        title: "Formación",
        description: "Un camino de aprendizaje continuo entre educación formal y cursos autodidactas.",
        items: [
          { institution: "CECEP", degree: "Tecnólogo Desarrollador de IT", duration: "2021 – Actual" },
          { institution: "ISO 27000 / 27001", degree: "Certificado de Seguridad Informática", duration: "2025" },
          { institution: "Udemy", degree: "Curso de Desarrollo Full-Stack", duration: "2024" },
          { institution: "Udemy", degree: "Bootcamp Frontend con ReactJS", duration: "2024" },
          { institution: "Udemy", degree: "Bootcamp Backend con NodeJS", duration: "2024" },
          { institution: "Certificación de Investigación", degree: "Integraciones con IA", duration: "2022" },
        ],
      },
      skills: {
        title: "Mis Habilidades",
        description: "Tecnologías que uso para construir aplicaciones web, móviles y de escritorio.",
      },
      about: {
        title: "Sobre mí",
        description:
          "Soy un desarrollador full-stack que no le teme a los retos y disfruta encontrar soluciones creativas. Autodidacta por convicción y curioso por naturaleza — aprendo rápido y me adapto a cualquier entorno.",
        info: [
          { fieldName: "Nombre", fieldValue: "Mauricio Rodriguez L." },
          { fieldName: "Celular", fieldValue: "(+57) 317 768 6358" },
          { fieldName: "Experiencia", fieldValue: "3 años" },
          { fieldName: "Correo", fieldValue: "liu.galax.dev.ops@gmail.com" },
          { fieldName: "Discord", fieldValue: "liu_galax_dev_ops" },
          { fieldName: "Freelance", fieldValue: "Disponible" },
          { fieldName: "Idiomas", fieldValue: "Español e Inglés" },
        ],
      },
    },
    work: {
      live: "Ver proyecto",
      github: "Repositorio GitHub",
      inDev: "En desarrollo",
      completed: "Completado",
      projects: [
        {
          num: "01",
          category: "SyncDealer",
          title: "SyncDealer Almotores",
          description:
            "Plataforma interna de gestión de comisiones para una concesionaria multimarca (KIA, Renault, VW, JAC/Jetour). Rastrea ventas, calcula comisiones, genera PDF de nómina y gestiona la trazabilidad de entregas.",
          stack: ["React.js", "Node.js/Express", "MySQL", "Sequelize", "MUI", "Zustand"],
          image: "/assets/work/syncdealear.png",
          live: "",
          github: "",
          badge: "completed",
        },
        {
          num: "02",
          category: "Shaddai Canino",
          title: "Shaddai Canino",
          description:
            "Sitio web profesional para una marca de cuidado y veterinaria de mascotas. Presenta servicios, equipo y permite agendar citas por WhatsApp.",
          stack: ["Next.js", "Tailwind CSS", "Framer Motion"],
          image: "/assets/work/shaddai.png",
          live: "",
          github: "",
          badge: "completed",
        },
        {
          num: "03",
          category: "Atlas Market Suite",
          title: "Atlas Market Suite",
          description:
            "Dashboard SaaS de análisis de trading con señales de IA, seguimiento de portafolio y herramientas de estrategia para opciones binarias.",
          stack: ["React.js", "Node.js", "TradingView Widget", "Python"],
          image: "/assets/work/atlas.png",
          live: "",
          github: "",
          badge: "in-dev",
        },
        {
          num: "04",
          category: "Mi Lista",
          title: "MercadoApp — Mi Lista",
          description: "App móvil Android para gestión del mercado. Listas de compras con control de presupuesto, gestión de tiendas, precios compartidos por la comunidad y escaneo inteligente de facturas con OCR para detectar productos automáticamente.",
          stack: ["Flutter", "Firebase", "Google ML Kit", "Dart", "FCM"],
          image: "/assets/work/milista.png",
          live: "",
          github: "",
          badge: "in-dev",
        },
        {
          num: "05",
          category: "DentalSaaS",
          title: "Plataforma SaaS Odontológica",
          description:
            "Solución SaaS en la nube para clínicas dentales. Gestión de pacientes, agendamiento, historial de tratamientos y facturación en un solo dashboard.",
          stack: ["React.js", "Node.js/Express", "MySQL", "Tailwind CSS"],
          image: "/assets/work/dental.png",
          live: "",
          github: "",
          badge: "completed",
        },
        {
          num: "06",
          category: "IntraCom",
          title: "IntraCom",
          description:
            "Chat corporativo privado para equipos internos. Mensajería en tiempo real, vista previa de documentos (PDF, Word, Excel, ZIP), roles, búsqueda y panel de administración.",
          stack: ["React.js", "Node.js/Express", "Tailwind CSS", "MySQL/MariaDB"],
          image: "/assets/work/intracom.png",
          live: "",
          github: "",
          badge: "completed",
        },
      ],
    },
    contact: {
      heading: "Trabajemos juntos",
      subheading: "Rellena el formulario para entrar en contacto y crear lo que necesites.",
      fields: {
        firstname: "Nombre",
        lastname: "Apellido",
        email: "Correo",
        phone: "Celular",
        selectService: "Selecciona un servicio",
        message: "Escribe tu mensaje aquí.",
        send: "Enviar mensaje",
        sending: "Enviando…",
      },
      services: ["Desarrollo Web", "Diseño UI/UX", "Diseño de Logos", "Consulta personalizada"],
      info: [
        { title: "Celular", description: "(+57) 317 768 6358" },
        { title: "Correo", description: "liu.galax.dev.ops@gmail.com" },
        { title: "Discord", description: "liu_galax_dev_ops" },
      ],
      toast: {
        missingFields: "Faltan campos por completar",
        reviewFields: "Revisa los siguientes campos",
        successTitle: "¡Mensaje enviado!",
        successDetail: "Te responderé en breve.",
        errorTitle: "No se pudo enviar",
        errorRetry: "Inténtalo de nuevo.",
      },
    },
  },
};

export function detectLang() {
  if (typeof navigator === "undefined") return "es";
  const lang = navigator.language || navigator.userLanguage || "es";
  return lang.toLowerCase().startsWith("en") ? "en" : "es";
}