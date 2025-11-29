import type { Block } from 'payload'

export const PartnersLogosBlock: Block = {
  slug: 'partnersLogos',
  labels: {
    singular: 'Logos Partenaires',
    plural: 'Logos Partenaires',
  },
  interfaceName: 'PartnersLogosBlock',
  fields: [
    {
      name: 'partners',
      type: 'array',
      label: 'Partenaires',
      minRows: 1,
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
          label: 'Nom',
        },
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Logo',
        },
      ],
    },
  ],
}
