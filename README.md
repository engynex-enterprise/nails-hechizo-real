# Nails Hechizo Real

Sitio web moderno y profesional para un servicio de belleza y estética
**a domicilio en Bogotá** (uñas, cabello, cejas & pestañas, maquillaje y
spa/facial), construido con **Next.js 16 (App Router)**, **React 19** y
**Tailwind CSS v4**.

## ✨ Características

- **Inicio**: hero animado, cinta de servicios, servicios destacados, sección
  "sobre nosotras", estadísticas, vista previa de galería y testimonios.
- **Servicios** (`/servicios`): menú completo por categoría con precio y duración.
- **Precios** (`/precios`): paquetes destacados + lista de precios completa.
- **Galería** (`/galeria`): portafolio de trabajos con **filtros por categoría**.
- **Testimonios** (`/testimonios`): opiniones de clientas + **formulario para
  dejar comentarios** con calificación por estrellas.
- **Reservar** (`/reservar`): **agenda de citas en 4 pasos** (servicio → fecha y
  hora → datos → confirmación) con validación y confirmación por WhatsApp.
- **Contacto** (`/contacto`): datos, mapa, horarios, redes y preguntas frecuentes.
- Diseño **100% responsive**, botón flotante de **WhatsApp**, animaciones suaves
  (framer-motion), tipografías elegantes (Playfair Display + Poppins) y SEO básico.

## 🚀 Cómo ejecutar

```bash
npm install       # instalar dependencias (ya instaladas)
npm run dev       # entorno de desarrollo → http://localhost:3000
npm run build     # compilar para producción
npm run start     # servir la versión de producción
```

## 🎨 Cómo personalizar

Casi todo el contenido vive en un solo lugar:

- **`app/lib/data.js`** — nombre del negocio, teléfono, WhatsApp, dirección,
  horarios, redes sociales, **servicios y precios**, galería, testimonios,
  equipo y preguntas frecuentes.
- **Fotos reales**: en `galleryItems` de `app/lib/data.js` reemplaza
  `image: null` por la URL/ruta de tus fotos (p. ej. `image: "/trabajos/unas1.jpg"`
  colocando la imagen en la carpeta `public/`). Sin foto, se muestra un
  degradado elegante de respaldo.
- **Colores y tipografías**: `app/globals.css` (bloque `@theme`, paleta
  crema/nude/rosa/vino/dorado).
- **Menú y logo**: `app/components/Navbar.js`.

## 📅 Google Calendar automático

Cada reserva se envía al endpoint `POST /api/reservar`. Si configuras las
credenciales de Google, la cita se crea **automáticamente en el Google Calendar
del negocio** (con fecha, hora, servicio, cliente y la dirección del domicilio).
Si no las configuras, el sitio sigue funcionando y el cliente puede agregar la
cita con el botón “Agregar a Google Calendar”.

**Configuración (una sola vez):**

1. Crea un proyecto en [Google Cloud Console](https://console.cloud.google.com/)
   y habilita la **Google Calendar API**.
2. Crea una **cuenta de servicio** y descarga su clave **JSON**.
3. Abre el Google Calendar del negocio → *Configuración → Compartir con
   determinadas personas* → agrega el `client_email` de la cuenta de servicio
   con permiso **“Hacer cambios en los eventos”**.
4. Copia `.env.example` a `.env.local` y completa:
   - `GOOGLE_CLIENT_EMAIL` — el `client_email` del JSON.
   - `GOOGLE_PRIVATE_KEY` — la `private_key` del JSON (entre comillas, con los `\n`).
   - `GOOGLE_CALENDAR_ID` — el correo/ID del calendario.
5. Reinicia el servidor (`npm run dev`). En producción (Vercel), agrega esas
   mismas variables en el panel de *Environment Variables*.

## 🔌 Siguientes pasos sugeridos (opcional)

- Enviar también un correo/WhatsApp automático al confirmar (SendGrid, Resend, etc.).
- Guardar reservas y comentarios en una base de datos.
- Añadir tus redes sociales reales en `app/lib/data.js` (`social`).
- Desplegar en Vercel con tu dominio.

---

Hecho con cariño para realzar tu belleza ✦
