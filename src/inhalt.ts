/**
 * ============================================================================
 * ZENTRALE INHALTS-DATEI (Hier kannst du alle Texte, Fähigkeiten & Projekte anpassen)
 * ============================================================================
 *
 * So bearbeitest du deine Website:
 * 1. Ändere einfach die Texte zwischen den Anführungszeichen '...' oder "..."
 * 2. Speichere die Datei mit Cmd + S (Mac) bzw. Strg + S (Windows).
 * 3. Die Vorschau im Browser (http://localhost:4321) aktualisiert sich sofort!
 */

export type ProjectCategory = 'delight' | 'enlight';

export type SkillName =
  | 'Produktion'
  | 'Regie'
  | 'Kamera'
  | 'Schnitt'
  | 'Redaktion'
  | 'Grafiken';

export type VideoAspectRatio = '16:9' | '9:16' | '4:3';

export const allSkills: SkillName[] = [
  'Produktion',
  'Regie',
  'Kamera',
  'Schnitt',
  'Redaktion',
  'Grafiken'
];

export function skillToSlug(skill: string): string {
  return skill
    .toLowerCase()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/\s+/g, '-');
}

export function formatBrandWords(text: string): string {
  return text.replace(
    /\b(delight|enlight)\b/gi,
    (match) => '<span class="brand-word">' + match.toLowerCase() + '</span>'
  );
}

export interface Project {
  slug: string;
  title: string;
  client: string;       // Auftraggeber (z.B. 'ZDF')
  product: string;      // Hergestelltes Produkt (z.B. '300 Social Media Videos')
  subtitle: string;     // Untertitel auf der Projektkarte
  category: ProjectCategory;
  year: string;         // Datum / Jahr (z.B. '2026')
  youtubeId: string;
  instagramCode?: string; // Optional: Instagram Reel Code (z.B. 'DcCb_uZo_ER')
  videoFile?: string;     // Optional: Direkte MP4-Datei im eigenen Player (z.B. '/videos/the-way-out.mp4')
  youtubeUrl: string;
  thumbnail: string;
  aspectRatio?: VideoAspectRatio; // '16:9' (Standard), '9:16' (Hochformat/Shorts) oder '4:3'
  featured?: boolean;
  description: string;
  skills: SkillName[];
  awards?: string[];      // Optional: Nominierungen & Auszeichnungen
}

// ============================================================================
// 1. PERSÖNLICHE INFOS & "GUTE UNTERHALTUNG KANN BEIDES."-TEXT
// ============================================================================
export const siteConfig = {
  name: 'Danio Schneider',
  email: 'danioschneider@outlook.com',
  phone: '01520 9440868',
  street: 'Kiezstraße 24',
  city: '14467 Potsdam',

  // Social-Media-Links oben rechts (Reihenfolge: Mail, LinkedIn, Instagram, YouTube)
  socials: {
    linkedin: 'https://www.linkedin.com/in/danio-schneider/',
    instagram: 'https://www.instagram.com/danioschneider/?hl=de',
    youtube: 'https://www.youtube.com/@danioschneider',
  },

  // Das zentrale Zitat auf der Startseite
  quote: {
    prefix: 'entertainment:',
    textBefore: '“any activity designed to ',
    wordDelight: 'delight',
    textMiddle: ' and, to a smaller degree, ',
    wordEnlight: 'enlighten',
    textAfter: '”',
    author: 'Zillmann and Bryant, 1994',
  },

  // Dein Bild, Text, Fähigkeiten und Ausbildung für das Feld unten ("Gute Unterhaltung kann beides.")
  about: {
    headline: 'Gute Unterhaltung kann beides.',
    photo: '/images/danio.jpg',
    photoCredit: '© Tinett Kähler',
    paragraphs: [
      'Ich bin Danio, 2003 in Berlin geboren, und mich fasziniert das Zusammenspiel von delight und enlight – zwischen fiktionalem und non-fiktionalem Erzählen.',
      'Gute Unterhaltung sollte in erster Linie Spaß machen, aber gleichzeitig bewegen. Genau das setze ich vom Konzept bis zum fertigen Schnitt in meinen Projekten um.'
    ],
    skills: allSkills,
    education: [
      {
        period: '2010 – 2023',
        institution: 'Waldorfschule Märkisches Viertel',
        detail: 'Allgemeine Hochschulreife'
      },
      {
        period: '2023 – 2024',
        institution: 'MedienCampus Babelsberg',
        detail: 'Freiwilliges Soziales Jahr'
      },
      {
        period: 'Seit 2024',
        institution: 'Filmuniversität Babelsberg',
        detail: 'B.A. Digitale Medienkultur'
      }
    ]
  }
};

