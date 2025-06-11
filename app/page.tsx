
"use client"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FeatureCard from "@/components/feature-card"
import SectionTitle from "@/components/section-title"
import { Button } from "@/components/ui/button"
import {
  Ticket,
  Users,
  MapPin,
  CreditCard,
  QrCode,
  CheckCircle,
  ListChecks,
  ScanLine,
  FileSpreadsheet,
  Smartphone,
  Printer,
  Watch,
  ChevronRight,
  Sparkles,
} from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function HomePage() {
  const iconProps = { size: 36 } // className will be applied in FeatureCard

  const eventTypes = [
    {
      icon: <Ticket {...iconProps} />,
      title: "Entradas Flexibles",
      description: "Configura entradas con o sin precio, adaptadas a cada tipo de asistente y evento.",
      items: ["Con precio o gratuitas", "Públicas o con acceso por enlace privado", "Cupos limitados"],
    },
    {
      icon: <Users {...iconProps} />,
      title: "Tipos de Tickets",
      description: "Diferencia tus asistentes con tickets personalizados para cada rol o categoría.",
      items: ["Expositores / Visitantes", "Generales o numerados", "VIP y cortesías"],
    },
    {
      icon: <MapPin {...iconProps} />,
      title: "Mapas Interactivos",
      description: "Permite a los visitantes visualizar sus ubicaciones y explorar el evento fácilmente.",
      items: ["Integración de mapas del recinto", "Visualización de asientos/stands", "Puntos de interés"],
    },
  ]

  const credentialTypes = [
    {
      icon: <Sparkles {...iconProps} />,
      title: "Diseño Personalizado",
      description: "Creamos credenciales únicas que reflejan la identidad de tu marca y evento.",
    },
    {
      icon: <CreditCard {...iconProps} />,
      title: "Físicas Pre-impresas",
      description: "Credenciales de alta calidad con datos variables aplicados mediante stickers o sin datos variables con impresion directa.",
    },
    {
      icon: <Watch {...iconProps} />,
      title: "Pulseras Preimpresas",
      description: "Pulseras para identificación de asistentes, con personalización sobre el evento.",
    },
    {
      icon: <Watch {...iconProps} />,
      title: "Pulseras con datos variables",
      description: "Pulseras para identificación de asistentes, con personalización sobre el evento impresas en el momento.",
    },
    {
      icon: <Printer {...iconProps} />,
      title: "Impresión en Sitio",
      description:
        "Soluciones ágiles para imprimir credenciales y pulseras al momento",
    },
    {
      icon: <QrCode {...iconProps} />,
      title: "Digitales QR",
      description: "Credenciales en el smartphone del asistente, accesibles y ecológicas.",
    },
    {
      icon: <Smartphone {...iconProps} />,
      title: "App de Evento",
      description: "Integra la credencial digital en una app completa con agenda, networking y más.",
    },
  ]

  const accessControlFeatures = [
    {
      icon: <ScanLine {...iconProps} />,
      title: "Canje Ágil",
      description: "Agiliza la entrega de credenciales físicas mediante el escaneo de QR o DNI.",
    },
    {
      icon: <ListChecks {...iconProps} />,
      title: "Validación Rápida",
      description: "Control de acceso eficiente escaneando cualquier tipo de credencial (física o digital) Con la capacidad de definir sectores o cantidad de validaciones por ticket.",
    },
    {
      icon: <CheckCircle {...iconProps} />,
      title: "Gestión de Capacidad",
      description: "Monitorea en tiempo real el aforo y gestiona listas de espera de forma organizada.",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-neutral-800">
      <Navbar />
      <main className="pt-0">
        {" "}
        {/* Navbar is fixed, so no need for pt-20 here if navbar is transparent initially */}
        {/* Hero Section */}
        <section className="relative min-h-[90vh] md:min-h-screen flex items-center bg-gradient-to-br from-burgundy-extralight via-white to-slate-100 py-20 md:py-0 overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            {/* Subtle background pattern or abstract shapes if desired */}
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                className="text-center lg:text-left"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "circOut" }}
              >
                <motion.div
                  className="bg-burgundy-extralight text-burgundy-dark inline-block text-xs font-medium px-3 py-1 rounded-full mb-4 shadow-sm"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  Soluciones Integrales de Acreditación
                </motion.div>
                <h1 className="text-5xl sm:text-5xl md:text-6xl font-light mb-6 tracking-tighter">
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-burgundy-dark to-burgundy-light leading-tight py-1">
                    Acreditación Inteligente  
                  </span>
                  
                </h1>
                <p className="text-base sm:text-xl text-neutral-600 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                  Transformamos la gestión de acceso con soluciones de acreditación personalizadas, eficientes y
                  modernas. Desde el registro online hasta el control en puerta, optimiza cada interacción.
                </p>
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.7 }}
                >

                </motion.div>
              </motion.div>
              <motion.div
                className="relative hidden lg:flex justify-center items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 80 }}
              >
                <div className="absolute -top-16 -right-12 w-40 h-40 bg-burgundy-light/10 rounded-full filter blur-2xl animate-float delay-100"></div>
                <div className="absolute -bottom-16 -left-12 w-48 h-48 bg-slate-400/10 rounded-2xl filter blur-2xl animate-float animation-delay-500"></div>
                <Image
                  src="/event-accreditation.png"
                  alt="Soluciones de acreditación Autoentrada"
                  width={580}
                  height={580}
                  priority
                  className="rounded-3xl shadow-soft-lg object-contain transform transition-all duration-500 hover:scale-105"
                />
              </motion.div>
            </div>
          </div>
        </section>
        {/* Tipos de Evento Section */}
        <section id="eventos" className="bg-white py-20 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle title="Adaptados a Cada Evento" subtitle="Nuestras Capacidades" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {eventTypes.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </section>
        {/* Formularios de Inscripción Section */}
        <section id="formularios" className="bg-burgundy-extralight/50 py-20 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle title="Inscripciones Simplificadas" subtitle="Registro Online Eficaz" />
            <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <h3 className="text-3xl font-bold mb-6 text-neutral-800 tracking-tight">
                  Formularios Inteligentes y Personalizados
                </h3>
                <p className="text-neutral-600 mb-8 text-lg leading-relaxed">
                  Creamos formularios de inscripción a medida, intuitivos y que recopilan la información esencial para
                  tu evento. Optimiza el proceso de registro y mejora la experiencia de tus asistentes desde el primer
                  contacto.
                </p>
                <ul className="space-y-3 text-neutral-600 text-md">
                  {[
                    "Campos 100% personalizables a tus necesidades.",
                    "Confirmaciones y comunicaciones automáticas.",
                    "Diseño responsive adaptado a todos los dispositivos.",
                    "Validación de datos en tiempo real para evitar errores.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle size={22} className="text-burgundy-dark mr-3 mt-0.5 flex-shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                className="flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              >
                <Image
                  src="/formulario-autoentrada.png"
                  alt="Ejemplo de formulario de inscripción de Autoentrada"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-soft-lg object-contain ring-1 ring-neutral-900/5"
                />
              </motion.div>
            </div>
          </div>
        </section>
        {/* Tipo de Credenciales Section */}
        <section id="credenciales" className="bg-white py-20 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle title="Identificación Profesional y Moderna" subtitle="Tipos de Credenciales" />
            <motion.div
              className="max-w-4xl mx-auto mb-16 md:mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <video
                className="rounded-2xl shadow-soft-lg w-full ring-1 ring-neutral-900/5 aspect-video object-cover"
                src="/video.mp4"
                autoPlay
                loop
                muted
                playsInline
                poster="/event-accreditation.png" // Optional: poster image
              >
                Tu navegador no soporta el tag de video.
              </video>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {credentialTypes.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </section>
        {/* Control de Accesos Section */}
        <section id="control-acceso" className="bg-burgundy-extralight/50 py-20 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle title="Acceso Seguro y Eficaz" subtitle="Control de Accesos Inteligente" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {accessControlFeatures.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </section>
        {/* Bases de Datos Section */}
        <section id="datos" className="bg-white py-20 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle title="Información Valiosa a Tu Alcance" subtitle="Análisis y Reportes" />
            <div className="max-w-3xl mx-auto">
              <FeatureCard
                icon={<FileSpreadsheet {...iconProps} />}
                title="Data Points Detallados y Accionables"
                description="Disponibilizamos todos los data points recopilados de tus asistentes en un archivo Excel y dashboards interactivos, con campos filtrables. Obtén insights valiosos para futuras ediciones y estrategias de marketing."
                items={[
                  "Exportación en múltiples formatos (Excel, CSV)",
                  "Dashboards visuales y personalizables",
                  "Análisis demográfico y de comportamiento en tiempo real",
                  "Cumplimiento estricto de normativas de protección de datos (GDPR)",
                  "Segmentación avanzada para comunicación post-evento",
                ]}
                className="bg-white/80 backdrop-blur-2xl shadow-soft-lg border-neutral-200"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
