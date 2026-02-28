import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { TrendingUp, Shield, Trophy, ArrowRight } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <section className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-24 pb-20 text-center">
        <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 font-medium px-3 py-1">
          Now live on Polymarket International
        </Badge>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
          Get funded to <span className="text-primary">forecast</span><br />the future.
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
          ForecastFunded is the world&apos;s first prediction market prop firm. Prove your calibration with Brier Score evaluation - not P&L - and earn real capital.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/signup">
            <Button size="lg" className="bg-primary text-primary-foreground font-bold px-8 h-12 text-base shadow-lg shadow-primary/25">
              Start Free Challenge <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/how-it-works">
            <Button size="lg" variant="outline" className="px-8 h-12 text-base border-border/60">How It Works</Button>
          </Link>
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: TrendingUp, title: 'Calibration-First Evaluation', desc: 'Scored by Brier Score, not luck. Consistent, well-calibrated forecasters get funded.' },
            { icon: Shield, title: 'Risk-Free Challenge', desc: 'No capital at risk. Complete our evaluation phases and unlock a funded account.' },
            { icon: Trophy, title: 'Keep 80% of Profits', desc: 'Funded forecasters keep 80% of their prediction market returns. Scale up over time.' },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-border/60 bg-card/40 p-6 hover:bg-card/70 hover:border-primary/30 transition-all">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 mb-4">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-bold text-base mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