// ============================================================================
// 2. ALLE PROJEKTE (Aufgeteilt in 'delight' und 'enlight' + Fähigkeiten)
// ============================================================================
export const projects: Project[] = [
  // --------------------------------------------------------------------------
  // DELIGHT (Entertainment-Projekte)
  // --------------------------------------------------------------------------
  {
    slug: 'terrain-battle-of-the-flags',
    title: 'TERRAIN – Battle of the Flags',
    client: 'ZDF',
    product: '300 Social Media Videos',
    subtitle: 'ZDF · 300 Social Media Videos',
    category: 'delight',
    year: '2026',
    youtubeId: 'qbYdvjZFktk',
    youtubeUrl: 'https://www.youtube.com/@ZDFTerrain',
    thumbnail: '/images/projects/terrain-battle-of-the-flags.jpg',
    aspectRatio: '9:16',
    featured: true,
    description:
      'In der ZDF-Adventure-Show „TERRAIN – Battle of the Flags“ treten zwei Teams in der Wildnis im taktischen Capture-the-Flag-Wettkampf gegeneinander an.',
    skills: ['Redaktion', 'Schnitt'],
    awards: ['Nominierung: Rose d’Or 2026 – Best Multiplatform Series']
  },
  {
    slug: 'the-way-out',
    title: 'The Way Out',
    client: 'Prime Video',
    product: '3 Social Media Videos',
    subtitle: 'Prime Video · 3 Social Media Videos',
    category: 'delight',
    year: '2026',
    youtubeId: '',
    instagramCode: 'DcCb_uZo_ER',
    youtubeUrl: 'https://www.instagram.com/primevideode/reel/DcCb_uZo_ER/',
    thumbnail: '/images/projects/the-way-out.jpg',
    aspectRatio: '9:16',
    description:
      'In der zweiten Staffel der Prime-Video-Show „The Way Out“ stellen sich prominente Teams kniffligen Escape-Room-Rätseln und Challenges unter Zeitdruck.',
    skills: ['Schnitt']
  },
  {
    slug: 'esc-kompakt-reactions-2026',
    title: 'ESC kompakt Reactions 2026',
    client: 'ESC kompakt',
    product: '35 Reaction Videos',
    subtitle: 'ESC kompakt · 35 Reaction Videos',
    category: 'delight',
    year: '2026',
    youtubeId: '32KNvDxghqw',
    youtubeUrl: 'https://www.youtube.com/playlist?list=PLAq7NLS4_INJnQ0RwLUfVyrH4wEzy7ySK',
    thumbnail: '/images/projects/esc-reactions-2026.png',
    aspectRatio: '16:9',
    description:
      'Die Reaction-Reihe von ESC kompakt begleitet den Eurovision Song Contest 2026 mit zahlreichen Episoden, in denen die teilnehmenden Beiträge vorgestellt und kommentiert werden – hier zu Bulgariens Beitrag „Bangaranga“ von DARA.',
    skills: ['Produktion', 'Regie', 'Schnitt', 'Grafiken']
  },
  {
    slug: 'fillip-freudenberg',
    title: 'Fillip Freudenberg',
    client: 'Fillip Freudenberg',
    product: 'YouTube-Kanal',
    subtitle: 'Fillip Freudenberg · YouTube-Kanal',
    category: 'delight',
    year: '2026',
    youtubeId: '2L3rkF10EdI',
    youtubeUrl: 'https://www.youtube.com/@FillipFreudenberg',
    thumbnail: '/images/projects/fillip-freudenberg.jpg',
    aspectRatio: '16:9',
    description:
      'Auf dem YouTube-Kanal von Fillip Freudenberg entstehen unterhaltsame Vlog-, Auto- und Erlebnisformate rund um besondere Challenges und Abenteuer – hier beim ersten Offroad-Ausflug in einer G-Klasse.',
    skills: ['Produktion', 'Schnitt']
  },
  {
    slug: 'sound-city-festival',
    title: 'Sound City Festival',
    client: 'Stadt Ludwigsfelde',
    product: '2 Social Media Videos',
    subtitle: 'Stadt Ludwigsfelde · 2 Social Media Videos',
    category: 'delight',
    year: '2025',
    youtubeId: '',
    instagramCode: 'DMlJEqSNuo5',
    youtubeUrl: 'https://www.instagram.com/stadt.ludwigsfelde/reel/DMlJEqSNuo5/',
    thumbnail: '/images/projects/sound-city-festival.webp',
    aspectRatio: '9:16',
    description:
      'Das Sound City Festival bringt Live-Musik, Bühnenprogramm und Sommerstimmung nach Ludwigsfelde.',
    skills: ['Regie', 'Kamera', 'Schnitt']
  },
  {
    slug: 'welcome-to-the-show-2025',
    title: 'ESC kompakt: Welcome to the Show 2025',
    client: 'ESC kompakt',
    product: '3 Live Shows',
    subtitle: 'ESC kompakt · 3 Live Shows',
    category: 'delight',
    year: '2025',
    youtubeId: 'JaOoQ1ZWeuw',
    youtubeUrl: 'https://www.youtube.com/playlist?list=PLAq7NLS4_INK8Odkx-m35JdArPxIdC2-_',
    thumbnail: '/images/projects/wtts-2025.jpg',
    aspectRatio: '16:9',
    description:
      'In der interaktiven Live-Show „Welcome to the Show 2025“ diskutiert das Team von ESC kompakt gemeinsam mit der Community live über die Songs, Proben und Entwicklungen des Eurovision Song Contests 2025.',
    skills: ['Produktion', 'Regie', 'Schnitt', 'Grafiken']
  },
  {
    slug: 'esc-kompakt-reactions-2025',
    title: 'ESC kompakt Reactions 2025',
    client: 'ESC kompakt',
    product: '37 Reaction Videos',
    subtitle: 'ESC kompakt · 37 Reaction Videos',
    category: 'delight',
    year: '2025',
    youtubeId: '-3mWzlILQYc',
    youtubeUrl: 'https://www.youtube.com/playlist?list=PLAq7NLS4_INIgaKLkZlpVNix3mR-5YOE6',
    thumbnail: '/images/projects/esc-reactions-2025.png',
    aspectRatio: '16:9',
    description:
      'In der Reaction-Staffel zum Eurovision Song Contest 2025 nimmt das Team von ESC kompakt die Songs des Jahrgangs unter die Lupe – hier am Beispiel des schwedischen Beitrags „Bara Bada Bastu“ von KAJ.',
    skills: ['Produktion', 'Regie', 'Schnitt', 'Grafiken']
  },
  {
    slug: 'esc-kompakt-reactions-2024',
    title: 'ESC kompakt Reactions 2024',
    client: 'ESC kompakt',
    product: '37 Reaction Videos',
    subtitle: 'ESC kompakt · 37 Reaction Videos',
    category: 'delight',
    year: '2024',
    youtubeId: 'MqJfoVRlhW4',
    youtubeUrl: 'https://www.youtube.com/playlist?list=PLAq7NLS4_INKl5ZHx3eMqh0eoMZwtOmVY',
    thumbnail: '/images/projects/esc-reactions-2024.png',
    aspectRatio: '16:9',
    description:
      'Die Reaction-Reihe von ESC kompakt zum Eurovision Song Contest 2024 in Malmö beleuchtet die verschiedenen Länderbeiträge des Wettbewerbs – hier zu Kroatiens Publikumsliebling „Rim Tim Tagi Dim“ von Baby Lasagna.',
    skills: ['Produktion', 'Regie', 'Schnitt', 'Grafiken']
  },
  {
    slug: 'zazou-landesmusikakademie',
    title: 'ZAZOU im Tonstudio',
    client: 'BARTÓKS SOFA',
    product: 'Live-Session',
    subtitle: 'BARTÓKS SOFA · Live-Session',
    category: 'delight',
    year: '2020',
    youtubeId: '7heT27OwLjs',
    youtubeUrl: 'https://youtu.be/7heT27OwLjs',
    thumbnail: '/images/projects/zazou-tonstudio.jpg',
    aspectRatio: '16:9',
    description:
      'Ein musikalischer Einblick in die Aufnahmesession von ZAZOU im Tonstudio der Landesmusikakademie, der die gemeinsame Studioarbeit und Live-Performance festhält.',
    skills: ['Regie', 'Kamera', 'Schnitt']
  },
  {
    slug: '4jackson-promo-trailer',
    title: '4Jackson Promo Trailer',
    client: '4Jackson BerlinPocketBrassBand',
    product: 'Promo-Trailer',
    subtitle: '4Jackson BerlinPocketBrassBand · Promo-Trailer',
    category: 'delight',
    year: '2020',
    youtubeId: '7i12hc_j8AI',
    youtubeUrl: 'https://youtu.be/7i12hc_j8AI',
    thumbnail: '/images/projects/4jackson-promo.jpg',
    aspectRatio: '16:9',
    description:
      'Ein energiegeladener Promo-Trailer der Berliner Formation 4Jackson – BerlinPocketBrassBand, der die Spielfreude, Bühnenpräsenz und musikalische Vielfalt der Band vorstellt.',
    skills: ['Regie', 'Kamera', 'Schnitt']
  },
  {
    slug: 'immobilfunk-dance-in-may',
    title: '(IM)MOBILFUNK – Dance in May',
    client: '4Jackson BerlinPocketBrassBand',
    product: 'Musikvideo',
    subtitle: '4Jackson BerlinPocketBrassBand · Musikvideo',
    category: 'delight',
    year: '2020',
    youtubeId: '0UEJlRDkjT0',
    youtubeUrl: 'https://youtu.be/0UEJlRDkjT0',
    thumbnail: '/images/projects/immobilfunk.jpg',
    aspectRatio: '16:9',
    description:
      'Unter dem Motto „please try this @ home“ verbindet das Musik- und Performance-Video der 4Jackson BerlinPocketBrassBand einzelne Home-Recordings zu einem gemeinsamen Tanz- und Groove-Projekt.',
    skills: ['Schnitt']
  },

  // --------------------------------------------------------------------------
  // ENLIGHT (Doku-Projekte)
  // --------------------------------------------------------------------------
  {
    slug: 'stettin-szczecin-schwimmende-gaerten',
    title: 'Stettin / Szczecin – Von schwimmenden Gärten und verschwimmenden Grenzen',
    client: 'Deutsches Kulturforum östliches Europa',
    product: 'Dokumentarfilm',
    subtitle: 'Deutsches Kulturforum östliches Europa · Dokumentarfilm',
    category: 'enlight',
    year: '2026',
    youtubeId: 'UrKPPsEVqBQ',
    youtubeUrl: 'https://youtu.be/UrKPPsEVqBQ',
    thumbnail: '/images/projects/stettin-szczecin.jpg',
    aspectRatio: '16:9',
    featured: true,
    description:
      'Eine kulturhistorische Filmreportage über die polnische Hafen- und Grenzstadt Stettin (Szczecin), die sich zwischen Wasserlandschaften, europäischer Geschichte und gegenwärtiger Identität bewegt.',
    skills: ['Regie', 'Kamera', 'Schnitt']
  },
  {
    slug: 'dorpat-tartu-trachten-und-tattoos',
    title: 'Dorpat – Tartu: Von Trachten und Tattoos',
    client: 'Deutsches Kulturforum östliches Europa',
    product: 'Dokumentarfilm',
    subtitle: 'Deutsches Kulturforum östliches Europa · Dokumentarfilm',
    category: 'enlight',
    year: '2025',
    youtubeId: 'HcqUkHwLJLs',
    youtubeUrl: 'https://youtu.be/HcqUkHwLJLs',
    thumbnail: '/images/projects/dorpat-tartu.jpg',
    aspectRatio: '16:9',
    description:
      'Gemeinsam mit der Stadtschreiberin Katrin Groth erkundet der Dokumentarfilm die estnische Kulturhauptstadt Tartu (Dorpat) im Spannungsfeld zwischen gelebter Tradition und zeitgenössischer Subkultur.',
    skills: ['Regie', 'Kamera', 'Schnitt'],
    awards: ['Eröffnungsfilm FilmFestival Cottbus 2026 – Kategorie Close Up Estonia']
  },
  {
    slug: 'temeswar-timisoara-banat',
    title: 'Temeswar – Timisoara – Banat – Rumänien',
    client: 'Deutsches Kulturforum östliches Europa',
    product: 'Dokumentarfilm',
    subtitle: 'Deutsches Kulturforum östliches Europa · Dokumentarfilm',
    category: 'enlight',
    year: '2023',
    youtubeId: 'z0r5x3Hj9VU',
    youtubeUrl: 'https://youtu.be/z0r5x3Hj9VU',
    thumbnail: '/images/projects/temeswar-timisoara.jpg',
    aspectRatio: '16:9',
    description:
      'Begleitet vom Autor und Dramatiker Thomas Perle zeichnet der zweisprachige Dokumentarfilm ein vielschichtiges Bild von Temeswar (Timisoara) und dem rumänischen Banat zwischen Mehrsprachigkeit, Erinnerung und Gegenwart.',
    skills: ['Schnitt']
  },
  {
    slug: 'renaturierung-breitwieser',
    title: 'RENATURIERUNG (1987–1988 / 2023)',
    client: 'Silvia Klara Breitwieser',
    product: 'Kunstfilm',
    subtitle: 'Silvia Klara Breitwieser · Kunstfilm',
    category: 'enlight',
    year: '2023',
    youtubeId: 'T_trs3KoLIw',
    youtubeUrl: 'https://youtu.be/T_trs3KoLIw',
    thumbnail: '/images/projects/renaturierung.jpg',
    aspectRatio: '4:3',
    description:
      'Ein künstlerischer Dokumentarfilm, der historisches Archivmaterial aus den Jahren 1987/88 in einen zeitgenössischen Dialog mit neuen Bildern von 2023 setzt.',
    skills: ['Produktion', 'Regie', 'Kamera', 'Schnitt']
  },
  {
    slug: 'zu-boden-gehen-museumsrundgang',
    title: 'ZU BODEN GEHEN',
    client: 'Silvia Klara Breitwieser',
    product: 'Museumsrundgang',
    subtitle: 'Silvia Klara Breitwieser · Museumsrundgang',
    category: 'enlight',
    year: '2023',
    youtubeId: 'MWaoZutbuAE',
    youtubeUrl: 'https://youtu.be/MWaoZutbuAE',
    thumbnail: '/images/projects/zu-boden-gehen.jpg',
    aspectRatio: '16:9',
    description:
      'Ein filmischer Ausstellungsrundgang durch das Werk der Künstlerin Silvia Klara Breitwieser, der Raum, Skulptur und Werkgespräch in einem eigenständigen Kunstfilm zusammenführt.',
    skills: ['Produktion', 'Regie', 'Kamera', 'Schnitt']
  },
  {
    slug: 'res-publica-kunst-im-oeffentlichen-raum',
    title: 'Silvia Klara Breitwieser – „RES PUBLICA“',
    client: 'Kunstverein KunstHaus Potsdam',
    product: 'Dokumentarfilm',
    subtitle: 'Kunstverein KunstHaus Potsdam · Dokumentarfilm',
    category: 'enlight',
    year: '2022',
    youtubeId: 'BEHMOOYnbjo',
    youtubeUrl: 'https://youtu.be/BEHMOOYnbjo',
    thumbnail: '/images/projects/res-publica.jpg',
    aspectRatio: '16:9',
    description:
      'Der Dokumentarfilm begleitet das Kunstprojekt „RES PUBLICA“ von Silvia Klara Breitwieser für den Kunstverein KunstHaus Potsdam und beleuchtet das Zusammenspiel von bildender Kunst und öffentlichem Raum.',
    skills: ['Produktion', 'Regie', 'Kamera', 'Schnitt']
  },
  {
    slug: 'alexandra-stahl-stadtschreiberin-rijeka',
    title: 'Eine Begegnung mit Alexandra Stahl',
    client: 'Deutsches Kulturforum östliches Europa',
    product: 'Dokumentarfilm',
    subtitle: 'Deutsches Kulturforum östliches Europa · Dokumentarfilm',
    category: 'enlight',
    year: '2020',
    youtubeId: 'nLvyVbWAMTw',
    youtubeUrl: 'https://youtu.be/nLvyVbWAMTw',
    thumbnail: '/images/projects/alexandra-stahl-rijeka.jpg',
    aspectRatio: '16:9',
    description:
      'Ein dokumentarisches Porträt der Autorin Alexandra Stahl während ihres Stadtschreiber-Stipendiums in der kroatischen Hafenstadt Rijeka, Kulturhauptstadt Europas 2020.',
    skills: ['Kamera']
  },
  {
    slug: 'neue-website-der-steinbruecke',
    title: 'Die neue Website der Steinbrücke',
    client: 'Steinbrücke',
    product: 'Website Erstellung',
    subtitle: 'Steinbrücke · Website Erstellung',
    category: 'enlight',
    year: '2022',
    youtubeId: '3E4DOtxIYW8',
    youtubeUrl: 'https://youtu.be/3E4DOtxIYW8',
    thumbnail: '/images/projects/steinbruecke.jpg',
    aspectRatio: '16:9',
    description:
      'Ein kompaktes Vorstellungs- und Informationsvideo zum Relaunch der Steinbrücke-Website, das Aufbau, Inhalte und neue Funktionen übersichtlich präsentiert.',
    skills: ['Grafiken']
  }
];

export const delightProjects = projects.filter((p) => p.category === 'delight');
export const enlightProjects = projects.filter((p) => p.category === 'enlight');
