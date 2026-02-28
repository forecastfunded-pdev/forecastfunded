import { TrendingUp, Target, Award, DollarSign } from 'lucide-react'

const stats = [
  { label: 'Brier Score', value: '0.142', sub: 'lower is better', icon: Target, good: true },
  { label: 'Win Rate', value: '67%', sub: 'last 30 days', icon: TrendingUp, good: true },
  { label: 'Funded Level', value: 'Phase 2', sub: '88% pass rate', icon: Award, good: true },
  { label: 'Pending Payout', value: '$1,240', sub: 'next: Mar 1', icon: DollarSign, good: false },
]

export default function DashboardPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-extrabold tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>Dashboard</h1>
        <p className="text-muted-foreground text-sm mt-1">Track your calibration and funded status</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(({ label, value, sub, icon: Icon, good }) => (
          <div key={label} className="rounded-xl border border-border/60 bg-card/50 p-4 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{label}</span>
              <Icon className="h-4 w-4 text-muted-foreground/40" />
            </div>
            <div>
              <p className="text-2xl font-bold tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>{value}</p>
              <p className="text-xs mt-0.5">{sub}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="rounded-xl border border-border/60 bg-card/30 p-8 text-center text-muted-foreground text-sm">
        Recent forecast activity will appear here
      </div>
    </div>
  )
}