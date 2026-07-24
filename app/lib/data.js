// =========================================================
// Contenido del sitio — Nails Hechizo Real
// Edita aquí precios, servicios, textos y datos de contacto.
// Precios en pesos colombianos (COP).
// =========================================================

export const business = {
  name: "Nails Hechizo Real",
  full: "Nails Hechizo Real",
  monogram: "NHR",
  subtitle: "Belleza a domicilio · Bogotá",
  tagline: "Realzamos tu belleza natural",
  phone: "+57 312 350 9004",
  phoneHref: "tel:+573123509004",
  whatsapp: "573123509004",
  email: "hola@nailshechizoreal.com",
  address: "Servicio a domicilio",
  city: "Bogotá D.C., Colombia",
  mapsQuery: "Bogot%C3%A1+Colombia",
  hours: [
    { day: "Lunes – Domingo", time: "8:00 a.m. – 8:00 p.m." },
    { day: "Atención a domicilio", time: "Con cita previa" },
  ],
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    tiktok: "https://tiktok.com",
  },
};

export const stats = [
  { value: "+10", label: "Años de experiencia" },
  { value: "+5.000", label: "Clientas felices" },
  { value: "30+", label: "Servicios de belleza" },
  { value: "4.9★", label: "Calificación promedio" },
];

// -------- Servicios (también alimenta la página de precios) --------
export const serviceCategories = [
  {
    id: "unas",
    icon: "Sparkles",
    name: "Uñas",
    blurb:
      "Manos y pies impecables. Diseños a tu medida con productos de alta duración.",
    items: [
      { name: "Manicure clásico", price: "$25.000", duration: "45 min" },
      { name: "Manicure spa", price: "$38.000", duration: "60 min" },
      { name: "Pedicure spa", price: "$45.000", duration: "70 min" },
      { name: "Semipermanente en gel", price: "$55.000", duration: "75 min" },
      { name: "Uñas acrílicas", price: "$80.000", duration: "120 min" },
      { name: "Nail art / decoración", price: "desde $10.000", duration: "15 min" },
      { name: "Retiro y mantenimiento", price: "$30.000", duration: "40 min" },
    ],
  },
  {
    id: "cabello",
    icon: "Scissors",
    name: "Cabello",
    blurb:
      "Cortes, color y tratamientos con las últimas tendencias y asesoría personalizada.",
    items: [
      { name: "Corte y estilo (dama)", price: "$35.000", duration: "50 min" },
      { name: "Corte caballero", price: "$22.000", duration: "35 min" },
      { name: "Lavado + peinado", price: "$28.000", duration: "40 min" },
      { name: "Coloración / tinte", price: "desde $90.000", duration: "120 min" },
      { name: "Mechas / balayage", price: "desde $180.000", duration: "180 min" },
      { name: "Keratina / alisado", price: "desde $150.000", duration: "150 min" },
      { name: "Tratamiento e hidratación", price: "$60.000", duration: "60 min" },
      { name: "Peinado para eventos", price: "desde $70.000", duration: "60 min" },
    ],
  },
  {
    id: "cejas-pestanas",
    icon: "Eye",
    name: "Cejas & Pestañas",
    blurb:
      "Mirada perfecta. Diseño, laminado y extensiones para un acabado natural o de impacto.",
    items: [
      { name: "Diseño de cejas", price: "$20.000", duration: "25 min" },
      { name: "Henna / tinte de cejas", price: "$30.000", duration: "35 min" },
      { name: "Laminado de cejas", price: "$70.000", duration: "50 min" },
      { name: "Lifting de pestañas", price: "$80.000", duration: "60 min" },
      { name: "Extensiones pelo a pelo", price: "$120.000", duration: "120 min" },
      { name: "Extensiones volumen ruso", price: "$160.000", duration: "150 min" },
    ],
  },
  {
    id: "maquillaje",
    icon: "Brush",
    name: "Maquillaje",
    blurb:
      "Para tu evento especial o el día a día. Maquillaje profesional de larga duración.",
    items: [
      { name: "Maquillaje social", price: "$70.000", duration: "60 min" },
      { name: "Maquillaje + peinado (evento)", price: "$130.000", duration: "90 min" },
      { name: "Maquillaje de novia", price: "desde $180.000", duration: "120 min" },
      { name: "Clase de automaquillaje", price: "$90.000", duration: "90 min" },
    ],
  },
  {
    id: "spa-facial",
    icon: "Flower2",
    name: "Spa & Facial",
    blurb:
      "Relájate y renueva tu piel con tratamientos faciales y corporales de bienestar.",
    items: [
      { name: "Limpieza facial profunda", price: "$85.000", duration: "60 min" },
      { name: "Facial hidratante / anti-edad", price: "$110.000", duration: "75 min" },
      { name: "Masaje relajante", price: "$90.000", duration: "60 min" },
      { name: "Depilación (por zona)", price: "desde $15.000", duration: "20 min" },
    ],
  },
];

// -------- Galería de trabajos --------
// Reemplaza `image: null` por la URL de una foto real de tu trabajo.
export const galleryFilters = [
  "Todos",
  "Uñas",
  "Cabello",
  "Maquillaje",
  "Cejas & Pestañas",
  "Spa",
];

