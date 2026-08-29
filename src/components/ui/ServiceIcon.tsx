import {
  Bot,
  Cloud,
  Code2,
  Cpu,
  Database,
  Megaphone,
  Network,
  Palette,
  Server,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  type LucideIcon,
} from 'lucide-react'

import { cn } from '@/lib/utils'

/** Maps the CMS `icon` select values onto Lucide components. */
const ICONS: Record<string, LucideIcon> = {
  'code-2': Code2,
  server: Server,
  palette: Palette,
  megaphone: Megaphone,
  'shopping-cart': ShoppingCart,
  'shield-check': ShieldCheck,
  cloud: Cloud,
  cpu: Cpu,
  database: Database,
  smartphone: Smartphone,
  network: Network,
  bot: Bot,
}

export function ServiceIcon({ name, className }: { name?: string | null; className?: string }) {
  const Icon = ICONS[name ?? ''] ?? Code2
  return <Icon className={cn('size-5', className)} aria-hidden />
}
