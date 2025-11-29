import type { CollectionConfig } from 'payload'
import { isAdminOrEditor, publicRead } from '../lib/access'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  labels: {
    singular: 'Témoignage',
    plural: 'Témoignages',
  },
  admin: {
    useAsTitle: 'authorName',
    defaultColumns: ['authorName', 'company', 'sector'],
  },
  access: {
    read: publicRead,
    create: isAdminOrEditor,
    update: isAdminOrEditor,
    delete: isAdminOrEditor,
  },
  fields: [
    {
      name: 'content',
      type: 'textarea',
      required: true,
      label: 'Témoignage',
    },
    {
      name: 'authorName',
      type: 'text',
      required: true,
      label: 'Nom',
    },
    {
      name: 'authorRole',
      type: 'text',
      label: 'Fonction',
    },
    {
      name: 'authorPhoto',
      type: 'upload',
      relationTo: 'media',
      label: 'Photo',
    },
    {
      name: 'company',
      type: 'text',
      label: 'Entreprise',
    },
    {
      name: 'companyLogo',
      type: 'upload',
      relationTo: 'media',
      label: 'Logo entreprise',
    },
    {
      name: 'sector',
      type: 'text',
      label: 'Secteur',
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