export const galleryItems = [
  { id: 1, title: "Nail art esmalte glaseado", category: "Uñas", tint: "a", image: "/img/nails1.jpg" },
  { id: 2, title: "Ondas y rizos definidos", category: "Cabello", tint: "b", image: "/img/hairstyle.jpg" },
  { id: 3, title: "Glam en tonos tierra", category: "Maquillaje", tint: "c", image: "/img/makeup1.jpg" },
  { id: 4, title: "Extensiones pelo a pelo", category: "Cejas & Pestañas", tint: "d", image: "/img/lashes1.jpg" },
  { id: 5, title: "Limpieza facial profunda", category: "Spa", tint: "e", image: "/img/facial1.jpg" },
  { id: 6, title: "Nail art pastel", category: "Uñas", tint: "b", image: "/img/nails_pexels2.jpg" },
  { id: 7, title: "Retoque de color", category: "Cabello", tint: "c", image: "/img/hair_dye.jpg" },
  { id: 8, title: "Lifting de pestañas", category: "Cejas & Pestañas", tint: "a", image: "/img/lashes2.jpg" },
  { id: 9, title: "Maquillaje social", category: "Maquillaje", tint: "d", image: "/img/makeup3.jpg" },
  { id: 10, title: "Diseño colorido", category: "Uñas", tint: "e", image: "/img/nails_pexels3.jpg" },
  { id: 11, title: "Balayage iluminado", category: "Cabello", tint: "a", image: "/img/hair_color.jpg" },
  { id: 12, title: "Ritual facial hidratante", category: "Spa", tint: "c", image: "/img/skincare.jpg" },
];

// -------- Testimonios / comentarios --------
export const testimonials = [
  {
    name: "Valentina Ríos",
    service: "Uñas acrílicas",
    rating: 5,
    text: "¡Mis uñas quedaron espectaculares y duraron más de 3 semanas perfectas! Llegaron puntuales a mi casa con todo impecable y muy higiénico. Sin duda mi servicio de confianza.",
  },
  {
    name: "Daniela Gómez",
    service: "Balayage",
    rating: 5,
    text: "Llevaba años buscando el color ideal y aquí lo lograron. Me asesoraron con muchísima paciencia. Salí feliz y renovada.",
  },
  {
    name: "Carolina Mesa",
    service: "Maquillaje de novia",
    rating: 5,
    text: "El maquillaje de mi boda fue impecable, aguantó todo el día y las fotos quedaron divinas. Profesionalismo total de principio a fin.",
  },
  {
    name: "Laura Restrepo",
    service: "Lifting de pestañas",
    rating: 5,
    text: "Amé el resultado, se ve tan natural y me ahorra tiempo cada mañana. La atención es cálida y muy detallista.",
  },
  {
    name: "Andrea Vélez",
    service: "Facial hidratante",
    rating: 5,
    text: "Mi piel quedó radiante y descansada. El ambiente relaja desde que entras. Ya reservé mi próxima cita.",
  },
  {
    name: "Manuela Ortiz",
    service: "Manicure spa",
    rating: 4,
    text: "Excelente servicio y muy puntuales con la agenda. Los detalles del nail art superaron lo que esperaba.",
  },
];

// -------- Equipo --------
export const team = [
  { name: "Sofía M.", role: "Directora & Nail Artist", specialty: "Uñas de autor", initials: "SM", tint: "a" },
  { name: "Camila R.", role: "Estilista Senior", specialty: "Color & balayage", initials: "CR", tint: "b" },
  { name: "Isabela T.", role: "Lash & Brow Expert", specialty: "Cejas y pestañas", initials: "IT", tint: "c" },
  { name: "Mariana L.", role: "Maquilladora Pro", specialty: "Novias & eventos", initials: "ML", tint: "d" },
];

// -------- Preguntas frecuentes --------
export const faqs = [
  {
    q: "¿Necesito reservar cita con anticipación?",
    a: "Sí, recomendamos agendar tu cita con al menos 24 horas de anticipación para garantizar disponibilidad. Puedes reservar desde nuestra web o por WhatsApp.",
  },
  {
    q: "¿Qué métodos de pago aceptan?",
    a: "Aceptamos efectivo, tarjetas débito/crédito, Nequi, Daviplata y transferencias bancarias.",
  },
  {
    q: "¿Puedo cancelar o reprogramar mi cita?",
    a: "Claro. Solo pedimos que nos avises con al menos 4 horas de anticipación para reagendar sin costo.",
  },
  {
    q: "¿Los productos que usan son de buena calidad?",
    a: "Trabajamos únicamente con marcas profesionales y productos hipoalergénicos, priorizando siempre la salud de tu piel, cabello y uñas.",
  },
  {
    q: "¿Cómo funciona la atención a domicilio?",
    a: "¡Vamos hasta tu casa u oficina en Bogotá! Agenda tu cita indicando tu dirección y llevamos todo lo necesario para consentirte con total higiene. También atendemos novias, eventos y grupos.",
  },
];

// Días y franjas para el formulario de agenda
export const timeSlots = [
  "8:00 a.m.",
  "9:00 a.m.",
  "10:00 a.m.",
  "11:00 a.m.",
  "12:00 p.m.",
  "1:00 p.m.",
  "2:00 p.m.",
  "3:00 p.m.",
  "4:00 p.m.",
  "5:00 p.m.",
  "6:00 p.m.",
  "7:00 p.m.",
];
