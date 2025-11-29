import type { GlobalConfig } from 'payload'

export const Header: GlobalConfig = {
  slug: 'header',
  label: 'Header',
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
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      label: 'Logo',
    },
    {
      name: 'navigation',
      type: 'array',
      label: 'Menu principal',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
          label: 'Libellé',
        },
        {
          name: 'type',
          type: 'select',
          required: true,
          defaultValue: 'link',
          options: [
            { label: 'Lien simple', value: 'link' },
            { label: 'Menu déroulant', value: 'dropdown' },
          ],
        },
        {
          name: 'link',
          type: 'text',
          label: 'Lien',
          admin: {
            condition: (_, siblingData) => siblingData?.type === 'link',
          },
        },
        {
          name: 'children',
          type: 'array',
          label: 'Sous-menu',
          admin: {
            condition: (_, siblingData) => siblingData?.type === 'dropdown',
          },
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
              label: 'Libellé',
            },
            {
              name: 'link',
              type: 'text',
              required: true,
              label: 'Lien',
            },
            {
              name: 'description',
              type: 'text',
              label: 'Description',
              admin: {
                description: 'Description optionnelle affichée sous le libellé',
              },
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
    },
    {
      name: 'cta',
      type: 'group',
      label: 'Bouton CTA',
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Texte',
          defaultValue: 'Prendre Rendez-vous',
        },
        {
          name: 'link',
          type: 'text',
          label: 'Lien',
          defaultValue: '/contact',
        },
      ],
    },
  ],
}
