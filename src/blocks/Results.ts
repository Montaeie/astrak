import type { Block } from 'payload'

export const ResultsBlock: Block = {
  slug: 'results',
  labels: {
    singular: 'Résultats',
    plural: 'Résultats',
  },
  interfaceName: 'ResultsBlock',
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      label: 'Titre',
      defaultValue: "Nos réussites parlent d'elles-mêmes",
    },
    {
      name: 'results',
      type: 'array',
      label: 'Résultats',
      minRows: 1,
      maxRows: 6,
      fields: [
        {
          name: 'client',
          type: 'text',
          required: true,
          label: 'Client',
        },
        {
          name: 'stat',
          type: 'text',
          required: true,
          label: 'Statistique',
          admin: {
            description: 'Ex: +140%, Top 3 Google',
          },
        },
        {
          name: 'label',
          type: 'text',
          required: true,
          label: 'Description',
        },
        {
          name: 'href',
          type: 'text',
          label: "Lien vers l'étude de cas",
        },
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
          label: 'Icône',
        },
      ],
    },
  ],
}
