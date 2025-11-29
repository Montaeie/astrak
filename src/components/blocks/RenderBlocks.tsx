import React from 'react'
import type { Page } from '@/payload-types'

// Import existing section components
import { Hero } from '../sections/Hero'
import { PartnersLogos } from '../sections/PartnersLogos'
import { Expertises } from '../sections/Expertises'
import { Founder } from '../sections/Founder'
import { Results } from '../sections/Results'
import { StarterPack } from '../sections/StarterPack'
import { Testimonials } from '../sections/Testimonials'
import { CTASection } from '../sections/CTASection'

// Block-specific renderers that accept Payload data
import { HeroBlockRenderer } from './HeroBlock'
import { PartnersLogosBlockRenderer } from './PartnersLogosBlock'
import { ExpertisesBlockRenderer } from './ExpertisesBlock'
import { FounderBlockRenderer } from './FounderBlock'
import { ResultsBlockRenderer } from './ResultsBlock'
import { StarterPackBlockRenderer } from './StarterPackBlock'
import { TestimonialsBlockRenderer } from './TestimonialsBlock'
import { CTABlockRenderer } from './CTABlock'
import { ContentBlockRenderer } from './ContentBlock'
import { TwoColumnBlockRenderer } from './TwoColumnBlock'
import { CaseStudiesBlockRenderer } from './CaseStudiesBlock'

type LayoutBlock = NonNullable<Page['layout']>[number]

interface RenderBlocksProps {
  blocks: Page['layout']
}

export function RenderBlocks({ blocks }: RenderBlocksProps) {
  if (!blocks || blocks.length === 0) {
    return null
  }

  return (
    <>
      {blocks.map((block, index) => {
        const key = block.id || `block-${index}`

        switch (block.blockType) {
          case 'hero':
            return <HeroBlockRenderer key={key} block={block} />
          case 'partnersLogos':
            return <PartnersLogosBlockRenderer key={key} block={block} />
          case 'expertises':
            return <ExpertisesBlockRenderer key={key} block={block} />
          case 'founder':
            return <FounderBlockRenderer key={key} block={block} />
          case 'results':
            return <ResultsBlockRenderer key={key} block={block} />
          case 'starterPack':
            return <StarterPackBlockRenderer key={key} block={block} />
          case 'testimonials':
            return <TestimonialsBlockRenderer key={key} block={block} />
          case 'cta':
            return <CTABlockRenderer key={key} block={block} />
          case 'content':
            return <ContentBlockRenderer key={key} block={block} />
          case 'twoColumn':
            return <TwoColumnBlockRenderer key={key} block={block} />
          case 'caseStudies':
            return <CaseStudiesBlockRenderer key={key} block={block} />
          default:
            console.warn(`Unknown block type: ${(block as any).blockType}`)
            return null
        }
      })}
    </>
  )
}
