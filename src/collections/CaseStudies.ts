import type { CollectionConfig } from 'payload'

export const CaseStudies: CollectionConfig = {
  slug: 'case-studies',
  labels: {
    singular: 'Étude de cas',
    plural: 'Études de cas',
  },
  admin: {
    useAsTitle: 'clientName',
    defaultColumns: ['clientName', 'mainStat', 'sector'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'clientName',
      type: 'text',
      required: true,
      label: 'Nom du client',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'clientLogo',
      type: 'upload',
      relationTo: 'media',
      label: 'Logo client',
    },
    {
      name: 'sector',
      type: 'text',
      label: 'Secteur',
    },
    {
      name: 'mainStat',
      type: 'group',
      label: 'Statistique principale',
      fields: [
        {
          name: 'value',
          type: 'text',
          required: true,
          label: 'Valeur (ex: +140%)',
        },
        {
          name: 'label',
          type: 'text',
          required: true,
          label: 'Description (ex: de trafic organique en 6 mois)',
        },
      ],
    },
    {
      name: 'excerpt',
      type: 'textarea',
      label: 'Résumé court',
      maxLength: 200,
    },
    {
      name: 'challenge',
      type: 'richText',
      label: 'Le défi',
    },
    {
      name: 'solution',
      type: 'richText',
      label: 'Notre solution',
    },
    {
      name: 'results',
      type: 'array',
      label: 'Résultats',
      fields: [
        {
          name: 'stat',
          type: 'text',
          required: true,
          label: 'Statistique',
        },
        {
          name: 'description',
          type: 'text',
          required: true,
          label: 'Description',
        },
      ],
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Image à la une',
    },
    {
      name: 'seo',
      type: 'group',
      label: 'SEO',
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
          label: 'Meta Title',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta Description',
          maxLength: 160,
        },
      ],
    },
    {
      name: 'order',
      type: 'number',
      label: 'Ordre d\'affichage',
      defaultValue: 0,
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
