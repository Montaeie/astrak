import type { Block } from 'payload'

export const ExpertisesBlock: Block = {
  slug: 'expertises',
  labels: {
    singular: 'Expertises',
    plural: 'Expertises',
  },
  interfaceName: 'ExpertisesBlock',
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      label: 'Titre',
      defaultValue: 'Nos Expertises',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      defaultValue: 'Nos leviers et outils pour booster ta visibilité et ton acquisition',
    },
    {
      name: 'cta',
      type: 'group',
      label: 'Bouton CTA',
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Texte',
          defaultValue: 'Prendre Rendez-vous',
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
      name: 'expertises',
      type: 'array',
      label: 'Liste des expertises',
      minRows: 1,
      maxRows: 6,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Titre',
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          label: 'Description',
        },
        {
          name: 'href',
          type: 'text',
          required: true,
          label: 'Lien',
        },
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
          label: 'Icône (SVG)',
        },
        {
          name: 'iconType',
          type: 'select',
          label: 'Type d\'icône prédéfinie',
          options: [
            { label: 'ChatGPT', value: 'chatgpt' },
            { label: 'Étoile (E-reputation)', value: 'star' },
            { label: 'Audit', value: 'audit' },
            { label: 'Netlinking', value: 'netlinking' },
            { label: 'Black Hat', value: 'blackhat' },
          ],
          admin: {
            description: 'Utilisé si aucune icône uploadée',
          },
        },
      ],
    },
  ],
}
