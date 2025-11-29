import type { CollectionConfig } from 'payload'
import { revalidatePath } from 'next/cache'

// Helper to get the site URL
const getSiteURL = () => {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }
  return 'http://localhost:3000'
}

export const Articles: CollectionConfig = {
  slug: 'articles',
  labels: {
    singular: 'Article',
    plural: 'Articles',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'author', '_status', 'publishedAt'],
    livePreview: {
      url: ({ data }) => {
        return `${getSiteURL()}/blog/${data?.slug || ''}`
      },
    },
    preview: (data) => {
      return `${getSiteURL()}/blog/${data?.slug || ''}`
    },
  },
  versions: {
    drafts: {
      autosave: {
        interval: 300,
      },
    },
    maxPerDoc: 25,
  },
  access: {
    read: ({ req }) => {
      // Published articles are public
      // Drafts require authentication
      if (req.user) return true
      return {
        _status: {
          equals: 'published',
        },
      }
    },
  },
  hooks: {
    afterChange: [
      ({ doc }) => {
        // Only revalidate if slug exists and article is published
        if (doc.slug && doc._status === 'published') {
          try {
            revalidatePath(`/blog/${doc.slug}`)
            revalidatePath('/blog')
          } catch (e) {
            // Ignore revalidation errors in admin context
          }
        }
        return doc
      },
    ],
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
      index: true,
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            if (!value && data?.title) {
              return data.title
                .toLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, '')
            }
            return value
          },
        ],
      },
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Contenu',
          fields: [
            {
              name: 'featuredImage',
              type: 'upload',
              relationTo: 'media',
              required: true,
              label: 'Image à la une',
            },
            {
              name: 'excerpt',
              type: 'textarea',
              required: true,
              label: 'Extrait',
              maxLength: 280,
              admin: {
                description: 'Résumé affiché dans les listes et les réseaux sociaux',
              },
            },
            {
              name: 'content',
              type: 'richText',
              required: true,
              label: 'Contenu',
            },
          ],
        },
        {
          label: 'Détails',
          fields: [
            {
              name: 'category',
              type: 'relationship',
              relationTo: 'categories',
              required: true,
              maxDepth: 1,
              label: 'Catégorie',
              admin: {
                description: 'Catégorie principale de l\'article',
              },
            },
            {
              name: 'tags',
              type: 'array',
              label: 'Tags',
              fields: [
                {
                  name: 'tag',
                  type: 'text',
                  required: true,
                },
              ],
              admin: {
                description: 'Tags pour améliorer la découvrabilité',
              },
            },
            {
              name: 'author',
              type: 'relationship',
              relationTo: 'users',
              required: true,
              maxDepth: 1,
              label: 'Auteur',
              defaultValue: ({ user }) => user?.id,
            },
            {
              name: 'authorOverride',
              type: 'group',
              label: 'Infos auteur personnalisées',
              admin: {
                description: 'Remplace les infos de l\'auteur pour cet article',
              },
              fields: [
                {
                  name: 'name',
                  type: 'text',
                  label: 'Nom affiché',
                },
                {
                  name: 'role',
                  type: 'text',
                  label: 'Rôle',
                },
                {
                  name: 'avatar',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Photo',
                },
              ],
            },
            {
              name: 'relatedArticles',
              type: 'relationship',
              relationTo: 'articles',
              hasMany: true,
              maxDepth: 1,
              label: 'Articles similaires',
              maxRows: 3,
              filterOptions: ({ id }) => ({
                id: { not_equals: id },
              }),
            },
          ],
        },
        {
          label: 'SEO',
          fields: [
            {
              name: 'meta',
              type: 'group',
              label: 'SEO',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  label: 'Meta Title',
                  admin: {
                    description: 'Laissez vide pour utiliser le titre de l\'article',
                  },
                },
                {
                  name: 'description',
                  type: 'textarea',
                  label: 'Meta Description',
                  maxLength: 160,
                  admin: {
                    description: 'Laissez vide pour utiliser l\'extrait',
                  },
                },
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Image OG',
                  admin: {
                    description: 'Laissez vide pour utiliser l\'image à la une',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      required: true,
      label: 'Date de publication',
      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
      defaultValue: () => new Date().toISOString(),
    },
    {
      name: 'readingTime',
      type: 'number',
      label: 'Temps de lecture (min)',
      admin: {
        position: 'sidebar',
        description: 'Calculé automatiquement si vide',
        readOnly: true,
      },
      hooks: {
        beforeChange: [
          ({ value, siblingData }) => {
            // Si une valeur manuelle existe, la garder
            if (value) return value

            // Calculer à partir du contenu richText
            const content = siblingData?.content
            if (!content) return 1

            // Extraire le texte du richText (format Lexical)
            const extractText = (node: unknown): string => {
              if (!node || typeof node !== 'object') return ''
              const n = node as Record<string, unknown>
              if (n.text && typeof n.text === 'string') return n.text
              if (Array.isArray(n.children)) {
                return n.children.map(extractText).join(' ')
              }
              if (n.root && typeof n.root === 'object') {
                return extractText(n.root)
              }
              return ''
            }

            const text = extractText(content)
            const wordCount = text.split(/\s+/).filter(Boolean).length
            // Moyenne de 200 mots par minute
            const minutes = Math.ceil(wordCount / 200)
            return Math.max(1, minutes)
          },
        ],
      },
    },
  ],
}
