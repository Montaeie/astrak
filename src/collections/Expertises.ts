import type { CollectionConfig } from 'payload'

export const Expertises: CollectionConfig = {
  slug: 'expertises',
  labels: {
    singular: 'Expertise',
    plural: 'Expertises',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'order'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Titre',
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
      name: 'icon',
      type: 'upload',
      relationTo: 'media',
      label: 'Icône',
    },
    {
      name: 'shortDescription',
      type: 'textarea',
      required: true,
      label: 'Description courte (carte)',
      maxLength: 250,
    },
    {
      name: 'fullDescription',
      type: 'richText',
      label: 'Description complète (page)',
    },
    {
      name: 'features',
      type: 'array',
      label: 'Points clés',
      fields: [
        {
          name: 'feature',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'pricing',
      type: 'group',
      label: 'Tarification',
      fields: [
        {
          name: 'startingPrice',
          type: 'text',
          label: 'À partir de',
        },
        {
          name: 'priceDetails',
          type: 'text',
          label: 'Détails prix',
        },
      ],
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
