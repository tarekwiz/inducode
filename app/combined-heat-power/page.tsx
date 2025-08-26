import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Zap, Settings, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export default function CombinedHeatPowerPage() {
	return (
		<div className="min-h-screen bg-background">
			{/* Hero Section */}
			<section className="py-20 lg:py-32">
				<div className="container mx-auto px-4">
					<div className="text-center space-y-8 max-w-4xl mx-auto">
						<Badge
							variant="secondary"
							className="w-fit bg-accent/10 text-accent border-2 border-accent font-bold uppercase tracking-wide mx-auto"
						>
							Energy Technology
						</Badge>
						<h1 className="text-3xl  lg:text-4xl font-bold leading-tight tracking-tight">
							<span className="text-foreground">COMBINED HEAT</span>
							<br />
							<span className="text-accent">& POWER (CHP)</span>
						</h1>
						<p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
							Combined heat and Power (CHP) is the simultaneous on-site generation of usable heat and
							electricity from a single fuel source, delivering exceptional energy efficiency.
						</p>
					</div>
				</div>
			</section>

			{/* Main Content */}
			<section className="py-20 bg-muted border-t-2 border-b-2 border-border">
				<div className="container mx-auto px-4">
					<div className="grid lg:grid-cols-2 gap-12 mb-16">
						<div className="space-y-6">
							<h2 className="text-3xl font-bold text-foreground uppercase tracking-wide">What is CHP?</h2>
							<p className="text-muted-foreground leading-relaxed">
								Cogeneration or Combined Heat and Power (CHP) is an extremely efficient technology that
								converts gas or biogas into electricity and heat in a single process at the point of
								use.
							</p>
							<p className="text-muted-foreground leading-relaxed">
								When electricity is generated in a CHP unit, the heat by-product is recovered rather
								than wasted, and can therefore be used to deliver space heating, to produce hot water,
								or to produce steam.
							</p>
						</div>
						<Card className="border-2 border-border bg-card">
							<CardHeader>
								<CardTitle className="flex items-center text-accent uppercase tracking-wide">
									<Zap className="mr-3 h-6 w-6" />
									Key Benefits
								</CardTitle>
							</CardHeader>
							<CardContent className="space-y-3">
								<div className="flex items-center">
									<div className="w-2 h-2 bg-accent mr-3"></div>
									<span className="text-muted-foreground">
										Produces cleaner and cheaper electricity with "free" heating
									</span>
								</div>
								<div className="flex items-center">
									<div className="w-2 h-2 bg-accent mr-3"></div>
									<span className="text-muted-foreground">Recovers wasted energy</span>
								</div>
								<div className="flex items-center">
									<div className="w-2 h-2 bg-accent mr-3"></div>
									<span className="text-muted-foreground">
										Reduces energy costs and carbon emissions
									</span>
								</div>
								<div className="flex items-center">
									<div className="w-2 h-2 bg-accent mr-3"></div>
									<span className="text-muted-foreground">
										Operates on Natural Gas and Biogas fuels
									</span>
								</div>
								<div className="flex items-center">
									<div className="w-2 h-2 bg-accent mr-3"></div>
									<span className="text-muted-foreground">
										Space heating, domestic hot water, pool heating, process heat and more
									</span>
								</div>
								<div className="flex items-center">
									<div className="w-2 h-2 bg-accent mr-3"></div>
									<span className="text-muted-foreground">
										Systems custom designed to clients electrical and thermal requirements
									</span>
								</div>
							</CardContent>
						</Card>
					</div>

					{/* CHP Process */}
					<div className="space-y-8">
						<div className="text-center">
							<h2 className="text-3xl font-bold text-foreground uppercase tracking-wide mb-4">
								CHP Process
							</h2>
							<div className="w-24 h-1 bg-accent mx-auto"></div>
						</div>

						<Card className="border-2 border-border bg-card">
							<CardContent className="p-8">
								<div className="grid md:grid-cols-2 gap-8 items-center">
									<div className="space-y-4">
										<div className="flex items-center space-x-3">
											<TrendingUp className="h-8 w-8 text-accent" />
											<h3 className="text-xl font-bold text-foreground uppercase tracking-wide">
												Efficiency
											</h3>
										</div>
										<p className="text-muted-foreground leading-relaxed">
											According to the European Commission for Energy and Transport, in some cases
											over 90% and often over 80% of the energy source is converted to a usable
											output with CHP.
										</p>
										<p className="text-muted-foreground leading-relaxed">
											In contrast, even the most modern separate production systems for
											electricity have an overall efficiency of 35 – 40%.
										</p>
									</div>
									<div className="space-y-4">
										<div className="flex items-center space-x-3">
											<Settings className="h-8 w-8 text-accent" />
											<h3 className="text-xl font-bold text-foreground uppercase tracking-wide">
												Heat Recovery
											</h3>
										</div>
										<p className="text-muted-foreground leading-relaxed">
											The heat can be recovered in the form of hot water or steam via a heat
											recovery steam generator connects to the exhaust.
										</p>
										<p className="text-muted-foreground leading-relaxed">
											Because it is possible to install CHP units close to the actual consumption
											point, distribution losses can be minimized. This makes CHP even more energy
											efficient and therefore helps to reduce both greenhouse-gas emissions and
											fuel costs.
										</p>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<div className="text-center space-y-8 max-w-2xl mx-auto">
						<h2 className="text-3xl font-bold text-foreground uppercase tracking-wide">
							Ready to Get Started?
						</h2>
						<p className="text-xl text-muted-foreground leading-relaxed">
							Contact our team to learn more about how CHP technology can benefit your facility.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button
								asChild
								className="bg-accent hover:bg-accent/90 text-accent-foreground border-2 border-accent font-bold uppercase tracking-wide"
							>
								<Link href="/#contact">
									Get Quote
									<ArrowRight className="ml-2 h-5 w-5" />
								</Link>
							</Button>
							<Button
								asChild
								variant="outline"
								className="border-2 border-border hover:bg-muted font-bold uppercase tracking-wide bg-transparent"
							>
								<Link href="/feasibility-studies">Feasibility Study</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
