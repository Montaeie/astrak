import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  labels: {
    singular: 'Utilisateur',
    plural: 'Utilisateurs',
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'role'],
  },
  auth: {
    tokenExpiration: 7200, // 2 heures
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Nom complet',
    },
    {
      name: 'role',
      type: 'select',
      defaultValue: 'admin',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Éditeur', value: 'editor' },
        { label: 'Auteur', value: 'author' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'avatar',
      type: 'upload',
      relationTo: 'media',
      label: 'Photo de profil',
    },
    {
      name: 'bio',
      type: 'textarea',
      label: 'Biographie',
      maxLength: 300,
    },
    {
      name: 'jobTitle',
      type: 'text',
      label: 'Fonction',
      admin: {
        description: 'Ex: CEO, Content Manager, etc.',
      },
    },
    {
      name: 'socials',
      type: 'group',
      label: 'Réseaux sociaux',
      fields: [
        {
          name: 'twitter',
          type: 'text',
          label: 'Twitter / X',
        },
        {
          name: 'linkedin',
          type: 'text',
          label: 'LinkedIn',
        },
      ],
    },
  ],
}
