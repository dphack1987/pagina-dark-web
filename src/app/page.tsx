<<<<<<< HEAD
"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { LanguageSelector } from "@/components/language-selector";
import { useTranslations } from "@/components/providers";
import { Service, ServiceKey } from "@/types/translations";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const { t } = useTranslations();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const servicios: Service[] = [
    {
      id: 1,
      key: "geotracker",
      verificado: true,
      destacado: true,
      ruta: "/servicios/geotracker",
      gradient: "from-red-500/20 to-purple-500/20"
    },
    {
      id: 2,
      key: "zenythos",
      verificado: true,
      destacado: true,
      ruta: "/servicios/zenythos",
      gradient: "from-blue-500/20 to-purple-500/20"
    },
    {
      id: 3,
      key: "veridia",
      verificado: true,
      destacado: true,
      ruta: "/servicios/veridia",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      id: 4,
      key: "espionaje_social",
      verificado: true,
      destacado: true,
      ruta: "/servicios/espionaje-social",
      gradient: "from-pink-500/20 to-red-500/20"
    },
    {
      id: 5,
      key: "espionaje_corporativo",
      verificado: true,
      destacado: true,
      ruta: "/servicios/espionaje-corporativo",
      gradient: "from-violet-500/20 to-indigo-500/20"
    },
    {
      id: 6,
      key: "recuperacion_cuentas",
      verificado: true,
      destacado: true,
      ruta: "/servicios/recuperacion-cuentas",
      gradient: "from-amber-500/20 to-yellow-500/20"
    },
    {
      id: 7,
      key: "hacking",
      verificado: true,
      ruta: "/servicios/hacking-medida",
      gradient: "from-green-500/20 to-blue-500/20"
    },
    {
      id: 8,
      key: "ransomware",
      verificado: true,
      ruta: "/servicios/ransomware",
      gradient: "from-yellow-500/20 to-red-500/20"
    },
    {
      id: 9,
      key: "ddos",
      verificado: true,
      ruta: "/servicios/ddos",
      gradient: "from-cyan-500/20 to-blue-500/20"
    },
    {
      id: 10,
      key: "carding",
      verificado: true,
      ruta: "/servicios/carding",
      gradient: "from-emerald-500/20 to-teal-500/20"
    },
    {
      id: 11,
      key: "phishing",
      verificado: true,
      ruta: "/servicios/phishing",
      gradient: "from-orange-500/20 to-red-500/20"
    },
    {
      id: 12,
      key: "data",
      verificado: true,
      ruta: "/servicios/datos-robados",
      gradient: "from-indigo-500/20 to-purple-500/20"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:dphack-profesional@proton.me?subject=Consulta Segura&body=${encodeURIComponent(
      `Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
      <main className="min-h-screen bg-[#0a0a0a] text-white">
        <LanguageSelector />
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-purple-500/10" />
        <div className="relative z-10 text-center px-4">
          <div className="mb-8 relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-purple-600 rounded-lg blur opacity-25 animate-pulse"></div>
            <h1 className="relative text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-purple-600">
              {t.hero.title}
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12">
            {t.hero.subtitle}
          </p>
          <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg max-w-2xl mx-auto border border-red-500/20">
            <h2 className="text-xl font-semibold mb-4 text-red-400">{t.hero.criticalInfo.title}</h2>
            <ul className="text-gray-400 space-y-2 text-left">
              <li className="flex items-center gap-2">
                <span className="text-red-500">⚠</span>
                {t.hero.criticalInfo.payments}
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-500">⚠</span>
                {t.hero.criticalInfo.communication}
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-500">⚠</span>
                {t.hero.criticalInfo.anonymity}
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-500">⚠</span>
                {t.hero.criticalInfo.support}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Navegación Rápida */}
      <section className="py-12 px-8 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 to-purple-500/5" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/servicios">
              <Card className="group relative bg-zinc-900/50 backdrop-blur-sm border-zinc-800/50 p-6 hover:border-red-500/50 transition-all cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-2">{t.services.title}</h3>
                  <p className="text-gray-400">Servicios profesionales de hacking y seguridad.</p>
                </div>
              </Card>
            </Link>
            <Link href="/gadgets">
              <Card className="group relative bg-zinc-900/50 backdrop-blur-sm border-zinc-800/50 p-6 hover:border-red-500/50 transition-all cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-2">{t.gadgets.title}</h3>
                  <p className="text-gray-400">{t.gadgets.subtitle}</p>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Servicios Destacados */}
      <section className="py-20 px-8 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 to-purple-500/5" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-12 relative text-center">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-purple-600 rounded-lg blur opacity-25"></div>
            <h2 className="relative text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-purple-600">
              {t.services.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicios.map((servicio) => (
              <Link href={servicio.ruta} key={servicio.id}>
                <Card 
                  className={`group relative bg-zinc-900/50 backdrop-blur-sm border-zinc-800/50 p-6 hover:border-red-500/50 transition-all cursor-pointer overflow-hidden ${
                    servicio.destacado ? 'ring-2 ring-red-500/20' : ''
                  }`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${servicio.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative z-10 space-y-4">
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-semibold flex items-center gap-2 text-white">
                        {t.services[servicio.key as ServiceKey].title}
                        {servicio.verificado && (
                          <svg 
                            className="w-5 h-5 text-red-500" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2"
                          >
                            <path 
                              d="M9 12l2 2 4-4" 
                              strokeLinecap="round" 
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </h3>
                    </div>
                    <p className="text-gray-400">{t.services[servicio.key as ServiceKey].description}</p>
                    <div className="pt-4 border-t border-zinc-800/50">
                      <p className="text-red-400 font-medium">{t.services[servicio.key as ServiceKey].price}</p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Garantías */}
      <section className="py-20 px-8 bg-gradient-to-b from-black to-[#0a0a0a] relative">
        <div className="absolute inset-0 bg-gradient-to-t from-red-500/5 to-purple-500/5" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-12 relative text-center">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-purple-600 rounded-lg blur opacity-25"></div>
            <h2 className="relative text-4xl font-bold">{t.whyUs.title}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-zinc-900/30 backdrop-blur-sm p-8 rounded-lg border border-red-500/20 hover:border-red-500/40 transition-colors">
              <h3 className="text-2xl font-semibold mb-6 text-red-400">{t.whyUs.guarantees.title}</h3>
              <ul className="text-gray-400 space-y-4">
                <li className="flex items-center gap-3">
                  <span className="text-red-500">►</span>
                  {t.whyUs.guarantees.verified}
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-500">►</span>
                  {t.whyUs.guarantees.escrow}
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-500">►</span>
                  {t.whyUs.guarantees.refund}
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-500">►</span>
                  {t.whyUs.guarantees.references}
                </li>
              </ul>
            </div>
            <div className="bg-zinc-900/30 backdrop-blur-sm p-8 rounded-lg border border-red-500/20 hover:border-red-500/40 transition-colors">
              <h3 className="text-2xl font-semibold mb-6 text-red-400">{t.whyUs.security.title}</h3>
              <ul className="text-gray-400 space-y-4">
                <li className="flex items-center gap-3">
                  <span className="text-red-500">►</span>
                  {t.whyUs.security.encryption}
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-500">►</span>
                  {t.whyUs.security.noLogs}
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-500">►</span>
                  {t.whyUs.security.payment}
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-500">►</span>
                  {t.whyUs.security.anonymity}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Formulario de Contacto */}
      <section className="py-20 px-8 bg-[#0a0a0a] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-red-500/5" />
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="mb-12 relative text-center">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-purple-600 rounded-lg blur opacity-25"></div>
            <h2 className="relative text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-purple-600">
              {t.contact.title}
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <Input
                  type="text"
                  placeholder={t.contact.form.name}
                  className="relative bg-black border-zinc-800 text-white placeholder:text-gray-500 focus:border-red-500/50"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
            </div>
            <div>
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <Input
                  type="email"
                  placeholder={t.contact.form.email}
                  className="relative bg-black border-zinc-800 text-white placeholder:text-gray-500 focus:border-red-500/50"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>
            <div>
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <Textarea
                  placeholder={t.contact.form.message}
                  className="relative bg-black border-zinc-800 text-white placeholder:text-gray-500 focus:border-red-500/50 min-h-[150px]"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
            </div>
            <div className="text-center">
              <Button
                type="submit"
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-purple-600 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <span className="relative px-8 py-2 bg-black rounded-lg leading-none flex items-center">
                  {t.contact.form.submit}
                </span>
              </Button>
            </div>
          </form>
        </div>
      </section>

      <footer className="py-12 px-8 bg-[#0a0a0a] border-t border-zinc-900">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500">{t.footer.rights}</p>
          <p className="text-red-500 mt-4 font-medium">{t.footer.email}</p>
        </div>
      </footer>
    </main>
  );
=======
"use client"

import { useState } from 'react'
import { Card } from "@/components/ui/card"

const servicios = [
  {
    nombre: "Penetración de Sistemas Básica",
    precio: 850,
    descripcion: "Análisis y explotación de vulnerabilidades básicas",
    tiempo: "48-72 horas",
    caracteristicas: [
      "Escaneo de puertos y servicios",
      "Identificación de vulnerabilidades comunes",
      "Reporte detallado de hallazgos",
      "Recomendaciones de seguridad"
    ]
  },
  {
    nombre: "Penetración de Sistemas Avanzada",
    precio: 2125,
    descripcion: "Análisis profundo y explotación de vulnerabilidades complejas",
    tiempo: "5-7 días",
    caracteristicas: [
      "Todo lo incluido en el plan básico",
      "Explotación de vulnerabilidades avanzadas",
      "Pruebas de ingeniería social",
      "Bypass de sistemas de seguridad"
    ]
  },
  {
    nombre: "Recuperación de Datos Premium",
    precio: 1275,
    descripcion: "Recuperación de información eliminada o protegida",
    tiempo: "3-5 días",
    caracteristicas: [
      "Recuperación de archivos eliminados",
      "Bypass de contraseñas",
      "Extracción de datos encriptados",
      "Garantía de discreción absoluta"
    ]
  },
  {
    nombre: "Anonimato Digital Total",
    precio: 1700,
    descripcion: "Servicio completo de anonimización digital",
    tiempo: "Setup inmediato + soporte 30 días",
    caracteristicas: [
      "Configuración de red TOR personalizada",
      "VPN dedicada y exclusiva",
      "Sistema de comunicación cifrada",
      "Protección contra rastreo digital"
    ]
  }
]

export default function Home() {
  const [language, setLanguage] = useState('es')

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      {/* Language Toggle */}
      <div className="absolute top-6 right-6">
        <button 
          onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
          className="bg-gray-800 border border-gray-600 px-4 py-2 rounded-md text-sm hover:bg-gray-700 transition-colors"
        >
          🌐 {language === 'es' ? 'Español' : 'English'}
        </button>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen px-6 py-20">
        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl font-bold mb-8 text-center">
          <span className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            DPhack Services
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 mb-16 text-center max-w-4xl">
          {language === 'es' 
            ? 'Servicios elite de hacking. Máximo poder, discreción absoluta.'
            : 'Elite hacking services. Maximum power, absolute discretion.'
          }
        </p>

        {/* Critical Information Section */}
        <div className="bg-black/40 border border-red-500/30 rounded-lg p-8 max-w-2xl w-full mb-16">
          <h2 className="text-2xl font-bold text-red-400 mb-6 text-center">
            {language === 'es' ? 'Información Crítica' : 'Critical Information'}
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <span className="text-red-400 mt-1">⚠️</span>
              <p className="text-gray-300">
                {language === 'es' 
                  ? 'Pagos exclusivamente en Bitcoin'
                  : 'Payments exclusively in Bitcoin'
                }
              </p>
            </div>
            
            <div className="flex items-start space-x-3">
              <span className="text-red-400 mt-1">⚠️</span>
              <p className="text-gray-300">
                {language === 'es' 
                  ? 'Comunicación segura: dphack-profesional@proton.me'
                  : 'Secure communication: dphack-profesional@proton.me'
                }
              </p>
            </div>
            
            <div className="flex items-start space-x-3">
              <span className="text-red-400 mt-1">⚠️</span>
              <p className="text-gray-300">
                {language === 'es' 
                  ? 'Garantía de anonimato absoluto'
                  : 'Absolute anonymity guarantee'
                }
              </p>
            </div>
            
            <div className="flex items-start space-x-3">
              <span className="text-red-400 mt-1">⚠️</span>
              <p className="text-gray-300">
                {language === 'es' 
                  ? 'Soporte 24/7 vía correo cifrado'
                  : '24/7 support via encrypted email'
                }
              </p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full mb-16">
          {servicios.map((servicio, index) => (
            <Card key={index} className="bg-gray-800/50 border border-gray-700 p-6 rounded-lg hover:border-purple-500/50 transition-colors">
              <h3 className="text-xl font-bold text-purple-400 mb-3">
                {servicio.nombre}
              </h3>
              <p className="text-2xl font-bold text-white mb-4">
                ${servicio.precio} <span className="text-sm text-gray-400">USD</span>
              </p>
              <p className="text-gray-400 mb-4">{servicio.descripcion}</p>
              <p className="text-sm text-purple-300 mb-4">Tiempo estimado: {servicio.tiempo}</p>
              <ul className="space-y-2">
                {servicio.caracteristicas.map((caracteristica, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-300">
                    <span className="text-purple-400 mr-2">→</span>
                    {caracteristica}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Contact Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-purple-400 mb-6">
            {language === 'es' ? 'Contáctanos' : 'Contact Us'}
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl">
            {language === 'es' 
              ? 'Para consultas especializadas y servicios personalizados, contáctanos a través de nuestro correo seguro.'
              : 'For specialized inquiries and custom services, reach out through our secure email.'
            }
          </p>
          <a 
            href="mailto:dphack-profesional@proton.me" 
            className="bg-gradient-to-r from-red-500 to-purple-500 text-white px-8 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity inline-block"
          >
            {language === 'es' ? 'Contactar Ahora' : 'Contact Now'}
          </a>
        </div>

        {/* Security Notice */}
        <div className="text-center text-sm text-gray-400 max-w-2xl">
          <p>
            {language === 'es'
              ? 'Todos nuestros servicios incluyen protección de identidad y comunicación cifrada de extremo a extremo.'
              : 'All our services include identity protection and end-to-end encrypted communication.'
            }
          </p>
        </div>
      </div>
    </div>
  )
>>>>>>> 1b206d614589b0df7079994e41120cafce736271
}
