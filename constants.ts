'./types';

export const GAME_DURATION_SECONDS = 30;
export const LOCAL_STORAGE_KEY = 'penista_quiz_scores';
export const NUMBER_OF_QUESTIONS = 4; // Number of random questions to select from the pool

export const QUESTIONS: Question[] = [
  {
    id: 1,
    category: {
      en: "Football",
      fr: "Football",
      ar: "كرة القدم",
    },
    question: {
      en: "Which player has the most appearances in the UEFA Champions League?",
      fr: "Quel joueur compte le plus d’apparitions en Ligue des Champions ?",
      ar: "من هو أكثر لاعب مشاركة في تاريخ دوري أبطال أوروبا؟",
    },
    options: {
      en: ["Lionel Messi", "Iker Casillas", "Cristiano Ronaldo", "Xavi Hernández"],
      fr: ["Lionel Messi", "Iker Casillas", "Cristiano Ronaldo", "Xavi Hernández"],
      ar: ["ليونيل ميسي", "إيكر كاسياس", "كريستيانو رونالدو", "تشافي هيرنانديز"],
    },
    answer: {
      en: "Iker Casillas",
      fr: "Iker Casillas",
      ar: "إيكر كاسياس",
    },
  },
  {
    id: 2,
    category: {
      en: "Football",
      fr: "Football",
      ar: "كرة القدم",
    },
    question: {
      en: "Which team won the first World Cup in 1930?",
      fr: "Quelle équipe a remporté la première Coupe du Monde en 1930 ?",
      ar: "أي منتخب فاز بأول نسخة من كأس العالم سنة 1930؟",
    },
    options: {
      en: ["Brazil", "Argentina", "Uruguay", "Italy"],
      fr: ["Brésil", "Argentine", "Uruguay", "Italie"],
      ar: ["البرازيل", "الأرجنتين", "الأوروغواي", "إيطاليا"],
    },
    answer: {
      en: "Uruguay",
      fr: "Uruguay",
      ar: "الأوروغواي",
    },
  },
  {
    id: 3,
    category: {
      en: "Football",
      fr: "Football",
      ar: "كرة القدم",
    },
    question: {
      en: "Which coach has the most Champions League titles?",
      fr: "Quel entraîneur détient le plus de titres en Ligue des Champions ?",
      ar: "من هو أكثر مدرب تتويجًا بدوري أبطال أوروبا؟",
    },
    options: {
      en: ["Pep Guardiola", "Carlo Ancelotti", "Sir Alex Ferguson", "Zinedine Zidane"],
      fr: ["Pep Guardiola", "Carlo Ancelotti", "Sir Alex Ferguson", "Zinedine Zidane"],
      ar: ["بيب غوارديولا", "كارلو أنشيلوتي", "السير أليكس فيرغسون", "زين الدين زيدان"],
    },
    answer: {
      en: "Carlo Ancelotti",
      fr: "Carlo Ancelotti",
      ar: "كارلو أنشيلوتي",
    },
  },
  {
    id: 4,
    category: {
      en: "Football",
      fr: "Football",
      ar: "كرة القدم",
    },
    question: {
      en: "Which club has the most Premier League titles?",
      fr: "Quel club détient le plus de titres en Premier League ?",
      ar: "أي نادٍ يملك أكبر عدد من بطولات الدوري الإنجليزي الممتاز؟",
    },
    options: {
      en: ["Liverpool", "Arsenal", "Manchester City", "Manchester United"],
      fr: ["Liverpool", "Arsenal", "Manchester City", "Manchester United"],
      ar: ["ليفربول", "آرسنال", "مانشستر سيتي", "مانشستر يونايتد"],
    },
    answer: {
      en: "Manchester United",
      fr: "Manchester United",
      ar: "مانشستر يونايتد",
    },
  },
  {
    id: 5,
    category: {
      en: "Football",
      fr: "Football",
      ar: "كرة القدم",
    },
    question: {
      en: "Who is the youngest goalscorer in World Cup history?",
      fr: "Quel est le plus jeune buteur de l’histoire de la Coupe du Monde ?",
      ar: "من هو أصغر لاعب يسجل في تاريخ كأس العالم؟",
    },
    options: {
      en: ["Pelé", "Kylian Mbappé", "Samuel Eto’o", "Michael Owen"],
      fr: ["Pelé", "Kylian Mbappé", "Samuel Eto’o", "Michael Owen"],
      ar: ["بيليه", "كليان مبابي", "صامويل إيتو", "مايكل أوين"],
    },
    answer: {
      en: "Pelé",
      fr: "Pelé",
      ar: "بيليه",
    },
  },
  {
    id: 6,
    category: {
      en: "Football",
      fr: "Football",
      ar: "كرة القدم",
    },
    question: {
      en: "Which team has played the most World Cup matches without ever winning it?",
      fr: "Quelle équipe a joué le plus de matchs en Coupe du Monde sans jamais la gagner ?",
      ar: "أي منتخب لعب أكبر عدد من المباريات في كأس العالم دون أن يفوز باللقب؟",
    },
    options: {
      en: ["Mexico", "Sweden", "Netherlands", "Portugal"],
      fr: ["Mexique", "Suède", "Pays-Bas", "Portugal"],
      ar: ["المكسيك", "السويد", "هولندا", "البرتغال"],
    },
    answer: {
      en: "Mexico",
      fr: "Mexique",
      ar: "المكسيك",
    },
  },
  {
    id: 7,
    category: {
      en: "Football",
      fr: "Football",
      ar: "كرة القدم",
    },
    question: {
      en: "Which player scored the fastest goal in World Cup history?",
      fr: "Quel joueur a marqué le but le plus rapide de la Coupe du Monde ?",
      ar: "من اللاعب الذي سجل أسرع هدف في تاريخ كأس العالم؟",
    },
    options: {
      en: ["Clint Dempsey", "Hakan Şükür", "Cristiano Ronaldo", "Gareth Bale"],
      fr: ["Clint Dempsey", "Hakan Şükür", "Cristiano Ronaldo", "Gareth Bale"],
      ar: ["كلينت ديمبسي", "هاكان شوكور", "كريستيانو رونالدو", "غاريث بيل"],
    },
    answer: {
      en: "Hakan Şükür",
      fr: "Hakan Şükür",
      ar: "هاكان شوكور",
    },
  },
  {
    id: 8,
    category: {
      en: "Football",
      fr: "Football",
      ar: "كرة القدم",
    },
    question: {
      en: "Which national team holds the longest unbeaten streak in history?",
      fr: "Quelle sélection détient la plus longue série d’invincibilité de l’histoire ?",
      ar: "أي منتخب يملك أطول سلسلة مباريات دون خسارة في التاريخ؟",
    },
    options: {
      en: ["Brazil", "Algeria", "Italy", "Spain"],
      fr: ["Brésil", "Algérie", "Italie", "Espagne"],
      ar: ["البرازيل", "الجزائر", "إيطاليا", "إسبانيا"],
    },
    answer: {
      en: "Italy",
      fr: "Italie",
      ar: "إيطاليا",
    },
  },
  {
    id: 9,
    category: {
      en: "Football",
      fr: "Football",
      ar: "كرة القدم",
    },
    question: {
      en: "Who is the all-time top scorer in World Cup history?",
      fr: "Quel joueur est le meilleur buteur de l’histoire de la Coupe du Monde ?",
      ar: "من اللاعب الذي سجل أكبر عدد من الأهداف في تاريخ كأس العالم؟",
    },
    options: {
      en: ["Miroslav Klose", "Ronaldo Nazário", "Gerd Müller", "Pelé"],
      fr: ["Miroslav Klose", "Ronaldo Nazário", "Gerd Müller", "Pelé"],
      ar: ["ميروسلاف كلوزه", "رونالدو نازاريو", "جيرد مولر", "بيليه"],
    },
    answer: {
      en: "Miroslav Klose",
      fr: "Miroslav Klose",
      ar: "ميروسلاف كلوزه",
    },
  },
  {
    id: 10,
    category: {
      en: "Football",
      fr: "Football",
      ar: "كرة القدم",
    },
    question: {
      en: "Which club won the Champions League without losing a single match?",
      fr: "Quel club a remporté la Ligue des Champions sans perdre un seul match ?",
      ar: "أي نادٍ فاز بدوري أبطال أوروبا دون أن يخسر أي مباراة في الموسم؟",
    },
    options: {
      en: ["Barcelona 2011", "AC Milan 1994", "Real Madrid 2016", "Bayern Munich 2020"],
      fr: ["Barça 2011", "Milan 1994", "Real Madrid 2016", "Bayern 2020"],
      ar: ["برشلونة 2011", "ميلان 1994", "ريال مدريد 2016", "بايرن ميونيخ 2020"],
    },
    answer: {
      en: "Bayern Munich 2020",
      fr: "Bayern 2020",
      ar: "بايرن ميونيخ 2020",
    },
  },
];