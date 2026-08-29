import type { Access, FieldAccess } from 'payload'

import type { User } from '@/payload-types'

/** Public read. Used for anything rendered on the marketing site. */
export const anyone: Access = () => true

/** Any signed-in CMS user. */
export const authenticated: Access = ({ req }) => Boolean(req.user)

/** Admins only — user management, destructive operations. */
export const adminOnly: Access = ({ req }) => (req.user as User | null)?.role === 'admin'

export const adminOnlyField: FieldAccess = ({ req }) => (req.user as User | null)?.role === 'admin'

/**
 * Public visitors see published documents only; signed-in editors see drafts
 * too, so the admin preview and the list view stay useful.
 */
export const publishedOrAuthenticated: Access = ({ req }) => {
  if (req.user) return true

  return {
    _status: {
      equals: 'published',
    },
  }
}

/** Write-only from the public site: forms create, but nobody reads back. */
export const createOnly: Access = () => true
