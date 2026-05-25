// ─────────────────────────────────────────────
// lib/quoterConfig.js
// Configuración de precios del cotizador interno
// ─────────────────────────────────────────────

export const QUOTER_PIN = "220504";

export const PROJECT_TYPES = [
  {
    id: "landing",
    label: "Landing Page / Web Corporativa",
    price: 300,
    icon: "🌐",
    description:
      "Página de presentación profesional de 1 a 5 secciones diseñada para captar clientes potenciales. Incluye hero, servicios, testimonios y formulario de contacto. Ideal para negocios que quieren tener presencia online rápidamente.",
    idealFor: "Negocios nuevos, startups, profesionales independientes.",
  },
  {
    id: "menu",
    label: "Menú Digital / Catálogo QR",
    price: 150,
    icon: "📱",
    description:
      "Menú o catálogo interactivo accesible escaneando un código QR. Actualizable sin necesidad de reimprimir. Permite mostrar categorías, precios, fotos y descripción de cada producto.",
    idealFor: "Restaurantes, bares, cafeterías, tiendas físicas.",
  },
  {
    id: "bot",
    label: "Bot IA + WhatsApp Automation",
    price: 500,
    icon: "🤖",
    description:
      "Agente virtual inteligente que atiende a tus clientes por WhatsApp las 24 horas. Puede calificar leads, responder preguntas frecuentes, presentar tu catálogo de productos y agendar citas — sin intervención humana.",
    idealFor: "Concesionarios, clínicas, agencias, e-commerce con alto volumen de mensajes.",
  },
  {
    id: "ecommerce",
    label: "E-Commerce / Tienda Online",
    price: 600,
    icon: "🛒",
    description:
      "Tienda en línea completa con catálogo de productos, carrito de compras, pasarela de pagos y gestión de pedidos. Los clientes pueden comprar desde cualquier dispositivo en cualquier momento.",
    idealFor: "Tiendas físicas que quieren vender online, marcas de ropa, productos artesanales.",
  },
  {
    id: "saas",
    label: "Plataforma SaaS a Medida",
    price: 1200,
    icon: "⚙️",
    description:
      "Sistema web complejo construido 100% según las necesidades de tu negocio. Puede incluir múltiples módulos, gestión de usuarios con roles, dashboards analíticos, reportes automatizados y lógica de negocio personalizada.",
    idealFor: "Empresas que necesitan digitalizar procesos internos, startups B2B.",
  },
  {
    id: "dashboard",
    label: "Dashboard / Panel Admin",
    price: 800,
    icon: "📊",
    description:
      "Interfaz de control visual para que administres tus operaciones: ventas, inventario, usuarios, métricas y más. Los datos se actualizan en tiempo real y puedes exportarlos fácilmente.",
    idealFor: "Gerentes, coordinadores, equipos que manejan mucha información.",
  },
  {
    id: "portfolio",
    label: "Portafolio Digital",
    price: 200,
    icon: "🎨",
    description:
      "Sitio personal o de marca para mostrar tu trabajo, proyectos, habilidades y datos de contacto. Diseño premium que genera credibilidad y atrae clientes u oportunidades laborales.",
    idealFor: "Diseñadores, desarrolladores, fotógrafos, asesores y profesionales creativos.",
  },
  {
    id: "redesign",
    label: "Rediseño / Reforma de Página",
    price: 250,
    icon: "✏️",
    description:
      "Modernización visual y estructural de una página web ya existente. Sin reconstruir todo desde cero — mejoramos el diseño, la velocidad, la navegación y la experiencia del usuario manteniendo el contenido actual.",
    idealFor: "Negocios con página desactualizada que quieren renovar su imagen sin perder su historial.",
  },
  {
    id: "automation",
    label: "Sistema de Automatización de Procesos",
    price: 700,
    icon: "⚡",
    description:
      "Flujos de trabajo automáticos que conectan las herramientas que ya usas: correo electrónico, WhatsApp, Google Sheets, CRM, formularios, etc. Elimina tareas repetitivas y reduce errores humanos.",
    idealFor: "Empresas con procesos manuales repetitivos: seguimiento de leads, envío de reportes, notificaciones, etc.",
  },
];

