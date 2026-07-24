import Reveal from "./Reveal";

export default function PageHeader({ eyebrow, title, description }) {
  return (
    <section className="relative overflow-hidden bg-sand pt-16 pb-20 sm:pt-24 sm:pb-28">
      {/* Decoración */}
      <div className="pointer-events-none absolute -top-24 -right-20 h-72 w-72 rounded-full bg-blush blur-3xl opacity-70" />
      <div className="pointer-events-none absolute -bottom-28 -left-16 h-72 w-72 rounded-full bg-rose/20 blur-3xl" />

      <div className="container-mor relative text-center">
        <Reveal>
          {eyebrow ? (
            <span className="eyebrow justify-center">
              <span className="divider-dots" />
              {eyebrow}
            </span>
          ) : null}
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl leading-[1.05]">
            {title}
          </h1>
          {description ? (
            <p className="mt-5 max-w-2xl mx-auto text-muted text-base sm:text-lg leading-relaxed">
              {description}
            </p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
