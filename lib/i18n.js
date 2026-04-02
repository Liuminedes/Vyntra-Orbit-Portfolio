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
      bio: "We build digital products that work — and that people actually want to use. From management platforms to automation systems, we deliver fast, clean and ready to grow.",
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
            "We build custom web platforms from scratch — tailored to how your business works. Includes admin panels, data management, payment integrations and everything you need to operate online.",
        },
        {
          num: "02",
          title: "UI/UX Design",
          description:
            "We design interfaces that are easy to understand and enjoyable to use. Clean, modern and ready for your developers — no guesswork needed.",
        },
        {
          num: "03",
          title: "Automation",
          description:
            "We connect your tools and eliminate manual, repetitive work. Your systems talk to each other automatically — saving you time and reducing errors every day.",
        },
        {
          num: "04",
          title: "Technical Support",
          description:
            "We take care of your platform so you don't have to worry. Fast response, continuous monitoring and constant improvements — your product always running at its best.",
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
          { fieldName: "Email", fieldValue: "vyntraorbit@gmail.com" },
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
      subheading: "Tell us about your project and we'll get back to you with a clear proposal — no obligations.",
      fields: {
        firstname: "First name",
        lastname: "Last name",
        email: "Email",
        phone: "Phone",
        selectService: "What do you need?",
        message: "Tell us about your project",
        send: "Send message",
        sending: "Sending…",
      },
      services: [
        "Custom Web Platform",
        "SaaS Product",
        "Mobile App (Flutter)",
        "UI/UX Design",
        "Automation & Integrations",
        "Technical Support",
        "Other / Let's talk",
      ],
      info: [
        { title: "Phone", description: "(+57) 317 768 6358" },
        { title: "Email", description: "vyntraorbit@gmail.com" },
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
      resume: "Nosotros",
      work: "Trabajos",
      contact: "Contacto",
      hire: "Contáctame",
    },
    home: {
      role: "Desarrollador Full-Stack",
      greeting: "¡Hola! Somos",
      name: "Vyntra Orbit",
      bio: "Construimos productos digitales que funcionan — y que la gente realmente quiere usar. Desde plataformas de gestión hasta sistemas de automatización, entregamos rápido, limpio y listo para crecer.",
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
            "Construimos plataformas web personalizadas desde cero — adaptadas a cómo funciona tu negocio. Incluye paneles de control, gestión de datos, integraciones de pago y todo lo que necesitas para operar en línea.",
        },
        {
          num: "02",
          title: "Diseño de UI/UX",
          description:
            "Diseñamos interfaces fáciles de entender y agradables de usar. Modernas, limpias y listas para tus desarrolladores — sin adivinar nada.",
        },
        {
          num: "03",
          title: "Automatizaciones",
          description:
            "Conectamos tus herramientas y eliminamos el trabajo manual y repetitivo. Tus sistemas se comunican solos — ahorrándote tiempo y reduciendo errores todos los días.",
        },
        {
          num: "04",
          title: "Soporte Técnico",
          description:
            "Nos encargamos de tu plataforma para que tú no tengas que preocuparte. Respuesta rápida, monitoreo continuo y mejoras constantes — tu producto siempre funcionando al máximo.",
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
          { fieldName: "Correo", fieldValue: "vyntraorbit@gmail.com" },
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
            "Dashboard de análisis de trading con señales de inteligencia artificial, seguimiento de portafolio y herramientas de estrategia para traders activos.",
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
          description: "App móvil para Android que te ayuda a organizar el mercado. Listas de compras, control de presupuesto, comparación de precios entre tiendas y escaneo de facturas para detectar productos automáticamente.",
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
            "Plataforma en la nube para clínicas dentales. Gestión de pacientes, agendamiento de citas, historial de tratamientos y facturación — todo en un solo lugar.",
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
            "Chat interno para equipos de trabajo. Mensajería en tiempo real, vista previa de documentos, manejo de roles y panel de administración — todo dentro de tu empresa.",
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
      subheading: "Cuéntanos sobre tu proyecto y te respondemos con una propuesta clara — sin compromisos.",
      fields: {
        firstname: "Nombre",
        lastname: "Apellido",
        email: "Correo",
        phone: "Celular",
        selectService: "¿Qué necesitas?",
        message: "Cuéntanos sobre tu proyecto",
        send: "Enviar mensaje",
        sending: "Enviando…",
      },
      services: [
        "Plataforma Web a medida",
        "Producto SaaS",
        "App Móvil (Flutter)",
        "Diseño UI/UX",
        "Automatizaciones e Integraciones",
        "Soporte Técnico",
        "Otro / Hablemos",
      ],
      info: [
        { title: "Celular", description: "(+57) 317 768 6358" },
        { title: "Correo", description: "vyntraorbit@gmail.com" },
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