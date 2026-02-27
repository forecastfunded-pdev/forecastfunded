'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, TrendingUp, History, Trophy, Settings, CreditCard, HelpCircle, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'

const sidebarLinks = [
  {
    section: 'Overview',
    items: [
      { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
      { href: '/dashboard/markets', label: 'Live Markets', icon: TrendingUp, badge: 'Live' },
      { href: '/dashboard/history', label: 'Forecast History', icon: History },
    ],
  },
  {
    section: 'Performance',
    items: [
      { href: '/dashboard/leaderboard', label: 'Leaderboard', icon: Trophy },
      { href: '/dashboard/payouts', label: 'Payouts', icon: CreditCard },
    ],
  },
  {
    section: 'Account',
    items: [
      { href: '/dashboard/settings', label: 'Settings', icon: Settings },
      { href: '/dashboard/support', label: 'Support', icon: HelpCircle },
    ],
  },
]

export function DashboardSidebar() {
  const pathname = usePathname()
  return (
    <aside className="w-60 shrink-0 border-r border-border/50 bg-card/20 min-h-full">
      <div className="sticky top-16 p-4 flex flex-col gap-6">
        {sidebarLinks.map((group) => (
          <div key={group.section}>
            <p className="mb-1.5 px-3 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/60">{group.section}</p>
            <nav className="flex flex-col gap-0.5">
              {group.items.map(({ href, label, icon: Icon, badge }) => {
                const isActive = pathname === href
                return (
                  <Link key={href} href={href} className={cn('flex items-center justify-between gap-3 rounded-md px-3 py-2 text-sm font-medium transition-all', isActive ? 'bg-primary/10 text-primary border border-primary/20' : 'text-muted-foreground hover:text-foreground hover:bg-white/5')}>
                    <span className="flex items-center gap-2.5">
                      <Icon className={cn('h-4 w-4', isActive ? 'text-primary' : '')} />
                      {label}
                    </span>
                    {badge && <Badge className="h-4 text-[9px] px-1.5 bg-primary/20 text-primary border-primary/30 font-semibold">{badge}</Badge>}
                    {isActive && !badge && <ChevronRight className="h-3 w-3 text-primary/50" />}
                  </Link>
                )
              })}
            </nav>
          </div>
        ))}
      </div>
    </aside>
  )
}
