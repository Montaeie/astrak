import type { Block } from 'payload'

export const TestimonialsBlock: Block = {
  slug: 'testimonials',
  labels: {
    singular: 'Témoignages',
    plural: 'Témoignages',
  },
  interfaceName: 'TestimonialsBlock',
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      label: 'Titre',
      defaultValue: 'Ils nous ont fait confiance',
    },
    {
      name: 'useCollection',
      type: 'checkbox',
      label: 'Utiliser la collection Témoignages',
      defaultValue: true,
      admin: {
        description: 'Si activé, affiche les témoignages de la collection. Sinon, utilisez les témoignages manuels ci-dessous.',
      },
    },
    {
      name: 'selectedTestimonials',
      type: 'relationship',
      relationTo: 'testimonials',
      hasMany: true,
      label: 'Témoignages sélectionnés',
      admin: {
        condition: (_, siblingData) => siblingData?.useCollection === true,
        description: 'Laissez vide pour afficher tous les témoignages',
      },
    },
    {
      name: 'manualTestimonials',
      type: 'array',
      label: 'Témoignages manuels',
      admin: {
        condition: (_, siblingData) => siblingData?.useCollection === false,
      },
      fields: [
        {
          name: 'content',
          type: 'textarea',
          required: true,
          label: 'Contenu',
        },
        {
          name: 'authorName',
          type: 'text',
          required: true,
          label: "Nom de l'auteur",
        },
        {
          name: 'authorRole',
          type: 'text',
          label: 'Rôle',
        },
        {
          name: 'company',
          type: 'text',
          required: true,
          label: 'Entreprise',
        },
        {
          name: 'sector',
          type: 'text',
          label: 'Secteur',
        },
        {
          name: 'authorPhoto',
          type: 'upload',
          relationTo: 'media',
          label: 'Photo',
        },
      ],
    },
  ],
}
