import Link from 'next/link';
import { personalInfo } from '@/lib/data';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav aria-label="Principal" className="container mx-auto px-4 py-4">
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            {personalInfo.name}
          </Link>
          <ul className="flex flex-wrap justify-center gap-x-5 sm:gap-x-6">
            <li>
              <Link
                href="/"
                className="inline-block py-2 text-gray-700 hover:text-blue-600 transition"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="inline-block py-2 text-gray-700 hover:text-blue-600 transition"
              >
                Proyectos
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="inline-block py-2 text-gray-700 hover:text-blue-600 transition"
              >
                Sobre Mí
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="inline-block py-2 text-gray-700 hover:text-blue-600 transition"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
