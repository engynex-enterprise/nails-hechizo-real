import PageHeader from "../components/PageHeader";
import TestimonialsClient from "../components/TestimonialsClient";

export const metadata = {
  title: "Testimonios y opiniones",
  description:
    "Lee las opiniones de nuestras clientas y comparte tu experiencia con Nails Hechizo Real.",
};

export default function TestimoniosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Testimonios"
        title="Historias que nos enorgullecen"
        description="La confianza de nuestras clientas es nuestro mayor logro. Conoce sus experiencias y déjanos la tuya."
      />
      <TestimonialsClient />
    </>
  );
}
