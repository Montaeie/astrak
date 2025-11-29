import type { Access, FieldAccess } from 'payload'

/**
 * Check if user is authenticated
 */
export const isAuthenticated: Access = ({ req: { user } }) => {
  return Boolean(user)
}

/**
 * Check if user has admin role
 */
export const isAdmin: Access = ({ req: { user } }) => {
  return user?.role === 'admin'
}

/**
 * Check if user is admin or editor
 */
export const isAdminOrEditor: Access = ({ req: { user } }) => {
  return user?.role === 'admin' || user?.role === 'editor'
}

/**
 * Check if user is the author of the document (for self-editing)
 */
export const isAdminOrSelf: Access = ({ req: { user }, id }) => {
  if (!user) return false
  if (user.role === 'admin') return true
  return user.id === id
}

/**
 * Anyone can read (public access)
 */
export const publicRead: Access = () => true

/**
 * Public read, but only published content for non-authenticated users
 */
export const publishedOrAuthenticated: Access = ({ req: { user } }) => {
  if (user) return true
  return {
    _status: {
      equals: 'published',
    },
  }
}

/**
 * Field-level access: only admin can edit
 */
export const adminFieldAccess: FieldAccess = ({ req: { user } }) => {
  return user?.role === 'admin'
}

/**
 * Field-level access: admin or editor can edit
 */
export const editorFieldAccess: FieldAccess = ({ req: { user } }) => {
  return user?.role === 'admin' || user?.role === 'editor'
}
