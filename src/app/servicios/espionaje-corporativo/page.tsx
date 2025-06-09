"use client";

import { useTranslations } from "@/components/providers";
import { LanguageSelector } from "@/components/language-selector";

export default function EspionajeCorporativoPage() {
  const { t } = useTranslations();

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <LanguageSelector />
      
      {/* Hero Section */}
      <div className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-indigo-500/10" />
        <div className="relative z-10 text-center px-4">
          <div className="mb-8 relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 to-indigo-600 rounded-lg blur opacity-25 animate-pulse"></div>
            <h1 className="relative text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-indigo-600">
              {t.services.espionaje_corporativo.title}
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
            {t.services.espionaje_corporativo.description}
          </p>
          <p className="mt-8 text-2xl font-bold text-violet-400">
            {t.services.espionaje_corporativo.price}
          </p>
        </div>
      </div>

      {/* Información de Seguridad */}
      <section className="py-16 px-8 bg-[#0a0a0a] relative">
        <div className="absolute inset-0 bg-gradient-to-t from-violet-500/5 to-indigo-500/5" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-violet-500/20">
            <h2 className="text-xl font-semibold mb-4 text-violet-400">{t.hero.criticalInfo.title}</h2>
            <ul className="text-gray-400 space-y-2">
              <li className="flex items-center gap-2">
                <span className="text-violet-500">⚠</span>
                {t.hero.criticalInfo.payments}
              </li>
              <li className="flex items-center gap-2">
                <span className="text-violet-500">⚠</span>
                {t.hero.criticalInfo.communication}
              </li>
              <li className="flex items-center gap-2">
                <span className="text-violet-500">⚠</span>
                {t.hero.criticalInfo.anonymity}
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 bg-[#0a0a0a] border-t border-zinc-900">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500">{t.footer.rights}</p>
          <p className="text-violet-500 mt-4 font-medium">{t.footer.email}</p>
        </div>
      </footer>
    </main>
  );
}
