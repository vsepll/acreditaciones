"use client"

import Link from "next/link"
import { Ticket, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

const navLinks = [
  { href: "#eventos", label: "Tipos de Evento" },
  { href: "#formularios", label: "Formularios" },
  { href: "#credenciales", label: "Credenciales" },
  { href: "#control-acceso", label: "Control de Acceso" },
  { href: "#datos", label: "Bases de Datos" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${isScrolled ? "bg-white/90 backdrop-blur-lg shadow-soft-md" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            className="flex items-center space-x-2 text-2xl font-bold text-burgundy-dark hover:text-burgundy transition-colors"
          >
            <Ticket size={32} />
            <span className="tracking-tight">Autoentrada</span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-neutral-600 hover:text-burgundy-dark px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-burgundy-extralight"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-600 hover:text-burgundy-dark focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white backdrop-blur-md pb-4 shadow-soft-lg">
          <div className="px-3 pt-2 pb-3 space-y-1 sm:px-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-neutral-700 hover:text-burgundy-dark hover:bg-burgundy-extralight block px-3 py-3 rounded-md text-base font-medium transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
