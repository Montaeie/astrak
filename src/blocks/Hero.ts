import type { Block } from 'payload'

export const HeroBlock: Block = {
  slug: 'hero',
  labels: {
    singular: 'Hero',
    plural: 'Heroes',
  },
  interfaceName: 'HeroBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Titre principal',
      defaultValue: "On va accélérer ton SEO",
    },
    {
      name: 'highlightedWord',
      type: 'text',
      label: 'Mot mis en évidence (jaune)',
      defaultValue: 'SEO',
      admin: {
        description: 'Ce mot sera affiché en jaune dans le titre',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'Description',
      defaultValue: "On t'aide a ranker plus vite et au mieux: audit technique, stratégie de contenu, netlinkling premium et stratégie. Moins de process et plus de traffic de qualité et de leads.",
    },
    {
      name: 'badges',
      type: 'array',
      label: 'Badges',
      maxRows: 4,
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
        },
      ],
      defaultValue: [
        { text: '+30 clients satisfaits' },
        { text: '+20k abonnés sur le RS' },
      ],
    },
    {
      name: 'cta',
      type: 'group',
      label: 'Bouton CTA',
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Texte du bouton',
          defaultValue: 'Audit SEO Gratuit',
        },
        {
          name: 'link',
          type: 'text',
          label: 'Lien',
          defaultValue: '/contact',
        },
      ],
    },
    {
      name: 'stats',
      type: 'group',
      label: 'Statistiques Dashboard',
      fields: [
        {
          name: 'visitors',
          type: 'text',
          label: 'Visiteurs',
          defaultValue: '304 k',
        },
        {
          name: 'impressions',
          type: 'text',
          label: 'Impressions',
          defaultValue: '7,57 M',
        },
        {
          name: 'ctr',
          type: 'text',
          label: 'CTR moyen',
          defaultValue: '7%',
        },
        {
          name: 'position',
          type: 'text',
          label: 'Position moyenne',
          defaultValue: '3,9',
        },
      ],
    },
    {
      name: 'floatingBadges',
      type: 'group',
      label: 'Badges flottants',
      fields: [
        {
          name: 'upBadge',
          type: 'group',
          label: 'Badge positif (vert)',
          fields: [
            {
              name: 'title',
              type: 'text',
              defaultValue: '+345 Nouveau Visiteurs',
            },
            {
              name: 'subtitle',
              type: 'text',
              defaultValue: 'dans les dernières 24h',
            },
          ],
        },
        {
          name: 'downBadge',
          type: 'group',
          label: 'Badge négatif (rouge)',
          fields: [
            {
              name: 'title',
              type: 'text',
              defaultValue: "-47% Coût d'acquisition",
            },
            {
              name: 'subtitle',
              type: 'text',
              defaultValue: 'depuis la mise a jour',
            },
          ],
        },
      ],
    },
  ],
}
