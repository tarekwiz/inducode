import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
	Snowflake, 
	Wind, 
	Settings, 
	Thermometer,
	Fan,
	Building2 
} from 'lucide-react'

export default function ComfortHVACTechnologies() {
	const hvacSystems = [
		{
			title: 'AIR CONDITIONING UNIT / SYSTEM',
			icon: Snowflake,
		},
		{
			title: 'MECHANICAL COMPRESSOR CHILLERS',
			icon: Settings,
		},
		{
			title: 'ABSORPTION CHILLER',
			icon: Thermometer,
		},
		{
			title: 'DOMESTIC FANS',
			icon: Fan,
		},
		{
			title: 'ENERGY SAVING VENTILATION',
			icon: Wind,
		},
	]

	const hvacComponents = [
		{
			title: 'Ventilation Ducts & Fittings',
			icon: Wind,
		},
		{
			title: 'Industrial & Commercial Fans',
			icon: Fan,
		},
		{
			title: 'Air Handling Units',
			icon: Building2,
		},
		{
			title: 'Fan Coil Units',
			icon: Snowflake,
		},
	]

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
							HVAC Technology
						</Badge>
						<h1 className="text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
							<span className="text-foreground">COMFORT &</span>
							<br />
							<span className="text-accent">HVAC TECHNOLOGIES</span>
						</h1>
						<p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
							Inducode Technologies LLC providing perfect HVAC Systems, quality and professional 
							service. Wherever you are, we will provide considerate services for you. Inducode 
							Technologies LLC integrated solution covers not only high-quality products but also 
							all-round services.
						</p>
					</div>
				</div>
			</section>

			{/* About HVAC Systems */}
			<section className="py-20 bg-muted border-t-2 border-b-2 border-border">
				<div className="container mx-auto px-4">
					<div className="space-y-8 max-w-4xl mx-auto">
						<div className="text-center">
							<h2 className="text-3xl font-bold text-foreground uppercase tracking-wide mb-4">
								Engineered Environmental Control
							</h2>
							<div className="w-24 h-1 bg-accent mx-auto"></div>
						</div>
						
						<div className="text-muted-foreground leading-relaxed space-y-6">
							<p>
								Environmental Control Systems (HVAC systems) are designed and created by Licensed 
								Engineers, using the required engineering knowledge to coordinate several variables 
								in order to achieve the desired environmental conditions. This means, that when these 
								engineered systems have to be worked on, the engineering knowledge is essential for 
								the evaluation, testing, adjusting or modification of these variables.
							</p>
							
							<p>
								Inducode Technologies LLC specialized in the testing and certification of HVAC and 
								Hydronic systems. Using the latest technology, standards and instrumentation, our 
								specialized group of engineers and technicians perform all necessary tests and 
								adjustments to certify, modify or design in order to obtain required systems 
								performance found for industry, hospital and commercial applications.
							</p>
							
							<p>
								This experienced and specialized knowledge makes Inducode Technologies LLC not only 
								the best choice when you need to evaluate, test, adjust or modify your engineered 
								HVAC or Hydronic systems, it is also the way that you obtain an "engineered service 
								for your engineered system".
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* HVAC Systems Grid */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<div className="space-y-12">
						<div className="text-center">
							<h2 className="text-3xl font-bold text-foreground uppercase tracking-wide mb-4">
								HVAC Systems & Solutions
							</h2>
							<div className="w-24 h-1 bg-accent mx-auto"></div>
						</div>

						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
							{hvacSystems.map((system, index) => (
								<Card
									key={index}
									className="group hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card p-0"
								>
									<CardContent className="p-0">
										<div className="overflow-hidden bg-muted border-b-2 border-border relative">
											<div className="inset-0 bg-background/80 flex items-center justify-center p-8">
												<system.icon className="h-16 w-16 text-accent" />
											</div>
										</div>
										<div className="p-4">
											<h3 className="font-bold text-center text-sm text-foreground uppercase tracking-wide">
												{system.title}
											</h3>
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* HVAC Components */}
			<section className="py-20 bg-muted border-t-2 border-b-2 border-border">
				<div className="container mx-auto px-4">
					<div className="space-y-12">
						<div className="text-center">
							<h2 className="text-3xl font-bold text-foreground uppercase tracking-wide mb-4">
								HVAC Components & Equipment
							</h2>
							<div className="w-24 h-1 bg-accent mx-auto"></div>
						</div>

						<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
							{hvacComponents.map((component, index) => (
								<Card
									key={index}
									className="group hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card p-0"
								>
									<CardContent className="p-0">
										<div className="overflow-hidden bg-background border-b-2 border-border relative">
											<div className="inset-0 bg-muted/50 flex items-center justify-center p-8">
												<component.icon className="h-16 w-16 text-accent" />
											</div>
										</div>
										<div className="p-4">
											<h3 className="font-bold text-center text-sm text-foreground uppercase tracking-wide">
												{component.title}
											</h3>
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Engineering Excellence */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<div className="space-y-8 max-w-4xl mx-auto text-center">
						<h2 className="text-3xl font-bold text-foreground uppercase tracking-wide">
							Engineering Excellence
						</h2>
						<div className="w-24 h-1 bg-accent mx-auto"></div>
						
						<p className="text-lg text-muted-foreground leading-relaxed">
							Due to the engineering support, Inducode Technologies LLC is capable to deal with 
							unexpected situations where the systems components or design have to be altered 
							with prompt action and effectively. All works are supervised and certified by 
							licensed engineers specialized in this field and using standards and procedures 
							of the most recognized agencies and related organizations for the testing and 
							balancing specialization.
						</p>
					</div>
				</div>
			</section>
		</div>
	)
}