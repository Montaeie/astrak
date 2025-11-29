import type { Block } from 'payload'

export const CTABlock: Block = {
  slug: 'cta',
  labels: {
    singular: 'CTA',
    plural: 'CTAs',
  },
  interfaceName: 'CTABlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Titre',
      defaultValue: 'Prêt à propulser ta visibilité sur Google?',
    },
    {
      name: 'subtitle',
      type: 'textarea',
      label: 'Sous-titre',
      defaultValue: 'Commence par un audit SEO gratuit et découvre ton potentiel de croissance',
    },
    {
      name: 'buttonText',
      type: 'text',
      label: 'Texte du bouton',
      defaultValue: 'Prendre Rendez-vous',
    },
    {
      name: 'buttonLink',
      type: 'text',
      label: 'Lien du bouton',
      defaultValue: '/contact',
    },
  ],
}
