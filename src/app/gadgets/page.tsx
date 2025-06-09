"use client";

import { useTranslations } from "../../components/providers";
import { GadgetCard } from "../../components/gadget-card";
import { LanguageSelector } from "../../components/language-selector";

export default function GadgetsPage() {
  const { t } = useTranslations();

  const gadgets = [
    {
      key: "flipper",
      gradient: "from-blue-500/20 to-purple-500/20"
    },
    {
      key: "jammers",
      gradient: "from-red-500/20 to-orange-500/20"
    },
    {
      key: "sdr",
      gradient: "from-green-500/20 to-blue-500/20"
    },
    {
      key: "rfid",
      gradient: "from-purple-500/20 to-pink-500/20"
    }
  ];

  const handleContactClick = () => {
    const mailtoLink = `mailto:dphack-profesional@proton.me?subject=Consulta%20Gadgets&body=Estoy%20interesado%20en%20obtener%20más%20información%20sobre%20los%20gadgets.`;
    window.location.href = mailtoLink;
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <LanguageSelector />
      
      {/* Hero Section */}
      <div className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-purple-500/10" />
        <div className="relative z-10 text-center px-4">
          <div className="mb-8 relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-purple-600 rounded-lg blur opacity-25 animate-pulse"></div>
            <h1 className="relative text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-purple-600">
              {t.gadgets.title}
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
            {t.gadgets.subtitle}
          </p>
        </div>
      </div>

      {/* Gadgets Grid */}
      <section className="py-20 px-8 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 to-purple-500/5" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {gadgets.map((gadget) => (
              <GadgetCard
                key={gadget.key}
                title={t.gadgets.categories[gadget.key as keyof typeof t.gadgets.categories].title}
                description={t.gadgets.categories[gadget.key as keyof typeof t.gadgets.categories].description}
                price={t.gadgets.categories[gadget.key as keyof typeof t.gadgets.categories].price}
                features={t.gadgets.categories[gadget.key as keyof typeof t.gadgets.categories].features}
                gradient={gadget.gradient}
                onClick={handleContactClick}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Información de Seguridad */}
      <section className="py-16 px-8 bg-[#0a0a0a] relative">
        <div className="absolute inset-0 bg-gradient-to-t from-red-500/5 to-purple-500/5" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-red-500/20">
            <h2 className="text-xl font-semibold mb-4 text-red-400">{t.hero.criticalInfo.title}</h2>
            <ul className="text-gray-400 space-y-2">
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
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 bg-[#0a0a0a] border-t border-zinc-900">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500">{t.footer.rights}</p>
          <p className="text-red-500 mt-4 font-medium">{t.footer.email}</p>
        </div>
      </footer>
    </main>
  );
}
