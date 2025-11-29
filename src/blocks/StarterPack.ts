import type { Block } from 'payload'

export const StarterPackBlock: Block = {
  slug: 'starterPack',
  labels: {
    singular: 'Starter Pack',
    plural: 'Starter Packs',
  },
  interfaceName: 'StarterPackBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Titre',
      defaultValue: 'Starter Pack SEO',
    },
    {
      name: 'priceLabel',
      type: 'text',
      label: 'Label prix',
      defaultValue: 'À partir de',
    },
    {
      name: 'price',
      type: 'text',
      required: true,
      label: 'Prix',
      defaultValue: '500€',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      defaultValue: 'Le plan d\'action complet pour faire décoller votre SEO en 3-4 mois, sans complexité ni accompagnement chronophage',
    },
    {
      name: 'featuresLabel',
      type: 'text',
      label: 'Label des fonctionnalités',
      defaultValue: 'Dans cette offre',
    },
    {
      name: 'features',
      type: 'array',
      label: 'Fonctionnalités',
      minRows: 1,
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
        },
      ],
      defaultValue: [
        { text: 'Stratégie Contenu' },
        { text: 'Plan Netlinking' },
        { text: 'Plugins essentiels à installer' },
        { text: 'Optimisations prioritaires' },
        { text: '1 heure de support incluse' },
      ],
    },
    {
      name: 'primaryCta',
      type: 'group',
      label: 'Bouton primaire',
      fields: [
        {
          name: 'label',
          type: 'text',
          defaultValue: 'Audit SEO Gratuit',
        },
        {
          name: 'link',
          type: 'text',
          defaultValue: '/contact',
        },
      ],
    },
    {
      name: 'secondaryCta',
      type: 'group',
      label: 'Bouton secondaire',
      fields: [
        {
          name: 'label',
          type: 'text',
          defaultValue: 'Découvrir le Starter Pack',
        },
        {
          name: 'link',
          type: 'text',
          defaultValue: '/starter-pack',
        },
      ],
    },
    {
      name: 'footnote',
      type: 'textarea',
      label: 'Note de bas',
      defaultValue: "Prix adapté selon la complexité de votre projet\n(jusqu'à 2000€ pour les projets premium avec intervention de Léo)",
    },
  ],
}
