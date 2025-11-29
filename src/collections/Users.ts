import type { CollectionConfig } from 'payload'
import { isAdmin, isAdminOrSelf } from '../lib/access'

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
  access: {
    // Only admins can see all users, others can only see themselves
    read: isAdminOrSelf,
    // Only admins can create users
    create: isAdmin,
    // Admins can update anyone, users can update themselves
    update: isAdminOrSelf,
    // Only admins can delete users
    delete: isAdmin,
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
