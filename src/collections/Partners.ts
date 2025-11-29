import type { CollectionConfig } from 'payload'
import { isAdminOrEditor, publicRead } from '../lib/access'

export const Partners: CollectionConfig = {
  slug: 'partners',
  labels: {
    singular: 'Partenaire',
    plural: 'Partenaires',
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'order'],
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
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Logo',
    },
    {
      name: 'website',
      type: 'text',
      label: 'Site web',
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
