import { Metadata } from 'next';
import { personalInfo } from '@/lib/data';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contacto',
  description: `Escribe a ${personalInfo.name} para hablar sobre proyectos, colaboraciones u oportunidades`,
  openGraph: {
    title: 'Contacto - Portafolio',
    description: `Ponte en contacto con ${personalInfo.name}`,
    images: ['/og-image.jpg'],
  },
};

export default function ContactPage() {
  const channels = [
    {
      label: 'Correo',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      label: 'GitHub',
      value: personalInfo.github.replace('https://', ''),
      href: personalInfo.github,
    },
    {
      label: 'LinkedIn',
      value: 'Jason Gomez',
      href: personalInfo.linkedin,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contacto</h1>
        <p className="text-lg text-gray-600 mb-12">
          ¿Tienes un proyecto en mente o quieres colaborar? Escríbeme y te
          responderé lo antes posible.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <section aria-labelledby="canales">
            <h2 id="canales" className="text-2xl font-bold text-gray-900 mb-6">
              Canales directos
            </h2>
            <ul className="space-y-4">
              {channels.map((channel) => (
                <li
                  key={channel.label}
                  className="bg-white p-4 rounded-lg shadow-md"
                >
                  <p className="text-sm font-semibold text-gray-700">
                    {channel.label}
                  </p>
                  <a
                    href={channel.href}
                    {...(channel.href.startsWith('http')
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                    className="text-blue-700 hover:underline break-all"
                  >
                    {channel.value}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="formulario">
            <h2 id="formulario" className="text-2xl font-bold text-gray-900 mb-6">
              Envíame un mensaje
            </h2>
            <ContactForm to={personalInfo.email} />
          </section>
        </div>
      </div>
    </div>
  );
}
