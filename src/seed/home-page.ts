import type { Payload } from 'payload'

export async function seedHomePage(payload: Payload) {
  // Check if home page already exists
  const existingPages = await payload.find({
    collection: 'pages',
    where: {
      slug: { equals: 'home' },
    },
    limit: 1,
  })

  if (existingPages.docs.length > 0) {
    console.log('🏠 Home page already exists, skipping seed')
    return existingPages.docs[0]
  }

  console.log('🌱 Seeding home page...')

  const homePage = await payload.create({
    collection: 'pages',
    data: {
      title: 'Accueil',
      slug: 'home',
      _status: 'published',
      layout: [
        // Hero Block
        {
          blockType: 'hero',
          title: "On va accélérer ton SEO",
          highlightedWord: 'SEO',
          description: "On t'aide a ranker plus vite et au mieux: audit technique, stratégie de contenu, netlinkling premium et stratégie. Moins de process et plus de traffic de qualité et de leads.",
          badges: [
            { text: '+30 clients satisfaits' },
            { text: '+20k abonnés sur le RS' },
          ],
          cta: {
            label: 'Audit SEO Gratuit',
            link: '/contact',
          },
          stats: {
            visitors: '304 k',
            impressions: '7,57 M',
            ctr: '7%',
            position: '3,9',
          },
          floatingBadges: {
            upBadge: {
              title: '+345 Nouveau Visiteurs',
              subtitle: 'dans les dernières 24h',
            },
            downBadge: {
              title: "-47% Coût d'acquisition",
              subtitle: 'depuis la mise a jour',
            },
          },
        },
        // Partners Logos Block - empty, will need media uploads
        {
          blockType: 'partnersLogos',
          partners: [],
        },
        // Expertises Block
        {
          blockType: 'expertises',
          heading: 'Nos Expertises',
          description: 'Nos leviers et outils pour booster ta visibilité et ton acquisition',
          cta: {
            label: 'Prendre Rendez-vous',
            link: '/contact',
          },
          expertises: [
            {
              title: 'Référencement ChatGPT',
              description: "Notre agence GEO transforme votre visibilité digitale sur ChatGPT, Google SGE, Perplexity, Claude, Gemini et Bing Chat. On vous positionne directement dans les réponses des intelligences artificielles.",
              href: '/expertises/referencement-chatgpt',
              iconType: 'chatgpt',
            },
            {
              title: 'Agence E-reputation',
              description: "Grâce à un mix de SEO, netlinking et stratégie de contenu, nous aidons les entreprises et particuliers à maîtriser leur image sur Google et les plateformes d'avis.",
              href: '/expertises/e-reputation',
              iconType: 'star',
            },
            {
              title: 'Audit SEO Approfondi',
              description: "Boostez votre visibilité en ligne grâce à un audit SEO personnalisé. Découvrez les points d'amélioration clés de votre site et repartez avec une feuille de route claire pour optimiser votre positionnement sur Google.",
              href: '/expertises/audit-seo',
              iconType: 'audit',
            },
            {
              title: 'Netlinking Premium',
              description: "Discutons de votre stratégie de netlinking personnalisée et découvrez comment nous pouvons multiplier votre autorité de domaine avec nos campagnes sur-mesure à partir de 1000€/mois.",
              href: '/expertises/netlinking',
              iconType: 'netlinking',
            },
            {
              title: 'SEO Black Hat',
              description: "Vous avez déjà optimisé tous les fondamentaux du SEO ? Votre site respecte toutes les bonnes pratiques White Hat, mais vous stagnez face à une concurrence féroce ? Le Black Hat SEO est la solution.",
              href: '/expertises/black-hat-seo',
              iconType: 'blackhat',
            },
          ],
        },
        // Founder Block
        {
          blockType: 'founder',
          badges: [
            { text: '+10k abonnés Linkedin' },
            { text: '3,6 k abonnés Youtube' },
          ],
          title: 'Léo Poitevin — Fondateur & Passionné de SEO',
          paragraphs: [
            { text: "À la tête d'Astrak, Léo Poitevin incarne une nouvelle génération d'experts SEO : passionné, curieux et toujours en exploration." },
            { text: "Avec plus de cinq ans d'expérience à l'international, Léo a accompagné des dizaines de marques ambitieuses dans leur stratégie de visibilité. Il met aujourd'hui cette expertise au service d'Astrak pour créer des stratégies SEO agiles, basées sur la donnée, l'expérimentation et une compréhension fine des algorithmes." },
          ],
          cta: {
            label: "Découvrir l'agence",
            link: '/a-propos',
          },
        },
        // Results Block
        {
          blockType: 'results',
          heading: "Nos réussites parlent d'elles-mêmes",
          results: [
            {
              client: 'MyBrocante',
              stat: '+140%',
              label: 'de traffic organique en 6 mois',
              href: '/etudes-de-cas/mybrocante',
            },
            {
              client: 'Nativus CBD',
              stat: 'Top 3 Google',
              label: 'sur 10 mots-clés stratégiques',
              href: '/etudes-de-cas/nativus-cbd',
            },
            {
              client: 'Assistant Rénov',
              stat: '+60%',
              label: 'de leads qualifiés après refonte',
              href: '/etudes-de-cas/assistant-renov',
            },
          ],
        },
        // Starter Pack Block
        {
          blockType: 'starterPack',
          title: 'Starter Pack SEO',
          priceLabel: 'À partir de',
          price: '500€',
          description: "Le plan d'action complet pour faire décoller votre SEO en 3-4 mois, sans complexité ni accompagnement chronophage",
          featuresLabel: 'Dans cette offre',
          features: [
            { text: 'Stratégie Contenu' },
            { text: 'Plan Netlinking' },
            { text: 'Plugins essentiels à installer' },
            { text: 'Optimisations prioritaires' },
            { text: '1 heure de support incluse' },
          ],
          primaryCta: {
            label: 'Audit SEO Gratuit',
            link: '/contact',
          },
          secondaryCta: {
            label: 'Découvrir le Starter Pack',
            link: '/starter-pack',
          },
          footnote: "Prix adapté selon la complexité de votre projet\n(jusqu'à 2000€ pour les projets premium avec intervention de Léo)",
        },
        // Testimonials Block - using manual testimonials
        {
          blockType: 'testimonials',
          heading: 'Ils nous ont fait confiance',
          useCollection: false,
          manualTestimonials: [
            {
              content: "Je recommande à 100% ! Après avoir fait appel à plusieurs free-lance pour du conseil en référencement, en web développement ou autres prestations liés à mon e-commerce administré via WordPress j'ai enfin trouvé une personne à la fois fiable et compétente mais aussi professionnelle et sympathique. Du bon boulot, des idées et du suivi ! N'hésitez pas à lui faire confiance !",
              authorName: 'Mathilde Corbin',
              authorRole: 'Fondatrice',
              company: 'YOGOM',
              sector: 'Sport & Fitness',
            },
            {
              content: "Travailler avec Léo est une véritable chance. Non seulement il excelle dans le domaine du SEO, mais il apporte également une vision business aiguisée qui fait toute la différence. Léo est sans conteste l'un des meilleurs experts SEO que j'ai eu l'occasion de rencontrer, reconnu dans la sphère francophone pour son approche avant-gardiste et ses trouvailles toujours innovantes.",
              authorName: 'Romain Pirotte',
              authorRole: 'Automation, R&D, SEO Hacks & Tips',
              company: 'Black Hat SEO',
              sector: 'Marketing & Publicité',
            },
            {
              content: "Léo m'a aidé pendant 4 mois sur le SEO de mon site thématique concurrentielle sur le \"Gambling\" et j'ai été très satisfait. Il maitrise parfaitement le netlinking et m'a trouvé les meilleurs spots aux prix les plus attractifs pour booker tous les mois mes backlinks.",
              authorName: 'Alain ABULAFYA',
              authorRole: 'Indépendant',
              company: 'Editeur de site independant',
              sector: 'Media',
            },
            {
              content: "Nous avons travaillé avec Astrak pour les premiers investissements en référencement naturel de notre site Assistant Rénov. Astrak a bien compris les spécificités de notre activité et a su proposer une stratégie SEO pertinente, qui a montré des résultats prometteurs en termes de ranking et de volume de leads.",
              authorName: 'Hugo ELIKI ROMAN',
              company: 'Assistant Rénov',
            },
            {
              content: "Nous avons fait appel à Astrak pour notre stratégie SEO et nous en sommes très satisfaits. En moins de 6 mois, nous sommes passés premiers sur Google sur des requêtes clés, ce qui a eu un impact direct et positif sur notre visibilité et notre activité.",
              authorName: 'Manon Gras',
              authorRole: 'International Senior Sales',
              company: 'Kowee',
            },
          ],
        },
        // CTA Block
        {
          blockType: 'cta',
          title: 'Prêt à propulser ta visibilité sur Google?',
          subtitle: 'Commence par un audit SEO gratuit et découvre ton potentiel de croissance',
          buttonText: 'Prendre Rendez-vous',
          buttonLink: '/contact',
        },
      ],
      meta: {
        title: 'Astrak | Agence SEO & IA Générative',
        description: "On va accélérer ton SEO. Audit technique, stratégie de contenu, netlinking premium et plus de trafic de qualité.",
      },
    },
  })

  console.log('✅ Home page created successfully!')
  return homePage
}
