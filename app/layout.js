import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://nailshechizoreal.com"),
  title: {
    default: "Nails Hechizo Real | Uñas y Estética a Domicilio en Bogotá",
    template: "%s | Nails Hechizo Real",
  },
  description:
    "Belleza y estética a domicilio en Bogotá. Manicure, pedicure, uñas acrílicas, semipermanente, peinados, maquillaje, cejas, pestañas y tratamientos faciales. Reserva tu cita online.",
  keywords: [
    "uñas a domicilio Bogotá",
    "manicure a domicilio",
    "uñas acrílicas",
    "estética a domicilio",
    "maquillaje",
    "cejas y pestañas",
    "peinados",
    "spa facial",
  ],
  openGraph: {
    title: "Nails Hechizo Real · Belleza a domicilio en Bogotá",
    description:
      "Realzamos tu belleza natural sin salir de casa. Uñas, cabello, maquillaje y tratamientos a domicilio en Bogotá. Reserva tu cita online.",
    type: "website",
    locale: "es_CO",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
