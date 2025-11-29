import type { GlobalConfig } from 'payload'

export const Footer: GlobalConfig = {
  slug: 'footer',
  label: 'Footer',
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
      name: 'columns',
      type: 'array',
      label: 'Colonnes du footer',
      maxRows: 4,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Titre de la colonne',
        },
        {
          name: 'links',
          type: 'array',
          label: 'Liens',
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
              name: 'newTab',
              type: 'checkbox',
              label: 'Ouvrir dans un nouvel onglet',
              defaultValue: false,
            },
          ],
        },
      ],
    },
    {
      name: 'bottomLinks',
      type: 'array',
      label: 'Liens du bas',
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
      ],
    },
    {
      name: 'copyright',
      type: 'text',
      label: 'Copyright',
      defaultValue: '© Astrak',
    },
  ],
}
