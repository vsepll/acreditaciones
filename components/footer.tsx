import { Ticket, Mail, Phone, MapPinIcon } from "lucide-react" // Renamed MapPin to avoid conflict
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="bg-neutral-900 text-neutral-300 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Brand & About */}
          <div className="md:col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4 group">
              <Ticket size={32} className="text-burgundy-light group-hover:text-burgundy transition-colors" />
              <span className="text-2xl font-bold text-white group-hover:text-burgundy-light transition-colors">
                Autoentrada
              </span>
            </Link>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Transformando la acreditación de eventos con tecnología innovadora y un servicio excepcional.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-4">Enlaces Rápidos</h5>
            <ul className="space-y-2">
              <li>
                <Link href="#eventos" className="hover:text-burgundy-light transition-colors text-sm">
                  Tipos de Evento
                </Link>
              </li>
              <li>
                <Link href="#formularios" className="hover:text-burgundy-light transition-colors text-sm">
                  Formularios
                </Link>
              </li>
              <li>
                <Link href="#credenciales" className="hover:text-burgundy-light transition-colors text-sm">
                  Credenciales
                </Link>
              </li>
              <li>
                <Link href="#control-acceso" className="hover:text-burgundy-light transition-colors text-sm">
                  Control de Acceso
                </Link>
              </li>
              <li>
                <Link href="#datos" className="hover:text-burgundy-light transition-colors text-sm">
                  Bases de Datos
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-4">Contacto</h5>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-burgundy-light flex-shrink-0" />
                <a href="mailto:info@autoentrada.com" className="hover:text-burgundy-light transition-colors">
                  contacto@autoentrada.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-burgundy-light flex-shrink-0" />
                <a href="tel:+5493525503704" className="hover:text-burgundy-light transition-colors">
                  +54 3525 503704
                </a>
              </li>
              <li className="flex items-start">
                <MapPinIcon size={16} className="mr-2 mt-0.5 text-burgundy-light flex-shrink-0" />
                <span>Cordoba, Argentina</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Placeholder for Social Media or Newsletter */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-4">Síguenos</h5>
            {/* Add social media icons here */}
            <p className="text-sm text-neutral-400">Próximamente.</p>
          </div>
        </div>
        <div className="border-t border-neutral-700 pt-8 text-center">
          <p className="text-sm text-neutral-400">&copy; {currentYear} Autoentrada. Todos los derechos reservados.</p>
          <p className="text-xs text-neutral-500 mt-1">
            Diseñado con <span className="text-burgundy-light">&hearts;</span> para eventos inolvidables.
          </p>
        </div>
      </div>
    </footer>
  )
}
