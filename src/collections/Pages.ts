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

import {
  HeroBlock,
  PartnersLogosBlock,
  ExpertisesBlock,
  FounderBlock,
  ResultsBlock,
  StarterPackBlock,
  TestimonialsBlock,
  CTABlock,
} from '../blocks'

// Bloc de contenu richText générique
const ContentBlock = {
  slug: 'content',
  labels: { singular: 'Contenu', plural: 'Contenus' },
  interfaceName: 'ContentBlock',
  fields: [
    {
      name: 'content',
      type: 'richText' as const,
      label: 'Contenu',
    },
  ],
}

// Bloc deux colonnes
const TwoColumnBlock = {
  slug: 'twoColumn',
  labels: { singular: 'Deux colonnes', plural: 'Deux colonnes' },
  interfaceName: 'TwoColumnBlock',
  fields: [
    {
      name: 'leftColumn',
      type: 'richText' as const,
      label: 'Colonne gauche',
    },
    {
      name: 'rightColumn',
      type: 'richText' as const,
      label: 'Colonne droite',
    },
    {
      name: 'image',
      type: 'upload' as const,
      relationTo: 'media' as const,
      label: 'Image (optionnelle)',
    },
    {
      name: 'imagePosition',
      type: 'select' as const,
      label: "Position de l'image",
      options: [
        { label: 'Gauche', value: 'left' },
        { label: 'Droite', value: 'right' },
      ],
      defaultValue: 'right',
    },
  ],
}

// Bloc études de cas
const CaseStudiesBlock = {
  slug: 'caseStudies',
  labels: { singular: 'Études de cas', plural: 'Études de cas' },
  interfaceName: 'CaseStudiesBlock',
  fields: [
    {
      name: 'heading',
      type: 'text' as const,
      label: 'Titre de la section',
    },
    {
      name: 'selectedCases',
      type: 'relationship' as const,
      relationTo: 'case-studies' as const,
      hasMany: true,
      label: 'Sélectionner des études de cas',
    },
  ],
}

export const Pages: CollectionConfig = {
  slug: 'pages',
  labels: {
    singular: 'Page',
    plural: 'Pages',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', '_status', 'updatedAt'],
    livePreview: {
      url: ({ data }) => {
        const pagePath = data?.slug === 'home' ? '/' : `/${data?.slug || ''}`
        return `${getSiteURL()}${pagePath}`
      },
    },
    preview: (data) => {
      const pagePath = data?.slug === 'home' ? '/' : `/${data?.slug || ''}`
      return `${getSiteURL()}${pagePath}`
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
    read: () => true,
  },
  hooks: {
    afterChange: [
      ({ doc }) => {
        if (doc.slug && doc._status === 'published') {
          const path = doc.slug === 'home' ? '/' : `/${doc.slug}`
          try {
            revalidatePath(path)
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
      label: 'Titre de la page',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      admin: {
        position: 'sidebar',
        description: 'URL de la page (ex: "a-propos" pour /a-propos). Utilisez "home" pour la page d\'accueil.',
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
              name: 'layout',
              type: 'blocks',
              label: 'Sections de la page',
              blocks: [
                HeroBlock,
                PartnersLogosBlock,
                ExpertisesBlock,
                FounderBlock,
                ResultsBlock,
                StarterPackBlock,
                TestimonialsBlock,
                CTABlock,
                ContentBlock,
                TwoColumnBlock,
                CaseStudiesBlock,
              ],
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
                    description: 'Laissez vide pour utiliser le titre de la page',
                  },
                },
                {
                  name: 'description',
                  type: 'textarea',
                  label: 'Meta Description',
                  maxLength: 160,
                },
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Image OG',
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
      label: 'Date de publication',
      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
  ],
}
