import type { Block } from 'payload'

export const FounderBlock: Block = {
  slug: 'founder',
  labels: {
    singular: 'Fondateur',
    plural: 'Fondateurs',
  },
  interfaceName: 'FounderBlock',
  fields: [
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
        { text: '+10k abonnés Linkedin' },
        { text: '3,6 k abonnés Youtube' },
      ],
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Titre',
      defaultValue: 'Léo Poitevin — Fondateur & Passionné de SEO',
    },
    {
      name: 'paragraphs',
      type: 'array',
      label: 'Paragraphes',
      minRows: 1,
      fields: [
        {
          name: 'text',
          type: 'textarea',
          required: true,
        },
      ],
      defaultValue: [
        { text: "À la tête d'Astrak, Léo Poitevin incarne une nouvelle génération d'experts SEO : passionné, curieux et toujours en exploration." },
        { text: "Avec plus de cinq ans d'expérience à l'international, Léo a accompagné des dizaines de marques ambitieuses dans leur stratégie de visibilité. Il met aujourd'hui cette expertise au service d'Astrak pour créer des stratégies SEO agiles, basées sur la donnée, l'expérimentation et une compréhension fine des algorithmes." },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: false,
      label: 'Photo',
      admin: {
        description: 'Photo du fondateur (ajoutez-la via l\'admin)',
      },
    },
    {
      name: 'cta',
      type: 'group',
      label: 'Bouton',
      fields: [
        {
          name: 'label',
          type: 'text',
          defaultValue: "Découvrir l'agence",
        },
        {
          name: 'link',
          type: 'text',
          defaultValue: '/a-propos',
        },
      ],
    },
  ],
}
