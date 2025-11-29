import { NextResponse } from 'next/server'
import { getPayload } from '@/lib/payload'
import { seed } from '@/seed'

export async function GET() {
  try {
    const payload = await getPayload()

    // Run full seed (media, testimonials, home page)
    const result = await seed(payload)

    return NextResponse.json({
      message: 'Seed completed successfully!',
      result,
    })
  } catch (error) {
    console.error('Seed error:', error)
    return NextResponse.json(
      { error: String(error) },
      { status: 500 }
    )
  }
}
