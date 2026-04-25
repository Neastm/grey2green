import React, { useState, useEffect } from 'react';
import { 
  Droplets, 
  Leaf, 
  ShieldCheck, 
  TrendingDown, 
  Building2, 
  Factory, 
  Award, 
  ArrowRight,
  Activity,
  CloudRain
} from 'lucide-react';

// --- CONFIGURATION DES IMAGES ---
// Vous pouvez facilement remplacer ces URL par vos propres images de projet
const IMAGES = {
  hero: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2000&auto=format&fit=crop", // Parc urbain moderne
  drought: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000&auto=format&fit=crop", // Terre sèche
  technology: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop", // Serveurs/Tech/Eau
  cityscape: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2000&auto=format&fit=crop" // Ville verte
};

// --- COMPOSANTS DE L'INTERFACE ---

// Composant pour l'animation au scroll
const FadeInSection = ({ children }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = React.useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    
    const { current } = domRef;
    if (current) observer.observe(current);
    return () => { if (current) observer.unobserve(current); };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  );
};

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  // Effet pour la navbar au scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-teal-500 selection:text-white">
      
      {/* NAVBAR */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-neutral-950/80 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Droplets className="text-teal-400 w-8 h-8" />
            <span className="text-2xl font-bold tracking-tighter text-white">Grey2<span className="text-emerald-400">Green</span></span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-neutral-300">
            <a href="#vision" className="hover:text-teal-400 transition-colors">Vision</a>
            <a href="#solution" className="hover:text-teal-400 transition-colors">La Solution</a>
            <a href="#avantages" className="hover:text-teal-400 transition-colors">Avantages</a>
            <a href="#cibles" className="hover:text-teal-400 transition-colors">Pour Qui ?</a>
          </div>
          <button className="bg-emerald-500 hover:bg-emerald-400 text-neutral-950 px-6 py-2.5 rounded-full font-semibold transition-all hover:scale-105 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
            Nous Contacter
          </button>
        </div>
      </nav>

      {/* HERO SECTION - IMMERSIVE */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={IMAGES.hero} alt="Parc urbain durable" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/40 via-neutral-950/60 to-neutral-950"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-20">
          <FadeInSection>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-300 mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
              Pionniers de la gestion d'eau circulaire
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
              L'eau grise.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
                L'or vert de nos villes.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              Nous permettons aux municipalités d'irriguer les parcs urbains durablement en transformant l'eau grise résidentielle en une source d'eau fiable, économique et résiliente au climat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-500 hover:bg-emerald-400 text-neutral-950 px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 group">
                Découvrir la solution
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-full font-bold text-lg border border-neutral-600 hover:border-neutral-400 bg-neutral-900/50 backdrop-blur-sm transition-all">
                Voir le Business Model
              </button>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* LE PROBLÈME (PAINS) - SPLIT SCREEN */}
      <section id="vision" className="py-24 bg-neutral-950 relative">
        <div className="max-w-7xl mx-auto px-6">
          <FadeInSection>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Le Paradoxe Urbain</h2>
                <div className="w-20 h-1 bg-red-500 mb-8"></div>
                <p className="text-lg text-neutral-400 mb-8 leading-relaxed">
                  Les villes font face à des <strong className="text-neutral-200">pénuries d'eau estivales</strong> et des obligations légales de restriction d'irrigation. Conséquence ? Des parcs secs, des critiques citoyennes et une explosion du coût de l'eau potable.
                </p>
                <ul className="space-y-4">
                  {[
                    "Restrictions d'irrigation pendant les sécheresses",
                    "Pression pour atteindre les objectifs climatiques",
                    "Coûts croissants de l'eau potable",
                    "Contraintes budgétaires municipales"
                  ].map((pain, i) => (
                    <li key={i} className="flex items-center gap-3 text-neutral-300">
                      <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                        <TrendingDown className="w-3 h-3 text-red-500" />
                      </div>
                      {pain}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 to-transparent rounded-3xl blur-2xl"></div>
                <img src={IMAGES.drought} alt="Sécheresse urbaine" className="rounded-3xl relative z-10 border border-neutral-800 shadow-2xl grayscale-[30%]" />
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* LA SOLUTION (VALUE PROPOSITION) - GLASSMORPHISM CARDS */}
      <section id="solution" className="py-32 relative">
        <div className="absolute inset-0 bg-neutral-900"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <FadeInSection>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Notre Écosystème Innovant</h2>
              <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
                Un système intégré clé en main, de la collecte à l'irrigation, piloté par un modèle d'abonnement prévisible.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Carte 1 */}
              <div className="bg-neutral-900/50 backdrop-blur-xl border border-neutral-800 p-8 rounded-3xl hover:border-teal-500/50 transition-colors group">
                <div className="w-16 h-16 rounded-2xl bg-teal-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Building2 className="w-8 h-8 text-teal-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Récupération & Filtrage</h3>
                <p className="text-neutral-400 leading-relaxed">
                  Système de récupération des eaux domestiques conforme aux normes sanitaires les plus strictes, intégré directement aux bâtiments résidentiels.
                </p>
              </div>

              {/* Carte 2 */}
              <div className="bg-neutral-900/50 backdrop-blur-xl border border-neutral-800 p-8 rounded-3xl hover:border-emerald-500/50 transition-colors group">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Stockage Adaptatif</h3>
                <p className="text-neutral-400 leading-relaxed">
                  Des réservoirs de stockage d'eau sur site, dimensionnés sur-mesure, garantissant la disponibilité de l'eau même pendant les périodes de sécheresse.
                </p>
              </div>

              {/* Carte 3 */}
              <div className="bg-neutral-900/50 backdrop-blur-xl border border-neutral-800 p-8 rounded-3xl hover:border-blue-500/50 transition-colors group">
                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Activity className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Monitoring SaaS</h3>
                <p className="text-neutral-400 leading-relaxed">
                  Une interface web/app pour le suivi des volumes d'eau récupérés, rapports environnementaux et maintenance professionnelle continue.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* BÉNÉFICES (GAINS) - MASONRY LAYOUT */}
      <section id="avantages" className="py-24 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6">
          <FadeInSection>
            <div className="flex flex-col md:flex-row gap-16">
              <div className="md:w-1/3">
                <h2 className="text-4xl font-bold mb-6 leading-tight">Créez des villes <br/><span className="text-emerald-400">auto-suffisantes</span></h2>
                <p className="text-neutral-400 mb-8">
                  Notre modèle circulaire ne résout pas seulement un problème d'irrigation, il transforme l'image de la ville et génère des économies massives.
                </p>
                <img src={IMAGES.technology} alt="Interface technologique" className="rounded-2xl border border-neutral-800 w-full object-cover h-64" />
              </div>
              
              <div className="md:w-2/3 grid sm:grid-cols-2 gap-6">
                {[
                  { icon: <CloudRain/>, title: "Résilience Climatique", desc: "Irrigation continue des parcs publics sans utiliser une seule goutte d'eau potable, même en crise." },
                  { icon: <Leaf/>, title: "Image Positive", desc: "Démontrez votre engagement environnemental aux citoyens et positionnez-vous en pionnier." },
                  { icon: <TrendingDown/>, title: "Réduction des Coûts", desc: "Baisse drastique des dépenses municipales en eau avec une prévisibilité via notre abonnement." },
                  { icon: <Award/>, title: "Certifications RSE", desc: "Aidez les partenaires immobiliers à obtenir leurs accréditations éco-responsables." }
                ].map((gain, i) => (
                  <div key={i} className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800/50 hover:bg-neutral-800 transition-colors">
                    <div className="text-teal-400 mb-4">{gain.icon}</div>
                    <h4 className="text-xl font-bold mb-2">{gain.title}</h4>
                    <p className="text-neutral-400 text-sm leading-relaxed">{gain.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* POUR QUI (CUSTOMER SEGMENTS) */}
      <section id="cibles" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={IMAGES.cityscape} alt="Ville du futur" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-neutral-950/80"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Un modèle conçu pour les acteurs du changement</h2>
              <p className="text-neutral-400">Notre technologie unit les parties prenantes autour d'un objectif commun.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-neutral-700 hover:border-teal-400 transition-colors">
                <Building2 className="w-10 h-10 text-teal-400 mb-6" />
                <h3 className="text-xl font-bold mb-3">Municipalités</h3>
                <p className="text-neutral-400 text-sm">Celles visant une infrastructure urbaine durable, cherchant à optimiser le budget public et maintenir des espaces verts à l'année.</p>
              </div>
              
              <div className="bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-neutral-700 hover:border-emerald-400 transition-colors">
                <Factory className="w-10 h-10 text-emerald-400 mb-6" />
                <h3 className="text-xl font-bold mb-3">Promoteurs & BTP</h3>
                <p className="text-neutral-400 text-sm">Développeurs immobiliers et entreprises de construction cherchant à implémenter des solutions de "Green Building".</p>
              </div>

              <div className="bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-neutral-700 hover:border-blue-400 transition-colors">
                <Award className="w-10 h-10 text-blue-400 mb-6" />
                <h3 className="text-xl font-bold mb-3">Entreprises (RSE)</h3>
                <p className="text-neutral-400 text-sm">Sociétés en quête de certifications RSE, souhaitant démontrer un impact écologique mesurable et concret.</p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* CTA & FOOTER */}
      <footer className="bg-neutral-900 pt-24 pb-12 border-t border-neutral-800 text-center">
        <div className="max-w-4xl mx-auto px-6 mb-20">
          <h2 className="text-4xl font-bold mb-6">Prêt à transformer votre gestion de l'eau ?</h2>
          <p className="text-neutral-400 mb-8 text-lg">
            Rejoignez le mouvement de la circularité de l'eau. Contactez-nous pour une étude de faisabilité sur vos infrastructures.
          </p>
          <button className="bg-teal-500 hover:bg-teal-400 text-neutral-950 px-10 py-5 rounded-full font-bold text-lg transition-all shadow-[0_0_30px_rgba(20,184,166,0.4)]">
            Planifier une consultation RSE
          </button>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500 gap-4">
          <div className="flex items-center gap-2">
            <Droplets className="w-5 h-5 text-teal-500" />
            <span className="font-bold text-neutral-300">Grey2Green</span>
          </div>
          <p>© 2026 Grey2Green. Modèle d'Affaire Basé sur le Value Proposition Canvas.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-teal-400 transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-teal-400 transition-colors">Politique de Confidentialité</a>
          </div>
        </div>
      </footer>

    </div>
  );
}