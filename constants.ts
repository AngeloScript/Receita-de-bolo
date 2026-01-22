import { Benefit, Bonus, Testimonial } from './types';

export const COPY = {
  headline: "O Segredo Para Comer Pães, Bolos e Doces Deliciosos Sem Engordar e Sem Inflamar",
  subheadline: "Descubra como substituir o glúten e o açúcar das suas receitas favoritas mantendo 100% do sabor (sua família nem vai notar a diferença).",
  cta: "QUERO GARANTIR MEU ACESSO AGORA",
  price: {
    original: "R$ 97,00",
    current: "R$ 47,00",
    installments: "5x de R$ 10,23"
  }
};

export const PAIN_POINTS = [
  "Sente culpa toda vez que come um pedaço de bolo ou pão?",
  "Vive inchada, com gases e sem energia após as refeições?",
  "Acha que comida saudável tem gosto de 'papelão' ou é muito cara?",
  "Já tentou dietas restritivas que só te deixaram mais ansiosa por doces?"
];

export const BENEFITS: Benefit[] = [
  {
    id: 1,
    title: "Ingredientes Simples",
    description: "Você encontra tudo no supermercado do seu bairro. Nada de nomes estranhos ou produtos caros.",
    iconName: "ShoppingCart"
  },
  {
    id: 2,
    title: "Pronto em Minutos",
    description: "Receitas pensadas para quem não tem tempo a perder na cozinha.",
    iconName: "Clock"
  },
  {
    id: 3,
    title: "Textura Perfeita",
    description: "Chega de massas secas e farelentas. Aprenda o segredo da umidade e maciez.",
    iconName: "Heart"
  },
  {
    id: 4,
    title: "Emagreça Comendo",
    description: "Acelere seu metabolismo eliminando os inflamatórios sem passar fome.",
    iconName: "Zap"
  }
];

export const BONUSES: Bonus[] = [
  {
    id: 1,
    title: "Protocolo Detox de 3 Dias",
    value: "R$ 49,90",
    description: "Um plano passo a passo para limpar seu paladar, desinchar a barriga e acelerar a queima de gordura antes de começar as receitas."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Mariana S.",
    role: "-5kg em 30 dias",
    content: "Eu achava que nunca mais ia comer pizza. A receita de massa low-carb desse livro mudou minha vida! Meu marido nem percebeu a diferença.",
    avatar: "https://ui-avatars.com/api/?name=Mariana+Souza&background=0D8ABC&color=fff",
    rating: 5
  },
  {
    id: 2,
    name: "Carlos M.",
    role: "Diabético Controlado",
    content: "O médico cortou meu açúcar e eu entrei em desespero. Esse guia me salvou. O bolo de chocolate é melhor que o da padaria.",
    avatar: "https://ui-avatars.com/api/?name=Carlos+Mendes&background=random&color=fff",
    rating: 5
  },
  {
    id: 3,
    name: "Fernanda L.",
    role: "Mãe de 2 filhos",
    content: "Meus filhos amam os cookies. Faço no domingo e dura a semana toda na lancheira. Finalmente paramos de gastar com industrializados.",
    avatar: "https://ui-avatars.com/api/?name=Fernanda+Lima&background=random&color=fff",
    rating: 5
  }
];