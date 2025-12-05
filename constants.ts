import { Question } from "./types";

export const GAME_DURATION_SECONDS = 30;
export const LOCAL_STORAGE_KEY = "penista_quiz_scores";
export const NUMBER_OF_QUESTIONS = 30; // Number of random questions to select from the pool

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
      fr: "Quel joueur compte le plus d'apparitions en Ligue des Champions ?",
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
      fr: "Quel est le plus jeune buteur de l'histoire de la Coupe du Monde ?",
      ar: "من هو أصغر لاعب يسجل في تاريخ كأس العالم؟",
    },
    options: {
      en: ["Pelé", "Kylian Mbappé", "Samuel Eto'o", "Michael Owen"],
      fr: ["Pelé", "Kylian Mbappé", "Samuel Eto'o", "Michael Owen"],
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
      fr: "Quelle sélection détient la plus longue série d'invincibilité de l'histoire ?",
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
      fr: "Quel joueur est le meilleur buteur de l'histoire de la Coupe du Monde ?",
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
  {
    id: 11,
    category: {
      en: "Football",
      fr: "Football",
      ar: "كرة القدم",
    },
    question: {
      en: "Who won the 2018 Ballon d'Or?",
      fr: "Qui a remporté le Ballon d'Or en 2018 ?",
      ar: "من هو اللاعب الذي فاز بالكرة الذهبية سنة 2018؟",
    },
    options: {
      en: ["Luka Modrić", "Cristiano Ronaldo", "Lionel Messi", "Neymar"],
      fr: ["Luka Modrić", "Cristiano Ronaldo", "Lionel Messi", "Neymar"],
      ar: ["لوكا مودريتش", "كريستيانو رونالدو", "ليونيل ميسي", "نيمار"],
    },
    answer: {
      en: "Luka Modrić",
      fr: "Luka Modrić",
      ar: "لوكا مودريتش",
    },
  },
  {
    id: 12,
    category: {
      en: "Football",
      fr: "Football",
      ar: "كرة القدم",
    },
    question: {
      en: "Which team won the 2014 World Cup?",
      fr: "Quelle équipe a remporté la Coupe du Monde 2014 ?",
      ar: "أي منتخب فاز بكأس العالم 2014؟",
    },
    options: {
      en: ["Germany", "Brazil", "Argentina", "Spain"],
      fr: ["Allemagne", "Brésil", "Argentine", "Espagne"],
      ar: ["ألمانيا", "البرازيل", "الأرجنتين", "إسبانيا"],
    },
    answer: {
      en: "Germany",
      fr: "Allemagne",
      ar: "ألمانيا",
    },
  },
  {
    id: 13,
    category: {
      en: "Football",
      fr: "Football",
      ar: "كرة القدم",
    },
    question: {
      en: "Who was the top scorer of the 2002 World Cup?",
      fr: "Qui est le meilleur buteur de la Coupe du Monde 2002 ?",
      ar: "من هو هداف كأس العالم 2002؟",
    },
    options: {
      en: ["Ronaldo", "Rivaldo", "Klose", "Henry"],
      fr: ["Ronaldo", "Rivaldo", "Klose", "Henry"],
      ar: ["رونالدو البرازيلي", "ريفالدو", "كلوزه", "هنري"],
    },
    answer: {
      en: "Ronaldo",
      fr: "Ronaldo",
      ar: "رونالدو البرازيلي",
    },
  },
  {
    id: 14,
    category: {
      en: "Football",
      fr: "Football",
      ar: "كرة القدم",
    },
    question: {
      en: "Where was AFCON 2019 held?",
      fr: "Où s'est tenue la CAN 2019 ?",
      ar: "أين أقيم كأس إفريقيا 2019؟",
    },
    options: {
      en: ["Egypt", "Morocco", "Cameroon", "South Africa"],
      fr: ["Égypte", "Maroc", "Cameroun", "Afrique du Sud"],
      ar: ["مصر", "المغرب", "الكاميرون", "جنوب إفريقيا"],
    },
    answer: {
      en: "Egypt",
      fr: "Égypte",
      ar: "مصر",
    },
  },
  {
    id: 15,
    category: {
      en: "Football",
      fr: "Football",
      ar: "كرة القدم",
    },
    question: {
      en: "Who was Algeria's coach in AFCON 2019?",
      fr: "Qui était l'entraîneur de l'Algérie à la CAN 2019 ?",
      ar: "من هو مدرب الجزائر في كأس إفريقيا 2019؟",
    },
    options: {
      en: ["Belmadi", "Halilhodžić", "Saâdane", "Gourcuff"],
      fr: ["Belmadi", "Halilhodžić", "Saâdane", "Gourcuff"],
      ar: ["جمال بلماضي", "وحيد خليلوزيتش", "رابح سعدان", "غوركوف"],
    },
    answer: {
      en: "Belmadi",
      fr: "Belmadi",
      ar: "جمال بلماضي",
    },
  },
  {
    id: 16,
    category: {
      en: "Football",
      fr: "Football",
      ar: "كرة القدم",
    },
    question: {
      en: "Which African national team has the most World Cup appearances?",
      fr: "Quelle est la sélection africaine la plus présente en Coupe du Monde ?",
      ar: "من هو أكثر منتخب إفريقي مشاركة في كأس العالم؟",
    },
    options: {
      en: ["Egypt", "Cameroon", "Nigeria", "Morocco"],
      fr: ["Égypte", "Cameroun", "Nigeria", "Maroc"],
      ar: ["مصر", "الكاميرون", "نيجيريا", "المغرب"],
    },
    answer: {
      en: "Cameroon",
      fr: "Cameroun",
      ar: "الكاميرون",
    },
  },
  {
    id: 17,
    category: {
      en: "Football",
      fr: "Football",
      ar: "كرة القدم",
    },
    question: {
      en: "Which club has won the most CAF Champions League titles?",
      fr: "Quel club a remporté le plus de Ligue des Champions CAF ?",
      ar: "أي نادٍ فاز بأكبر عدد من دوري أبطال إفريقيا؟",
    },
    options: {
      en: ["Wydad", "Al Ahly", "Espérance", "TP Mazembe"],
      fr: ["Wydad", "Al Ahly", "Espérance", "TP Mazembe"],
      ar: ["الوداد", "الأهلي", "الترجي", "تي بي مازيمبي"],
    },
    answer: {
      en: "Al Ahly",
      fr: "Al Ahly",
      ar: "الأهلي",
    },
  },
  {
    id: 18,
    category: {
      en: "Football",
      fr: "Football",
      ar: "كرة القدم",
    },
    question: {
      en: "Who was the top scorer of AFCON 2019?",
      fr: "Qui était le meilleur buteur de la CAN 2019 ?",
      ar: "من كان هدّاف كأس إفريقيا 2019؟",
    },
    options: {
      en: ["Riyad Mahrez", "Sadio Mané", "Odion Ighalo", "Baghdad Bounedjah"],
      fr: ["Riyad Mahrez", "Sadio Mané", "Odion Ighalo", "Baghdad Bounedjah"],
      ar: ["رياض محرز", "ساديو ماني", "أوديون إيجالو", "بغداد بونجاح"],
    },
    answer: {
      en: "Odion Ighalo",
      fr: "Odion Ighalo",
      ar: "أوديون إيجالو",
    },
  },
  {
    id: 19,
    category: {
      en: "Football",
      fr: "Football",
      ar: "كرة القدم",
    },
    question: {
      en: "Who is the youngest player to ever play an official World Cup match?",
      fr: "Quel est le plus jeune joueur ayant disputé un match officiel de Coupe du monde ?",
      ar: "من هو أصغر لاعب سناً شارك في مباراة رسمية في كأس العالم؟",
    },
    options: {
      en: ["Pelé", "Norman Whiteside", "Samuel Eto'o", "Fabinho"],
      fr: ["Pelé", "Norman Whiteside", "Samuel Eto'o", "Fabinho"],
      ar: ["بيليه", "نورمان وايتسايد", "صامويل إيتو", "فابينيو"],
    },
    answer: {
      en: "Norman Whiteside",
      fr: "Norman Whiteside",
      ar: "نورمان وايتسايد",
    },
  },
  {
    id: 20,
    category: {
      en: "Football",
      fr: "Football",
      ar: "كرة القدم",
    },
    question: {
      en: "Who is Algeria's all-time top scorer?",
      fr: "Quel est le meilleur buteur de l'histoire de l'Algérie ?",
      ar: "من هو هدّاف الجزائر التاريخي؟",
    },
    options: {
      en: ["Riyad Mahrez", "Islam Slimani", "Rabah Madjer", "Baghdad Bounedjah"],
      fr: ["Riyad Mahrez", "Islam Slimani", "Rabah Madjer", "Baghdad Bounedjah"],
      ar: ["رياض محرز", "إسلام سليماني", "رابح ماجر", "بغداد بونجاح"],
    },
    answer: {
      en: "Islam Slimani",
      fr: "Islam Slimani",
      ar: "إسلام سليماني",
    },
  },
  {
    id: 21,
    category: {
      en: "Football",
      fr: "Football",
      ar: "كرة القدم",
    },
    question: {
      en: "Who won the African Ballon d'Or in 2023?",
      fr: "Qui a remporté le Ballon d'Or Africain en 2023 ?",
      ar: "من فاز بالكرة الذهبية الإفريقية سنة 2023؟",
    },
    options: {
      en: ["Mohamed Salah", "Sofyan Amrabat", "Victor Osimhen", "Hakim Ziyech"],
      fr: ["Mohamed Salah", "Sofyan Amrabat", "Victor Osimhen", "Hakim Ziyech"],
      ar: ["محمد صلاح", "سفيان أمرابط", "فيكتور أوسيمين", "حكيم زياش"],
    },
    answer: {
      en: "Victor Osimhen",
      fr: "Victor Osimhen",
      ar: "فيكتور أوسيمين",
    },
  },
  {
    id: 22,
    category: {
      en: "Football",
      fr: "Football",
      ar: "كرة القدم",
    },
    question: {
      en: "Which team won the first AFCON in 1957?",
      fr: "Quelle équipe a remporté la première CAN en 1957 ?",
      ar: "أي منتخب فاز بأول نسخة من كأس إفريقيا 1957؟",
    },
    options: {
      en: ["Algeria", "Sudan", "Egypt", "Ethiopia"],
      fr: ["Algérie", "Soudan", "Égypte", "Éthiopie"],
      ar: ["الجزائر", "السودان", "مصر", "إثيوبيا"],
    },
    answer: {
      en: "Egypt",
      fr: "Égypte",
      ar: "مصر",
    },
  },
  {
    id: 23,
    category: {
      en: "Football",
      fr: "Football",
      ar: "كرة القدم",
    },
    question: {
      en: "Which African player has scored the most World Cup goals?",
      fr: "Quel joueur africain a inscrit le plus de buts en Coupe du Monde ?",
      ar: "أي لاعب إفريقي سجل أكبر عدد من الأهداف في تاريخ كأس العالم؟",
    },
    options: {
      en: ["Asamoah Gyan", "Samuel Eto'o", "Didier Drogba", "Roger Milla"],
      fr: ["Asamoah Gyan", "Samuel Eto'o", "Didier Drogba", "Roger Milla"],
      ar: ["أسامواه جيان", "صامويل إيتو", "ديديه دروغبا", "روجيه ميلا"],
    },
    answer: {
      en: "Asamoah Gyan",
      fr: "Asamoah Gyan",
      ar: "أسامواه جيان",
    },
  },
  {
    id: 24,
    category: {
      en: "Football",
      fr: "Football",
      ar: "كرة القدم",
    },
    question: {
      en: "Which team won AFCON 2012?",
      fr: "Quelle équipe a remporté la CAN 2012 ?",
      ar: "أي منتخب فاز بكأس إفريقيا 2012؟",
    },
    options: {
      en: ["Egypt", "Nigeria", "Zambia", "Ivory Coast"],
      fr: ["Égypte", "Nigeria", "Zambie", "Côte d'Ivoire"],
      ar: ["مصر", "نيجيريا", "زامبيا", "ساحل العاج"],
    },
    answer: {
      en: "Zambia",
      fr: "Zambie",
      ar: "زامبيا",
    },
  },
  {
    id: 25,
    category: {
      en: "Football",
      fr: "Football",
      ar: "كرة القدم",
    },
    question: {
      en: "Which national team has participated in every World Cup edition?",
      fr: "Quelle sélection a participé à toutes les éditions de la Coupe du monde ?",
      ar: "أي منتخب شارك في جميع نسخ كأس العالم منذ تأسيس البطولة؟",
    },
    options: {
      en: ["Brazil", "Argentina", "Spain", "France"],
      fr: ["Brésil", "Argentine", "Espagne", "France"],
      ar: ["البرازيل", "الأرجنتين", "إسبانيا", "فرنسا"],
    },
    answer: {
      en: "Brazil",
      fr: "Brésil",
      ar: "البرازيل",
    },
  },
  {
    id: 26,
    category: {
      en: "Football",
      fr: "Football",
      ar: "كرة القدم",
    },
    question: {
      en: "Which African country has won the most Africa Cup of Nations titles?",
      fr: "Quel est le pays africain le plus titré en Coupe d'Afrique des Nations ?",
      ar: "من هو المنتخب الإفريقي الأكثر تتويجًا بكأس أمم إفريقيا؟",
    },
    options: {
      en: ["Egypt", "Cameroon", "Nigeria", "Ghana"],
      fr: ["Égypte", "Cameroun", "Nigeria", "Ghana"],
      ar: ["مصر", "الكاميرون", "نيجيريا", "غانا"],
    },
    answer: {
      en: "Egypt",
      fr: "Égypte",
      ar: "مصر",
    },
  },
  {
    id: 27,
    category: {
      en: "Football",
      fr: "Football",
      ar: "كرة القدم",
    },
    question: {
      en: "Which national team won the AFCON with the youngest average age in history?",
      fr: "Quelle équipe a remporté la CAN avec la plus jeune moyenne d'âge de l'histoire ?",
      ar: "أي منتخب فاز بكأس أمم إفريقيا وهو يملك أصغر معدل أعمار في التاريخ؟",
    },
    options: {
      en: ["Nigeria", "Egypt", "Ghana", "Algeria"],
      fr: ["Nigeria", "Égypte", "Ghana", "Algérie"],
      ar: ["نيجيريا", "مصر", "غانا", "الجزائر"],
    },
    answer: {
      en: "Ghana",
      fr: "Ghana",
      ar: "غانا",
    },
  },
  {
    id: 28,
    category: {
      en: "Football",
      fr: "Football",
      ar: "كرة القدم",
    },
    question: {
      en: "Who is the only African player to win the Ballon d'Or?",
      fr: "Quel est le seul joueur africain à avoir remporté le Ballon d'Or ?",
      ar: "من هو اللاعب الإفريقي الوحيد المتوج بالكرة الذهبية العالمية؟",
    },
    options: {
      en: ["George Weah", "Samuel Eto'o", "Yaya Touré", "Didier Drogba"],
      fr: ["George Weah", "Samuel Eto'o", "Yaya Touré", "Didier Drogba"],
      ar: ["جورج ويا", "صامويل إيتو", "يايا توريه", "ديدييه دروغبا"],
    },
    answer: {
      en: "George Weah",
      fr: "George Weah",
      ar: "جورج ويا",
    },
  },
  {
    id: 29,
    category: {
      en: "Football",
      fr: "Football",
      ar: "كرة القدم",
    },
    question: {
      en: "Which country hosted the first Africa Cup of Nations in 1957?",
      fr: "Dans quel pays a eu lieu la première CAN en 1957 ?",
      ar: "أين أقيمت أول بطولة لكأس أمم إفريقيا سنة 1957؟",
    },
    options: {
      en: ["Sudan", "Egypt", "Ethiopia", "Morocco"],
      fr: ["Soudan", "Égypte", "Éthiopie", "Maroc"],
      ar: ["السودان", "مصر", "إثيوبيا", "المغرب"],
    },
    answer: {
      en: "Sudan",
      fr: "Soudan",
      ar: "السودان",
    },
  },
  {
    id: 30,
    category: {
      en: "Football",
      fr: "Football",
      ar: "كرة القدم",
    },
    question: {
      en: "Which national team won the Euro without winning a single group-stage match?",
      fr: "Quelle équipe a remporté l'Euro sans gagner un seul match de la phase de groupes ?",
      ar: "من المنتخب الوحيد الذي فاز بكأس أوروبا دون أن يفوز بأي مباراة في دور المجموعات؟",
    },
    options: {
      en: ["Greece", "Portugal", "Denmark", "Italy"],
      fr: ["Grèce", "Portugal", "Danemark", "Italie"],
      ar: ["اليونان", "البرتغال", "الدنمارك", "إيطاليا"],
    },
    answer: {
      en: "Portugal",
      fr: "Portugal",
      ar: "البرتغال",
    },
  },
];
