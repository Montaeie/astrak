/**
 * Returns the site URL based on environment
 * Priority: NEXT_PUBLIC_SITE_URL > VERCEL_URL > localhost
 */
export function getSiteURL(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }
  return 'http://localhost:3000'
}

/**
 * Returns the full URL for a page
 */
export function getPageURL(slug: unknown): string {
  const baseUrl = getSiteURL()
  const slugStr = typeof slug === 'string' ? slug : ''
  const pagePath = slugStr === 'home' ? '/' : `/${slugStr}`
  return `${baseUrl}${pagePath}`
}

/**
 * Returns the full URL for a blog article
 */
export function getArticleURL(slug: unknown): string {
  const baseUrl = getSiteURL()
  const slugStr = typeof slug === 'string' ? slug : ''
  return `${baseUrl}/blog/${slugStr}`
}
