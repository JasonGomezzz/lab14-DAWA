'use client';

import { FormEvent, useState } from 'react';

interface ContactFormProps {
  to: string;
}

export default function ContactForm({ to }: ContactFormProps) {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();

    const subject = `Contacto desde el portafolio - ${name}`;
    const body = `${message}\n\n--\n${name}\n${email}`;

    // El sitio no tiene backend: se abre el cliente de correo con el mensaje listo.
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const fieldClass =
    'w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200';

  return (
    <form onSubmit={handleSubmit} className="space-y-5" aria-label="Formulario de contacto">
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-1">
          Nombre
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          minLength={2}
          autoComplete="name"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-1">
          Correo electrónico
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-800 mb-1">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          rows={5}
          className={fieldClass}
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Enviar mensaje
      </button>

      <p role="status" className="text-sm text-gray-700">
        {sent
          ? 'Se abrió tu aplicación de correo con el mensaje listo para enviar.'
          : 'Al enviar se abrirá tu aplicación de correo con el mensaje ya redactado.'}
      </p>
    </form>
  );
}
