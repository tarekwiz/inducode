import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Zap, Thermometer, Droplets, Settings, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function TriGeneration() {
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
							<span className="text-foreground">TRI-GENERATION</span>
							<br />
							<span className="text-accent">TECHNOLOGY</span>
						</h1>
						<p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
							The generation of three energy outputs (electricity, heat, and chilled water) from one
							single fuel input, maximizing energy efficiency and cost savings.
						</p>
					</div>
				</div>
			</section>

			{/* Technology Overview */}
			<section className="py-20 bg-muted border-t-2 border-b-2 border-border">
				<div className="container mx-auto px-4">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div className="space-y-8">
							<div className="space-y-4">
								<h2 className="text-3xl font-bold text-foreground uppercase tracking-wide">
									What is Tri-Generation?
								</h2>
								<p className="text-lg text-muted-foreground leading-relaxed">
									Tri-generation is the generation of three energy outputs (namely Electricity, Heat,
									and Chilled Water) from one single fuel input. Typically, natural gas or diesel can
									be used as fuel in an on-site Combined Cooling, Heat and Power plant.
								</p>
							</div>
						</div>
						<div className="bg-card border-2 border-border p-8">
							<div className="text-center space-y-6">
								<Zap className="h-20 w-20 text-accent mx-auto" />
								<h3 className="text-2xl font-bold text-foreground uppercase tracking-wide">
									Single Fuel Input
								</h3>
								<div className="flex justify-center space-x-8">
									<div className="text-center">
										<Zap className="h-12 w-12 text-accent mx-auto mb-2" />
										<p className="text-sm font-bold uppercase tracking-wide">Electricity</p>
									</div>
									<div className="text-center">
										<Thermometer className="h-12 w-12 text-accent mx-auto mb-2" />
										<p className="text-sm font-bold uppercase tracking-wide">Heat</p>
									</div>
									<div className="text-center">
										<Droplets className="h-12 w-12 text-accent mx-auto mb-2" />
										<p className="text-sm font-bold uppercase tracking-wide">Chilled Water</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* System Components */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<div className="text-center space-y-4 mb-16">
						<h2 className="text-3xl font-bold text-foreground uppercase tracking-wide">
							System Components
						</h2>
						<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
							A Tri-Generation plant typically consists of three primary components working together to
							maximize energy efficiency.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						<Card className="border-2 border-border hover:border-accent transition-all duration-300 bg-card">
							<CardHeader className="text-center pb-4">
								<div className="w-16 h-16 bg-accent border-2 border-accent flex items-center justify-center mx-auto mb-4">
									<Zap className="h-8 w-8 text-accent-foreground" />
								</div>
								<CardTitle className="text-accent uppercase tracking-wide">
									CHP Generation Plant
								</CardTitle>
							</CardHeader>
							<CardContent className="text-center">
								<p className="text-muted-foreground leading-relaxed">
									For the purposes of converting the fuel input to usable electricity and heat through
									efficient combined heat and power technology.
								</p>
							</CardContent>
						</Card>

						<Card className="border-2 border-border hover:border-accent transition-all duration-300 bg-card">
							<CardHeader className="text-center pb-4">
								<div className="w-16 h-16 bg-accent border-2 border-accent flex items-center justify-center mx-auto mb-4">
									<Droplets className="h-8 w-8 text-accent-foreground" />
								</div>
								<CardTitle className="text-accent uppercase tracking-wide">
									Absorption Chiller
								</CardTitle>
							</CardHeader>
							<CardContent className="text-center">
								<p className="text-muted-foreground leading-relaxed">
									For the purposes of converting some of the CHP heat output to usable chilled water
									using thermal energy instead of mechanical energy.
								</p>
							</CardContent>
						</Card>

						<Card className="border-2 border-border hover:border-accent transition-all duration-300 bg-card">
							<CardHeader className="text-center pb-4">
								<div className="w-16 h-16 bg-accent border-2 border-accent flex items-center justify-center mx-auto mb-4">
									<Settings className="h-8 w-8 text-accent-foreground" />
								</div>
								<CardTitle className="text-accent uppercase tracking-wide">
									Controls & Distribution
								</CardTitle>
							</CardHeader>
							<CardContent className="text-center">
								<p className="text-muted-foreground leading-relaxed">
									For the purposes of delivering the above energies to the Client's premises with
									intelligent monitoring and control systems.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Absorption Chiller Technology */}
			<section className="py-20 bg-muted border-t-2 border-b-2 border-border">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto text-center space-y-8">
						<h2 className="text-3xl font-bold text-foreground uppercase tracking-wide">
							Absorption Chiller Technology
						</h2>
						<p className="text-lg text-muted-foreground leading-relaxed">
							An 'Absorption Chiller' is a device that uses heat instead of mechanical energy to provide
							cooling. It does this via a thermal compressor, which consists of an absorber, a generator,
							a pump, and a throttling device. The thermal compressor of an absorption chiller replaces
							the mechanical vapour compressor used in electrical chillers.
						</p>
						<div className="bg-card border-2 border-border p-8">
							<h3 className="text-xl font-bold text-foreground uppercase tracking-wide mb-4">
								Common Refrigerant/Absorbent Mixtures
							</h3>
							<div className="grid md:grid-cols-2 gap-6">
								<div className="text-center">
									<div className="w-12 h-12 bg-accent border-2 border-accent flex items-center justify-center mx-auto mb-2">
										<Droplets className="h-6 w-6 text-accent-foreground" />
									</div>
									<p className="font-bold uppercase tracking-wide">Water/Lithium Bromide</p>
								</div>
								<div className="text-center">
									<div className="w-12 h-12 bg-accent border-2 border-accent flex items-center justify-center mx-auto mb-2">
										<Droplets className="h-6 w-6 text-accent-foreground" />
									</div>
									<p className="font-bold uppercase tracking-wide">Ammonia/Water</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Benefits */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<div className="text-center space-y-4 mb-16">
						<h2 className="text-3xl font-bold text-foreground uppercase tracking-wide">
							Benefits of Tri-Generation
						</h2>
						<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
							Tri-Generation technology offers significant advantages in energy efficiency, cost
							reduction, and environmental impact.
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
						{[
							'Greater displacement of energy costs due to increased utilization of heat',
							'Reduced electricity costs and demand',
							'Reduced heating costs',
							'Reduced cooling cost',
							'Reduced CO2 emissions',
							'In-line with company environmental policy',
							'Security of supply',
							'Improved building energy rating',
						].map((benefit, index) => (
							<Card
								key={index}
								className="border-2 border-border hover:border-accent transition-all duration-300 bg-card p-4"
							>
								<div className="flex items-start space-x-3">
									<CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
									<p className="text-sm text-muted-foreground leading-relaxed">{benefit}</p>
								</div>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section className="py-20 bg-muted border-t-2 border-border">
				<div className="container mx-auto px-4">
					<div className="text-center space-y-8 max-w-3xl mx-auto">
						<h2 className="text-3xl font-bold text-foreground uppercase tracking-wide">
							Ready to Implement Tri-Generation?
						</h2>
						<p className="text-lg text-muted-foreground leading-relaxed">
							Contact our experts to learn how Tri-Generation technology can optimize your energy systems
							and reduce operational costs.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button
								asChild
								className="bg-accent hover:bg-accent/90 text-accent-foreground border-2 border-accent font-bold uppercase tracking-wide"
							>
								<Link href="/#contact">
									Get Started
									<ArrowRight className="ml-2 h-4 w-4" />
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

			{/* Footer */}
			<footer className="bg-primary text-primary-foreground py-12 border-t-2 border-border">
				<div className="container mx-auto px-4 text-center">
					<div className="flex items-center justify-center space-x-3 mb-4">
						<div className="w-8 h-8 bg-accent border-2 border-accent flex items-center justify-center">
							<span className="text-accent-foreground font-bold text-sm">I</span>
						</div>
						<div>
							<h3 className="font-bold text-lg tracking-wider">INDUCODE</h3>
							<p className="text-xs uppercase tracking-widest opacity-80">TECHNOLOGIES</p>
						</div>
					</div>
					<p className="text-sm opacity-80 uppercase tracking-wide">
						Copyright 2025 Inducode Technologies LLC. All Rights Reserved.
					</p>
				</div>
			</footer>
		</div>
	)
}
