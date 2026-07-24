import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
  light = false,
}) {
  return (
    <Reveal className={center ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}>
      {eyebrow ? (
        <span className={`eyebrow ${center ? "justify-center" : ""} ${light ? "!text-gold-light" : ""}`}>
          {center ? <span className="divider-dots" /> : null}
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={`mt-4 text-3xl sm:text-4xl md:text-5xl leading-[1.1] ${
          light ? "!text-cream" : ""
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 text-base sm:text-lg leading-relaxed ${
            light ? "text-cream/75" : "text-muted"
          }`}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
