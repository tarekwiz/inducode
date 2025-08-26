import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
	Zap,
	Factory,
	Flame,
	Droplets,
	Settings,
	Leaf,
	Building,
	Cog
} from 'lucide-react'

export default function EnergySolutions() {
	const energySolutions = [
		{
			title: 'PETROLEUM & CHEMICAL',
			subtitle: 'COAGULATION TECHNOLOGY',
			description: 'IN PETROCHEMICAL BUTADIENE RUBBER',
			icon: Factory,
			category: 'petroleum'
		},
		{
			title: 'PETROLEUM & CHEMICAL',
			subtitle: 'ADSORPTION-STABILIZATION TECHNOLOGY',
			description: 'OF THE CATALYTIC CRACKING IN OIL REFINING',
			icon: Factory,
			category: 'petroleum'
		},
		{
			title: 'PETROLEUM & CHEMICAL',
			subtitle: 'MANUFACTURING TECHNIQUES',
			description: 'OF NITROGENOUS FERTILIZER',
			icon: Factory,
			category: 'petroleum'
		},
		{
			title: 'BIOCHEMICAL',
			subtitle: 'MANUFACTURING TECHNIQUE',
			description: 'OF ETHANOL IN BIOCHEMICAL ENTERPRISE',
			icon: Leaf,
			category: 'biochemical'
		},
		{
			title: 'CHEMICAL',
			subtitle: 'MANUFACTURING TECHNIQUES',
			description: 'OF ALKALIES AND CHLORINE',
			icon: Droplets,
			category: 'chemical'
		},
		{
			title: 'STEEL',
			subtitle: 'MOISTURE REMOVING BLAST TECHNOLOGY',
			description: 'IN THE BLAST FURNACE FOR IRON MAKING',
			icon: Building,
			category: 'steel'
		},
		{
			title: 'COAL',
			subtitle: 'COAL CARBONIZATION',
			description: 'TECHNOLOGY',
			icon: Flame,
			category: 'coal'
		},
		{
			title: 'METALLURGY',
			subtitle: 'Advanced Metallurgical',
			description: 'Processing Solutions',
			icon: Cog,
			category: 'metallurgy'
		},
		{
			title: 'THERMAL POWER PLANT',
			subtitle: 'Power Generation',
			description: 'Solutions',
			icon: Zap,
			category: 'thermal'
		},
		{
			title: 'THERMAL POWER PLANT',
			subtitle: 'GAS TURBINE INLET AIR',
			description: 'COOLING (TIAC)',
			icon: Zap,
			category: 'thermal'
		},
		{
			title: 'TEXTILE',
			subtitle: 'Textile Manufacturing',
			description: '(POLYESTER)',
			icon: Settings,
			category: 'textile'
		},
		{
			title: 'PALM OIL',
			subtitle: 'Palm Oil Processing',
			description: 'Solutions',
			icon: Droplets,
			category: 'palm'
		},
		{
			title: 'PULP MILL',
			subtitle: 'Pulp & Paper',
			description: 'Manufacturing',
			icon: Leaf,
			category: 'pulp'
		},
		{
			title: 'COOLING, HEATING AND POWER',
			subtitle: 'TRIGENARATION',
			description: 'CCHP',
			icon: Flame,
			category: 'cchp'
		}
	]

	const categories = [
		{ name: 'petroleum', label: 'Petroleum & Chemical', color: 'bg-blue-500' },
		{ name: 'biochemical', label: 'Biochemical', color: 'bg-green-500' },
		{ name: 'chemical', label: 'Chemical', color: 'bg-purple-500' },
		{ name: 'steel', label: 'Steel', color: 'bg-gray-500' },
		{ name: 'coal', label: 'Coal', color: 'bg-black' },
		{ name: 'metallurgy', label: 'Metallurgy', color: 'bg-orange-500' },
		{ name: 'thermal', label: 'Thermal Power', color: 'bg-red-500' },
		{ name: 'textile', label: 'Textile', color: 'bg-pink-500' },
		{ name: 'palm', label: 'Palm Oil', color: 'bg-yellow-500' },
		{ name: 'pulp', label: 'Pulp Mill', color: 'bg-brown-500' },
		{ name: 'cchp', label: 'CCHP', color: 'bg-indigo-500' }
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
							Industrial Solutions
						</Badge>
						<h1 className="text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
							<span className="text-foreground">ENERGY</span>
							<br />
							<span className="text-accent">SOLUTIONS</span>
						</h1>
						<p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
							Comprehensive energy solutions across diverse industries, delivering innovative 
							technologies and manufacturing processes for optimal efficiency and sustainability.
						</p>
					</div>
				</div>
			</section>

			{/* Category Overview */}
			<section className="py-20 bg-muted border-t-2 border-b-2 border-border">
				<div className="container mx-auto px-4">
					<div className="space-y-8">
						<div className="text-center">
							<h2 className="text-3xl font-bold text-foreground uppercase tracking-wide mb-4">
								Industry Sectors
							</h2>
							<div className="w-24 h-1 bg-accent mx-auto"></div>
						</div>

						<div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
							{categories.map((category, index) => (
								<Card
									key={index}
									className="group hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card"
								>
									<CardContent className="p-4">
										<div className="flex items-center space-x-3">
											<div className={`w-4 h-4 rounded-full ${category.color}`}></div>
											<span className="font-bold text-foreground uppercase tracking-wide text-sm">
												{category.label}
											</span>
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Energy Solutions Grid */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<div className="space-y-12">
						<div className="text-center">
							<h2 className="text-3xl font-bold text-foreground uppercase tracking-wide mb-4">
								Our Energy Solutions
							</h2>
							<div className="w-24 h-1 bg-accent mx-auto"></div>
						</div>

						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
							{energySolutions.map((solution, index) => {
								const categoryColor = categories.find(cat => cat.name === solution.category)?.color || 'bg-accent'
								
								return (
									<Card
										key={index}
										className="group hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card overflow-hidden"
									>
										<div className="relative">
											<div className={`h-2 w-full ${categoryColor}`}></div>
											<div className="p-6 space-y-4">
												<div className="flex items-start justify-between">
													<solution.icon className="h-12 w-12 text-accent flex-shrink-0" />
													<div className={`px-3 py-1 rounded-full text-xs font-bold text-white ${categoryColor}`}>
														{solution.category.toUpperCase()}
													</div>
												</div>
												
												<div className="space-y-3">
													<h3 className="text-lg font-bold text-foreground uppercase tracking-wide">
														{solution.title}
													</h3>
													
													<div className="space-y-2">
														<h4 className="font-bold text-accent uppercase tracking-wide text-sm">
															{solution.subtitle}
														</h4>
														<p className="text-muted-foreground text-sm leading-relaxed">
															{solution.description}
														</p>
													</div>
												</div>
											</div>
										</div>
									</Card>
								)
							})}
						</div>
					</div>
				</div>
			</section>

			{/* Key Industries */}
			<section className="py-20 bg-muted border-t-2 border-border">
				<div className="container mx-auto px-4">
					<div className="space-y-8 max-w-6xl mx-auto">
						<div className="text-center">
							<h2 className="text-3xl font-bold text-foreground uppercase tracking-wide mb-4">
								Key Industries We Serve
							</h2>
							<div className="w-24 h-1 bg-accent mx-auto"></div>
						</div>
						
						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
							<div className="space-y-6">
								<div className="flex items-start space-x-4">
									<Factory className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
									<div>
										<h3 className="font-bold text-foreground uppercase tracking-wide mb-2">
											Petroleum & Chemical
										</h3>
										<p className="text-muted-foreground text-sm">
											Advanced processing technologies for petrochemical, oil refining, and chemical manufacturing industries.
										</p>
									</div>
								</div>
								
								<div className="flex items-start space-x-4">
									<Zap className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
									<div>
										<h3 className="font-bold text-foreground uppercase tracking-wide mb-2">
											Power Generation
										</h3>
										<p className="text-muted-foreground text-sm">
											Thermal power plant solutions including gas turbine technologies and cooling systems.
										</p>
									</div>
								</div>
							</div>
							
							<div className="space-y-6">
								<div className="flex items-start space-x-4">
									<Building className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
									<div>
										<h3 className="font-bold text-foreground uppercase tracking-wide mb-2">
											Steel & Metallurgy
										</h3>
										<p className="text-muted-foreground text-sm">
											Blast furnace technologies and advanced metallurgical processing solutions.
										</p>
									</div>
								</div>
								
								<div className="flex items-start space-x-4">
									<Leaf className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
									<div>
										<h3 className="font-bold text-foreground uppercase tracking-wide mb-2">
											Biochemical & Agriculture
										</h3>
										<p className="text-muted-foreground text-sm">
											Ethanol production, palm oil processing, and sustainable biochemical solutions.
										</p>
									</div>
								</div>
							</div>
							
							<div className="space-y-6">
								<div className="flex items-start space-x-4">
									<Settings className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
									<div>
										<h3 className="font-bold text-foreground uppercase tracking-wide mb-2">
											Manufacturing & Textile
										</h3>
										<p className="text-muted-foreground text-sm">
											Textile manufacturing processes, pulp mill operations, and industrial manufacturing.
										</p>
									</div>
								</div>
								
								<div className="flex items-start space-x-4">
									<Flame className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
									<div>
										<h3 className="font-bold text-foreground uppercase tracking-wide mb-2">
											CCHP Systems
										</h3>
										<p className="text-muted-foreground text-sm">
											Combined Cooling, Heating, and Power (Trigeneration) solutions for optimal energy efficiency.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}