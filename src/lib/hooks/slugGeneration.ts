import type { FieldHook } from 'payload'

/**
 * Creates a beforeValidate hook that generates a URL-friendly slug from the title
 * Handles accents, special characters, and normalizes to lowercase kebab-case
 */
export const createSlugHook = (sourceField: string = 'title'): FieldHook => {
  return ({ value, data }) => {
    // If slug already exists, keep it
    if (value) return value

    // Get source field value
    const sourceValue = data?.[sourceField]
    if (!sourceValue || typeof sourceValue !== 'string') return value

    // Generate slug from source field
    return sourceValue
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Remove accents
      .replace(/[^a-z0-9]+/g, '-')     // Replace non-alphanumeric with dashes
      .replace(/(^-|-$)/g, '')          // Remove leading/trailing dashes
  }
}

/**
 * Pre-configured slug hook using 'title' as source
 */
export const slugFromTitle = createSlugHook('title')

/**
 * Pre-configured slug hook using 'name' as source
 */
export const slugFromName = createSlugHook('name')
