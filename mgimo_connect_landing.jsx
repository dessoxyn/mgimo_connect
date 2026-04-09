const { useEffect, useMemo, useRef, useState } = React;

function IconBase({ className = "", children, fill = "none", ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={fill}
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

const ArrowRight = (props) => (
  <IconBase {...props}>
    <path d="M5 12h14" />
    <path d="m13 5 7 7-7 7" />
  </IconBase>
);

const BadgeCheck = (props) => (
  <IconBase {...props}>
    <path d="M12 3.5 9.6 5.2 6.7 5l-.8 2.8L3.5 9.5l1.2 2.5-1.2 2.5 2.4 1.7.8 2.8 2.9-.2 2.4 1.7 2.4-1.7 2.9.2.8-2.8 2.4-1.7-1.2-2.5 1.2-2.5-2.4-1.7-.8-2.8-2.9.2z" />
    <path d="m9 12 2 2 4-5" />
  </IconBase>
);

const BriefcaseBusiness = (props) => (
  <IconBase {...props}>
    <rect x="3" y="7" width="18" height="12" rx="2.5" />
    <path d="M9 7V5.8A1.8 1.8 0 0 1 10.8 4h2.4A1.8 1.8 0 0 1 15 5.8V7" />
    <path d="M3 12h18" />
  </IconBase>
);

const CalendarDays = (props) => (
  <IconBase {...props}>
    <rect x="3" y="5" width="18" height="16" rx="2.5" />
    <path d="M8 3v4M16 3v4M3 10h18" />
    <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
  </IconBase>
);

const Check = (props) => (
  <IconBase {...props}>
    <path d="m5 12 4.2 4.2L19 6.8" />
  </IconBase>
);

const ChevronDown = (props) => (
  <IconBase {...props}>
    <path d="m6 9 6 6 6-6" />
  </IconBase>
);

const ChevronRight = (props) => (
  <IconBase {...props}>
    <path d="m9 6 6 6-6 6" />
  </IconBase>
);

const CircleHelp = (props) => (
  <IconBase {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M9.5 9.6a2.7 2.7 0 1 1 4.5 2c-.9.8-1.7 1.3-1.7 2.4" />
    <path d="M12 17h.01" />
  </IconBase>
);

const Clock3 = (props) => (
  <IconBase {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </IconBase>
);

const Globe2 = (props) => (
  <IconBase {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3a14 14 0 0 1 0 18" />
    <path d="M12 3a14 14 0 0 0 0 18" />
  </IconBase>
);

const GraduationCap = (props) => (
  <IconBase {...props}>
    <path d="m3 10 9-4 9 4-9 4-9-4Z" />
    <path d="M7 12.3V16c0 1.6 2.4 3 5 3s5-1.4 5-3v-3.7" />
    <path d="M21 10v5" />
  </IconBase>
);

const Mail = (props) => (
  <IconBase {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="m4 7 8 6 8-6" />
  </IconBase>
);

const MapPin = (props) => (
  <IconBase {...props}>
    <path d="M12 21s6-5.7 6-11a6 6 0 1 0-12 0c0 5.3 6 11 6 11Z" />
    <circle cx="12" cy="10" r="2.2" />
  </IconBase>
);

const Menu = (props) => (
  <IconBase {...props}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </IconBase>
);

const MessageCircle = (props) => (
  <IconBase {...props}>
    <path d="M7 18.5 4.5 20l.7-2.8A7.5 7.5 0 1 1 19.5 12" />
    <path d="M8 10h8M8 13h5" />
  </IconBase>
);

const Phone = (props) => (
  <IconBase {...props}>
    <path d="M8 4h3l1 3-1.7 1.7a14.5 14.5 0 0 0 5 5L17 12l3 1v3a2 2 0 0 1-2 2A15 15 0 0 1 6 6a2 2 0 0 1 2-2Z" />
  </IconBase>
);

const Plane = (props) => (
  <IconBase {...props}>
    <path d="M3 13.5 21 4l-5.2 16-3.5-6.1L6 11.2 3 13.5Z" />
    <path d="m12.3 13.9-2.4 2.4" />
  </IconBase>
);

const ShieldCheck = (props) => (
  <IconBase {...props}>
    <path d="M12 3 5.5 6v5.2c0 4.2 2.6 8.1 6.5 9.8 3.9-1.7 6.5-5.6 6.5-9.8V6L12 3Z" />
    <path d="m9.3 12.4 1.9 1.9 3.6-4" />
  </IconBase>
);

const Sparkles = (props) => (
  <IconBase {...props}>
    <path d="m12 3 1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3Z" />
    <path d="m5 15 .8 2.2L8 18l-2.2.8L5 21l-.8-2.2L2 18l2.2-.8L5 15Z" />
    <path d="m19 14 .9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9L19 14Z" />
  </IconBase>
);

const Star = (props) => (
  <IconBase {...props} fill="currentColor" strokeWidth="1.2">
    <path d="m12 3.6 2.5 5 5.5.8-4 3.9.9 5.5-4.9-2.6-4.9 2.6.9-5.5-4-3.9 5.5-.8 2.5-5Z" />
  </IconBase>
);

const Ticket = (props) => (
  <IconBase {...props}>
    <path d="M4 8a2 2 0 0 0 0 4v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4a2 2 0 0 1 0-4V8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2Z" />
    <path d="M12 6v12" />
  </IconBase>
);

const Users = (props) => (
  <IconBase {...props}>
    <path d="M16.5 20v-1.4a3.6 3.6 0 0 0-3.6-3.6H8.6A3.6 3.6 0 0 0 5 18.6V20" />
    <circle cx="10.7" cy="9" r="3.1" />
    <path d="M19 19.5v-1.1a3 3 0 0 0-2.6-3" />
    <path d="M16 6.4a3 3 0 0 1 0 5.2" />
  </IconBase>
);

const X = (props) => (
  <IconBase {...props}>
    <path d="M6 6 18 18M18 6 6 18" />
  </IconBase>
);

function formatMotionValue(value, axis) {
  if (value == null) return null;
  if (typeof value === "number") {
    if (axis === "scale") return `scale(${value})`;
    return `translate${axis.toUpperCase()}(${value}px)`;
  }
  if (axis === "scale") return `scale(${value})`;
  return `translate${axis.toUpperCase()}(${value})`;
}

function buildMotionStyle(baseStyle = {}, state = {}, transition = {}) {
  const transforms = [formatMotionValue(state.x, "x"), formatMotionValue(state.y, "y"), formatMotionValue(state.scale, "scale")]
    .filter(Boolean)
    .join(" ");
  const duration = `${transition.duration ?? 0.45}s`;
  const delay = `${transition.delay ?? 0}s`;

  return {
    ...baseStyle,
    opacity: state.opacity ?? baseStyle.opacity,
    transform: transforms || baseStyle.transform,
    height: state.height != null && state.height !== "auto" ? state.height : baseStyle.height,
    transition: [
      `opacity ${duration} ease ${delay}`,
      `transform ${duration} ease ${delay}`,
      state.height != null && state.height !== "auto" ? `height ${duration} ease ${delay}` : null,
    ]
      .filter(Boolean)
      .join(", "),
  };
}

function MotionTag({ as: Tag = "div", initial, animate, whileInView, transition, viewport, style, children, ...props }) {
  const ref = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [inView, setInView] = useState(!whileInView);

  useEffect(() => {
    const id = window.requestAnimationFrame(() => setMounted(true));
    return () => window.cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    if (!whileInView || !ref.current || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry) return;
        if (entry.isIntersecting) {
          setInView(true);
          if (viewport?.once !== false) observer.disconnect();
        } else if (viewport?.once === false) {
          setInView(false);
        }
      },
      { threshold: viewport?.amount ?? 0.18 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [whileInView, viewport?.amount, viewport?.once]);

  const reducedMotion =
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const targetState = !mounted ? initial ?? animate ?? whileInView ?? {} : whileInView ? (inView ? whileInView : initial ?? {}) : animate ?? {};
  const resolvedStyle = reducedMotion
    ? { ...style, opacity: 1, transform: "none", height: targetState.height === "auto" ? undefined : targetState.height }
    : buildMotionStyle(style, targetState, transition);

  return (
    <Tag ref={ref} style={resolvedStyle} {...props}>
      {children}
    </Tag>
  );
}

const motion = new Proxy(
  {},
  {
    get: (_, tag) => (props) => <MotionTag as={tag} {...props} />,
  }
);

function AnimatePresence({ children }) {
  return children || null;
}

function SafeImage({ src, alt, className = "", fallbackLabel = "", loading = "lazy", ...props }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={cn(
          className,
          "flex items-center justify-center bg-[linear-gradient(180deg,rgba(8,47,73,0.9),rgba(2,6,23,0.98))] text-center text-slate-100"
        )}
        role="img"
        aria-label={alt}
      >
        <div className="px-6">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-200">MGIMO Connect</div>
          <div className="mt-3 text-sm font-medium leading-6 text-slate-200">{fallbackLabel || alt}</div>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      decoding="async"
      onError={() => setFailed(true)}
      {...props}
    />
  );
}

const ANALYTICS = {
  gaMeasurementId: "G-XXXXXXXXXX",
  yandexMetrikaId: "00000000",
};

const FORM_ENDPOINT = "";

const BRAND = {
  name: "MGIMO Connect",
  subtitle: "Карьерная поездка в Стамбул для студентов МГИМО",
  city: "Стамбул",
  dates: "18–22 сентября 2026",
  duration: "5 дней / 4 ночи",
  seats: 25,
  deadline: "31 августа 2026",
  priceFrom: "от 39 900 ₽",
  phone: "+7 (495) 555-21-21",
  email: "connect@mgimo-trip.ru",
  telegram: "@mgimo_connect",
  address: "Москва, пр-т Вернадского, 76",
  inn: "ИНН 7700000000",
  ogrn: "ОГРН 1207700000000",
};

const NAV = [
  ["О поездке", "pain"],
  ["Программа", "program"],
  ["Преимущества", "benefits"],
  ["Отзывы", "proof"],
  ["Тарифы", "pricing"],
  ["FAQ", "faq"],
  ["Заявка", "contact"],
];

const IMAGES = {
  hero: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1600&q=80",
  city: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1400&q=80",
  students: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
  networking: "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=1200&q=80",
  business: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
};

const HERO_STATS = [
  { value: "25", label: "мест в наборе" },
  { value: "5 дней", label: "деловой и культурной программы" },
  { value: "3 формата", label: "участия под разный бюджет" },
];

const PAINS = [
  "Хочется международного опыта, но академический обмен — это долго, сложно и не всегда реально встроить в учебный график.",
  "Обычные поездки дают эмоции, но почти не усиливают резюме и не помогают в карьерном позиционировании.",
  "Даже при хорошем английском часто не хватает реальной практики и уверенности вне аудитории.",
  "Важно попасть в сильное окружение, но без продуманной программы, понятных условий и сопровождения это кажется рискованным.",
];

const BENEFITS = [
  {
    icon: GraduationCap,
    title: "Опыт, который можно показать в резюме",
    text: "Поездка даёт реальный материал для CV, мотивационных писем и разговоров на стажировках и собеседованиях.",
  },
  {
    icon: Globe2,
    title: "Международная среда без долгого отъезда",
    text: "Вы получаете насыщенный опыт общения, нетворкинга и городской деловой атмосферы без выпадения из семестра.",
  },
  {
    icon: Users,
    title: "Сильное окружение и новые контакты",
    text: "В группе собираются студенты, которым важны международная повестка, карьера, развитие и качественные знакомства.",
  },
  {
    icon: ShieldCheck,
    title: "Понятная организация и сопровождение",
    text: "Программа, дедлайны, формат участия, логистика и поддержка прозрачны ещё до бронирования.",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Оставляете заявку",
    text: "Получаете подробную программу, тарифы, дедлайны и ответы на организационные вопросы.",
  },
  {
    num: "02",
    title: "Подтверждаете участие",
    text: "Выбираете формат, вносите бронь и фиксируете место в группе до закрытия набора.",
  },
  {
    num: "03",
    title: "Готовитесь по чек-листу",
    text: "Куратор отправляет памятку, маршрут, дедлайны, рекомендации и список нужных действий.",
  },
  {
    num: "04",
    title: "Едете в Стамбул",
    text: "Участвуете в деловой и культурной программе, практикуете язык и забираете опыт, который реально можно использовать дальше.",
  },
];

const PROGRAM = [
  {
    day: "День 1",
    title: "Прилет, знакомство и старт программы",
    items: [
      "Прилет и заселение",
      "Welcome-встреча с куратором",
      "Знакомство участников и networking-разминка",
      "Вечерняя прогулка по историческому центру",
    ],
  },
  {
    day: "День 2",
    title: "Деловая среда и международный контекст",
    items: [
      "Посещение деловой площадки / компании",
      "Разбор карьерных треков в международной среде",
      "Мини-сессии по английской коммуникации",
      "Неформальное обсуждение в группе",
    ],
  },
  {
    day: "День 3",
    title: "Стамбул как глобальный хаб",
    items: [
      "Тематическая экскурсия по ключевым районам города",
      "Обсуждение роли Стамбула в международных связях",
      "Командное задание для участников",
      "Вечер рефлексии и обмена инсайтами",
    ],
  },
  {
    day: "День 4",
    title: "Карьерный день и нетворкинг",
    items: [
      "Мастер-сессия по карьерному позиционированию",
      "Групповая работа и итоговый networking",
      "Подготовка коротких презентаций",
      "Заключительный ужин группы",
    ],
  },
  {
    day: "День 5",
    title: "Итоги и вылет",
    items: [
      "Итоговая встреча и сертификаты",
      "Как упаковать опыт поездки в CV",
      "Check-out и отъезд",
      "Возвращение в Москву",
    ],
  },
];

const INCLUDED = [
  "Полная 5-дневная деловая и культурная программа",
  "Сопровождение куратором",
  "Нетворкинг-активности и групповая работа",
  "Сертификат участия",
  "Чат участников и организационная поддержка",
  "Памятка и чек-лист подготовки",
];

const NOT_INCLUDED = [
  "Авиабилеты — в пакетах Base и Standard",
  "Личные расходы",
  "Питание вне программы",
  "Индивидуальная страховка при необходимости",
];

const PROOF_STATS = [
  { value: "92%", label: "участников считают поездку полезной для карьеры" },
  { value: "4.9/5", label: "средняя оценка организации и программы" },
  { value: "80%", label: "говорят, что после поездки стало проще рассказывать о себе и своём опыте" },
];

const TESTIMONIALS = [
  {
    name: "Екатерина А.",
    role: "2 курс, международные отношения",
    text: "Это был не просто тур. Поездка дала мне ощущение международной среды, несколько сильных знакомств и уверенность, что этот опыт реально можно использовать в резюме.",
  },
  {
    name: "Дмитрий К.",
    role: "3 курс, международный бизнес",
    text: "Самое ценное — окружение и структура. Всё было насыщенно, но без хаоса: ты понимаешь, зачем здесь каждый день и что забираешь с собой после поездки.",
  },
  {
    name: "Мария С.",
    role: "1 курс, факультет управления",
    text: "Формат оказался очень удобным: коротко, насыщенно и без лишнего стресса. Было ощущение, что всё продумано — от программы до организационной поддержки.",
  },
];

const PARTNERS = ["Bosphorus Hub", "Global Bridge", "Istanbul Connect", "Urban Forum", "Next Career", "Campus Link"];

const PRICING = [
  {
    name: "Base",
    price: "39 900 ₽",
    description: "Для тех, кто хочет поехать с минимальным бюджетом и самостоятельно закрыть часть логистики.",
    features: [
      "Доступ ко всей деловой и культурной программе",
      "Сопровождение куратором",
      "Чат участников и организационные материалы",
      "Сертификат участия",
      "Подходит тем, кто сам организует проживание",
    ],
    cta: "Выбрать Base",
    highlighted: false,
  },
  {
    name: "Standard",
    price: "59 900 ₽",
    description: "Оптимальный вариант: программа плюс проживание в двухместном размещении.",
    features: [
      "Всё из тарифа Base",
      "Проживание 4 ночи в отеле",
      "Welcome-пакет участника",
      "Приоритет по консультации с куратором",
      "Самый популярный пакет у участников",
    ],
    cta: "Забронировать Standard",
    highlighted: true,
  },
  {
    name: "Full Pack",
    price: "74 900 ₽",
    description: "Максимум удобства: программа, проживание, групповой трансфер и расширенная поддержка.",
    features: [
      "Всё из тарифа Standard",
      "Групповой трансфер аэропорт — отель — аэропорт",
      "Расширенная поддержка до и во время поездки",
      "Персональный travel-checklist",
      "Для тех, кто хочет закрыть организацию почти под ключ",
    ],
    cta: "Выбрать Full Pack",
    highlighted: false,
  },
];

const FAQS = [
  {
    q: "Кто может поехать?",
    a: "Программа ориентирована на студентов МГИМО. При наличии свободных мест можно рассмотреть заявки от студентов смежных направлений по согласованию с организаторами.",
  },
  {
    q: "Это образовательная поездка или туристическая?",
    a: "Это карьерно-образовательная поездка с деловыми и культурными элементами. Её задача — дать международный опыт, нетворкинг и материал для резюме, а не только впечатления от города.",
  },
  {
    q: "Нужен ли высокий уровень английского?",
    a: "Нет. Желательно чувствовать себя относительно уверенно, но программа подходит и тем, кто хочет прокачать практику и уверенность в реальном общении.",
  },
  {
    q: "Можно ли поехать одному?",
    a: "Да. Многие участники едут без знакомых. В программу специально включены форматы знакомства и командной работы, чтобы включиться было легко.",
  },
  {
    q: "Как происходит оплата?",
    a: "После заявки вы получаете подробные условия, подтверждаете участие и вносите бронь. Оставшаяся сумма оплачивается по согласованному графику до поездки.",
  },
];

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function loadScript(src, id) {
  if (typeof document === "undefined") return;
  if (document.getElementById(id)) return;
  const script = document.createElement("script");
  script.src = src;
  script.async = true;
  script.id = id;
  document.head.appendChild(script);
}

function initAnalytics() {
  if (typeof window === "undefined") return;

  const gaId = ANALYTICS.gaMeasurementId;
  const ymId = ANALYTICS.yandexMetrikaId;

  if (gaId && gaId !== "G-XXXXXXXXXX") {
    loadScript(`https://www.googletagmanager.com/gtag/js?id=${gaId}`, "ga4-script");
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", gaId);
  }

  if (ymId && ymId !== "00000000") {
    (function (m, e, t, r, i, k, a) {
      m[i] =
        m[i] ||
        function () {
          (m[i].a = m[i].a || []).push(arguments);
        };
      m[i].l = 1 * new Date();
      for (let j = 0; j < document.scripts.length; j += 1) {
        if (document.scripts[j].src === r) return;
      }
      k = e.createElement(t);
      a = e.getElementsByTagName(t)[0];
      k.async = 1;
      k.src = r;
      a.parentNode.insertBefore(k, a);
    })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

    if (typeof window.ym === "function") {
      window.ym(Number(ymId), "init", {
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true,
      });
    }
  }
}

function trackEvent(eventName, payload = {}) {
  try {
    if (typeof window === "undefined") return;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: eventName, ...payload });

    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, payload);
    }

    if (
      typeof window.ym === "function" &&
      ANALYTICS.yandexMetrikaId &&
      ANALYTICS.yandexMetrikaId !== "00000000"
    ) {
      window.ym(Number(ANALYTICS.yandexMetrikaId), "reachGoal", eventName);
    }
  } catch (error) {
    console.error("analytics error", error);
  }
}

function validateForm(form) {
  const nextErrors = {};
  if (!form.name.trim()) nextErrors.name = "Введите имя";
  if (!form.contact.trim()) nextErrors.contact = "Укажите телефон, email или Telegram";
  if (form.contact.trim().length < 5) nextErrors.contact = "Контакт слишком короткий";
  if (!form.faculty.trim()) nextErrors.faculty = "Укажите курс или факультет";
  if (!form.agree) nextErrors.agree = "Нужно согласие на обработку данных";
  return nextErrors;
}

function buildLeadPayload(form) {
  return {
    name: form.name.trim(),
    contact: form.contact.trim(),
    faculty: form.faculty.trim(),
    message: form.message.trim(),
    agree: form.agree,
    source: "mgimo_connect_landing",
    submittedAt: new Date().toISOString(),
  };
}

function getCountdown() {
  const diff = new Date("2026-08-31T23:59:59").getTime() - Date.now();
  if (Number.isNaN(diff) || diff <= 0) return { days: 0, hours: 0, minutes: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
  };
}

function FadeIn({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}

function SectionTitle({ eyebrow, title, subtitle, center = false }) {
  return (
    <div className={cn("max-w-3xl", center && "mx-auto text-center")}>
      <div className="mb-4 inline-flex items-center rounded-full border border-sky-300/20 bg-sky-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">
        {eyebrow}
      </div>
      <h2 className="text-3xl font-black tracking-tight text-white md:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-slate-300 md:text-lg">{subtitle}</p>
    </div>
  );
}

function CTAButton({ children, onClick, secondary = false, className = "", type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-slate-950",
        secondary
          ? "border border-white/15 bg-white/5 text-white hover:bg-white/10"
          : "bg-sky-300 text-slate-950 hover:-translate-y-0.5 hover:bg-sky-200",
        className
      )}
    >
      {children}
    </button>
  );
}

function InputField({ label, error, ...props }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-200">{label}</span>
      <input
        {...props}
        className={cn(
          "w-full rounded-2xl border bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2",
          error ? "border-red-400/70 focus:ring-red-300" : "border-white/10 focus:ring-sky-300"
        )}
      />
      {error ? <span className="mt-2 block text-sm text-red-300">{error}</span> : null}
    </label>
  );
}

