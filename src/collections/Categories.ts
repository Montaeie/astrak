import type { CollectionConfig } from 'payload'
import { slugFromName } from '../lib/hooks/slugGeneration'
import { isAdminOrEditor, publicRead } from '../lib/access'

export const Categories: CollectionConfig = {
  slug: 'categories',
  labels: {
    singular: 'Catégorie',
    plural: 'Catégories',
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'slug', 'articlesCount'],
  },
  access: {
    read: publicRead,
    create: isAdminOrEditor,
    update: isAdminOrEditor,
    delete: isAdminOrEditor,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Nom',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [slugFromName],
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      admin: {
        description: 'Description de la catégorie (optionnelle)',
      },
    },
    {
      name: 'color',
      type: 'select',
      label: 'Couleur',
      options: [
        { label: 'Bleu', value: 'blue' },
        { label: 'Vert', value: 'green' },
        { label: 'Violet', value: 'purple' },
        { label: 'Orange', value: 'orange' },
        { label: 'Rose', value: 'pink' },
        { label: 'Cyan', value: 'cyan' },
      ],
      defaultValue: 'blue',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'displayOrder',
      type: 'number',
      label: 'Ordre d\'affichage',
      defaultValue: 0,
      admin: {
        position: 'sidebar',
        description: 'Les catégories sont triées par ordre croissant',
      },
    },
    {
      name: 'meta',
      type: 'group',
      label: 'SEO',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Meta Title',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Meta Description',
          maxLength: 160,
        },
      ],
    },
  ],
}
