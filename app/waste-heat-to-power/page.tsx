import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Zap, Factory, Sun, Snowflake, Mail, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function WasteHeatToPower() {
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
							Energy Recovery Technology
						</Badge>
						<h1 className="text-3xl  lg:text-4xl font-bold leading-tight tracking-tight">
							<span className="text-foreground">WASTE HEAT</span>
							<br />
							<span className="text-accent">TO POWER</span>
						</h1>
						<p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
							Inducode can provide a solution which converts Waste Heat to Power. This Energy Efficient
							Solution can reduce energy costs and emissions.
						</p>
					</div>
				</div>
			</section>

			{/* Applications Section */}
			<section className="py-20 bg-muted border-t-2 border-b-2 border-border">
				<div className="container mx-auto px-4">
					<div className="text-center space-y-4 mb-16">
						<h2 className="text-3xl lg:text-4xl font-bold text-foreground uppercase tracking-wide">
							Applications
						</h2>
						<p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
							Our waste heat to power solutions can be applied across various industries and applications
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						<Card className="group hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card p-0">
							<div className="border-b-2 border-border flex justify-center p-8">
								<Zap className="size-16 group-hover:text-accent" />
							</div>
							<CardContent className="p-6">
								<h3 className="text-lg font-bold mb-3 text-foreground group-hover:text-accent transition-colors duration-300 uppercase tracking-wide text-center">
									Power Generation
								</h3>
								<p className="text-muted-foreground text-center leading-relaxed">
									Waste heat from Power Stations used to generate additional power
								</p>
							</CardContent>
						</Card>

						<Card className="group hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card p-0">
							<div className="border-b-2 border-border flex justify-center p-8">
								<Factory className="size-16 group-hover:text-accent" />
							</div>
							<CardContent className="p-6">
								<h3 className="text-lg font-bold mb-3 text-foreground group-hover:text-accent transition-colors duration-300 uppercase tracking-wide text-center">
									Industrial Sites
								</h3>
								<p className="text-muted-foreground text-center leading-relaxed">
									Steel/Cement industries, manufacturing industries etc generate significant waste
									heat
								</p>
							</CardContent>
						</Card>

						<Card className="group hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card p-0">
							<div className="border-b-2 border-border flex justify-center p-8">
								<Sun className="size-16 group-hover:text-accent" />
							</div>
							<CardContent className="p-6">
								<h3 className="text-lg font-bold mb-3 text-foreground group-hover:text-accent transition-colors duration-300 uppercase tracking-wide text-center">
									Concentrated Solar Power
								</h3>
								<p className="text-muted-foreground text-center leading-relaxed">
									Heat generated through harnessing the suns energy can be used to generate
									electricity
								</p>
							</CardContent>
						</Card>

						<Card className="group hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card p-0">
							<div className="border-b-2 border-border flex justify-center p-8">
								<Snowflake className="size-16 group-hover:text-accent" />
							</div>
							<CardContent className="p-6">
								<h3 className="text-lg font-bold mb-3 text-foreground group-hover:text-accent transition-colors duration-300 uppercase tracking-wide text-center">
									Chilled Water Generation
								</h3>
								<p className="text-muted-foreground text-center leading-relaxed">
									Where necessary, waste heat from process can be used to generate chilled water
									giving further increase in efficiency
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<div className="text-center space-y-8 max-w-3xl mx-auto">
						<h2 className="text-3xl font-bold text-foreground uppercase tracking-wide">
							Ready to Convert Your Waste Heat?
						</h2>
						<p className="text-xl text-muted-foreground leading-relaxed">
							Contact our team to discuss how we can help you implement waste heat to power solutions for
							your facility.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button className="bg-accent hover:bg-accent/90 text-accent-foreground border-2 border-accent font-bold uppercase tracking-wide">
								Get Consultation
								<ArrowRight className="ml-2 h-5 w-5" />
							</Button>
							<Button
								variant="outline"
								className="border-2 border-border hover:bg-muted font-bold uppercase tracking-wide bg-transparent"
							>
								Learn More
							</Button>
						</div>

						<div className="grid md:grid-cols-3 gap-8 mt-16">
							<div className="flex flex-col items-center space-y-4">
								<div className="w-12 h-12 bg-accent border-2 border-accent flex items-center justify-center">
									<Mail className="h-6 w-6 text-accent-foreground" />
								</div>
								<div className="text-center">
									<p className="font-bold text-foreground uppercase tracking-wide">Email</p>
									<p className="text-muted-foreground">info@inducode.com</p>
								</div>
							</div>

							<div className="flex flex-col items-center space-y-4">
								<div className="w-12 h-12 bg-accent border-2 border-accent flex items-center justify-center">
								<div className="text-center">
									<p className="font-bold text-foreground uppercase tracking-wide">Phone</p>
								</div>
							</div>

							<div className="flex flex-col items-center space-y-4">
								<div className="w-12 h-12 bg-accent border-2 border-accent flex items-center justify-center">
									<MapPin className="h-6 w-6 text-accent-foreground" />
								</div>
								<div className="text-center">
									<p className="font-bold text-foreground uppercase tracking-wide">Location</p>
									<p className="text-muted-foreground">Sheridan, WY 82801, USA</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
