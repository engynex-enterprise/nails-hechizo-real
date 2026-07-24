import PageHeader from "../components/PageHeader";
import GalleryGrid from "../components/GalleryGrid";
import CTASection from "../components/CTASection";

export const metadata = {
  title: "Galería de trabajos",
  description:
    "Explora nuestra galería de trabajos realizados: uñas, cabello, maquillaje, cejas, pestañas y tratamientos faciales.",
};

export default function GaleriaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Portafolio"
        title="Nuestros trabajos"
        description="Cada trabajo es único, como tú. Filtra por categoría y descubre lo que podemos crear juntas."
      />

      <section className="container-mor py-20">
        <GalleryGrid />

        <p className="text-center text-xs text-muted/80 mt-14 max-w-xl mx-auto">
          💡 Estas son fotografías profesionales de muestra. Puedes
          reemplazarlas por fotos de tus propios trabajos editando el campo{" "}
          <code>image</code> de cada elemento en <code>app/lib/data.js</code>.
        </p>
      </section>

      <section className="pb-24">
        <CTASection />
      </section>
    </>
  );
}
