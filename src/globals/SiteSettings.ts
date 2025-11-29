import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Paramètres du site',
  access: {
    read: () => true,
  },
  versions: {
    drafts: {
      autosave: {
        interval: 500,
      },
    },
    max: 10,
  },
  hooks: {
    afterChange: [
      async ({ doc }) => {
        // Revalidate all pages when site settings change
        try {
          const { revalidatePath } = await import('next/cache')
          revalidatePath('/', 'layout')
        } catch (e) {
          // Ignore in admin context
        }
        return doc
      },
    ],
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Général',
          fields: [
            {
              name: 'siteName',
              type: 'text',
              required: true,
              label: 'Nom du site',
              defaultValue: 'Astrak',
            },
            {
              name: 'siteDescription',
              type: 'textarea',
              label: 'Description du site',
              defaultValue: 'Agence SEO spécialisée en référencement naturel et IA générative',
            },
            {
              name: 'logo',
              type: 'upload',
              relationTo: 'media',
              label: 'Logo',
            },
            {
              name: 'favicon',
              type: 'upload',
              relationTo: 'media',
              label: 'Favicon',
            },
          ],
        },
        {
          label: 'Contact',
          fields: [
            {
              name: 'email',
              type: 'email',
              label: 'Email de contact',
            },
            {
              name: 'phone',
              type: 'text',
              label: 'Téléphone',
            },
            {
              name: 'address',
              type: 'textarea',
              label: 'Adresse',
            },
            {
              name: 'calendlyUrl',
              type: 'text',
              label: 'Lien Calendly',
              admin: {
                description: 'URL pour la prise de rendez-vous',
              },
            },
          ],
        },
        {
          label: 'Réseaux sociaux',
          fields: [
            {
              name: 'socials',
              type: 'array',
              label: 'Réseaux sociaux',
              fields: [
                {
                  name: 'platform',
                  type: 'select',
                  required: true,
                  options: [
                    { label: 'Twitter / X', value: 'twitter' },
                    { label: 'LinkedIn', value: 'linkedin' },
                    { label: 'YouTube', value: 'youtube' },
                    { label: 'Instagram', value: 'instagram' },
                    { label: 'Facebook', value: 'facebook' },
                    { label: 'TikTok', value: 'tiktok' },
                  ],
                },
                {
                  name: 'url',
                  type: 'text',
                  required: true,
                  label: 'URL',
                },
              ],
            },
          ],
        },
        {
          label: 'SEO par défaut',
          fields: [
            {
              name: 'defaultMeta',
              type: 'group',
              label: 'Meta par défaut',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  label: 'Meta Title par défaut',
                  defaultValue: 'Astrak | Agence SEO & IA Générative',
                },
                {
                  name: 'description',
                  type: 'textarea',
                  label: 'Meta Description par défaut',
                  maxLength: 160,
                },
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Image OG par défaut',
                },
              ],
            },
            {
              name: 'googleAnalyticsId',
              type: 'text',
              label: 'Google Analytics ID',
              admin: {
                description: 'Ex: G-XXXXXXXXXX',
              },
            },
            {
              name: 'googleTagManagerId',
              type: 'text',
              label: 'Google Tag Manager ID',
              admin: {
                description: 'Ex: GTM-XXXXXXX',
              },
            },
          ],
        },
      ],
    },
  ],
}
