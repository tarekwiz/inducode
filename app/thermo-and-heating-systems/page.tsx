import { Card, CardContent } from '@/components/ui/card'
import { Filter, Settings, Wind, Flame, Droplet, RectangleHorizontal, Droplets } from 'lucide-react'

export default function ThermoAndHeatingSystems() {
	return (
		<div className="min-h-screen bg-background">
			{/* Hero Section */}
			<section className="py-20 lg:py-32">
				<div className="container mx-auto px-4">
					<div className="text-center space-y-8 max-w-4xl mx-auto">
						<h1 className="text-3xl  lg:text-4xl font-bold leading-tight tracking-tight">
							<span className="text-accent">Thermo and Heating Systems</span>
						</h1>
						<p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
							Inducode Technologies LLC as a trusted and reliable assembled, supplier and imported of
							boiler & burners, our assemble & erection work have been provided & Presented to various
							sectors: Food Industry-Pulp Paper Mill-Textile Plant-Chemical Plant-Utility, Power &
							CHP-Central Heating.
						</p>
					</div>
				</div>
			</section>

			{/* Gas Safety Systems */}
			<section className="py-20 bg-muted border-t-2 border-b-2 border-border">
				<div className="container mx-auto px-4">
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{[
							{ title: 'STEAM BOILER', icon: Wind },
							{ title: 'THERMO OIL BOILER', icon: Droplets },
							{ title: 'HOT WATER BOILER', icon: Droplet },
							{ title: 'HEAT EXCHANGER & REFLUX DRUM & FILTER BANK', icon: Filter },
							{
								title: 'SQUARE FOOT HORIZONTAL ARBON STEEL SHELL & TUBE HEAT EXCHANGER',
								icon: RectangleHorizontal,
							},
							{ title: 'BURNERS', icon: Flame },
						].map((item, index) => (
							<Card
								key={index}
								className="group hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card p-0"
							>
								<CardContent className="p-0">
									<div className=" overflow-hidden bg-muted border-b-2 border-border relative">
										<div className="inset-0 bg-background/80 flex items-center justify-center  p-8">
											<item.icon className="h-16 w-16 text-accent" />
										</div>
									</div>
									<div className="p-4">
										<h3 className="font-bold text-center text-sm text-foreground uppercase tracking-wide">
											{item.title}
										</h3>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>
		</div>
	)
}
