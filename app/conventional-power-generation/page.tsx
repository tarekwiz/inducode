import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Zap, Settings, Cog } from 'lucide-react'
import Link from 'next/link'

export default function ConventionalPowerGeneration() {
	return (
		<div className="min-h-screen bg-background">
			{/* Hero Section */}
			<section className="py-20 lg:py-32">
				<div className="container mx-auto px-4">
					<div className="text-center space-y-8 max-w-4xl mx-auto">
						<Badge
							variant="secondary"
							className="w-fit bg-muted text-muted-foreground border-2 border-border font-bold uppercase tracking-wide mx-auto"
						>
							Power Generation Solutions
						</Badge>
						<h1 className="text-4xl lg:text-6xl font-bold leading-tight tracking-tight">
							<span className="text-foreground">CONVENTIONAL</span>
							<br />
							<span className="text-accent">POWER GENERATION</span>
						</h1>
						<p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
							We deliver conventional power generation solutions up to 150MWe using our extensive
							experience in combining power generation technologies with advanced cooling and heat
							generation systems.
						</p>
					</div>
				</div>
			</section>

			{/* Main Content */}
			<section className="py-20 bg-muted border-t-2 border-b-2 border-border">
				<div className="container mx-auto px-4">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div className="space-y-8">
							<div className="space-y-6">
								<h2 className="text-3xl font-bold text-foreground uppercase tracking-wide">
									Advanced Power Generation Technologies
								</h2>
								<p className="text-lg text-muted-foreground leading-relaxed">
									We use our experience in combining power generation from turbines, medium speed
									engines and high speed engines with our extensive knowledge of conventional cooling
									and heat generation technologies.
								</p>
								<p className="text-lg text-muted-foreground leading-relaxed">
									Our preliminary engineering assessment looks at enhancing conventional power
									generation with renewables while also ensuring the latest technologies are
									introduced to ensure optimum efficiency.
								</p>
								<p className="text-lg text-muted-foreground leading-relaxed">
									Our team are continually looking at the lifecycle aspect of the projects while
									implementing the highest standard of engineering.
								</p>
							</div>
						</div>

						<div className="space-y-6">
							<Card className="border-2 border-border bg-card">
								<CardHeader className="pb-4">
									<div className="w-16 h-16 bg-accent border-2 border-accent flex items-center justify-center mb-4">
										<Zap className="h-8 w-8 text-accent-foreground" />
									</div>
									<CardTitle className="text-accent uppercase tracking-wide">
										Power Generation Range
									</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-muted-foreground leading-relaxed">
										Solutions up to 150MWe capacity using turbines, medium speed engines, and high
										speed engines.
									</p>
								</CardContent>
							</Card>

							<Card className="border-2 border-border bg-card">
								<CardHeader className="pb-4">
									<div className="w-16 h-16 bg-secondary border-2 border-secondary flex items-center justify-center mb-4">
										<Settings className="h-8 w-8 text-secondary-foreground" />
									</div>
									<CardTitle className="text-secondary uppercase tracking-wide">
										Integrated Systems
									</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-muted-foreground leading-relaxed">
										Combining power generation with conventional cooling and heat generation
										technologies for maximum efficiency.
									</p>
								</CardContent>
							</Card>

							<Card className="border-2 border-border bg-card">
								<CardHeader className="pb-4">
									<div className="w-16 h-16 bg-chart-3 border-2 border-chart-3 flex items-center justify-center mb-4">
										<Cog className="h-8 w-8 text-white" />
									</div>
									<CardTitle className="text-chart-3 uppercase tracking-wide">
										Engineering Excellence
									</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-muted-foreground leading-relaxed">
										Highest standard of engineering with lifecycle considerations and renewable
										energy integration.
									</p>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<div className="text-center space-y-8 max-w-3xl mx-auto">
						<h2 className="text-3xl font-bold text-foreground uppercase tracking-wide">
							Ready to Discuss Your Power Generation Project?
						</h2>
						<p className="text-lg text-muted-foreground leading-relaxed">
							Contact our team of experts to learn how we can deliver efficient conventional power
							generation solutions for your specific requirements.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button className="bg-accent hover:bg-accent/90 text-accent-foreground border-2 border-accent font-bold uppercase tracking-wide">
								Get Quote
								<ArrowRight className="ml-2 h-4 w-4" />
							</Button>
							<Button
								variant="outline"
								className="border-2 border-border hover:bg-muted font-bold uppercase tracking-wide bg-transparent"
							>
								Learn More
							</Button>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