export const MODULES = [
  {
    id: "auth",
    label: "Autenticación / Login",
    price: 100,
    icon: "🔐",
    description:
      "Sistema de registro e inicio de sesión seguro. Permite tener múltiples usuarios con contraseñas encriptadas y diferentes niveles de acceso (admin, usuario, solo lectura).",
  },
  {
    id: "cms",
    label: "Panel de Administración CMS",
    price: 150,
    icon: "🗂️",
    description:
      "Interfaz sencilla para que tú o tu equipo gestionen el contenido de la plataforma sin necesidad de tocar código. Agregar productos, editar textos, subir imágenes — todo desde un panel visual.",
  },
  {
    id: "whatsapp",
    label: "Integración WhatsApp",
    price: 80,
    icon: "💬",
    description:
      "Botón flotante de WhatsApp o formulario de contacto que redirige directamente al número de tu negocio. También puede incluir mensajes pre-armados según la sección de la página que visita el usuario.",
  },
  {
    id: "payments",
    label: "Pasarela de Pagos",
    price: 120,
    icon: "💳",
    description:
      "Sistema de cobros online integrado. Según el mercado objetivo se usa Stripe (internacional), PayU (Latam) o Wompi (Colombia). Incluye confirmación de pago automática y gestión de transacciones.",
  },
  {
    id: "i18n",
    label: "Multi-idioma (EN / ES)",
    price: 60,
    icon: "🌍",
    description:
      "La plataforma detecta automáticamente el idioma del dispositivo del usuario y muestra el contenido en inglés o español. Ideal para negocios que atienden mercados internacionales.",
  },
  {
    id: "seo",
    label: "SEO Avanzado + Analytics",
    price: 80,
    icon: "🔍",
    description:
      "Optimización técnica para aparecer en los primeros resultados de Google: metadatos, velocidad de carga, schema.org, sitemap. Integración con Google Analytics y Search Console para medir el tráfico.",
  },
  {
    id: "branding",
    label: "Diseño de Marca / Branding",
    price: 150,
    icon: "🎯",
    description:
      "Creación o refinamiento de la identidad visual del proyecto: paleta de colores, tipografías, logo y guía de estilo. Garantiza consistencia visual en todos los puntos de contacto con el cliente.",
  },
  {
    id: "api",
    label: "Base de Datos + API Propia",
    price: 200,
    icon: "🗄️",
    description:
      "Backend propio con base de datos relacional (PostgreSQL/MySQL) y endpoints REST o GraphQL para manejar datos en tiempo real. Necesario para plataformas con lógica de negocio compleja.",
  },
  {
    id: "notifications",
    label: "Notificaciones Email / SMS",
    price: 70,
    icon: "📨",
    description:
      "Envío automático de correos o mensajes de texto cuando ocurren eventos en el sistema: nuevo registro, compra confirmada, cita agendada, recordatorio de pago, etc.",
  },
];

export const COMPLEXITY_LEVELS = [
  {
    id: "basic",
    label: "Básico",
    sublabel: "MVP simple",
    multiplier: 1.0,
    description:
      "Versión mínima funcional con las características esenciales. Sin extras ni personalizaciones avanzadas. Ideal para validar una idea rápidamente con el menor costo posible.",
  },
  {
    id: "standard",
    label: "Estándar",
    sublabel: "Funcionalidades completas",
    multiplier: 1.4,
    description:
      "Producto completo con todas las funcionalidades definidas, diseño cuidado y pruebas de calidad. La opción más equilibrada entre costo y calidad para un lanzamiento profesional.",
  },
  {
    id: "advanced",
    label: "Avanzado",
    sublabel: "Alta complejidad / escala",
    multiplier: 1.8,
    description:
      "Solución robusta con alto nivel de personalización, arquitectura escalable, optimizaciones de rendimiento y documentación técnica. Para proyectos de alto impacto o que esperan crecer rápidamente.",
  },
];

export const DELIVERY_OPTIONS = [
  {
    id: "normal",
    label: "Normal",
    sublabel: "4-6 semanas",
    surcharge: 0,
    description:
      "Tiempo estándar de desarrollo con sprints semanales y revisiones regulares. Permite planificación adecuada y el mejor resultado de calidad.",
  },
  {
    id: "semi",
    label: "Semi-urgente",
    sublabel: "2-3 semanas",
    surcharge: 0.2,
    description:
      "Entrega acelerada priorizando este proyecto sobre otros. Implica más horas de trabajo diario y reducción de fases de revisión. Recargo del 20%.",
  },
  {
    id: "urgent",
    label: "Urgente",
    sublabel: "1 semana",
    surcharge: 0.4,
    description:
      "Modo sprint total. El equipo trabaja dedicado exclusivamente a este proyecto para cumplir el plazo. Solo disponible para proyectos de alcance limitado. Recargo del 40%.",
  },
];

export const DEFAULT_TRM = 4100; // COP por USD
