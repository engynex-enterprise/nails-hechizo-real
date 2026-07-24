import { business } from "../lib/data";

export default function WhatsAppButton() {
  const msg = encodeURIComponent(
    `¡Hola ${business.name}! Me gustaría agendar una cita a domicilio 💅`
  );
  return (
    <a
      href={`https://wa.me/${business.whatsapp}?text=${msg}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-6 right-6 z-40 grid place-items-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 hover:scale-110 transition-transform animate-float-slow"
    >
      <svg viewBox="0 0 32 32" width="28" height="28" fill="currentColor" aria-hidden="true">
        <path d="M16.004 3C9.383 3 4 8.383 4 15.004c0 2.117.555 4.184 1.61 6.004L4 29l8.164-1.57a11.94 11.94 0 0 0 3.84.63h.004C22.625 28.06 28 22.676 28 16.055 28 9.434 22.625 3 16.004 3zm0 21.906h-.004a9.9 9.9 0 0 1-3.41-.605l-.244-.09-4.85.933.98-4.73-.16-.25a9.86 9.86 0 0 1-1.51-5.31c0-5.47 4.45-9.92 9.93-9.92 2.65 0 5.14 1.035 7.01 2.91a9.86 9.86 0 0 1 2.9 7.01c0 5.47-4.45 9.92-9.92 9.92zm5.44-7.43c-.297-.15-1.76-.87-2.03-.968-.273-.1-.47-.15-.67.15-.198.296-.767.967-.94 1.166-.173.198-.347.223-.644.074-.297-.15-1.256-.463-2.393-1.475-.884-.788-1.48-1.762-1.653-2.06-.173-.297-.018-.457.13-.606.134-.133.297-.347.446-.52.15-.174.198-.298.297-.497.1-.198.05-.372-.025-.52-.074-.15-.67-1.612-.918-2.207-.242-.58-.487-.5-.67-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.478s1.065 2.875 1.213 3.074c.15.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.695.626.712.226 1.36.194 1.872.118.571-.085 1.76-.72 2.008-1.414.248-.695.248-1.29.173-1.415-.074-.124-.272-.198-.57-.347z" />
      </svg>
    </a>
  );
}
