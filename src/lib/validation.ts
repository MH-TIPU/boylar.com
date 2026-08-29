import { z } from 'zod'

/**
 * Shared between the client form and the API route, so the browser and the
 * server enforce exactly the same rules.
 */

/** Bots fill hidden fields; humans leave them empty. */
const honeypot = z.string().max(0, 'Rejected').optional()

export const contactSchema = z.object({
  name: z.string().trim().min(2, 'Please enter your name').max(120),
  email: z.string().trim().email('Please enter a valid email address').max(200),
  phone: z.string().trim().max(40).optional().or(z.literal('')),
  company: z.string().trim().max(160).optional().or(z.literal('')),
  subject: z.string().trim().max(200).optional().or(z.literal('')),
  message: z
    .string()
    .trim()
    .min(20, 'Please give us at least a couple of sentences')
    .max(5000, 'That is longer than we can accept — please summarise'),
  website: honeypot,
})

export const quoteSchema = contactSchema.extend({
  serviceInterest: z.array(z.number()).min(1, 'Select at least one service'),
  budget: z.string().optional().or(z.literal('')),
  timeline: z.string().optional().or(z.literal('')),
})

export const subscribeSchema = z.object({
  email: z.string().trim().email('Please enter a valid email address').max(200),
  name: z.string().trim().max(120).optional(),
  website: honeypot,
})

export type ContactInput = z.infer<typeof contactSchema>
export type QuoteInput = z.infer<typeof quoteSchema>
export type SubscribeInput = z.infer<typeof subscribeSchema>