function TextareaField({ label, error, ...props }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-200">{label}</span>
      <textarea
        {...props}
        className={cn(
          "min-h-[120px] w-full rounded-2xl border bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2",
          error ? "border-red-400/70 focus:ring-red-300" : "border-white/10 focus:ring-sky-300"
        )}
      />
      {error ? <span className="mt-2 block text-sm text-red-300">{error}</span> : null}
    </label>
  );
}

function PrivacyModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return undefined;

    const previousOverflow = document.body.style.overflow;
    const handleEscape = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] bg-slate-950/80 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-10 max-w-3xl rounded-[28px] border border-white/10 bg-slate-900 p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <div className="text-2xl font-black text-white">Политика конфиденциальности</div>
                <div className="mt-2 text-sm text-slate-400">Учебный пример для демонстрации структуры лендинга и формы заявки.</div>
              </div>
              <button
                onClick={onClose}
                className="rounded-2xl border border-white/10 bg-white/5 p-2 text-slate-300 hover:bg-white/10"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-4 text-sm leading-7 text-slate-300">
              <p>Оставляя заявку, пользователь добровольно передаёт имя, контактные данные и дополнительную информацию, указанную в форме, для обратной связи по вопросу участия в поездке.</p>
              <p>Данные используются только для обработки заявки, связи с пользователем, отправки программы, условий участия и организационной информации.</p>
              <p>Организатор обязуется не передавать персональные данные третьим лицам без необходимости, кроме случаев, прямо связанных с организацией участия и исполнением обязательств перед заявителем.</p>
              <p>Пользователь вправе запросить удаление своих данных, написав на email организатора, указанный в футере сайта.</p>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function MGIMOConnectLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [countdown, setCountdown] = useState(getCountdown());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [form, setForm] = useState({
    name: "",
    contact: "",
    faculty: "",
    message: "",
    agree: false,
  });
  const [errors, setErrors] = useState({});

  const year = useMemo(() => new Date().getFullYear(), []);

  useEffect(() => {
    initAnalytics();
    trackEvent("page_view_landing", { page: "mgimo_connect_istanbul" });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setCountdown(getCountdown()), 60000);
    return () => clearInterval(timer);
  }, []);

  const handleCtaClick = (source) => {
    trackEvent("cta_click", { source });
    scrollToId("contact");
    setMenuOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nextErrors = validateForm(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus({ type: "error", message: "Проверьте форму: часть обязательных полей заполнена не полностью." });
      trackEvent("form_validation_error", { fields: Object.keys(nextErrors).join(",") });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const payload = buildLeadPayload(form);

      if (FORM_ENDPOINT) {
        const response = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error(`Lead request failed with status ${response.status}`);
        }
      } else {
        await new Promise((resolve) => setTimeout(resolve, 900));
      }

      trackEvent("lead_form_submit", {
        form_name: "mgimo_connect_main_form",
        faculty: payload.faculty,
        has_message: Boolean(payload.message),
        transport: FORM_ENDPOINT ? "webhook" : "demo",
      });

      setForm({ name: "", contact: "", faculty: "", message: "", agree: false });
      setErrors({});
      setStatus({
        type: "success",
        message: FORM_ENDPOINT
          ? "Заявка отправлена. Скоро с вами свяжутся и пришлют программу, условия участия и шаги по бронированию."
          : "Форма работает в демо-режиме. Для боевого запуска подставьте URL в FORM_ENDPOINT, и заявки начнут уходить в ваш webhook или CRM.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: "Не удалось отправить форму. Проверьте FORM_ENDPOINT и доступность обработчика заявок.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-sky-300 selection:text-slate-950">
      <PrivacyModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} />

      <div className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
          <button className="flex items-center gap-3" onClick={() => scrollToId("hero")}>
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-300 text-slate-950 shadow-lg shadow-sky-500/20">
              <Plane className="h-5 w-5" />
            </div>
            <div className="text-left">
              <div className="text-base font-bold tracking-wide">{BRAND.name}</div>
              <div className="text-xs text-slate-400">{BRAND.city} • {BRAND.dates}</div>
            </div>
          </button>

          <nav className="hidden items-center gap-6 lg:flex">
            {NAV.map(([label, id]) => (
              <button key={id} className="text-sm text-slate-300 transition hover:text-white" onClick={() => scrollToId(id)}>
                {label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:block">
            <CTAButton onClick={() => handleCtaClick("header")}>Забронировать место</CTAButton>
          </div>

          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 lg:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Открыть меню"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen ? (
          <div className="border-t border-white/10 bg-slate-950/95 px-4 py-4 lg:hidden">
            <div className="flex flex-col gap-2">
              {NAV.map(([label, id]) => (
                <button
                  key={id}
                  className="rounded-2xl px-4 py-3 text-left text-slate-200 hover:bg-white/5"
                  onClick={() => {
                    scrollToId(id);
                    setMenuOpen(false);
                  }}
                >
                  {label}
                </button>
              ))}
              <CTAButton className="mt-2 w-full" onClick={() => handleCtaClick("mobile_menu")}>
                Забронировать место
              </CTAButton>
            </div>
          </div>
        ) : null}
      </div>

      <main>
        <section id="hero" className="relative overflow-hidden pt-28 md:pt-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.26),transparent_28%),radial-gradient(circle_at_left,rgba(14,165,233,0.14),transparent_22%),linear-gradient(180deg,rgba(15,23,42,0.88),rgba(2,6,23,0.96))]" />
          <SafeImage
            src={IMAGES.hero}
            alt="Стамбул"
            fallbackLabel="Панорама Стамбула для hero-блока"
            loading="eager"
            className="absolute inset-0 h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/60 to-transparent" />
          <div className="absolute right-[-10%] top-24 h-72 w-72 rounded-full bg-sky-400/10 blur-3xl" />
          <div className="absolute left-[-8%] top-64 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-8 md:px-6 lg:grid-cols-[1.04fr_.96fr] lg:pb-24">
            <motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-300/20 bg-sky-300/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">
                <BadgeCheck className="h-4 w-4" />
                Набор открыт до {BRAND.deadline}
              </div>

              <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl md:leading-[1.03]">
                Поездка в Стамбул, после которой у тебя останутся не только фото, но и реальный карьерный опыт.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
                <span className="font-semibold text-white">{BRAND.subtitle}</span> — это 5 дней международной среды,
                нетворкинга, деловой программы, практики английского и сильного окружения, которое помогает смотреть на карьеру шире.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CTAButton onClick={() => handleCtaClick("hero_primary")}>
                  Забронировать место <ArrowRight className="h-4 w-4" />
                </CTAButton>
                <CTAButton secondary onClick={() => scrollToId("program")}>
                  Смотреть программу
                </CTAButton>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300">
                {[
                  "Подходит студентам МГИМО",
                  "Международная и карьерная повестка",
                  "Есть сопровождение и дедлайны",
                  "Встроена аналитика CTA и форм",
                ].map((item) => (
                  <div key={item} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
                    <Check className="h-4 w-4 text-sky-300" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-[34px] border border-white/10 bg-white/5 shadow-2xl shadow-sky-950/30 backdrop-blur-sm">
                <div className="relative h-[260px] md:h-[320px]">
                  <SafeImage
                    src={IMAGES.city}
                    alt="Стамбул ночью"
                    fallbackLabel="Ночной вид на Стамбул"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-3">
                    {HERO_STATS.map((stat) => (
                      <div key={stat.label} className="rounded-2xl border border-white/10 bg-slate-950/60 p-3 backdrop-blur-sm">
                        <div className="text-2xl font-black text-sky-200">{stat.value}</div>
                        <div className="mt-1 text-xs leading-5 text-slate-300">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 p-5 md:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4">
                    <div className="mb-2 flex items-center gap-2 text-sky-200">
                      <CalendarDays className="h-4 w-4" />
                      <span className="text-sm font-semibold">Даты поездки</span>
                    </div>
                    <div className="text-lg font-bold text-white">{BRAND.dates}</div>
                    <div className="mt-1 text-sm text-slate-400">{BRAND.duration}</div>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4">
                    <div className="mb-2 flex items-center gap-2 text-sky-200">
                      <Ticket className="h-4 w-4" />
                      <span className="text-sm font-semibold">Стоимость</span>
                    </div>
                    <div className="text-lg font-bold text-white">{BRAND.priceFrom}</div>
                    <div className="mt-1 text-sm text-slate-400">осталось {BRAND.seats} мест в наборе</div>
                  </div>
                </div>

                <div className="border-t border-white/10 p-5">
                  <div className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">До конца набора</div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-center">
                      <div className="text-2xl font-black text-sky-200">{countdown.days}</div>
                      <div className="text-xs text-slate-400">дней</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-center">
                      <div className="text-2xl font-black text-sky-200">{countdown.hours}</div>
                      <div className="text-xs text-slate-400">часов</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-center">
                      <div className="text-2xl font-black text-sky-200">{countdown.minutes}</div>
                      <div className="text-xs text-slate-400">минут</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="border-y border-white/6 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-4 py-6 md:px-6">
            <div className="grid gap-3 md:grid-cols-4">
              {[
                { icon: MapPin, title: BRAND.city, text: "международный город с сильной деловой и культурной средой" },
                { icon: BriefcaseBusiness, title: "Карьерный акцент", text: "не просто поездка, а опыт для CV и позиционирования" },
                { icon: Users, title: "Сильное окружение", text: "группа амбициозных студентов с общими интересами" },
                { icon: Clock3, title: "Короткий формат", text: "вписывается в насыщенный учебный график" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <FadeIn key={item.title}>
                    <div className="rounded-3xl border border-white/8 bg-slate-900/60 p-5">
                      <div className="mb-3 inline-flex rounded-2xl bg-sky-300/10 p-3 text-sky-200">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-400">{item.text}</p>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        <section id="pain" className="mx-auto max-w-7xl px-4 py-20 md:px-6">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionTitle
              eyebrow="Проблема"
              title="Почему студентам нужен не просто тур, а поездка с понятной карьерной ценностью"
              subtitle="У большинства есть интерес к международной среде, но мало форматов, где можно быстро, безопасно и осмысленно получить опыт, который реально пригодится дальше."
            />
            <div className="grid gap-4">
              {PAINS.map((item, index) => (
                <FadeIn key={item} delay={index * 0.05}>
                  <div className="rounded-3xl border border-white/8 bg-white/[0.03] p-5">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-rose-400/10 text-sm font-bold text-rose-200">
                        0{index + 1}
                      </div>
                      <p className="text-base leading-7 text-slate-200">{item}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section id="benefits" className="bg-white/[0.02] py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <SectionTitle
              eyebrow="Решение"
              title="Что получает участник MGIMO Connect вместо абстрактной «поездки за впечатлениями»"
              subtitle="Каждый элемент программы собран так, чтобы у поездки была конкретная польза: международный контекст, практика общения, карьерная оптика и сильное окружение."
            />

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {BENEFITS.map((item, index) => {
                const Icon = item.icon;
                return (
                  <FadeIn key={item.title} delay={index * 0.05}>
                    <div className="rounded-[30px] border border-white/8 bg-slate-900/70 p-6 transition hover:-translate-y-1 hover:border-sky-300/30">
                      <div className="mb-4 inline-flex rounded-2xl bg-sky-300/10 p-3 text-sky-200">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                      <p className="mt-3 text-base leading-7 text-slate-400">{item.text}</p>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        <section id="program" className="mx-auto max-w-7xl px-4 py-20 md:px-6">
          <SectionTitle
            eyebrow="Программа"
            title="5 дней, где всё построено вокруг среды, контактов и полезного опыта"
            subtitle="Баланс деловых визитов, общения, городской среды, рефлексии и карьерного контекста, чтобы поездка ощущалась насыщенной, но не хаотичной."
          />

          <div className="mt-12 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
            <FadeIn>
              <div className="sticky top-28 space-y-5">
                <div className="overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04]">
                  <SafeImage
                    src={IMAGES.students}
                    alt="Студенты в международной среде"
                    fallbackLabel="Студенты в международной среде"
                    className="h-72 w-full object-cover"
                  />
                  <div className="p-5">
                    <div className="text-lg font-bold">Формат поездки</div>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      Короткий интенсивный формат под студентов, которым важно получить международный опыт без выпадения из учебного процесса.
                    </p>
                  </div>
                </div>
                <div className="overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04]">
                  <SafeImage
                    src={IMAGES.business}
                    alt="Деловая коммуникация"
                    fallbackLabel="Деловая коммуникация и встречи"
                    className="h-64 w-full object-cover"
                  />
                </div>
                <div className="rounded-[30px] border border-white/10 bg-slate-900/70 p-5">
                  <div className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Что входит</div>
                  <div className="space-y-3">
                    {INCLUDED.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <div className="mt-0.5 rounded-full bg-sky-300/10 p-1 text-sky-200">
                          <Check className="h-4 w-4" />
                        </div>
                        <div className="text-sm leading-6 text-slate-200">{item}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-[30px] border border-white/10 bg-slate-900/70 p-5">
                  <div className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Не входит</div>
                  <div className="space-y-3">
                    {NOT_INCLUDED.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <div className="mt-0.5 rounded-full bg-white/10 p-1 text-slate-300">
                          <X className="h-4 w-4" />
                        </div>
                        <div className="text-sm leading-6 text-slate-300">{item}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>

            <div className="space-y-5">
              {PROGRAM.map((day, index) => (
                <FadeIn key={day.day} delay={index * 0.04}>
                  <div className="rounded-[30px] border border-white/8 bg-white/[0.03] p-6 transition hover:border-sky-300/20">
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                      <div>
                        <div className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-200">{day.day}</div>
                        <h3 className="mt-2 text-2xl font-bold">{day.title}</h3>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-3 text-slate-300">
                        <CalendarDays className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      {day.items.map((item) => (
                        <div key={item} className="rounded-2xl border border-white/8 bg-slate-900/50 px-4 py-3 text-sm leading-6 text-slate-200">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white/[0.02] py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <SectionTitle
              eyebrow="Как это работает"
              title="Путь от заявки до поездки — понятный и без лишнего хаоса"
              subtitle="Чтобы у пользователя не оставалось ощущения «непонятно, что дальше», каждый шаг заранее объяснён и встроен в логику страницы."
              center
            />

            <div className="mt-12 grid gap-5 lg:grid-cols-4">
              {STEPS.map((step, index) => (
                <FadeIn key={step.num} delay={index * 0.05}>
                  <div className="relative rounded-[30px] border border-white/8 bg-white/[0.03] p-6">
                    <div className="mb-5 text-4xl font-black text-sky-200/80">{step.num}</div>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <p className="mt-3 text-base leading-7 text-slate-400">{step.text}</p>
                    {index < STEPS.length - 1 ? (
                      <ChevronRight className="absolute -right-2 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-sky-300 lg:block" />
                    ) : null}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section id="proof" className="mx-auto max-w-7xl px-4 py-20 md:px-6">
          <SectionTitle
            eyebrow="Социальное доказательство"
            title="Когда поездка выглядит надёжно и полезно, решение принимать заметно легче"
            subtitle="Отзывы, цифры, признаки доверия и понятный визуальный контекст помогают убрать сомнения и сократить путь до заявки."
          />

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {PROOF_STATS.map((item, index) => (
              <FadeIn key={item.label} delay={index * 0.05}>
                <div className="rounded-[30px] border border-white/8 bg-slate-900/70 p-6">
                  <div className="text-4xl font-black text-sky-200">{item.value}</div>
                  <div className="mt-2 text-base leading-7 text-slate-300">{item.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <FadeIn>
              <div className="overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04]">
                <SafeImage
                  src={IMAGES.networking}
                  alt="Нетворкинг студентов"
                  fallbackLabel="Нетворкинг и сильное окружение"
                  className="h-[420px] w-full object-cover"
                />
              </div>
            </FadeIn>
            <div className="grid gap-5">
              {TESTIMONIALS.map((item, index) => (
                <FadeIn key={item.name} delay={index * 0.05}>
                  <div className="rounded-[30px] border border-white/8 bg-white/[0.03] p-6">
                    <div className="mb-4 flex items-center gap-1 text-amber-300">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-base leading-7 text-slate-200">“{item.text}”</p>
                    <div className="mt-5 border-t border-white/8 pt-4">
                      <div className="font-semibold">{item.name}</div>
                      <div className="text-sm text-slate-400">{item.role}</div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          <FadeIn>
            <div className="mt-10 rounded-[32px] border border-white/8 bg-slate-900/60 p-6">
              <div className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Партнёрская среда и точки программы</div>
              <div className="grid grid-cols-2 gap-4 text-center md:grid-cols-3 lg:grid-cols-6">
                {PARTNERS.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-5 text-lg font-bold text-slate-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </section>

        <section id="pricing" className="bg-white/[0.02] py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <SectionTitle
              eyebrow="Тарифы"
              title="Три пакета участия — от базового входа до формата почти под ключ"
              subtitle="Пакеты собраны так, чтобы выбор был понятным: минимальный бюджет, оптимальный баланс или максимум удобства."
              center
            />

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {PRICING.map((plan, index) => (
                <FadeIn key={plan.name} delay={index * 0.05}>
                  <div
                    className={cn(
                      "relative rounded-[32px] border p-6",
                      plan.highlighted
                        ? "border-sky-300/40 bg-sky-300/[0.08] shadow-2xl shadow-sky-950/20"
                        : "border-white/8 bg-white/[0.03]"
                    )}
                  >
                    {plan.highlighted ? (
                      <div className="absolute -top-3 left-6 rounded-full bg-sky-300 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-slate-950">
                        Рекомендуем
                      </div>
                    ) : null}
                    <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">{plan.name}</div>
                    <div className="mt-3 text-4xl font-black text-white">{plan.price}</div>
                    <p className="mt-3 min-h-[72px] text-base leading-7 text-slate-300">{plan.description}</p>
                    <div className="mt-6 space-y-3">
                      {plan.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-3">
                          <div className="mt-0.5 rounded-full bg-sky-300/10 p-1 text-sky-200">
                            <Check className="h-4 w-4" />
                          </div>
                          <div className="text-sm leading-6 text-slate-200">{feature}</div>
                        </div>
                      ))}
                    </div>
                    <CTAButton
                      className="mt-8 w-full"
                      secondary={!plan.highlighted}
                      onClick={() => {
                        trackEvent("pricing_cta_click", { plan: plan.name });
                        handleCtaClick(`pricing_${plan.name.toLowerCase()}`);
                      }}
                    >
                      {plan.cta}
                    </CTAButton>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-7xl px-4 py-20 md:px-6">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionTitle
              eyebrow="FAQ"
              title="Коротко отвечаем на вопросы, которые обычно мешают нажать на кнопку"
              subtitle="Этот блок снижает тревогу перед заявкой и снимает типичные возражения до личной переписки."
            />
            <div className="space-y-4">
              {FAQS.map((item, index) => {
                const isOpen = openFaq === index;
                return (
                  <FadeIn key={item.q} delay={index * 0.04}>
                    <div className="rounded-[30px] border border-white/8 bg-slate-900/60 p-5">
                      <button className="flex w-full items-start justify-between gap-4 text-left" onClick={() => setOpenFaq(isOpen ? -1 : index)}>
                        <div className="flex items-start gap-3">
                          <div className="mt-1 rounded-2xl bg-sky-300/10 p-2 text-sky-200">
                            <CircleHelp className="h-4 w-4" />
                          </div>
                          <div className="text-lg font-semibold leading-7 text-white">{item.q}</div>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-2 text-slate-300">
                          <ChevronDown className={cn("h-4 w-4 transition", isOpen && "rotate-180")} />
                        </div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen ? (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <p className="pl-11 pt-4 text-base leading-7 text-slate-300">{item.a}</p>
                          </motion.div>
                        ) : null}
                      </AnimatePresence>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-white/[0.02] py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 md:px-6 lg:grid-cols-[0.92fr_1.08fr]">
            <FadeIn>
              <div className="rounded-[32px] border border-white/8 bg-white/[0.03] p-6 md:p-8">
                <div className="mb-4 inline-flex items-center rounded-full border border-sky-300/20 bg-sky-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">
                  Финальный CTA
                </div>
                <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                  Забронируй место сейчас, чтобы не думать об этом в последний момент.
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-300">
                  Оставь заявку, и ты получишь подробную программу, условия участия, пакетные опции и порядок бронирования. Страница собрана так, чтобы решение можно было принять быстро и без лишних вопросов.
                </p>

                <div className="mt-8 space-y-4">
                  <a
                    href={`tel:${BRAND.phone.replace(/[^\d+]/g, "")}`}
                    className="flex items-center gap-4 rounded-2xl border border-white/8 bg-slate-900/60 p-4 transition hover:bg-slate-900"
                    onClick={() => trackEvent("contact_phone_click", { placement: "contact_block" })}
                  >
                    <div className="rounded-2xl bg-sky-300/10 p-3 text-sky-200">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-400">Телефон</div>
                      <div className="font-semibold text-white">{BRAND.phone}</div>
                    </div>
                  </a>

                  <a
                    href={`mailto:${BRAND.email}`}
                    className="flex items-center gap-4 rounded-2xl border border-white/8 bg-slate-900/60 p-4 transition hover:bg-slate-900"
                    onClick={() => trackEvent("contact_email_click", { placement: "contact_block" })}
                  >
                    <div className="rounded-2xl bg-sky-300/10 p-3 text-sky-200">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-400">Email</div>
                      <div className="font-semibold text-white">{BRAND.email}</div>
                    </div>
                  </a>

                  <a
                    href={`https://t.me/${BRAND.telegram.replace("@", "")}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 rounded-2xl border border-white/8 bg-slate-900/60 p-4 transition hover:bg-slate-900"
                    onClick={() => trackEvent("contact_telegram_click", { placement: "contact_block" })}
                  >
                    <div className="rounded-2xl bg-sky-300/10 p-3 text-sky-200">
                      <MessageCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-400">Telegram</div>
                      <div className="font-semibold text-white">{BRAND.telegram}</div>
                    </div>
                  </a>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.05}>
              <div className="rounded-[32px] border border-white/8 bg-slate-900/70 p-6 md:p-8">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div>
                    <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Форма заявки</div>
                    <div className="mt-2 text-2xl font-bold text-white">Получить подробности поездки</div>
                  </div>
                  <div className="rounded-2xl bg-sky-300/10 p-3 text-sky-200">
                    <Sparkles className="h-6 w-6" />
                  </div>
                </div>

                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <InputField
                      label="Имя"
                      placeholder="Как к вам обращаться"
                      value={form.name}
                      error={errors.name}
                      onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                    />
                    <InputField
                      label="Контакт"
                      placeholder="Телефон, email или Telegram"
                      value={form.contact}
                      error={errors.contact}
                      onChange={(e) => setForm((prev) => ({ ...prev, contact: e.target.value }))}
                    />
                  </div>

                  <InputField
                    label="Курс / факультет"
                    placeholder="Например: 2 курс, международные отношения"
                    value={form.faculty}
                    error={errors.faculty}
                    onChange={(e) => setForm((prev) => ({ ...prev, faculty: e.target.value }))}
                  />

                  <TextareaField
                    label="Комментарий"
                    placeholder="Можно указать вопросы по проживанию, бюджету, оплате или формату участия"
                    value={form.message}
                    error={errors.message}
                    onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                  />

                  <label className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                    <input
                      type="checkbox"
                      checked={form.agree}
                      onChange={(e) => setForm((prev) => ({ ...prev, agree: e.target.checked }))}
                      className="mt-1 h-4 w-4 rounded border-white/20 bg-transparent accent-sky-300"
                    />
                    <span className="text-sm leading-6 text-slate-300">
                      Я соглашаюсь на обработку персональных данных и принимаю условия политики конфиденциальности.
                      {errors.agree ? <span className="mt-1 block text-red-300">{errors.agree}</span> : null}
                    </span>
                  </label>

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                    <CTAButton
                      type="submit"
                      className="sm:min-w-[230px]"
                      onClick={() => trackEvent("form_submit_button_click", { placement: "main_form" })}
                    >
                      {isSubmitting ? "Отправка..." : "Получить программу и условия"}
                    </CTAButton>
                    <p className="text-sm leading-6 text-slate-400">
                      После отправки можно связаться через Telegram, почту или CRM-интеграцию после подключения backend.
                    </p>
                  </div>

                  {status.type !== "idle" ? (
                    <div
                      className={cn(
                        "rounded-2xl border px-4 py-3 text-sm",
                        status.type === "success"
                          ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-200"
                          : "border-red-400/30 bg-red-400/10 text-red-200"
                      )}
                    >
                      {status.message}
                    </div>
                  ) : null}
                </form>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/8 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-300 text-slate-950">
                  <Plane className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-bold">{BRAND.name}</div>
                  <div className="text-sm text-slate-400">Карьерная поездка в Стамбул для студентов МГИМО</div>
                </div>
              </div>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-400">
                Лендинг собран как готовая продающая страница: с понятным оффером, адаптивной структурой, визуалами, анимацией, формой заявки, CTA-сценариями и базовой аналитикой для отслеживания конверсий.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Контакты</div>
                <div className="mt-3 space-y-2 text-sm text-slate-300">
                  <div>{BRAND.phone}</div>
                  <div>{BRAND.email}</div>
                  <div>{BRAND.telegram}</div>
                  <div>{BRAND.address}</div>
                </div>
              </div>
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Реквизиты и документы</div>
                <div className="mt-3 space-y-2 text-sm text-slate-300">
                  <div>{BRAND.inn}</div>
                  <div>{BRAND.ogrn}</div>
                  <button
                    className="block text-left transition hover:text-white"
                    onClick={() => {
                      setPrivacyOpen(true);
                      trackEvent("privacy_open", { placement: "footer" });
                    }}
                  >
                    Политика конфиденциальности
                  </button>
                  <div>Пользовательское соглашение</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-white/8 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
            <div>© {year} {BRAND.name}. Все права защищены.</div>
            <div>Google Analytics 4 и Яндекс.Метрика уже предусмотрены — подставьте реальные ID.</div>
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-4 z-40 px-4 lg:hidden">
        <div className="mx-auto max-w-md rounded-[24px] border border-white/10 bg-slate-900/90 p-3 shadow-2xl backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="min-w-0 flex-1">
              <div className="text-sm font-semibold text-white">Набор на поездку открыт</div>
              <div className="truncate text-xs text-slate-400">Оставь заявку и получи программу участия</div>
            </div>
            <CTAButton className="px-4 py-3 text-xs" onClick={() => handleCtaClick("sticky_mobile_cta")}>
              Подать заявку
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
}

const container = document.getElementById("root");

if (container) {
  if (typeof ReactDOM.createRoot === "function") {
    const root = ReactDOM.createRoot(container);
    root.render(<MGIMOConnectLanding />);
  } else {
    ReactDOM.render(<MGIMOConnectLanding />, container);
  }
}
