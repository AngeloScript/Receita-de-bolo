import React, { useState, useEffect } from 'react';
import { 
  Clock, 
  ShoppingCart, 
  Heart, 
  Zap, 
  ShieldCheck, 
  Star, 
  Lock,
  CheckCircle2,
  Gift,
  ArrowDown
} from 'lucide-react';
import { COPY, PAIN_POINTS, BENEFITS, BONUSES, TESTIMONIALS } from './constants';
import { CTAButton, SectionTitle, CheckItem } from './components/UIComponents';

const CHECKOUT_URL = "https://pay.cakto.com.br/37fcrbm_737629";

const App: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 59 });
  const [scrolled, setScrolled] = useState(false);

  // Urgency Timer Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds === 0) {
          if (prev.minutes === 0) return prev; // Stop at 00:00
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return { ...prev, seconds: prev.seconds - 1 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Scroll detection for sticky nav
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to scroll to pricing section (The "Last Step")
  const scrollToPricing = () => {
    const section = document.getElementById('pricing');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Direct checkout (only used in the final step)
  const handleCheckout = () => {
    window.location.href = CHECKOUT_URL;
  };

  const IconMap: Record<string, React.ReactNode> = {
    'Clock': <Clock className="w-8 h-8 text-brand-orange" />,
    'ShoppingCart': <ShoppingCart className="w-8 h-8 text-brand-orange" />,
    'Heart': <Heart className="w-8 h-8 text-brand-orange" />,
    'Zap': <Zap className="w-8 h-8 text-brand-orange" />,
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col font-sans overflow-x-hidden">
      
      {/* Top Banner (Urgency) */}
      <div className="bg-red-600 text-white text-center py-3 px-4 text-sm md:text-base font-bold sticky top-0 z-50 shadow-md">
        <div className="flex justify-center items-center gap-2 animate-pulse">
          <span>⚠️ ÚLTIMAS VAGAS COM DESCONTO:</span>
          <span className="bg-white text-red-600 px-2 py-0.5 rounded">
            {String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* 1. HERO SECTION - TEXT FOCUSED */}
      <header className="relative bg-white py-16 lg:py-24 overflow-hidden">
        <div className="container mx-auto px-4 relative z-20 text-center max-w-4xl">
            <span className="inline-block py-1 px-4 rounded-full bg-green-100 text-green-800 border border-green-200 mb-8 font-bold tracking-wide uppercase text-xs md:text-sm">
              Método Comprovado
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-[1.1] text-gray-900 tracking-tight">
              {COPY.headline}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
              {COPY.subheadline}
            </p>
            
            <div className="flex flex-col items-center gap-4">
              <CTAButton onClick={scrollToPricing} className="w-full md:w-auto text-xl md:text-2xl px-12 py-6 shadow-orange-500/40 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
                {COPY.cta}
              </CTAButton>
              <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
                <Lock className="w-4 h-4 text-green-600" />
                <span>Compra 100% Segura e Acesso Imediato</span>
              </div>
            </div>
        </div>
      </header>

      {/* 2. THE PAIN (Problematização) - NO GENERIC IMAGES */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Parece Familiar?</h2>
            <p className="text-gray-600">A maioria das pessoas falha na dieta por um simples motivo: <br/><strong className="text-gray-900">Ninguém aguenta comer comida sem graça por muito tempo.</strong></p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-red-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
              <h3 className="text-xl font-bold text-red-600 mb-6 flex items-center gap-2">
                <span className="text-2xl">🚫</span> O Jeito Errado (Sofrido)
              </h3>
              <ul className="space-y-4">
                {PAIN_POINTS.map((point, index) => (
                  <li key={index} className="flex items-start text-gray-600">
                    <span className="mr-3 text-red-400 mt-1">✕</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-green-500 relative overflow-hidden transform md:-translate-y-4">
               <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg uppercase">
                  A Solução
               </div>
              <h3 className="text-xl font-bold text-brand-green mb-6 flex items-center gap-2">
                <span className="text-2xl">✅</span> O Jeito Certo (Prazeroso)
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start text-gray-800 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-brand-green mr-3 flex-shrink-0 mt-0.5" />
                  Comer bolo de chocolate molhadinho no café da tarde.
                </li>
                <li className="flex items-start text-gray-800 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-brand-green mr-3 flex-shrink-0 mt-0.5" />
                  Pão caseiro quentinho com manteiga, sem estufamento.
                </li>
                <li className="flex items-start text-gray-800 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-brand-green mr-3 flex-shrink-0 mt-0.5" />
                  Receitas que desinflamam seu corpo enquanto você come.
                </li>
                <li className="flex items-start text-gray-800 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-brand-green mr-3 flex-shrink-0 mt-0.5" />
                  Economizar dinheiro deixando de comprar produtos "fit" caros.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE SOLUTION - BOOK VISUALIZATION (CSS ONLY) */}
      <section className="py-20 bg-brand-darkGreen text-white overflow-hidden relative">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/food.png')] opacity-5"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <SectionTitle className="text-white" subtitle="Apresentando o guia definitivo para quem ama comer bem.">
            Sabor Sem Restrições
          </SectionTitle>
          
          <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-12 max-w-5xl mx-auto">
             
             {/* CSS BOOK MOCKUP - Clean and Professional */}
             <div className="relative group perspective-1000">
                <div className="relative w-64 h-80 bg-gradient-to-br from-brand-green to-brand-darkGreen rounded-r-xl rounded-l-sm shadow-2xl transform rotate-y-12 transition-transform duration-500 group-hover:rotate-y-0 border-r-4 border-white/20">
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center border border-white/20 m-2 rounded">
                        <div className="text-xs uppercase tracking-widest text-brand-lightGreen mb-4">E-book Digital</div>
                        <h3 className="text-3xl font-extrabold text-white leading-tight mb-2">SABOR<br/>SEM<br/>RESTRIÇÕES</h3>
                        <div className="w-12 h-1 bg-brand-orange my-4"></div>
                        <p className="text-sm text-white/80">Receitas Selecionadas<br/>Zero Glúten & Zero Açúcar</p>
                    </div>
                    {/* Spine effect */}
                    <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-black/20 to-transparent"></div>
                </div>
                {/* Shadow */}
                <div className="absolute -bottom-8 left-4 w-56 h-4 bg-black/40 blur-xl rounded-[100%]"></div>
             </div>

             <div className="text-left max-w-md space-y-6">
                <p className="text-xl font-light text-brand-lightGreen">
                  Esqueça tudo o que te disseram sobre dieta.
                </p>
                <p className="text-gray-200 leading-relaxed">
                  Este material não é apenas um livro de receitas. É um <strong className="text-white">método de liberdade alimentar</strong>. 
                  Você vai aprender a alquimia exata das farinhas saudáveis e adoçantes naturais para criar pratos que seus amigos não vão acreditar que são "fit".
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="bg-white/10 p-3 rounded-lg text-center">
                    <CheckCircle2 className="w-8 h-8 mx-auto text-brand-orange mb-2" />
                    <span className="text-xs text-gray-300">Receitas Exclusivas</span>
                  </div>
                  <div className="bg-white/10 p-3 rounded-lg text-center">
                    <ShieldCheck className="w-8 h-8 mx-auto text-brand-orange mb-2" />
                    <span className="text-xs text-gray-300">Testadas e Aprovadas</span>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 4. BENEFITS ICONS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {BENEFITS.map((benefit) => (
              <div key={benefit.id} className="text-center p-6 hover:bg-gray-50 rounded-xl transition-colors">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-brand-orange mb-4">
                  {IconMap[benefit.iconName]}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SINGLE POWERFUL BONUS */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Presente Exclusivo Para Hoje</h2>
          <p className="text-gray-600 mb-10">Levando o guia de receitas agora, você ganha totalmente grátis:</p>

          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 relative overflow-hidden flex flex-col md:flex-row items-center gap-8 text-left">
             <div className="absolute top-0 left-0 w-full h-2 bg-brand-orange"></div>
             
             <div className="flex-shrink-0">
               <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center border-4 border-white shadow-sm">
                 <Gift className="w-10 h-10 text-brand-green" />
               </div>
             </div>
             
             <div>
               <div className="flex items-center gap-2 mb-2">
                 <span className="bg-brand-orange text-white text-xs font-bold px-2 py-1 rounded uppercase">Bônus Gratuito</span>
                 <span className="text-gray-400 text-sm line-through">Vendido Separadamente</span>
               </div>
               <h3 className="text-2xl font-bold text-gray-900 mb-2">Guia Detox Express (3 Dias)</h3>
               <p className="text-gray-600 mb-4">
                 Sente-se inchada? Esse protocolo simples de 3 dias vai limpar seu paladar dos industrializados e desinflamar seu intestino, preparando seu corpo para queimar gordura naturalmente.
               </p>
               <div className="flex items-center gap-2 text-sm font-bold text-brand-green">
                 <CheckCircle2 className="w-4 h-4" /> Cardápio Completo
                 <CheckCircle2 className="w-4 h-4 ml-2" /> Lista de Sucos
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* 6. SOCIAL PROOF - TEXT ONLY (Clean) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Resultados Reais de Pessoas Reais</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-gray-800 font-medium mb-4">"{t.content}"</p>
                <div className="flex items-center gap-3 border-t border-gray-200 pt-4">
                  <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
                     <img src={t.avatar} alt="Avatar" className="w-full h-full object-cover grayscale opacity-70" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{t.name}</p>
                    <p className="text-xs text-brand-green font-bold">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. GUARANTEE */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4 max-w-3xl flex flex-col md:flex-row items-center gap-6 md:gap-8">
          <div className="flex-shrink-0">
             <ShieldCheck className="w-20 h-20 text-brand-green" />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Garantia Blindada de 7 Dias</h3>
            <p className="text-gray-400">
              Teste as receitas. Se o bolo não ficar fofinho, se o pão não crescer, ou se você simplesmente não gostar da fonte do livro... eu devolvo 100% do seu dinheiro. Sem letras miúdas.
            </p>
          </div>
        </div>
      </section>

      {/* 8. FINAL OFFER - DIRECT RESPONSE STYLE (Link at Last Step) */}
      <section id="pricing" className="py-16 bg-white relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-brand-orange/20">
            <div className="bg-gray-50 p-8 text-center border-b border-gray-100">
              <h3 className="text-xl text-gray-600 mb-2">Oferta por Tempo Limitado</h3>
              <div className="flex items-center justify-center gap-4">
                <span className="text-4xl font-extrabold text-brand-darkGreen">
                  Desconto Liberado
                </span>
              </div>
              <p className="text-sm text-gray-500 mt-2">Pagamento único. Acesso vitalício.</p>
            </div>
            
            <div className="p-8 md:p-12">
              <div className="space-y-4 mb-8 max-w-sm mx-auto">
                 <div className="flex items-center text-gray-800">
                   <CheckCircle2 className="w-5 h-5 text-brand-green mr-3" />
                   <span>E-book Completo (Receitas Selecionadas)</span>
                 </div>
                 <div className="flex items-center text-gray-800">
                   <CheckCircle2 className="w-5 h-5 text-brand-green mr-3" />
                   <span><strong className="text-brand-orange">Bônus:</strong> Guia Detox Express</span>
                 </div>
                 <div className="flex items-center text-gray-800">
                   <CheckCircle2 className="w-5 h-5 text-brand-green mr-3" />
                   <span>Acesso Vitalício e Imediato</span>
                 </div>
              </div>

              {/* The Only Button that goes to Checkout */}
              <CTAButton fullWidth onClick={handleCheckout} className="text-xl md:text-2xl py-5 bg-green-600 hover:bg-green-700 animate-pulse">
                VER PREÇO E GARANTIR ACESSO
              </CTAButton>
              
              <div className="mt-6 text-center">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Credit_card_font_awesome.svg" alt="Segurança" className="h-6 mx-auto opacity-40 mb-2" />
                 <p className="text-xs text-gray-400">Seus dados estão protegidos por criptografia de ponta a ponta.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white py-8 border-t border-gray-100 text-center text-gray-400 text-xs">
        <div className="container mx-auto px-4">
          <p className="mb-2">© 2024 Sabor Sem Restrições.</p>
          <p>Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site.</p>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className={`fixed bottom-0 left-0 right-0 p-3 bg-white border-t border-gray-200 md:hidden transition-transform duration-300 z-40 ${scrolled ? 'translate-y-0' : 'translate-y-full'}`}>
        <CTAButton fullWidth onClick={scrollToPricing} className="text-lg py-3 shadow-lg">
          QUERO APROVEITAR AGORA
        </CTAButton>
      </div>
    </div>
  );
};

export default App;